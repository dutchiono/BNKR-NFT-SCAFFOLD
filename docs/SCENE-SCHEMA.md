# Scene manifest v1

A scene is a list of layers plus their material/role/motion and a global style and camera.

```json
{
  "version": 1,
  "seed": "collection-01",
  "viewport": {"width": 1024, "height": 1024},
  "subject": {"kind": "creature", "asset": "ipfs://..."},
  "environment": {"kind": "studio", "layers": ["backdrop", "floor", "light"]},
  "layers": [
    {"id": "backdrop", "role": "background", "material": "ground", "z": 0},
    {"id": "body", "role": "subject", "material": "fur", "z": 10, "motion": "breathing"}
  ],
  "style": "glossy-collectible",
  "lighting": {"keyDirection": 45, "intensity": 0.8},
  "motion": {"enabled": true, "speed": 1}
}
```

## Validation
Enforce unique IDs, stable z-order, recognized material and style registry identifiers, finite lighting parameters, valid media URLs and layer geometry bounds. Validate contradictory trait exclusions and animation/export support before launch. No wallet/contract details belong in scene manifests.

## Scene renderer API
`renderScene(ctx, scene, t)` orchestrates environment, material processing, subject assets, style pass and effects. `t` is explicit to support deterministic frame export.
