# Selectable style presets

Material type and art style are **orthogonal**. The same fur, ground or fabric material should be rendered differently under each style.

| Preset | Shading | Edges | Finish |
|---|---|---|---|
| Glossy Collectible | continuous gradient | crisp | high specular |
| Painterly Animated | soft diffuse | textured | atmospheric |
| Stylized Illustrated | clean tonal ramps | controlled | balanced |
| Cel-Shaded | stepped tonal bands | graphic | high contrast |
| Pixel | quantized palette | grid-aligned | pixelation |

## Pipeline
`scene → material registry → environment/subject layers → style profile → lighting/effects → frame compositor → export`.

Style changes cannot merely recolor the background: they affect material shading, texture frequency, outlines, antialiasing, specular strength and motion character. The public demo is a configurable proof-of-concept, not a production shader or general-purpose SVG converter.

## Extending
Register preset IDs and parameters rather than branching by subject names. Preserve scene input when switching styles; only style parameters change.
