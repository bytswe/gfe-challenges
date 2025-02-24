import React from "react"

function Testimonials() {
  return (
    <div className="flex flex-col bg-white drop-shadow-md p-4 md:p-6 xl:p-24 rounded py-12 md:py-16 gap-y-12 md:gap-y-16">
      <section id="section-top" className="flex flex-col w-full flex-1 gap-y-5 justify-center items-center text-center">
        <h4 className="text-base font-semibold text-indigo-700">Testimonials</h4>
        <h2 className="text-3xl md:text-5xl font-semibold text-neutral-900">Countless users, countless smiles</h2>
        <p className="flex flex-wrap font-normal text-lg">
          Explore our community&aposs journey and discover why satisfaction defines us.
        </p>
      </section>
      <section
        id="section-bottom"
        className="grid grid-cols-1 grid-rows-4 md:grid-cols-6 lg:grid-cols-12 lg:grid-rows-3 justify-center items-center gap-12">
        <div id="card" className="w-fit bg-white p-8 col-span-4 sm:col-span-3 lg:col-span-4 rounded-md drop-shadow-md">
          <div id="avatar-name" className="flex flex-row flex-wrap items-center gap-4">
            <img src="profile-thumbnail.jpg" className="w-12 rounded-full" alt="profile thumbnail" />
            <div id="name-username" className="flex flex-col">
              <span className="text-lg font-semibold text-neutral-900">Sarah Dole</span>
              <span className="text-neutral-600 text-base">@sarahdole</span>
            </div>
          </div>
          <blockquote id="testimonial-content">
            <p className="mt-3 text-base">
              I&aposve been searching for high-quality abstract images for my design projects, and I&aposm thrilled to
              have found this platform. The variety and depth of creativity are astounding!
            </p>
          </blockquote>
        </div>
        <div id="card" className="w-fit bg-white p-8 col-span-4 sm:col-span-3 lg:col-span-4 rounded-md drop-shadow-md">
          <div id="avatar-name" className="flex flex-row flex-wrap items-center gap-4">
            <img src="profile-thumbnail_3.jpg" className="w-12 rounded-full" alt="profile thumbnail" />
            <div id="name-username" className="flex flex-col">
              <span className="text-lg font-semibold text-neutral-900">Jake Johnsone</span>
              <span className="text-neutral-600 text-base">@jakejohnshon</span>
            </div>
          </div>
          <blockquote id="testimonial-content">
            <p className="mt-3 text-base">
              From corporate presentations to personal projects, the abstract images on this platform have added a touch
              of elegance and sophistication to everything I create.
            </p>
          </blockquote>
        </div>
        <div id="card" className="w-fit bg-white p-8 col-span-4 sm:col-span-3 lg:col-span-4 rounded-md drop-shadow-md">
          <div id="avatar-name" className="flex flex-row flex-wrap items-center gap-4">
            <img src="profile-thumbnail_6.jpg" className="w-12 rounded-full" alt="profile thumbnail" />
            <div id="name-username" className="flex flex-col">
              <span className="text-lg font-semibold text-neutral-900">Marcus Thompson</span>
              <span className="text-neutral-600 text-base">@mthompson</span>
            </div>
          </div>
          <blockquote id="testimonial-content">
            <p className="mt-3 text-base">
              Using abstract images from this platform has helped me convey complex concepts in a visually engaging way.
              My clients are always impressed!
            </p>
          </blockquote>
        </div>

        <div id="card" className="w-fit bg-white p-8 col-span-4 sm:col-span-3 lg:col-span-4 rounded-md drop-shadow-md">
          <div id="avatar-name" className="flex flex-row flex-wrap items-center gap-4">
            <img
              src="profile-thumbnail_1.jpg"
              className="w-12 object-cover overflow-hidden rounded-full"
              alt="profile thumbnail"
            />
            <div id="name-username" className="flex flex-col">
              <span className="text-lg font-semibold text-neutral-900">John Appleseed</span>
              <span className="text-neutral-600 text-base">@johnaseed</span>
            </div>
          </div>
          <blockquote id="testimonial-content">
            <p className="mt-3 text-base">
              As an artist, finding inspiration is crucial. This platform has become my go-to source for unique abstract
              images that ignite my creativity like never before.
            </p>
          </blockquote>
        </div>

        <div id="card" className="w-fit bg-white p-8 col-span-4 sm:col-span-3 lg:col-span-4 rounded-md drop-shadow-md">
          <div id="avatar-name" className="flex flex-row flex-wrap items-center gap-4">
            <img src="profile-thumbnail_4.jpg" className="w-12 rounded-full" alt="profile thumbnail" />
            <div id="name-username" className="flex flex-col">
              <span className="text-lg font-semibold text-neutral-900">Igor Stravinsky</span>
              <span className="text-neutral-600 text-base">@igorstrav</span>
            </div>
          </div>
          <blockquote id="testimonial-content">
            <p className="mt-3 text-base">
              The subscription plans are worth every penny. Having unlimited access to premium abstract images has
              transformed my design workflow and elevated the quality of my work
            </p>
          </blockquote>
        </div>
        <div id="card" className="w-fit bg-white p-8 col-span-4 sm:col-span-3 lg:col-span-4 rounded-md drop-shadow-md">
          <div id="avatar-name" className="flex flex-row flex-wrap items-center gap-4">
            <img src="profile-thumbnail_7.jpg" className="w-12 rounded-full" alt="profile thumbnail" />
            <div id="name-username" className="flex flex-col">
              <span className="text-lg font-semibold text-neutral-900">Oliver Neverloved</span>
              <span className="text-neutral-600 text-base">@olivernever</span>
            </div>
          </div>
          <blockquote id="testimonial-content">
            <p className="mt-3 text-base">
              I appreciate how user-friendly the platform is. Browsing, downloading, and managing my image library
              couldn&apost be easier.
            </p>
          </blockquote>
        </div>

        <div id="card" className="w-fit bg-white p-8 col-span-4 sm:col-span-3 lg:col-span-4 rounded-md drop-shadow-md">
          <div id="avatar-name" className="flex flex-row flex-wrap items-center gap-4">
            <img src="profile-thumbnail_2.jpg" className="w-12 rounded-full" alt="profile thumbnail" />
            <div id="name-username" className="flex flex-col">
              <span className="text-lg font-semibold text-neutral-900">Jean Gray</span>
              <span className="text-neutral-600 text-base">@jeniic</span>
            </div>
          </div>
          <blockquote id="testimonial-content">
            <p className="mt-3 text-base">
              I never thought I&aposd find such stunning abstract images for free! This platform has exceeded my
              expectations in every way.
            </p>
          </blockquote>
        </div>

        <div id="card" className="w-fit bg-white p-8 col-span-4 sm:col-span-3 lg:col-span-4 rounded-md drop-shadow-md">
          <div id="avatar-name" className="flex flex-row flex-wrap items-center gap-4">
            <img src="profile-thumbnail_5.jpg" className="w-12 rounded-full" alt="profile thumbnail" />
            <div id="name-username" className="flex flex-col">
              <span className="text-lg font-semibold text-neutral-900">Declan Rice</span>
              <span className="text-neutral-600 text-base">@drice</span>
            </div>
          </div>
          <blockquote id="testimonial-content">
            <p className="mt-3 text-base">
              I&aposm amazed by the attention to detail in every image on this platform. It&aposs clear that a lot of
              thought and creativity goes into curating the collection.
            </p>
          </blockquote>
        </div>
        <div id="card" className="w-fit bg-white p-8 col-span-4 sm:col-span-3 lg:col-span-4 rounded-md drop-shadow-md">
          <div id="avatar-name" className="flex flex-row flex-wrap items-center gap-4">
            <img src="profile-thumbnail_8.jpg" className="w-12 rounded-full" alt="profile thumbnail" />
            <div id="name-username" className="flex flex-col">
              <span className="text-lg font-semibold text-neutral-900">Mark Dennis</span>
              <span className="text-neutral-600 text-base">@marked</span>
            </div>
          </div>
          <blockquote id="testimonial-content">
            <p className="mt-3 text-base">
              The customer support team went above and beyond to help me with a subscription issue. Their dedication to
              customer satisfaction is truly commendable
            </p>
          </blockquote>
        </div>
      </section>
    </div>
  )
}

export default Testimonials
