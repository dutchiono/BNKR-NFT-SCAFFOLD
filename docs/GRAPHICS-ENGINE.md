# Reusable graphics translator

## Source reviewed
https://github.com/dutchiono/v4-kite-fighting-game, especially `src/components/KiteCanvas.jsx`, `src/App.jsx`, `src/index.css`.

Reusable pieces: HTML Canvas 2D rendering; gradients; compositing; particle loops; dynamic weather/event state; render lifecycle; font and lighting design. Kites, string physics, kite traits and shapes are out of scope.

## Rendering product
A collection-independent package should accept:
- artwork species/archetype design and layer assets;
- trait manifest (weighted rarity, incompatibilities, provenance);
- seed and token ID;
- target resolution, lighting, camera scale, effects;
- export config (PNG preferred, metadata JSON, optional MP4/WebM).

Outputs: deterministic PNGs and ERC721/1155-compatible metadata, contact sheets, trait frequency reports, duplicate/perceptual hash warnings, provenance SHA256. A collection's art should never be assembled using random rectangle-generated SVG caricatures.

## Art quality pipeline
1. Owner chooses art direction using moodboard/approved reference examples.
2. Produce one hero character master at publication resolution and sample trait layers.
3. Enforce a consistent silhouette, layer boundaries and edge precision.
4. Preview 50 seeds with high variety and 10 rare combinations. Human review.
5. Batch render all tokens with determinism and no collisions.
6. Upload to durable IPFS/Arweave or other approved storage; keep full source files in repo or asset store.
7. Pass finalized HTTPS/IPFS token logo + metadata to launch tool. No placeholders in mainnet requests.

## Production boundaries
Do not upload huge assets to GitHub; use Git LFS or content-addressed artifact storage. Color grading, antialiasing, z-order, particle density, gradients and export scaling should be reusable.
