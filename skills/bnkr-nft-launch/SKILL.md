---
name: bnkr-nft-launch
description: Use Bankr plus canonical Net Protocol skill to orchestrate a Base paired ERC20 and ERC1155 NFT drop with auditable approvals.
---

# Bankr NFT + token launch skill

Load the upstream skill from https://netprotocol.app/skill.md, then read Net's token reference at https://github.com/stuckinaboot/net-public/blob/main/skill-references/tokens.md and paired token/NFT implementation at https://github.com/stuckinaboot/net-public/tree/main/packages/net-netr.

1. Parse verified owner config (chain 8453, symbol, name, approved art URI, mint price and supply).
2. Use Netr/Banger path for token + optional ERC1155 NFT drop; **do not** use unrelated Bankr ERC20-only launcher, ERC721A-only drop or DN404.
3. Build unsigned transaction via `netp token deploy --encode-only` and inspect every field.
4. Seek wallet authorization before submitting through Bankr. Never request raw wallet secrets.
5. Verify transaction events, contract code, addresses, pool, metadata and NFT mint.
6. Verify marketplace listing and purchase; if anything cannot be done stop and disclose limitation.
7. Return deployment receipt plus verification outcomes. Do not fabricate success.

See docs/BANKR-ONE-SHOT.md and docs/RELEASE-CHECKLIST.md.
