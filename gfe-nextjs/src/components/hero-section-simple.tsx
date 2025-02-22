function HeroSectionSimple() {
  return (
    <header className="flex flex-col xl:flex-row xl:justify-stretch bg-white drop-shadow-md p-4 md:p-6 xl:p-24">
      <section id="section-left" className="flex flex-col justify-center gap-y-5">
        <h1 className="mt-20 lx:mt-0 text-4xl md:text-5xl font-semibold text-neutral-900">
          Well crafted abstract images
        </h1>
        <p className="text-xl font-normal text-neutral-600">
          High quality abstract images for your projects, wallpaper and presentations.
        </p>
        <div id="buttons" className="flex flex-row gap-8 mt-12 justify-stretch md:justify-normal xl:justify-normal">
          <button className="py-4 px-10 w-full md:w-fit xl:w-fit bg-white hover:bg-neutral-50 drop-shadow-md rounded-sm">
            <p className="font-medium text-md">Learn More</p>
          </button>
          <button className="py-4 px-10 w-full md:w-fit xl:w-fit text-white bg-indigo-700 hover:bg-indigo-800 drop-shadow-md rounded-sm">
            <p className="font-medium text-md">See pricing</p>
          </button>
        </div>
      </section>
      <section id="section-right" className="flex justify-end">
        <img
          src="prism.png"
          className="hero-img mt-16 mb-28 xl:mt-0 xl:mb-0 xl:w-[85%]"
          alt="Banner image or hero section"
        />
      </section>
    </header>
  )
}

export default HeroSectionSimple
