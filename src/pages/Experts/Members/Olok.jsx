import React from 'react'
import './Members.css'
import Footer from '../../../components/Footer/Footer'
import Navbar from '../../../components/Navbar/Navbar'

export const Olok = () => {
  return (
    <>
        <Navbar/>
    <section id="Olok" className='py-5'>
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-5 mb-5 flex-column-reverse flex-md-row">
                <div className="col">
                    
                    {/* <div className="custom-box-border p-4">

                        <h3 className='text-2xl'>WORK EXPERIENCE</h3>
                        <hr className='hr-custom-member my-3' />
                        
                        <h4 className='text-base text-gray-300'>Music Video Editor (Home Base)</h4>
                        <p className='text-gray-400'>
                           Promptomusic
                        </p>
                        <div className="d-flex justify-content-between mt-3">
                            <small>
                                <p className='text-gray-400'>
                                    03/2021
                                </p>
                                <p className="text-gray-400 mt-2">
                                    <em>Achievements/Tasks:</em><br />
                                    - DEVELOPING VARIOUS WEBISTES
                                </p>
                            </small>
                            <small>
                                <p className="text-gray-400">
                                    Washington, DC
                                </p>
                            </small>
                        </div>

                        <hr className='hr-custom-member my-3' />
                        
                        <h4 className='text-base text-gray-300'>Fullstack   Developer</h4>
                        <p className='text-gray-400'>
                           IFormatLogic Solution
                        </p>
                        <div className="d-flex justify-content-between mt-3">
                            <small>
                                <p className='text-gray-400'>
                                    10/2022 - Present
                                </p>
                                <p className="text-gray-400 mt-2">
                                    <em>Achievements/Tasks:</em><br />
                                    - DEVELOPING VARIOUS WEBISTES
                                </p>
                            </small>
                            <small>
                                <p className="text-gray-400">
                                    IBA, Zambales
                                </p>
                            </small>
                        </div>
                    </div> */}

                    <div className="custom-box-border mt-5 p-4">
                        <h3 className='text-2xl'>EDUCATION</h3>

                        <hr className='hr-custom-member my-3' />

                        <h4 className='text-base text-gray-300'>Bachelor of Science in Information Technology</h4>
                        <p className='text-gray-400'>
                            Polytechnic College of Botolan
                        </p>
                        <div className="d-flex justify-content-between mt-3">
                            <small>
                                <p className='text-gray-400'>
                                    08/2023
                                </p>
                            </small>
                            <small>
                                <p className="text-gray-400">
                                    Botolan, Zambales
                                </p>
                            </small>
                        </div>

                    </div>

                    <div className="custom-box-border p-4 mt-5">
                        <h3 className='text-2xl'>CERTIFICATES</h3>

                        <hr className='hr-custom-member my-3' />

                        <h4 className='text-base text-gray-300'>DICT-WEB DEVELOPMENT USING WORDPRESS</h4>

                        <hr className='hr-custom-member my-3' />

                        <h4 className='text-base text-gray-300'>DICT-ADOBE PHOTOSHOP BASIC WORKFLOW</h4>

                        <hr className='hr-custom-member my-3' />

                        <h4 className='text-base text-gray-300'>DICT-BASIC MICROSOFT OFFICE</h4>
                    </div>
                </div>
                <div className="col">
                    <img src="/images/olok.jpg" alt="" className="img-fluid rounded-3xl" />

                    <div className="custom-box-border mt-5 p-4">
                        <h2 className='text-xl md:text-2xl title-project-count'>FULLSTACK DEVELOPER</h2>
                        <hr className='hr-custom-member my-3' />
                        <h1 className='text-5xl md:text-6xl mt-2'>
                            Karl Daren Y. Dagan
                        </h1>
                        <p className='text-gray-400 mt-4'>
                            To utilize my technical and management skills for achieving the target and developing the best performance in your company. I would like to implement my innovative ideas, skills and creativity for accomplishing the projects.
                        </p>

                        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-1 row-cols-xl-2 text-base text-white mt-4 flex-wrap gy-2">
                            <div className="col">
                                <div className="d-flex align-items-center">
                                    <i class='bx bxs-envelope' ></i>
                                    <p className='ps-3'>karldarendagan@gmail.com</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="d-flex align-items-center">
                                    <i class='bx bxs-phone' ></i>
                                    <p className='ps-3'>09814245598</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="d-flex align-items-center">
                                    <i class='bx bxs-map-pin' ></i>
                                    <p className='ps-3'>Zambales, Philippines</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="custom-box-border p-4 mt-5">
                        <h3 className='text-2xl'>SKILLS</h3>
                        <hr className='hr-custom-member my-3' />
                        <div className="d-inline-flex mt-3 flex-wrap">
                            <div className="bg-skills-custom px-2 py-1 m-1">
                                <p>HTML</p>
                            </div>
                            <div className="bg-skills-custom px-2 py-1 m-1">
                                <p>CSS</p>
                            </div>
                            <div className="bg-skills-custom px-2 py-1 m-1">
                                <p>JavaScript</p>
                            </div>
                            <div className="bg-skills-custom px-2 py-1 m-1">
                                <p>PHP</p>
                            </div>
                            <div className="bg-skills-custom px-2 py-1 m-1">
                                <p>Database Design</p>
                            </div>
                            <div className="bg-skills-custom px-2 py-1 m-1">
                                <p>MySQL</p>
                            </div>
                            <div className="bg-skills-custom px-2 py-1 m-1">
                                <p>MS ACCESS</p>
                            </div>
                            <div className="bg-skills-custom px-2 py-1 m-1">
                                <p>Technical Project Management</p>
                            </div>
                            <div className="bg-skills-custom px-2 py-1 m-1">
                                <p>Photoshop</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <Footer />
        </div>
    </section>
    </>
  )
}
