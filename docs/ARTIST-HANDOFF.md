# Artist handoff

## What the artist decides
Visual direction, subject silhouettes, environment concepts, layer sources, materials, traits, incompatible combinations, palette, style and motion examples.

## What engineers configure
Asset masks/anchors, layer alignment, material behaviors, shaders/compositing, scene manifests, deterministic seeds, rarity analysis, exports and metadata.

## Automation boundary
Once a scene and its style/material mappings have been authored, the renderer can repeatedly apply those rules. It cannot presently inspect arbitrary SVG artwork and discover which pixels are silk, fur, water or metal without supplied semantics.

## Approval gates
Review representative scene contact sheets in every allowed style, test combinations and motion, approve final quality before full batch export, pin metadata and only then launch via Bankr.
