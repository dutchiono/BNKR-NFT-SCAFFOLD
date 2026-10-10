# Material system

The renderer classifies surfaces independently of what object they belong to. Materials are **behavior modules** reusable on subjects and backgrounds. They are not subject-specific drawings.

| Material | Shading | Motion | Examples |
|---|---|---|---|
| fabric | folds, seams, directional sheen | anchored ripple, tension | clothing, sail, banner |
| water | reflected bands, caustics, foam | wave propagation | ocean, river |
| water-as-fabric | translucent cloth folds, reflections | undulating ribbons | surreal oceans |
| fur | strand flow, clumping, volume | breathing, tufts | animals, plush |
| ground | contact shadows, grit, horizon layers | dust and vegetation | dirt, stone, grass |
| wood | grain, bevel, end grain | rigid transform | furniture, hull |
| metal | hard specular, rim reflection | glint | swords, coins |
| glow | additive bloom, falloff | pulse, sparks | magical effects |

## Proposed renderer contract
Each material module receives `(context, geometry, lighting, style, time, options)`. Style is independent from material. An authored source asset can contain tagged layers with material IDs; any layer can represent foreground, subject or environment. Environments themselves may contain multiple materials.

## Requirements
- Deterministic rendering from seed and timestamp; avoid `Math.random()` during frame drawing.
- Layers preserve geometry, UVs, masks, anchors and z-order.
- Motion parameters may animate displacement, normal/highlight fields and secondary particles.
- Quality validation must consider edge bleed, layer seams and incompatible combinations.
- Do not claim automatic arbitrary-file material recognition. An artist/developer authors material tags and rendering rules.
