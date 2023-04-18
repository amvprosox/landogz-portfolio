import React from 'react'
import './AboutCompany.css'

const AboutCompany = () => {
  return (
    <section id="AboutCompany" className='mb-32'>
        <div className="container mx-auto">
            <h1 className='text-5xl md:text-6xl text-center'>About the Company</h1>
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 mt-28 gy-5">
                <div className="col">
                    <img src="/images/design.png" alt="" class="img-fluid rounded-2xl" />
                </div>
                <div className="col">
                    <h5 className='text-xl custom-color-about-company text-uppercase'>Web Development Experts</h5>
                    <h2 className='text-2xl md:text-3xl xl:text-6xl mt-3'>Expert Web Development Services</h2>
                    <p className='text-gray-300 mt-4'>
                        Where we specialize in creating custom online experiences for businesses of all sizes. Our team of web development experts has a wealth of experience in crafting stunning websites,   robust web applications, and intuitive user interfaces.
                    </p>

                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 mt-5 gy-3">
                        <div className="col">
                            <h2 className='text-4xl md:text-6xl'>600 +</h2>
                            <p className='text-gray-300 mt-3'> Projects Made</p>
                        </div>
                        <div className="col">
                            <h2 className='text-4xl md:text-6xl'>4.5x</h2>
                            <p className='text-gray-300 mt-3'>Faster Development Time</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 mt-40 flex-column-reverse flex-md-row gy-5">
                <div className="col">
                    <h5 className='text-xl custom-color-about-company text-uppercase'>Empowering Digital Experiences</h5>
                    <h2 className='text-2xl md:text-3xl xl:text-6xl mt-3'>Streamlining Development with Expert UX/UI Design</h2>
                    <p className='text-gray-300 mt-4'>
                        Streamlining development with expert UX/UI design involves integrating efficient design principles into web and software development. With a user-centered approach, UX/UI design aims to optimize the user experience through intuitive navigation, simple functionality, and innovative interfaces.
                    </p>

                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 mt-5 gy-4">
                        <div className="col">
                            <div className="d-flex align-items-center">
                                <div className='text-white bg-custom-color-icon rounded-2xl p-2 me-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                    </svg>
                                </div>
                                <p className='text-gray-300 text-xl'>
                                    Increased efficiency
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="d-flex align-items-center">
                                <div className='text-white bg-custom-color-icon rounded-2xl p-2 me-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                                </svg>

                                </div>
                                <p className='text-gray-300 text-xl'>
                                    Improved user experience
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <img src="/images/women.png" alt="" class="img-fluid rounded-2xl" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutCompany