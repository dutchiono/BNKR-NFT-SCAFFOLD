# One-shot Bankr-native ERC20 + Net ERC721A NFT

The SAME X request to @bankrbot must orchestrate two launches: native Bankr Base ERC20, then NFT collection using Net Protocol skill (as Hood Turtles). Multiple signed transactions are allowed; this is one agent instruction. Do not run Netr token deployment.

## Draft one-shot prompt

> @bankrbot On Base (8453), launch Base 8453 Trenchors as a **native Bankr ERC20 token** named Base 8453 Trenchors, symbol TRENCH, using your native token launcher, with [APPROVED LOGO URI]. Then, using https://netprotocol.app/skill.md and the NFT collection reference like Aspyn's Hood Turtles, deploy and verify an ERC721A NFT collection with [APPROVED ART AND TRAITS], max supply [APPROVED], mint price [APPROVED], max public wallet mints [APPROVED], creator reserve [APPROVED]. The ERC20 and NFT collection form one brand but are separate contracts, and no ERC404 behavior is implied. Before executing, show chain, proposed txs, destination, value, fees and require my explicit authorization. Return the Bankr token address, pool, NFT address, transaction receipts, verified source and OpenSea listing/collection link if indexed. If anything fails, STOP; do not substitute Netr, ERC1155, an external token launcher, or low-quality default SVG.

## Agent steps

1. Pin and read latest Bankr token-launch docs and Net skill; verify chain 8453.
2. Require finalized owner-approved mint economics, signer, NFT art and token logo.
3. Preview Bankr native token launch, seek approval, launch, record transaction/pool.
4. Generate or compile ERC721A NFT collection from Net skill with real art metadata and owner-provided settings; preview, approve, deploy, verify.
5. Validate NFT metadata and on-chain transfer behavior, and OpenSea indexing/listing; check token swapability separately.
6. Record both contract addresses in deployment receipt; disclose any remaining unverified steps.

## Important

Do not equate 'one post' with 'one atomic transaction'. Bankr agent must actually support following both tool paths in one run; that integration hasn't been proven. Never fake successful deployment.
