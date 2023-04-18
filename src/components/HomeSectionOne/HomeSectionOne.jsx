import React from "react";
import "./HomeSectionOne.css";

const HomeSectionOne = () => {
  return (
    <section id="HomeSectionOne" className="py-32">
      <div className="container mx-auto">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 align-items-center gy-5 gy-sm-5 gy-md-0">
          <div className="col">
            <h1 className="text-6xl md:text-5xl lg:text-8xl text-white title-font">
              Landogz <br />
              Web Solutions <br /> Services
            </h1>
            <p className="mt-4 text-gray-300 text-base md:text-1xl lg:text-2xl">
              A company that provides a range of <br />
              web development services to businesses and individuals.
            </p>
            <a
              href=""
              className="btn py-3 px-5 mt-5 rounded-full bg-custom-color font-semibold text-white"
            >
              <div className="d-flex svg-trans">
                <span className="me-2"> VIEW PROJECTS</span>
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

          <div className="col">
            <div className="row">
              <div className="col">
                <img
                  src="/images/col1.jpg"
                  alt=""
                  className="img-fluid rounded-2xl"
                />
              </div>
              <div className="col mt-14">
                <img
                  src="/images/col2.jpg"
                  alt=""
                  className="img-fluid rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

		{/* <div className="row row-cols-md-4 row-cols-lg-6 align-items-center gy-5 mt-7">
			<div className="col">
				<img src="/images/react.svg" alt="" className="img-fluid d-block mx-auto logo-programming" />
			</div>
			<div className="col">
				<img src="/images/js.svg" alt="" className="img-fluid d-block mx-auto logo-programming" />
			</div>
			<div className="col">
				<img src="/images/laravel.svg" alt="" className="img-fluid d-block mx-auto logo-programming" />
			</div>
			<div className="col">
				<img src="/images/vue.svg" alt="" className="img-fluid d-block mx-auto logo-programming" />
			</div>
			<div className="col">
				<img src="/images/shopify.svg" alt="" className="img-fluid d-block mx-auto logo-programming" />
			</div>
			<div className="col">
				<img src="/images/html.svg" alt="" className="img-fluid d-block mx-auto logo-programming" />
			</div>
			<div className="col">
				<img src="/images/java.svg" alt="" className="img-fluid d-block mx-auto logo-programming" />
			</div>
			<div className="col">
				<img src="/images/php.svg" alt="" className="img-fluid d-block mx-auto logo-programming" />
			</div>
		</div> */}
      </div>
    </section>
  );
};

export default HomeSectionOne;
