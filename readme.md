# NFT Solana React

This is a simple example repository to show how to retrieve and display the NFTs that are owned by a particular wallet.

If you would like to follow a step by step tutorial on exactly what is happening here follow below!

Feel free to reach out with questions!

## Tutorial

The endgame of this tutorial is to build a React application that can connect to a user's wallet, and then display all of the NFTs that belong to that user. While this may sound like a really tall task, Solana and Metaplex both have great packages that will make this much more frictionless that you might think.

While the packages are available for anyone to use, the documentation is a little lacking. I hope that if nothing else I can contribute back to the community by providing some solid examples and tutorials. 

So onto the tutorial! We'll be building this application on the `create-react-app` base. If you're reading this on my blog, all the code for the finished product can be found on my github [here].

### Project Setup

*If you just want to get up and going, feel free to clone the starting point of the project. This is located in the `blank-slate` branch of this repo.*

After getting our app setup by running `npx create-react-app` we'll begin by installing all of the packages we'll be using. I personally am still a `yarn` fan, but any of the `yarn` commands can usually be swapped out with `npm` if that's your jam. These can all be installed in one shot by typing the following:

```bash
yarn add @solana/web3.js \
@metaplex/js \
@solana/wallet-adapter-base \
@solana/wallet-adapter-react \
@solana/wallet-adapter-react-ui \
@solana/wallet-adapter-wallets \
styled-components
```

You'll see that most of these packages all deal with Solana wallet integration. Solana makes it really easy to use their wallet package with just about any javascript framework, so they've broken the package into smaller packages depending on which framework you use.

I've also installed `styled-components`, but this is purely a preference of mine so feel free to skip out on that one if you want.

The last thing we have to do before we get coding is to strip down the files provided by `create-react-app` to just what we'll be using. 

In the source folder you can remove all the files except for `App.js` and `index.js`, and go ahead and remove all the other references from these files. You should be left with the following:

**index.js**
```javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

**App.js**
```javascript
function App() {
  return (
          <div>
            <h1>NFTs on Solana in React!</h1>
          </div>
  );
}

export default App;
```

Now we're ready to finally get into some code!
