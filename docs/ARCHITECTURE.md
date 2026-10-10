# Architecture and product boundaries

## What Aspyn did
A one-prompt Bankr agent process loaded Net Protocol skill and generated, deployed and verified an NFT collection, Hood Turtles, on Robinhood Chain. Post supplied by user; ERC721A onchain SVG, Net activity logs, 2222 max supply, 0.001 ETH price. This proves agent skill execution, **not** ERC404.

## Our variant: paired token and NFT
Net Protocol's Netr/Banger primitive is documented as ERC20 + optional ERC1155 drop + Uniswap V3 liquidity + LP lock on Base 8453. This is the closest documented true *paired token and NFT launch* mechanism and avoids a separate NFT deployment. Paired means token and NFT drop configured by one deploy action; **not** NFT shares automatically convertible to ERC20.

## Flow
Owner collection config -> graphics factory (renders/art URI) -> agent loads Net skill -> netp token deploy --encode-only --mint-price --max-mint-supply -> Bankr signs/submits approved tx -> Netr token/pool/optional NFT drop -> marketplace verification.

## Alternatives
* Net NFT skill ERC721A: NFT collection, with Net Protocol event logging; does not automatically create a fungible token.
* Netr token+drop: ERC20 and ERC1155 NFT drop. First choice when token required.
* DN404/ ERC7631: real token fractional equivalence; requires custom hybrid deployer, not claimed to be supported by Netr or Bankr standard launch.
* Separate ERC20 and ERC721: not requested; never substitute.

## Constraints
Netr docs show mint price, mint deadline, max mint supply for optional drop; no evidence in current docs for max mints per wallet, creator reserve or selectable ERC721 implementation on this route. Never promise unsupported knobs. Confirm actual deployed ABI of drop and whether OpenSea lists it.
