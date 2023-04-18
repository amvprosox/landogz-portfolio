import React from 'react'
import './ProjectCount.css'

const ProjectCount = () => {
  return (
    <section id="ProjectCount" className='my-32'>
        <div className="container mx-auto">
            <div className="row justify-content-around mx-auto gy-5 gy-sm-5 gy-md-5 gy-lg-0">
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 text-center">
                    <h1 className='text-7xl title-project-count '>600 +</h1>
                    <p className='text-gray-300 mt-3'>Projects Made</p>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 text-center border-custom-left">
                    <h1 className='text-7xl title-project-count '>4.5x</h1>
                    <p className='text-gray-300 mt-3'>Faster Development Time</p>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 text-center border-custom-left-two">
                    <h1 className='text-7xl title-project-count '>10 +</h1>
                    <p className='text-gray-300 mt-3'>Years of Experience</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProjectCount