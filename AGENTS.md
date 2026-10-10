# Agent instructions

Goal: single user message to @bankrbot launches a Base (8453) project containing a tradeable fungible token and its paired Net Protocol NFT drop, *without* pretending ERC404 functionality exists.

## Required reading
Read README.md, docs/TOKEN-PAIRED-NFT.md, docs/BANKR-ONE-SHOT.md and official https://netprotocol.app/skill.md before construction. Recheck upstream before mainnet.

## Rules
- Never deploy, sign, spend ETH, or launch publicly without clear owner authorization. Generate unsigned transactions and explain exactly what will be signed.
- Never claim ERC721/OpenSea compatibility for Netr's ERC1155 drop without testing concrete drop address.
- Never invent chain addresses, capabilities, successful verification or tx hashes.
- Do not use SVG stick figures. High-resolution Canvas/layer-composited raster is preferred unless the author explicitly chooses onchain vector art.
- Never use kite character art; source repo is a reference for gradient, effects, Canvas loops and reactive visuals only.
- All future collections must be config-driven and reproduce renders from seed.
- Capture actual token, pool, drop, transaction and explorer receipts.
- Validation before success: token trading; mint, transfer, sale; metadata retrieval; wallet permissions; bytecode verification; supply and price checks.
- Bankr can orchestrate external skill operations, but external network/skill compatibility must be validated per launch.

## Done definition
One command launches ERC20 + paired NFT drop from the same token deployment workflow, bankr submits tx using skill encoded transaction, project reports receipts, OpenSea listing proven separately. No substitutions with arbitrary ERC721 mint, token-gated NFT or DN404.
