import React from 'react'
import './CarouselCard.css'

const CarouselCard = () => {
  return (
    <section id="CarouselCard" className='my-32'>
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-5 ">
                <div className="col">
                    <div className="roadmap-card">
                        <h2 className='custom-color-about-company'>PHASE 01</h2>
                        <h1 className="mt-4 text-3xl">Planning</h1>
                        <p className="mt-4 text-gray-400">
                            Define project goals, requirements, and timeline in collaboration with the client. Choose technology stack and tools.
                        </p>
                        <hr className='hr-custom-line w-20 my-8' />
                        
                        <div className="d-flex my-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 custom-check-color">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className='ms-2'>Client consultation</p>
                        </div>
                        <div className="d-flex my-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 custom-check-color">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className='ms-2'>Requirements gathering</p>
                        </div>
                        <div className="d-flex my-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 custom-check-color">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className='ms-2'>echnology selection</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="roadmap-card">
                        <h2 className='custom-color-about-company'>PHASE 02</h2>
                        <h1 className="mt-4 text-3xl">Design</h1>
                        <p className="mt-4 text-gray-400">
                            Develop visual and functional design for website, including branding, responsive design, and UI/UX. Create mockups and prototypes.
                        </p>
                        <hr className='hr-custom-line w-20 my-8' />
                        
                        <div className="d-flex my-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 custom-check-color">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className='ms-2'>Visual design</p>
                        </div>
                        <div className="d-flex my-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 custom-check-color">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className='ms-2'>Branding</p>
                        </div>
                        <div className="d-flex my-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 custom-check-color">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className='ms-2'>Color and typography</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="roadmap-card">
                        <h2 className='custom-color-about-company'>PHASE 03</h2>
                        <h1 className="mt-4 text-3xl">Development</h1>
                        <p className="mt-4 text-gray-400">
                            Build back-end and front-end of website, implement features, and perform testing and debugging. Choose web development framework.
                        </p>
                        <hr className='hr-custom-line w-20 my-8' />
                        
                        <div className="d-flex my-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 custom-check-color">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className='ms-2'>Back-end development</p>
                        </div>
                        <div className="d-flex my-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 custom-check-color">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className='ms-2'>Front-end development</p>
                        </div>
                        <div className="d-flex my-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 custom-check-color">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className='ms-2'>Testing and debugging</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="roadmap-card">
                        <h2 className='custom-color-about-company'>PHASE 04</h2>
                        <h1 className="mt-4 text-3xl">Launch</h1>
                        <p className="mt-4 text-gray-400">
                            Deploy website, monitor for bugs and issues, and implement analytics. Create a marketing plan to promote the website.
                        </p>
                        <hr className='hr-custom-line w-20 my-8' />
                        
                        <div className="d-flex my-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 custom-check-color">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className='ms-2'>Production deployment</p>
                        </div>
                        <div className="d-flex my-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 custom-check-color">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className='ms-2'>Monitoring and analytics</p>
                        </div>
                        <div className="d-flex my-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 custom-check-color">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className='ms-2'>Marketing plan</p>
                        </div>
                    </div>
                </div>

                
                
            </div>
        </div>
    </section>
  )
}

export default CarouselCard