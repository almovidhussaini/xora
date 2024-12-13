import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Index from './components/Index';
import Footer from './components/footer/Footer';

import { http, createConfig, WagmiProvider } from "wagmi";
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'
import {  base, mainnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
const projectId ='bc7196f601ca80fe855e037635bc42ba';
const config = createConfig({
  chains: [mainnet, base],
  connectors: [
    injected(),
    walletConnect({ projectId }),
    metaMask(),
    safe(),
  ].filter(connector => connector !== undefined),
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
})
const queryClient = new QueryClient()



  return (
    <> 
      <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
    
     <Navbar/>
     <Index/>
     <Footer/>
   
     </QueryClientProvider> 
     </WagmiProvider>
     </>
  );
}

export default App;
