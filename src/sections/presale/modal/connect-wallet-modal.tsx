import { CircleX } from "lucide-react";
import React, { useRef, useEffect } from "react";

type Props = {
  onClose: () => void;
  onSelectWalletConnect: () => void;
};

const ConnectWalletModal = ({ onClose, onSelectWalletConnect }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Đóng modal khi click ra ngoài vùng modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    // <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        // className="relative bg-gray-800 p-6 rounded-lg w-full max-w-sm space-y-4"
        className="relative bg-[#00aae1] p-6 rounded-lg w-full max-w-sm space-y-4"
      >
        {/* Nút đóng X */}
        {/* <button className="absolute top-2 right-2 text-white text-xl hover:text-red-400">
          &times;
        </button> */}

        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-center text-white">
            Connect Your Wallet
          </h2>

          <button onClick={onClose} className="p-2 bg-">
            <CircleX className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="h-[1px] bg-white/50"></div>

        <button
          className="w-full bg-white text-black py-2 px-4 rounded hover:bg-gray-200 flex items-center justify-between gap-2"
          onClick={onSelectWalletConnect}
        >
          <p>WalletConnect</p>
          <img
            src="/images/walletconnect-logo.png"
            alt="WalletConnect"
            className="w-8"
          />
        </button>

        <button
          className="w-full bg-white text-black py-2 px-4 rounded hover:bg-gray-200 flex items-center justify-between gap-2"
          onClick={onSelectWalletConnect}
        >
          <p>Coinbase Wallet</p>
          <img src="/images/coinbase.webp" alt="coinbase" className="w-8" />
        </button>

        {/* <button
          onClick={onClose}
          className="w-full text-sm text-[white] hover:underline"
        >
          Cancel
        </button> */}
      </div>
    </div>
  );
};

export default ConnectWalletModal;
