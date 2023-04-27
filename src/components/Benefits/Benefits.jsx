import React from 'react'
import './Benefits.css'

const Benefits = () => {

    
  return (
    <section id="benefits" className='my-32'>
        <div className="container mx-auto">
            <h1 className="text-5xl md:text-6xl title-font text-center text-white">The Benefits</h1>

            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 gy-5 mt-10">
                <div className="col">
                    <div className="rounded-lg bg-custom-card me-2">
                        <div className="d-flex flex-column flex-md-column flex-lg-row">
                            <div className='me-5'>
                                <img src="/images/website-codes.png" alt="" className="img-fluid w-100px" />
                            </div>
                            <div>
                                <h2 className='text-3xl mt-3 mt-sm-3 mt-md-0'>
                                    Enhanced online presence
                                </h2>
                                <p className="text-gray-300">
                                    Establish a strong online presence and stand out from competitors.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="rounded-lg bg-custom-card ms-2">
                        <div className="d-flex flex-column flex-md-column flex-lg-row">
                            <div className='me-5'>
                                <img src="/images/edit-code.png" alt="" className="img-fluid w-100px" />
                            </div>
                            <div>
                                <h2 className='text-3xl mt-3 mt-sm-3 mt-md-0'>
                                    Customized solutions
                                </h2>
                                <p className="text-gray-300">
                                    Get tailored web development services that meet unique needs and goals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="rounded-lg bg-custom-card me-2">
                        <div className="d-flex flex-column flex-md-column flex-lg-row">
                            <div className='me-5'>
                                <img src="/images/development.png" alt="" className="img-fluid w-100px" />
                            </div>
                            <div>
                                <h2 className='text-3xl mt-3 mt-sm-3 mt-md-0'>
                                    Improved user experience
                                </h2>
                                <p className="text-gray-300">
                                    Improve website usability for increased engagement and conversions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="rounded-lg bg-custom-card ms-2">
                        <div className="d-flex flex-column flex-md-column flex-lg-row">
                            <div className='me-5'>
                                <img src="/images/software-developer.png" alt="" className="img-fluid w-100px" />
                            </div>
                            <div>
                                <h2 className='text-3xl mt-3 mt-sm-3 mt-md-0'>
                                    Cost-effective solutions
                                </h2>
                                <p className="text-gray-300">
                                    Access high-quality web development services without investing in an in-house team.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Benefits