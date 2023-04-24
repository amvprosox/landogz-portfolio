import React from 'react'
import './ContactUs.css'

const ContactUs = () => {
  return (
    <section id="ContactUs">
        <div className="container mx-auto text-center">
            <h1 className='text-5xl md:text-8xl'>Contact us<br /> Now</h1>

            <a
              href="/contact"
              className="btn py-3 px-5 mt-5 rounded-full bg-custom-color font-semibold text-white"
            >
              <div className="d-flex svg-trans">
                <span className="me-2"> CONTACT US</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </a>
        </div>
    </section>
  )
}

export default ContactUs