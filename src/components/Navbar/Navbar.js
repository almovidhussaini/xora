import React ,{useEffect, useState} from 'react';
// import { useWeb3Modal } from "@web3modal/react";
// import { useAccount } from "wagmi";
import { AiOutlineClose, AiOutlineConsoleSql } from "react-icons/ai";
import { Button, Modal, Form } from "react-bootstrap";


const Navbar=()=> {

  const [ currentAccount,setCurrentAccount] = useState(0);
  const [isLoading, setLoading] = useState(false);
    // const { isOpen, open, close, setDefaultChain } = useWeb3Modal();
    // const { address, isConnecting, isDisconnected, isConnected } = useAccount();
    // const { ethereum } = window;
  
  const [show, setShow] = useState(false);

//   const connectWallet = async () => {
//     try {
//         if (ethereum) {
//             setLoading(true)
//             const chainId = await ethereum.request({
//                 method: "eth_chainId",
//             });
//             if (chainId !== "0xaa36a7") { //this is  sepolia. 0x38 is bnb mainnet
//                 const chainParams = {
//                     chainId: "0xaa36a7", // 
//                 };
//                 await ethereum.request({
//                     method: "wallet_switchEthereumChain",
//                     params: [chainParams],
//                 });
//             }
//             const temp = await ethereum.request({
//                 method: "eth_requestAccounts",
//             });
//             setLoading(false)

//             setCurrentAccount(temp[0]);
//         }
//         else {
//             throw new Error("Please Install Metamask")
//         }
//     } catch (err) {

//         // console.log(err.message)
//         setLoading(false)
//         // alert(err)
//     }
// }

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);
  // const handleWalletConnect = async () => {
  //   handleClose();
  //   await open();
  // };
  // const isWalletconnected = async () => {
  //   // console.log("1");
  //   if (isConnected) {
  //     // console.log("2");

  //     setCurrentAccount(address);
  //   } else {
  //     // console.log("3");

  //     setCurrentAccount(null);
  //   }
  // };

  // useEffect(() => {
  //   isWalletconnected();
  // });

    return (
      <nav
      className="navbar navbar-expand-lg px-4 position-sticky top-0"
      style={{
        backgroundColor: "#080B2A",
        color: "white",
        height: "4rem",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        zIndex:'30'
      }}
    >
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand text-white" href="#">
          <img
            src="/path/to/logo.png"
            alt="Logo"
            style={{ width: "30px", height: "30px" }}
          />
        </a>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          {/* Navigation Links */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item" style={{ marginRight: "3rem" }}>
              <a className="nav-link text-white" href="#">
                Home
              </a>
            </li>
            <li className="nav-item" style={{ marginRight: "3rem" }}>
              <a className="nav-link text-white" href="#" >
                About Us
              </a>
            </li>
            <li className="nav-item" style={{ marginRight: "3rem" }} >
              <a className="nav-link text-white" href="#">
                Roadmap
              </a>
            </li>
            <li className="nav-item" style={{ marginRight: "3rem" }}>
              <a className="nav-link text-white" href="#">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Contact Us
              </a>
            </li>
          </ul>

          {/* Right Side */}
          <div className="d-flex align-items-center gap-3">
            {/* Search Icon */}
            <button
              className="btn btn-link text-white p-0"
              style={{ fontSize: "1.2rem" }}
            >
              <i className="fas fa-search"></i>
            </button>

            {/* Connect Wallet Button */}
            <button
              className="btn"
              style={{
                background: "linear-gradient(to right, #6F5CEA, #AE5BFF, #F2946D)",
                color: "white",
                border: "none",
                borderRadius: "20px",
                padding: "0.5rem 1rem",
              }}
              onClick={handleShow}
            >
              Connect Wallet
            </button>
            {/* <Modal
        className="custom-modal"
        show={show}
        onHide={isLoading ? null : handleClose}
        centered
      >
        <LoadingOverlay
          active={isLoading}
          spinner
          styles={{
            overlay: (base) => ({
              ...base,
              zIndex: 9999, // Increase the z-index value
            }),
          }}
        >
          <Modal.Header>
            <button
              className="all-unset close-button"
              onClick={() => setShow(false)}
              style={{ cursor: "pointer" }}
            >
              <AiOutlineClose />
            </button>
          </Modal.Header>
          <Modal.Body>
            <>
              <button class="button btn btn-two" onClick={connectWallet}>
                <img
                  src="/images/icons/MetaMask_Fox.png"
                  // src="/images/icons/usdt.png"
                  alt="Logo"
                  class="button__logo"
                />
                <span class="button__text">Metamask</span>
              </button>

              <button class="button btn btn-two" onClick={handleWalletConnect}>
                <img
                  src="/images/icons/wconnect.png"
                  alt="Logo"
                  class="button__logo"
                />
                <span class="button__text">WalletConnect</span>
              </button>
            </>
          </Modal.Body>
        </LoadingOverlay>
      </Modal> */}
          </div>
        </div>
      </div>
    </nav>

    );
}

export default Navbar;