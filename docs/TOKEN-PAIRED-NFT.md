# Paired ERC20 + NFT drop (Netr / Banger)

**Direct upstream source:** https://github.com/stuckinaboot/net-public/tree/main/packages/net-netr and https://github.com/stuckinaboot/net-public/blob/main/skill-references/tokens.md.

## What it creates
One token deployment creates fungible ERC20; a Uniswap V3 pool, automatic liquidity and long-term LP locking; optionally an associated **ERC1155 NFT drop (Inscribed Drops)**. It is not ERC404.

## CLI reference
```bash
netp token deploy \
  --name "Base 8453 Trenchors" \
  --symbol "TRENCH" \
  --image "https://REPLACE-WITH-FINAL-IMAGE" \
  --chain-id 8453 \
  --mint-price 1000000000000000 \
  --max-mint-supply 2222 \
  --encode-only
```
0.001 ETH mint is **illustrative only**, not owner-approved economics. Tool may also accept `--mint-end-timestamp`, `--animation`, and `--initial-buy`. Confirm optional NFT drop defaults if timestamp is omitted. No private key should appear in X prompt or repo.

`--encode-only` returns `{to,data,chainId,value}`; Bankr must submit that exact transaction after review. `value` must be preserved and any initial buy is explicitly authorized.

## SDK alternative
```ts
import { NetrClient } from '@net-protocol/netr';
const client = new NetrClient({chainId:8453});
const salt = await client.generateSalt({name:'Base 8453 Trenchors',symbol:'TRENCH',image:'https://...',deployer:'0x...'});
const tx = client.buildDeployConfig({name:'Base 8453 Trenchors',symbol:'TRENCH',image:'https://...',deployer:'0x...',mintPrice:1000000000000000n,maxMintSupply:2222n,mintEndTimestamp:0n},salt.salt);
```
Actual package API/versions must be pinned before production.

## Key limitations
- ERC1155 tradeability must be tested for the actual contract on OpenSea; OpenSea permits supported NFT standards generally, but doesn't guarantee indexing of every instance.
- Netr's drop is not native fungible-ownership of NFTs: no ERC404 mechanics.
- Wallet mint cap and creator reserve aren't documented in Netr token deploy parameters. Must not imply Hood Turtles ERC721A limits transfer to this system.
- Exact relationship of token with drop and pricing must be inspected from factory source/deployment ABI and tested; do not invent proceeds/revenue rights.
- Onchain collection art logic, offchain image & per-ID metadata availability also require verification.
- Netr LP mechanics are Uniswap V3; this is **not** a v4 hook approach.
