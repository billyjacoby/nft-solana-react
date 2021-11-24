import { useState } from "react";

import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { WalletConnectionProvider } from "./components/WalletConnectionProvider";

import { NFTContainer } from "./components/NFTContainer";

import { OuterContainer, Container } from "./styles/common";
import { Header } from "./components/Header";

function App() {
  const [network, setNetwork] = useState("mainnet-beta");
  return (
    <WalletConnectionProvider network={network}>
      <WalletModalProvider>
        <OuterContainer>
          <Header />
          <Container className="App">
            <h1>This is an app</h1>
            <NFTContainer />
          </Container>
        </OuterContainer>
      </WalletModalProvider>
    </WalletConnectionProvider>
  );
}

export default App;
