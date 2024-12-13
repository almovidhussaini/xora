import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Index from './components/Index';
import Footer from './components/footer/Footer';
import Termandcondition from './components/termAndCondition/Termandcondition';
import Policiy from './components/policy/Policiy';
import Disclamer from './components/disclamer/Disclamer';
import Regulatory from './components/regulatory/Regulatory';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
      <Router>
      <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
    
     <Navbar/>
     <Routes>
            <Route path="/" element={<Index />} /> {/* Route for Index */}
            <Route path="/terms" element={<Termandcondition />} /> {/* Route for Terms and Conditions */}
            <Route path = "/policy" element = {<Policiy/>}/>
            <Route path = "/Disclamer" element = {<Disclamer/>}/>
            <Route path = "/Regulatory" element = {<Regulatory/>}/>
          </Routes>
     <Footer/>
   
     </QueryClientProvider> 
     </WagmiProvider>
     </Router>
     </>
  );
}

export default App;
