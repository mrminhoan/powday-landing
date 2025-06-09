const Footer = () => {
  return (
    <footer className="bg-[#ffffff] text-black py-6 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 [@media(min-width:1024px)]:grid-cols-2 gap-8 justify-between">
        <div>
          <img
            src="/images/Logo.png"
            alt="logo"
            className="min-[1024px]:w-[40%] w-[20%]"
          />
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Ecosystem + about */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-sm text-gray-400 font-semibold mb-2">
                ECOSYSTEM
              </h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="link-underline-hover">
                    App.Powday
                  </a>
                </li>
                <li>
                  <a href="#" className="link-underline-hover">
                    Games
                  </a>
                </li>
                <li>
                  <a href="#" className="link-underline-hover">
                    Powday Wiki
                  </a>
                </li>
                <li>
                  <a
                    href="https://the-powday.gitbook.io/the-powday"
                    className="link-underline-hover"
                  >
                    Whitepaper
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-sm text-gray-400 font-semibold mb-2">
                ABOUT
              </h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="link-underline-hover">
                    Sky Mavis
                  </a>
                </li>
                <li>
                  <a href="#" className="link-underline-hover">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Other + Social */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-sm text-gray-400 font-semibold mb-2">
                OTHER
              </h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="link-underline-hover">
                    Code of Conduct
                  </a>
                </li>
                <li>
                  <a href="#" className="link-underline-hover">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="link-underline-hover">
                    Terms of Use
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-sm text-gray-400 font-semibold mb-2">
                SOCIAL MEDIA
              </h2>
              <div className="flex space-x-4 text-xl">
                <a
                  href="#"
                  className="link-underline-hover"
                  aria-label="Discord"
                >
                  <img
                    src="/images/discord.svg"
                    alt="Discord"
                    className="w-6 h-6"
                  />
                </a>
                <a href="#" className="link-underline-hover" aria-label="X">
                  <img
                    src="/images/tele.svg"
                    alt="telegram"
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="#"
                  className="link-underline-hover"
                  aria-label="YouTube"
                >
                  <img
                    src="/images/youtube.svg"
                    alt="youtube"
                    className="w-6 h-6"
                  />
                </a>
                {/* <a
                  href="#"
                  className="link-underline-hover"
                  aria-label="TikTok"
                >
                  🎵
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
