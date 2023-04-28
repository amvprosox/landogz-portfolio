import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import "./AboutCompany.css";

export const AboutCompany = () => {
  return (
    <>
		<Navbar />
			<section id="AboutCompany">
				<div className="container">
					<div>
						<h1 className='text-5xl md:text-6xl py-5 ps-4 border-bottom-custom'>
							About Our Tech Company: Developing Customized Websites for Your Unique Needs
						</h1>
						
						<div className="banner-img mt-20"></div>
					</div>

					<div className='border-bottom-custom pb-5'>
						<h1 className='text-5xl md:text-6xl py-5'>
							Coding Innovation into Customized Web Development: Discovering New Possibilities for Your Business
						</h1>

						<p className="text-gray-400 mb-20">
						Welcome to our tech company, where we specialize in developing websites for clients. Our team of talented developers, designers, and project managers work together to create customized, functional and visually stunning websites that meet the specific needs of our clients. <br />
						<br />
						At our core, we believe that technology can be harnessed to drive positive change in the world. That's why we are committed to helping businesses and individuals establish a strong online presence through our innovative website solutions.<br />
						<br />
						Our company is founded on the principles of transparency, accountability, and integrity. We take pride in communicating with our clients at every step of the website development process, ensuring that they are fully informed and involved in the decision-making process. Our team is dedicated to delivering projects on time, within budget, and to the highest quality standards.<br />
						<br />
						We understand that every client has unique goals and requirements. That's why we take a tailored approach to each project, working closely with our clients to understand their needs and create a customized website solution that meets their specific needs.<br />
						<br />
						Whether you need a simple brochure website, a complex e-commerce platform, or anything in between, we have the expertise and experience to bring your vision to life. So why not get in touch today to learn more about how we can help you take your online presence to the next level?
						</p>

						<div className="row row-cols-1 row-cols-sm-1 row-cols-md-3">

							<div className="col hidden sm:hidden md:block">
								<img src="/images/arrow.svg" alt="" className="img-fluid" />
							</div>
							<div className="col">
								<p className="text-gray-400">
								We offer a wide range of services: tailored furniture, interior design including space planning, furniture selection, colour consultation, lighting design and much more. Whether you need a complete home renovation or a simple room makeover, we have the expertise and creativity to help transform your space into a beautiful and functional environment.
								</p>
							</div>
							<div className="col mt-3 sm:mt-5 mt-md-0">
								<p className="text-gray-400">
								Our mission is to transform spaces into places that reflect the personality, lifestyle and preferences of our customers. We approach interior design through a collaborative process, working closely with our clients to understand their vision and create spaces that exceed their expectations.
								</p>
							</div>

						</div>

						<div className="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 mt-5 gy-5">
							<div className="col">
								<img src="/images/atom.png" alt="" className="img-fluid width-custom-about d-block mx-auto" />
							</div>
							<div className="col">
								<img src="/images/js.png" alt="" className="img-fluid width-custom-about d-block mx-auto" />
							</div>
							<div className="col">
								<img src="/images/php.png" alt="" className="img-fluid width-custom-about d-block mx-auto" />
							</div>
							<div className="col">
								<img src="/images/html-5.png" alt="" className="img-fluid width-custom-about d-block mx-auto" />
							</div>
						</div>
					</div>

					<div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 mt-5 justify-content-center mx-0">
						<div className="col overflow-hidden rounded-3xl">
							<img src="/images/group.jpg" alt="" className="img-fluid rounded-3xl hover-image-about h-100" />
						</div>
						<div className="col overflow-hidden rounded-3xl">
							<img src="/images/anas.jpg" alt="" className="img-fluid rounded-3xl hover-image-about h-100" />
						</div>
					</div>

					<div className="text-center">
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
				</div>
			</section>
		<Footer />
    </>
  )
}
