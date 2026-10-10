# Relationship between Bankr token and Net NFT collection

**Chosen launch topology:** independently deployed native Bankr ERC20 and Net-integrated ERC721A NFTs, orchestrated by Bankrbot in one user instruction. Their shared name and project metadata is a relationship, but NOT a combined ERC404 token/NFT asset.

ERC404 or DN404 would require a customized token contract, which may defeat native Bankr token-launch requirements. Uniswap v4 hooks affect AMM pool behavior but cannot ensure synchronized NFT ownership for ERC20 transfers outside the pool. Netr/Banger's ERC1155 paired drops are a different architecture and explicitly excluded.

If automatic token/NFT ownership conversion remains a requirement, flag as incompatible with currently documented ordinary Bankr ERC20 launcher until a verified Bankr-native extension is found. Do not silently invent a wrapper or gated mint.
