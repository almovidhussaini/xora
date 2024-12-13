import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'

export function Account() {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName({ address })
  const { data: ensAvatar } = useEnsAvatar({ name: ensName })

  function formatAddress(address) {
    return `${address.slice(0, 5)}...${address.slice(-3)}`;
  }
  

  return (
    <div  >
      {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
      {address && (ensName ? `${ensName} (${formatAddress(address)})` : formatAddress(address))}
      {/* <button onClick={() => disconnect()}>Disconnect</button> */}
      <button
              className="btn"
              style={{
                background: "linear-gradient(to right, #6F5CEA, #AE5BFF, #F2946D)",
                color: "white",
                border: "none",
                borderRadius: "20px",
                padding: "0.5rem 1rem",
                marginLeft:'17px'
              }}
              onClick={() => disconnect()}
              
            >
              Disconnect
            </button>

            </div>
  )
}
