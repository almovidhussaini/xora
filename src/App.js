import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Index from './components/Index';
import Footer from './components/footer/Footer';

// import {
//   EthereumClient,
//   w3mConnectors,
//   w3mProvider,
 
// } from "https://unpkg.com/@web3modal/ethereum@2.7.1";
// import {
//   EthereumClient,
//   w3mConnectors,
//   w3mProvider,
// } from "@web3modal/ethereum";
// import { Web3Modal } from "@web3modal/react";
// import { configureChains, createConfig, WagmiConfig } from "wagmi";
// import { bsc } from "wagmi/chains";



function App() {

//   const chains = [bsc];
// const projectId ='bc7196f601ca80fe855e037635bc42ba';
// const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors: w3mConnectors({ version: 1, chains, projectId }),
//   publicClient,
// });
// const ethereumClient = new EthereumClient(wagmiConfig, chains);

  return (
    <> 
    {/* <WagmiConfig config={wagmiConfig}> */}
    
     <Navbar/>
     <Index/>
     <Footer/>
   
    {/* </WagmiConfig> */}
     {/* <Web3Modal projectId={projectId} ethereumClient={ethereumClient} /> */}
     </>
  );
}

export default App;
