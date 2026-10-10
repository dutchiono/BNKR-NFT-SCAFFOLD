# NFT graphics translator

Reusable image-layer compositor based on rendering ideas in dutchiono/v4-kite-fighting-game (Canvas gradients, effects, animation loop). Not a kite art port.

## Interface
`selectTraits(manifest, tokenId)` deterministically selects weighted layers; `loadLayers(traits, asyncLoader)` loads raster art; `render(canvas, manifest, images)` composites full-res layers with optional color grade; `metadata(...)` exports ERC721/ERC1155-compatible metadata.

## Input
Transparent full-frame PNG/WebP layers (background, body, clothing, accessories, foreground). All must match the manifest width/height; create genuine illustrated art first. Sample manifest at ../collections/graphics-manifest.example.json. This package intentionally ships no low-quality placeholder SVG character art.

## Build
`npm install` and `npm test`. Requires browser Canvas for rendering; tests exercise deterministic selection in Node.

## Production roadmap
Image assets, batch render CLI, rarity analyzer, montage/contact sheet generator, IPFS uploader, and provenance manifest. The render() function can be used in browser or Playwright/Node Canvas. Do not launch with placeholder image URIs.
