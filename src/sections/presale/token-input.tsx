import React, { useState } from "react";

type Token = {
  label: string;
  value: string;
  icon: string;
};

const tokens: Token[] = [
  { label: "Solana", value: "SOL", icon: "/images/solana.svg" },
  { label: "Tether", value: "USDT", icon: "/images/usdt.svg" },
  { label: "USDT", value: "USDC", icon: "/images/usdc.png" },
];

const conversionRates: Record<string, number> = {
  SOL: 0.002,
  USDT: 0.001,
  USDC: 0.0005,
};

const TokenConverter = () => {
  const [selectedToken, setSelectedToken] = useState<Token>(tokens[2]);
  const [fiatValue, setFiatValue] = useState("");
  const [tokenValue, setTokenValue] = useState("");

  const currentRate = conversionRates[selectedToken.value];

  const formatNumber = (value: number) => {
    if (!isFinite(value)) return "0";
    return value.toLocaleString("en-US", {
      maximumFractionDigits: 6,
    });
  };

  const handleFiatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9.]/g, "");
    const [intPart, decimalPart] = raw.split(".");
    const formatted = Number(intPart || "0").toLocaleString("en-US");
    const display = decimalPart ? `${formatted}.${decimalPart}` : formatted;
    setFiatValue(display);

    const numeric = parseFloat(raw);
    if (!isNaN(numeric)) {
      const token = numeric / currentRate;
      setTokenValue(formatNumber(token));
    } else {
      setTokenValue("");
    }
  };

  const handleTokenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9.]/g, "");
    const [intPart, decimalPart] = raw.split(".");
    const formatted = Number(intPart || "0").toLocaleString("en-US");
    const display = decimalPart ? `${formatted}.${decimalPart}` : formatted;
    setTokenValue(display);

    const numeric = parseFloat(raw);
    if (!isNaN(numeric)) {
      const fiat = numeric * currentRate;
      setFiatValue(formatNumber(fiat));
    } else {
      setFiatValue("");
    }
  };

  // const tokens: Token[] = ["SOL", "USDT", "USDC"];

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-900 text-white rounded-xl space-y-4">
      {/* Token Tabs */}
      <div className="flex justify-between gap-2">
        <div className="flex flex-col md:flex-row justify-between gap-2 w-full">
          {tokens.map((token) => (
            <button
              key={token.value}
              className={`flex items-center justify-center gap-2 flex-1 py-2 rounded-md font-semibold transition-all duration-200 ${
                selectedToken.value === token.value
                  ? "bg-gradient-to-r from-[#39c8f2] to-[#6f86ff] text-white shadow-lg"
                  : "bg-gray-800 hover:bg-gray-700 text-gray-300"
              }`}
              onClick={() => {
                setSelectedToken(token);
                setFiatValue("");
                setTokenValue("");
              }}
            >
              {token?.icon && (
                <img src={token.icon} alt={token.label} className="w-4 h-4 sm:w-6 sm:h-6" />
              )}
              <span className="text-sm sm:text-base">{token.value}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Input Fields */}
      <div className="flex gap-2">
        <div className="flex-1 bg-gray-100 rounded-md px-4 py-2 flex items-center text-black">
          {/* <span className="mr-2 text-gray-500">{selectedToken.label}</span> */}
          <img
            src={selectedToken.icon}
            alt={selectedToken.label}
            className="w-6 h-6"
          />
          <input
            type="text"
            value={fiatValue}
            onChange={handleFiatChange}
            className="bg-transparent outline-none w-full text-right"
            placeholder="0.00"
          />
        </div>
        <div className="flex-1 bg-gray-100 rounded-md px-4 py-2 flex items-center text-black">
          {/* <span className="mr-2"></span> */}
          <img src={"/images/ui_icon_coin_E.png"} className="w-6 h-6" />
          <input
            type="text"
            value={tokenValue}
            onChange={handleTokenChange}
            className="bg-transparent outline-none w-full text-right"
            placeholder="0.00"
          />
        </div>
      </div>
    </div>
  );
};

export default TokenConverter;
