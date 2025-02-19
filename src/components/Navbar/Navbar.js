import React, { useEffect, useState } from "react";
// import { useWeb3Modal } from "@web3modal/react";
// import { useAccount } from "wagmi";
import { AiOutlineClose } from "react-icons/ai";
import { Modal } from "react-bootstrap";
import { useConnect, useAccount } from "wagmi";
import { Link } from 'react-router-dom';
// import LoadingOverlay from 'react-loading-overlay'
import "../style/navbar.css";

import { Account } from "../wallet/Account";
import { WalletOptions } from "../wallet/WalletOptions";
// import logo from '../../assets/logo/xora1.PNG'
import logo from '../../assets/logo/xora1.png'

const Navbar = () => {
  const [isLoading, setLoading] = useState(false);
  const { isConnected } = useAccount();

  const [show, setShow] = useState(false);
  const { connectors, connect } = useConnect();

  const handleClose = () => {
    setShow(false);
  };
  function ConnectWallet() {
    if (isConnected) return <Account />;
    return <WalletOptions setShow={setShow} />;
  }

  const handleShow = () => setShow(true);

  useEffect(() => {
    if (isConnected) {
      setShow(false);
    }
  }, [isConnected]);

  return (
    <nav
      className="navbar navbar-expand-lg px-4 position-sticky top-0"
      style={{
        backgroundColor: "#080B2A",
        color: "white",
        height: "4rem",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        zIndex: "30",
     
      }}
    >
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand text-white" href="#">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "50px", height: "50px", borderRadius:'50%',marginLeft:'2rem' }}
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
          <span className="navbar-toggler-icon" style={{backgroundColor:'grey'}}></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          {/* Navigation Links */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item" style={{ marginRight: "3rem" }}>
            <Link className="nav-link text-white" to="/">
            Home
          </Link>
            </li>
            <li className="nav-item" style={{ marginRight: "3rem" }}>
              <a className="nav-link text-white" href="#home">
                About Us
              </a>
            </li>
            <li className="nav-item" style={{ marginRight: "3rem" }}>
              <a className="nav-link text-white"  href="#roadmap">
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
            <div
              className="walletButton"
            >
              {isConnected ? (
                <ConnectWallet />
              ) : (
                <button
                  className="btn"
                  style={{
                    background:
                      "linear-gradient(to right, #6F5CEA, #AE5BFF, #F2946D)",
                    color: "white",
                    border: "none",
                    borderRadius: "20px",
                    padding: "0.5rem 1rem",
                  }}
                  onClick={handleShow}
                >
                  Connect Wallet
                </button>
              )}
            </div>
            {/* <ConnectWallet /> */}

            <Modal
              className="custom-modal"
              show={show}
              onHide={isLoading ? null : handleClose}
              centered
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
              <Modal.Body className="modal-body">
                <>
                  <ConnectWallet />
                </>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
