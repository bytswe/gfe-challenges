function LogoMarquee() {
  return (
    <div id="logo-marquee-section" className="flex flex-row w-full items-center bg-white drop-shadow-md">
      <div className="py-24">
        <div className="flex flex-1 flex-col items-center gap-8 overflow-hidden">
          <p className="px-24 text-base font-medium">Used by teams that you love</p>
          <div id="sliding-logos" className="flex flex-1 flex-row gap-8 scroll-smooth animate-slide">
            {/* <!--First Set--> */}
            <img src="marquee/logo.svg" alt="Wan Nain's Logo" />
            <img src="marquee/logo-1.svg" alt="Robinwood's Logo" />
            <img src="marquee/logo-2.svg" alt="BitterFly's Logo" />
            <img src="marquee/logo-3.svg" alt="SWAPDO's Logo" />
            <img src="marquee/logo-4.svg" alt="WIRANG's Logo" />
            <img src="marquee/logo-5.svg" alt="DIAMON's Logo" />
            <img src="marquee/logo-6.svg" alt="Air Car's Logo" />
            <img src="marquee/logo-7.svg" alt="MAKRO HARD's Logo" />
            {/* <!--Second Set--> */}
            <img src="marquee/logo.svg" alt="Wan Nain's Logo" />
            <img src="marquee/logo-1.svg" alt="Robinwood's Logo" />
            <img src="marquee/logo-2.svg" alt="BitterFly's Logo" />
            <img src="marquee/logo-3.svg" alt="SWAPDO's Logo" />
            <img src="marquee/logo-4.svg" alt="WIRANG's Logo" />
            <img src="marquee/logo-5.svg" alt="DIAMON's Logo" />
            <img src="marquee/logo-6.svg" alt="Air Car's Logo" />
            <img src="marquee/logo-7.svg" alt="MAKRO HARD's Logo" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default LogoMarquee
