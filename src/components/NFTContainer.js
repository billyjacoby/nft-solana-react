import { useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";

import { fetchNFTsOwnedByWallet } from "../lib/fetchNFTsByWallet";

export function NFTContainer() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [NFTs, setNFTs] = useState(null);

  async function onGetNFTClick() {
    if (!publicKey) return setNFTs(null);
    let NFTs = await fetchNFTsOwnedByWallet(
      new PublicKey(publicKey),
      connection
    );
    setNFTs(NFTs);
  }

  if (publicKey) {
    return (
      <>
        <button onClick={onGetNFTClick}>Get NFTs</button>
        {NFTs &&
          NFTs.map((item) => {
            if (item.data.uri === "") return null;
            async function getNftAsset() {
              let data = await (await fetch(item.data.uri)).json();
              console.log(data);
              return data;
            }
            let data = getNftAsset();
            return (
              <div key={JSON.stringify(item)}>
                <h4>{item.data.name}</h4>
                <img src={data.image} alt="NFT" />
              </div>
            );
          })}
      </>
    );
  } else {
    return null;
  }
}
