import { useState } from "react";
import styled from "styled-components";

import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";

import { fetchNFTsOwnedByWallet } from "../lib/fetchNFTsByWallet";

import { NFTItem } from "./NFTItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 0;
`;

const Button = styled.button`
  color: white;
  background-color: teal;
  border: none;
  box-shadow: none;
  padding: 1.5em;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export function NFTContainer({ network }) {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [NFTs, setNFTs] = useState(null);

  async function onGetNFTClick() {
    if (!publicKey) return setNFTs(null);
    let NFTs = await fetchNFTsOwnedByWallet(
      new PublicKey(publicKey),
      connection
    );
    if (typeof NFTs === "undefined") {
      setNFTs(0);
    } else {
      setNFTs(NFTs);
    }
  }

  if (publicKey) {
    if (NFTs === 0) {
      return (
        <Container>
          <p>
            No NFTs found for <strong>{publicKey.toString()}</strong> on{" "}
            <strong>{network}</strong>!
          </p>
          <Button onClick={onGetNFTClick}>Get NFTs</Button>
        </Container>
      );
    }
    return (
      <Container>
        <Button onClick={onGetNFTClick}>Get NFTs</Button>
        {NFTs &&
          NFTs.map((item) => {
            if (item.data.uri === "") return null;
            return (
              <div key={JSON.stringify(item)}>
                <NFTItem item={item} />
              </div>
            );
          })}
      </Container>
    );
  } else {
    return null;
  }
}
