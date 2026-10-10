# BNKR NFT Scaffold — One-shot Launch Factory

A reusable agent-facing scaffold for launching **Base (chain ID 8453)** NFT collections through Bankr, with a configurable **paired fungible token + NFT drop** mode via Net Protocol's **Netr/Banger** token system.

> **Most important finding:** Net Protocol already has a token-with-optional-NFT-drop deployment primitive. Its `netp token deploy` command accepts `--mint-price`, `--max-mint-supply`, `--mint-end-timestamp`, and `--encode-only`. Netr's optional NFT drop is **ERC-1155**, not ERC-404 or DN404. Do not claim automatic 1:1 fungible/ERC-721 conversion. OpenSea listing support must be confirmed on a live or test deployment before claiming it works.

## Deliverable

**Single X prompt to @bankrbot** requesting a Base launch; agent loads the official Net Protocol skill, generates the token+NFT deployment transaction, uses Bankr to submit it, verifies and reports token, pool, drop and explorer addresses. **One-shot means a single user instruction**, not necessarily one on-chain transaction.

**No mainnet deploy without explicit approval.** Transaction signing and fee payment remain with the authorized wallet/Bankr.

## Repositories and sources

- Visual renderer reference (reuse architecture, not kite assets): https://github.com/dutchiono/v4-kite-fighting-game
- Net Protocol: https://github.com/stuckinaboot/net-public
- Canonical skill: https://netprotocol.app/skill.md
- Actual token/NFT pairing docs: `packages/net-netr/README.md`, `skill-references/tokens.md`, `skill-references/nft-collections.md`
- Aspyn's reference post: https://x.com/AspynPalatnick/status/2108015137277788652

## Layout

- `AGENTS.md`: coding agent rules, safety, success criteria
- `docs/ARCHITECTURE.md`: supported launch modes and distinctions
- `docs/BANKR-ONE-SHOT.md`: exact launch-agent workflow and X prompt
- `docs/TOKEN-PAIRED-NFT.md`: Net Protocol Netr pairing, deployment recipe and limitations
- `docs/OPENSEA.md`: marketplace indexing and trading acceptance
- `docs/GRAPHICS-ENGINE.md`: translation of Canvas renderer into reusable artwork pipeline
- `docs/RELEASE-CHECKLIST.md`: hard gates before production
- `collections/trenchors.json`: draft collection configuration (economics TBD)
- `skills/bnkr-nft-launch/SKILL.md`: task skill for agents
- `graphics/`: portable seeded Canvas renderer package independent of artwork.

## Hard gate before claiming ready

1. Confirm skill supports exact launch transaction and paired NFT drop for Base.
2. Confirm whether the paired NFT is ERC-1155 and that OpenSea supports listings for **that deployed drop contract**, not just generic NFTs.
3. Confirm mint conditions and any limitations (e.g., per-wallet caps and creator reserve may NOT be supported in Netr's token+drop primitive).
4. Create approved graphics and stable image/metadata URIs.
5. Preview transactions; require explicit wallet authorization; deploy; verify on Basescan.
6. Test public mint and actual OpenSea marketplace listing, transfer and resale.

**Status:** documented + scaffolded, not launched, not audited, and not yet verified on OpenSea.
