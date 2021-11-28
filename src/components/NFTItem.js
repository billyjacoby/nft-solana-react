import { useState, useEffect } from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  max-width: 90vw;
`;

const Image = styled.img`
  height: auto;
  max-width: 100%;
`;

export function NFTItem({ item }) {
  const [NFTData, setNFTData] = useState(null);

  useEffect(() => {
    async function getData() {
      let data = await (await fetch(item?.data?.uri)).json();
      console.log(data);
      setNFTData(data);
    }
    getData();
  }, [item]);
  return (
    <ItemContainer>
      <h4>{item.data.name}</h4>
      <Image src={NFTData?.image} alt="NFT" />
      {NFTData &&
        NFTData?.attributes?.map((attr) => {
          return (
            <div>
              <p>
                <strong>{attr.trait_type}: </strong>
                {attr.value}
              </p>
            </div>
          );
        })}
    </ItemContainer>
  );
}
