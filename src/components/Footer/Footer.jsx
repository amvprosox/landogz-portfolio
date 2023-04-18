import React from "react";

const Footer = () => {
  return (
    <section id="Footer">
      <div className="container">
        <hr className="mb-8" />
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 justify-content-between gy-3">
          <div className="col text-center text-md-start">
            <h5>
              © 2023 Landogz. All rights reserved. | Developed by: amv.prosox
            </h5>
          </div>
          <div className="col text-center text-md-end">
            <h5>Located at: Tampo, Botolan, Zambales</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
