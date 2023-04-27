import React from 'react'
import './Experts.css'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

const Experts = () => {
  return (
    <>
        <Navbar />
        <section id="Experts" className='py-5'>
            <div className="container mx-auto px-0 custom-border-experts">
                <h1 className='text-5xl md:text-6xl py-5 ps-4 border-bottom-custom'>Meet The Experts</h1>
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 mx-0">
                    <div className="col border-bottom-custom border-right-custom p-5">
                        <a href="/rolan">
                        <div className="h-100">
                                <img src="/images/boss.jpg" alt="" className="img-fluid rounded-3xl" />

                                <h1 className="mt-4 text-2xl">Rolan M. Benavidez Jr.</h1>
                                <p className='mt-1 text-gray-400'>Founder / Full Stack Developer / Skater</p>
                                <div className="social-media-expert title-project-count text-2xl text-gray-100 mt-3">
                                    <i class='bx bxl-facebook-circle mx-1'></i>
                                    <i class='bx bxl-instagram-alt mx-1' ></i>
                                    <i class='bx bxl-linkedin-square mx-1' ></i>
                                    <i class='bx bxl-telegram mx-1'></i>
                                    <i class='bx bxl-whatsapp mx-1' ></i>
                                </div>
                        </div>
                        </a>
                    </div>
                    <div className="col border-bottom-custom border-right-custom removed-right-border p-5">
                        <a href="/prosox">
                            <div className="h-100">
                                <img src="/images/prosox.png" alt="" className="img-fluid rounded-3xl" />

                                <h1 className="mt-4 text-2xl">amv.prosox</h1>
                                <p className='mt-1 text-gray-400'>Video Editor / Full Stack Developer / 3D Artist</p>
                                <div className="social-media-expert title-project-count text-2xl text-gray-100 mt-3">
                                    <i class='bx bxl-facebook-circle mx-1'></i>
                                    <i class='bx bxl-instagram-alt mx-1' ></i>
                                    <i class='bx bxl-linkedin-square mx-1' ></i>
                                    <i class='bx bxl-telegram mx-1'></i>
                                    <i class='bx bxl-discord-alt mx-1   ' ></i>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col border-bottom-custom added-right-border p-5">
                        <a href="">
                            <div className="h-100">
                                <img src="/images/sai.jpg" alt="" className="img-fluid rounded-3xl" />

                                <h1 className="mt-4 text-2xl">Sai Ras Jah</h1>
                                <p className='mt-1 text-gray-400'>Full Stack Developer / Tattoo Artist</p>
                                <div className="social-media-expert title-project-count text-2xl text-gray-100 mt-3">
                                    <i class='bx bxl-facebook-circle mx-1'></i>
                                    <i class='bx bxl-instagram-alt mx-1' ></i>
                                    <i class='bx bxl-linkedin-square mx-1' ></i>
                                    <i class='bx bxl-telegram mx-1'></i>
                                    <i class='bx bxl-whatsapp mx-1' ></i>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col added-bottom-border border-right-custom removed-right-border p-5 h-100">
                        <a href="/jemuel">
                            <div className="h-100">
                                <img src="/images/jem.jpg" alt="" className="img-fluid rounded-3xl" />

                                <h1 className="mt-4 text-2xl">Jemuel Gonzales</h1>
                                <p className='mt-1 text-gray-400'>Video Editor / Photographer</p>
                                <div className="social-media-expert title-project-count text-2xl text-gray-100 mt-3">
                                    <i class='bx bxl-facebook-circle mx-1'></i>
                                    <i class='bx bxl-instagram-alt mx-1' ></i>
                                    <i class='bx bxl-linkedin-square mx-1' ></i>
                                    <i class='bx bxl-telegram mx-1'></i>
                                    <i class='bx bxl-whatsapp mx-1' ></i>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/*<div className="col border-right-custom p-5 h-100">
                        <a href="">
                            <div className="h-100">
                                <img src="/images/rey.jpg" alt="" className="img-fluid rounded-3xl" />

                                <h1 className="mt-4 text-2xl">Rey John B. Dayo</h1>
                                <p className='mt-1 text-gray-400'>Full Stack Developer</p>
                                <div className="social-media-expert title-project-count text-2xl text-gray-100 mt-3">
                                    <i class='bx bxl-facebook-circle mx-1'></i>
                                    <i class='bx bxl-instagram-alt mx-1' ></i>
                                    <i class='bx bxl-linkedin-square mx-1' ></i>
                                    <i class='bx bxl-telegram mx-1'></i>
                                    <i class='bx bxl-whatsapp mx-1' ></i>
                                </div>
                            </div>
                        </a>
                    </div>*/}
                    <div className="col border-right-custom p-5 h-100">
                        <a href="/olok">
                            <div className="h-100">
                                <img src="/images/olok.jpg" alt="" className="img-fluid rounded-3xl" />

                                <h1 className="mt-4 text-2xl">Karl Daren Y. Dagan</h1>
                                <p className='mt-1 text-gray-400'>Full Stack Developer</p>
                                <div className="social-media-expert title-project-count text-2xl text-gray-100 mt-3">
                                    <i class='bx bxl-facebook-circle mx-1'></i>
                                    <i class='bx bxl-instagram-alt mx-1' ></i>
                                    <i class='bx bxl-linkedin-square mx-1' ></i>
                                    <i class='bx bxl-telegram mx-1'></i>
                                    <i class='bx bxl-whatsapp mx-1' ></i>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                
            </div>

        </section>

        <Footer />
    </>
  )
}

export default Experts
