import React, { useState, useEffect } from 'react'
import { useConnect } from 'wagmi'
import Metamask_fox from '../../assets/icons/Metamask_foxcut.png';
import phantomWallet from '../../assets/icons/phantomWallet.png';
import walletConnect from '../../assets/icons/walletConnectBlue.png'

export function WalletOptions({setShow}) {
  const { connectors, connect } = useConnect()
  return <div className='d-flex justify-content-center' style={{margin:'2rem 0'}}>    {connectors.filter((connector) => connector.name === 'Phantom' || connector.name === 'MetaMask' || connector.name === 'WalletConnect')
  .map((connector) => (
    <WalletOption
      key={connector.uid}
      connector={connector}
      onClick={() =>  {
        connect({ connector })
        if(connector.name == 'WalletConnect'){
          setShow(false)
        }
      
      } }
    />
  ))
}
</div>
 
  

}

function WalletOption({ connector, onClick }) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    (async () => {
      const provider = await connector.getProvider()
      setReady(!!provider)
    })()
  }, [connector])

  return (
    <button className="button btn btn-two" style={{color:'white'}} onClick={onClick}>
                <img
                  src={connector.name == 'MetaMask'?Metamask_fox: connector.name ==='Phantom'?phantomWallet:walletConnect}
                  // src="/images/icons/usdt.png"
                  alt="Logo"
                  className="button__logo"
                  style={{ width: '30px', height: '30px', marginRight:'5px' }}
                />
                <span class="button__text">{connector.name}</span>
     </button>
  )
}
