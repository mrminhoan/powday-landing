const Footer = () => {
  return (
    <footer className="bg-[#ffffff] text-black py-6 px-6 md:px-16 h-0 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src="/images/Logo.png" alt="logo" className="min-[800px]:w-[70%] w-[40%]  min-[1000px]:w-[50%]" />
          {/* <h1 className="text-2xl font-bold mb-4">Axie Infinity</h1> */}
        </div>

        <div>
          <h2 className="text-sm text-gray-400 font-semibold mb-4">
            ECOSYSTEM
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                App.Powday
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Games
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Powday Wiki
              </a>
            </li>
            <li>
              <a href="https://the-powday.gitbook.io/the-powday" className="hover:underline">
                Whitepaper
              </a>
            </li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h2 className="text-sm text-gray-400 font-semibold mb-4">ABOUT</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Sky Mavis
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Other + Social */}
        <div>
          <h2 className="text-sm text-gray-400 font-semibold mb-4">OTHER</h2>
          <ul className="space-y-2 mb-6">
            <li>
              <a href="#" className="hover:underline">
                Code of Conduct
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of Use
              </a>
            </li>
          </ul>
          <h2 className="text-sm text-gray-400 font-semibold mb-2">
            SOCIAL MEDIA
          </h2>
          <div className="flex space-x-4 text-xl">
            <a href="#" aria-label="Discord">
              🕹️
            </a>
            <a href="#" aria-label="X">
              ❌
            </a>
            <a href="#" aria-label="YouTube">
              📺
            </a>
            <a href="#" aria-label="TikTok">
              🎵
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
