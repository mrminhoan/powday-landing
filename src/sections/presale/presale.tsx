import React, { useState } from "react";
import CountdownTimer from "./countdown";
import TokenInput from "./token-input";
import ConnectWalletModal from "./modal/connect-wallet-modal";
import WalletQRCodeModal from "./modal/wallet-qr-code-modal";

const targetDate = new Date("2025-06-21T00:00:00");
const walletConnectURI = "wc:sample-walletconnect-uri";

const PresaleCard = () => {
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);

  return (
    <div className="max-w-md  p-6 rounded-2xl bg-white text-black shadow-lg">
      <h2 className="text-center text-xl font-semibold text-primary">
        Presale Stage 1
      </h2>
      <p className="text-center text-sm text-gray-600 mt-1 uppercase tracking-wide">
        Time Remaining Until Price Increase
      </p>

      {/* Countdown */}
      <CountdownTimer targetDate={targetDate} />

      {/* Raised and Remaining */}
      <div className="bg-gray-100 mt-6 p-4 rounded-md flex justify-between items-center">
        <span className="text-lg font-bold text-gray-800 flex flex-col">
          <span>${"8656.02"}</span>
          <span className="text-sm">Raised</span>
        </span>
        <div className="flex flex-col items-end">
          <span className="text-sm text-black font-semibold">
            4,241,343,978
          </span>
          <span className="text-sm text-black font-semibold">Remaining</span>
        </div>
      </div>

      {/* Prices */}
      <div className="flex justify-between mt-4 text-sm">
        <div>
          <p className="text-gray-500">Current Price</p>
          <p className="text-primary font-bold">$0.001</p>
        </div>
        <div>
          <p className="text-gray-500 text-right">Next Price</p>
          <p className="text-primary font-bold text-right">$0.0015</p>
        </div>
      </div>

      {/* Token Input */}
      <TokenInput />

      {/* Connect Wallet Button */}
      <button
        onClick={() => setShowWalletModal(true)}
        className="mt-6 w-full bg-gradient-to-r from-[#39c8f2] to-[#6f86ff] text-white shadow-lg hover:opacity-90 transition-all py-2 rounded-md font-semibold flex items-center justify-center gap-2"
      >
        <span role="img" aria-label="wallet">
          👛
        </span>
        Connect Wallet
      </button>

      {showWalletModal && (
        <ConnectWalletModal
          onClose={() => setShowWalletModal(false)}
          onSelectWalletConnect={() => {
            setShowWalletModal(false);
            setShowQRModal(true);
          }}
        />
      )}

      {showQRModal && (
        <WalletQRCodeModal
          uri={walletConnectURI}
          onClose={() => setShowQRModal(false)}
        />
      )}
    </div>
  );
};

export default PresaleCard;
