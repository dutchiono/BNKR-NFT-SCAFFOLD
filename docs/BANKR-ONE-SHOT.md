# One-shot agent launch runbook

## User experience
A single X post to @bankrbot contains project name, Base 8453, skill URL and a strong instruction to invoke Netr token+NFT *paired* drop rather than the regular ERC20 Bankr deploy or standalone ERC721A collection.

## Draft post (DO NOT SEND until art URI, wallet and economics approved)
```
@bankrbot Launch Base 8453 Trenchors on Base mainnet (8453) as ONE Net Protocol Netr/Banger ERC20 token with its OPTIONAL PAIRED ERC1155 NFT DROP in the same launch workflow. Read https://netprotocol.app/skill.md and its token deployment references. Use netp token deploy --encode-only with the NFT mint settings; submit the returned encoded tx via Bankr only after showing me the exact chain, destination, calldata, value and estimated costs for approval. Artwork and metadata URI: [FINAL URI]. Token name Base 8453 Trenchors, symbol TRENCH. NFT supply [APPROVED], price [APPROVED]. Verify deployed token/drop contract source where supported and report token, pool, drop, owner, all tx hashes and OpenSea collection/listing results. If paired-drop creation or OpenSea interoperability is unsupported, STOP and report why. Do not silently deploy a standalone NFT or an unpaired ERC20.
```

## Agent steps
1. Fetch current canonical Net Protocol skill URL; verify content/version, commands and supported chains.
2. Read this project's finalized collection config and approved art URI. Never generate low-quality emergency SVGs.
3. Check Netr's Base factory and exact paired drop ABI and OpenSea expectations.
4. Use netp token deploy --encode-only; preview transaction, calldata, destination and ETH value.
5. Require transaction-level authorized owner approval and sufficient Base ETH.
6. Submit via Bankr sign-and-submit; fetch receipt; distinguish failed tx from successful logs.
7. Decode token/pool/drop emitted addresses; verify contract bytecode/source, token ownership, supply and drop mint parameters.
8. Test metadata + mint + resale marketplace availability; do not claim success until verified.
9. Save deployment receipts in deployments/<collection>-8453.md.

## Important
Bankr is an agent and signer here, **not necessarily Bankr's default token factory**. This is the same skill-invocation pattern evidenced in Aspyn's post. A Twitter mention is not proof of successful execution; validate before spending.
