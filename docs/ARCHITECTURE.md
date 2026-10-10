# Architecture

## Supported target
One user post to Bankrbot orchestrates **native Bankr ERC20 token** launch (Bankr's own launcher, Base 8453) and separate **Net Protocol ERC721A NFT collection** via https://netprotocol.app/skill.md (Aspyn Hood Turtles reference). These are two contracts launched via one agent workflow. See BANKR-NATIVE-DUAL-LAUNCH.md and TOKEN-LINKAGE.md.

## Exclusions
Do not use Netr/Banger/ERC1155, standalone third-party ERC20 factories, DN404 or vault wrappers as substitutes. No automatic token↔NFT equivalence is claimed. Native token/NFT coupling requires separate investigation.
