import React from 'react'

const Contact = () => {
  return (
    <section className='bg-white py-24'>
      <div className='container flex flex-col mx-auto'>
        <div className='flex items-baseline mb-3'>
          <div className='border-b border-red-500 border-2 mr-3 w-4'/>
          <span className='text-sm font-medium tracking-widest'>
            GET IN TOUCH
          </span>
        </div>
        <p className="leading-relaxed text-3xl text-slate-800">
          Got a project you`d like to discuss? I`m all ears.
          <br />
          Let`s fill the form.
        </p>
        <div className='flex flex-row justify-between w-full h-full mt-10'>
          <form
            netlify
            name="test"
            className="flex flex-col w-1/3 mt-5 mr-20"
          >
            <input type="text" id="name" name="name"
              placeholder='Name'
              className="border-b border-gray-700 text-base outline-none text-gray-800 leading-8 py-1 mb-8"
            />
            <input type="email" id="email" name="email"
              placeholder='Email'
              className="border-b border-gray-700 text-base outline-none text-gray-800 py-1 leading-8 mb-8"
            />
            <textarea id="message" name="message" placeholder='Your message'
              className="border-b border-gray-700 h-32 text-base outline-none text-gray-800 py-1 resize-none leading-8"
            />
            <button
              type="submit"
              className="text-white bg-red-500 border-0 py-2 px-6 rounded text-lg w-1/3 mt-4">
              Submit
            </button>
          </form>
          <div className="flex items-end justify-start relative bg-gray-900 rounded-lg overflow-hidden w-2/3 p-5 ml-28">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195884.20789837514!2d32.62268200682178!3d39.90355566402687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xbdc57b0c0842b8d!2sAnkara!5e0!3m2!1sen!2str!4v1665058711320!5m2!1sen!2str"
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              style={{ filter: "opacity(0.7)" }}
            />
            <div className="relative flex flex-col flex-wrap bg-gray-900 shadow-md rounded w-auto py-5">
              <div className="px-6 mb-2">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Konutkent Ankara/Çankaya
                </p>
              </div>
              <div className="px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                </h2>
                <span className="text-indigo-400 leading-relaxed">
                  mertkeskinmtk6@gmail.com
                </span>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-2">
                  PHONE
                </h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact