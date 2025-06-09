import React, { useRef, useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Copy, CheckCheck } from "lucide-react";

type Props = {
  uri: string;
  onClose: () => void;
};

const WalletQRCodeModal = ({ uri, onClose }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  // Đóng khi click ra ngoài modal
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

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="relative bg-[#00aae1] p-6 rounded-2xl w-full max-w-sm flex flex-col items-center text-center shadow-xl"
      >
        {/* Nút đóng X */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-2xl hover:text-red-400"
        >
          &times;
        </button>

        <h2 className="text-lg font-semibold mb-4 text-white">WalletConnect</h2>

        <div className="bg-white p-4 rounded-lg">
          <QRCode value={uri} size={200} />
        </div>

        <p className="text-sm text-white mt-4">
          Scan this QR Code with your phone
        </p>

        {/* <button
          onClick={() => navigator.clipboard.writeText(uri)}
          className="mt-2 text-white text-sm hover:underline"
        >
          📋 Copy link
        </button> */}

        <CopyToClipboard
          text={"123312"}
          onCopy={handleCopy}
          className="mt-6 text-white text-sm hover:underline cursor-pointer flex items-center justify-center gap-2"
        >
          <div className="flex items-center justify-center gap-2">
            {copied ? (
              <CheckCheck className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
            <span>Copy wallet</span>
          </div>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default WalletQRCodeModal;
