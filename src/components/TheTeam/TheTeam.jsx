import React from "react";
import "./TheTeam.css";

const TheTeam = () => {
  return (
    <section id="TheTeam" className="py-32">
      <div className="container mx-auto">
      <h1 className='text-5xl md:text-6xl text-center mb-20'>Meet the Experts</h1>
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 gy-5">
          <div className="col">
            <div className="team-card text-center">
              <img
                src="/images/boss.jpg"
                alt=""
                className="img-fluid rounded-3xl"
              />

              <h2 className="text-2xl text-center mt-4">Rolan</h2>
              <p className="text-gray-400">Full Stack Developer</p>
              <div className="d-flex mt-2 mx-auto text-white justify-content-center text-xl mb-6">
                <i class="bx bxl-facebook-circle mx-2 mt-3"></i>
                <i class="bx bxl-linkedin-square mx-2 mt-3"></i>
                <i class="bx bxl-whatsapp mx-2 mt-3"></i>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="team-card text-center lg:mt-14">
              <img
                src="/images/prosox.png"
                alt=""
                className="img-fluid rounded-3xl prosox-img"
              />

              <h2 className="text-2xl text-center mt-4">Prosox</h2>
              <p className="text-gray-400">Full Stack Developer</p>
              <div className="d-flex mt-2 mx-auto text-white justify-content-center text-xl mb-6">
                <i class='bx bxl-instagram-alt mx-2 mt-3'></i>
                <i class="bx bxl-facebook-circle mx-2 mt-3"></i>
                <i class='bx bxl-discord-alt mx-2 mt-3' ></i>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="team-card text-center">
              <img
                src="/images/sai.jpg"
                alt=""
                className="img-fluid rounded-3xl"
              />

              <h2 className="text-2xl text-center mt-4">Sai</h2>
              <p className="text-gray-400">Full Stack Developer</p>
              <div className="d-flex mt-2 mx-auto text-white justify-content-center text-xl mb-6">
                <i class="bx bxl-facebook-circle mx-2 mt-3"></i>
                <i class="bx bxl-linkedin-square mx-2 mt-3"></i>
                <i class="bx bxl-whatsapp mx-2 mt-3"></i>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="team-card text-center lg:mt-14">
              <img
                src="/images/jem.jpg"
                alt=""
                className="img-fluid rounded-3xl"
              />

              <h2 className="text-2xl text-center mt-4">Jemuel</h2>
              <p className="text-gray-400">Video Editor</p>
              <div className="d-flex mt-2 mx-auto text-white justify-content-center text-xl mb-6">
                <i class='bx bxl-youtube mx-2 mt-3' ></i>
                <i class="bx bxl-facebook-circle mx-2 mt-3"></i>
                <i class="bx bxl-linkedin-square mx-2 mt-3"></i>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="team-card text-center">
              <img
                src="/images/rey.jpg"
                alt=""
                className="img-fluid rounded-3xl"
              />

              <h2 className="text-2xl text-center mt-4">Rey</h2>
              <p className="text-gray-400">Full Stack Developer</p>
              <div className="d-flex mt-2 mx-auto text-white justify-content-center text-xl mb-6">
                <i class="bx bxl-linkedin-square mx-2 mt-3"></i>
                <i class="bx bxl-facebook-circle mx-2 mt-3"></i>
                <i class="bx bxl-whatsapp mx-2 mt-3"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center my-10">
          <a
          href="/experts"
          className="btn py-3 px-5 mt-5 rounded-full bg-custom-color font-semibold text-white"
          >
          <div className="d-flex svg-trans">
              <span className="me-2"> VIEW ALL</span>
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
  );
};

export default TheTeam;
