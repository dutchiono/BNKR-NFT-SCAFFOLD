/**
 * Reusable Canvas rendering engine. Does NOT draw kites or placeholder figures.
 * Artwork is provided as PNG/WebP layer images in the collection manifest.
 */
export function hashSeed(input) {
  let h = 2166136261;
  for (const char of String(input)) { h ^= char.charCodeAt(0); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
export function rng(seed) {
  let a = hashSeed(seed);
  return () => { a += 0x6D2B79F5; let t = a; t = Math.imul(t ^ t >>> 15, t | 1); t ^= t + Math.imul(t ^ t >>> 7, t | 61); return ((t ^ t >>> 14) >>> 0) / 4294967296; };
}
export function pickWeighted(options, random) {
  const total = options.reduce((n, v) => n + v.weight, 0);
  if (total <= 0 || options.some(v=>v.weight < 0)) throw Error('Invalid weights');
  let target = random() * total;
  for (const value of options) { target -= value.weight; if (target < 0) return value; }
  return options[options.length - 1];
}
export function selectTraits(manifest, tokenId) {
  const random = rng(manifest.seed + ':' + tokenId);
  const traits = {};
  for (const layer of manifest.layers) {
    const candidates = layer.assets.filter(asset => !asset.excludes || asset.excludes.every(x=>traits[x.trait] !== x.value));
    if (!candidates.length) throw Error('No compatible assets for '+layer.name);
    traits[layer.name] = pickWeighted(candidates, random);
  }
  return traits;
}
export async function loadLayers(traits, imageLoader) {
  const result = {};
  for (const [name, asset] of Object.entries(traits)) result[name] = await imageLoader(asset.src);
  return result;
}
export function render(canvas, manifest, layers, {lighting=true}={}) {
  const context=canvas.getContext('2d');
  canvas.width=manifest.width; canvas.height=manifest.height;
  context.clearRect(0,0,canvas.width,canvas.height);
  for(const layer of manifest.layers) {
    const img=layers[layer.name];
    if(!img) throw Error('Missing image: '+layer.name);
    context.save();
    context.globalAlpha=layer.opacity ?? 1;
    context.globalCompositeOperation=layer.blend ?? 'source-over';
    context.drawImage(img,0,0,canvas.width,canvas.height);
    context.restore();
  }
  if(lighting && manifest.grade) {
    context.save();
    const g=context.createLinearGradient(0,0,canvas.width,canvas.height);
    g.addColorStop(0,manifest.grade.top ?? '#ffffff00');
    g.addColorStop(1,manifest.grade.bottom ?? '#00000000');
    context.fillStyle=g;context.globalCompositeOperation='soft-light';
    context.fillRect(0,0,canvas.width,canvas.height);context.restore();
  }
  return canvas;
}
export function metadata(manifest,id,traits,imageURI) {
  return {name:manifest.name+' #'+id,description:manifest.description,image:imageURI,attributes:Object.entries(traits).map(([trait_type,a])=>({trait_type,value:a.name}))};
}
