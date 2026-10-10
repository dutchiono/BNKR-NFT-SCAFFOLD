# OpenSea acceptance tests

## Minimum requirement
NFTs must show under a real collection and be listable, buyable, transferable, and resellable on OpenSea Base.

## Standard caveat
Net Protocol Netr optional drop is ERC1155, not the ERC721A path used by Hood Turtles. Confirm ERC1155 interface support (ERC165 supportsInterface 0xd9b67a26), token uri(id), balanceOf, TransferSingle/TransferBatch, metadata host health, royalties if any and token ID mint semantics.

## Test matrix
1. Deploy test or low-value pilot on target Base 8453.
2. Mint one token ID with an externally owned wallet. Record tx.
3. Resolve `uri(id)` (including hexadecimal template replacements if present), fetch JSON, render image at 512/1024px and check content-type/cache headers.
4. Verify OpenSea indexes collection, art, creator and minted supply; allow indexing delay.
5. List NFT from wallet, validate approval and ownership.
6. Execute an authorized purchase between controlled test wallets; confirm transfer and sale.
7. Verify royalties/proceeds display, ensure no accidental creator custody or mint front-running.
8. Record all transactions, OpenSea URLs, screenshots and outstanding limitations.

If OpenSea doesn't recognize the particular drop, stop. Do not substitute a different NFT contract without explicit approval.
