(()=>{"use strict";
const cv=document.getElementById('workbench'),c=cv.getContext('2d'),W=cv.width,H=cv.height,keys=['subject','environment','material','style','motion'],fields=Object.fromEntries(keys.map(k=>[k,document.getElementById(k)]));
const read=()=>Object.fromEntries(keys.map(k=>[k,fields[k].type==='checkbox'?fields[k].checked:fields[k].value]));
const palette={fabric:['#c7a3ff','#7b49d6','#3b207f'],water:['#b3f9ff','#39bddb','#105f9d'],waterFabric:['#d6ffff','#5aaef1','#23589e'],fur:['#ffe6af','#eca85c','#9e5529'],ground:['#eed2a3','#aa8753','#59402b'],wood:['#efc893','#ae7640','#55391e'],metal:['#f7ffff','#a8bed0','#3d5771'],glow:['#fff9bb','#8ac8ff','#7056ee']};
function path(points){c.beginPath();points.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath()}
function ellipse(x,y,rx,ry,fill){c.beginPath();c.ellipse(x,y,rx,ry,0,0,Math.PI*2);c.fillStyle=fill;c.fill()}
function background(s,t){const colors={sky:['#1177bd','#dbf4fc'],water:['#147bba','#0d344f'],ground:['#9ac6e0','#665132'],studio:['#7768b3','#eac29f'],abstract:['#18194e','#923b87']}[s.environment];let g=c.createLinearGradient(0,0,0,H);g.addColorStop(0,colors[0]);g.addColorStop(1,colors[1]);c.fillStyle=g;c.fillRect(0,0,W,H);
if(s.environment==='sky'){ellipse(120,104,45,45,'#ffefa5');for(let i=0;i<9;i++)ellipse((i*110+t*9)%800-65,150+(i*49)%300,85,14,'#ffffff44')}
if(s.environment==='water')for(let j=0;j<26;j++){c.beginPath();for(let x=0;x<=W;x+=12){const y=65+j*24+Math.sin(x*.023+t*2+j*.42)*9;x?c.lineTo(x,y):c.moveTo(x,y)}c.strokeStyle='#c9f6ff55';c.lineWidth=3;c.stroke()}
if(s.environment==='ground'){c.fillStyle='#70603d';c.fillRect(0,H*.59,W,H);for(let i=0;i<140;i++)ellipse((i*83)%W,390+(i*53)%240,2+i%3,1+i%2,'#e0c69888')}
if(s.environment==='studio'){let h=c.createRadialGradient(320,300,5,320,300,300);h.addColorStop(0,'#ffefb8dd');h.addColorStop(1,'#ffffff00');c.fillStyle=h;c.fillRect(0,0,W,H)}
if(s.environment==='abstract')for(let i=0;i<20;i++){c.beginPath();c.arc(320,320,25+i*22+t*4,0,6.283);c.strokeStyle='#e4e1ff20';c.lineWidth=3;c.stroke()}
}
function material(s,t,p){const pal=palette[s.material];c.save();c.beginPath();c.rect(-245,-250,490,510);c.clip();for(let i=0;i<35;i++){let shift=(s.material==='fabric'||s.material==='waterFabric')?Math.sin(t*2+i*.35)*8:0;const tone=s.style==='cel'?Math.floor(i/12)%3:s.style==='pixel'?Math.floor(i/5)%3:i%3;c.fillStyle=pal[tone];c.globalAlpha=.72;c.fillRect(-250+i*15+shift,-260,17,535)}c.globalAlpha=1;
if(s.material==='fur')for(let i=0;i<120;i++){let x=(i*37)%485-242,y=(i*71)%490-245;c.beginPath();c.moveTo(x,y);c.lineTo(x-4,y+11);c.strokeStyle='#ffe5b476';c.lineWidth=2;c.stroke()}
if(s.material==='wood'||s.material==='ground')for(let i=0;i<11;i++){c.strokeStyle='#442e2066';c.beginPath();c.moveTo(-230,-240+i*43);c.bezierCurveTo(-90,-224+i*42,70,-255+i*43,235,-240+i*43);c.stroke()}
if(s.material==='metal'){c.fillStyle='#ffffff75';c.fillRect(115,-240,34,490)}
if(s.material==='glow'){let g=c.createRadialGradient(0,0,8,0,0,230);g.addColorStop(0,'#fff9ffff');g.addColorStop(1,'#fff9ff00');c.fillStyle=g;c.fillRect(-245,-245,490,490)}
if(s.material==='water'||s.material==='waterFabric')for(let j=0;j<20;j++){c.strokeStyle='#d8fcff55';c.lineWidth=3;c.beginPath();for(let x=-245;x<=245;x+=12){let y=-220+j*24+Math.sin(x*.04+t*2+j*.2)*12;x===-245?c.moveTo(x,y):c.lineTo(x,y)}c.stroke()}
c.restore()}
function subject(s,t){const p=palette[s.material];c.save();c.translate(320,318+Math.sin(t*1.3)*8);c.rotate(Math.sin(t*.6)*.05);
if(s.subject==='banner'){path([[0,-220],[180,0],[0,220],[-180,0]]);c.save();c.clip();material(s,t);c.restore();c.strokeStyle='#f3d5ae';c.lineWidth=8;c.stroke();c.beginPath();c.moveTo(0,-220);c.lineTo(0,220);c.moveTo(-180,0);c.lineTo(180,0);c.stroke()}
if(s.subject==='creature'){path([[-190,-70],[-148,-246],[-48,-157],[49,-157],[155,-246],[188,-70]]);c.fillStyle=p[1];c.fill();c.save();c.beginPath();c.ellipse(0,30,207,203,0,0,6.283);c.clip();material(s,t);c.restore();c.strokeStyle=p[2];c.lineWidth=7;c.beginPath();c.ellipse(0,30,207,203,0,0,6.283);c.stroke();for(const sign of [-1,1]){ellipse(sign*75,-25,26,34,'#332329');ellipse(sign*67,-37,9,10,'white')}path([[-20,40],[20,40],[0,62]]);c.fillStyle='#f19ea7';c.fill()}
if(s.subject==='vessel'){path([[-230,120],[230,120],[165,235],[-165,235]]);c.save();c.clip();material(s,t);c.restore();c.strokeStyle=p[2];c.lineWidth=8;c.stroke();c.beginPath();c.moveTo(0,120);c.lineTo(0,-195);c.strokeStyle='#62412d';c.lineWidth=13;c.stroke();path([[12,-180],[202,-20],[12,75]]);c.fillStyle=p[0];c.fill()}
if(s.subject==='relic'){c.beginPath();for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,r=i%2?105:223,x=Math.cos(a)*r,y=Math.sin(a)*r;i?c.lineTo(x,y):c.moveTo(x,y)}c.closePath();c.save();c.clip();material(s,t);c.restore();c.strokeStyle=p[2];c.lineWidth=10;c.stroke()}
if(s.style==='glossy'){let g=c.createLinearGradient(-200,-230,200,230);g.addColorStop(0,'#ffffff55');g.addColorStop(.5,'#ffffff00');g.addColorStop(1,'#00000022');c.globalCompositeOperation='soft-light';c.fillStyle=g;c.fillRect(-245,-260,490,530)}c.restore()}
const pix=document.createElement('canvas');pix.width=128;pix.height=128;const px=pix.getContext('2d');
function draw(now){const s=read(),t=s.motion?now/1000:0;background(s,t);subject(s,t);if(s.style==='pixel'){px.clearRect(0,0,128,128);px.drawImage(cv,0,0,128,128);c.imageSmoothingEnabled=false;c.clearRect(0,0,W,H);c.drawImage(pix,0,0,W,H);c.imageSmoothingEnabled=true}requestAnimationFrame(draw)}
function summary(){let s=read();document.getElementById('summary').textContent=Object.entries(s).map(([k,v])=>k+': '+v).join(' · ')}
keys.forEach(k=>fields[k].addEventListener('change',summary));summary();requestAnimationFrame(draw);
})();