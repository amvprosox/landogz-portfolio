import React from "react";
import "./Faq.css";

const Faq = () => {
  return (
    <section id="Faq" className="mt-20 mb-32">
      <div className="container">
        <h1 className="text-5xl md:text-6xl text-center mb-20">Asked Questions</h1>

        <div
          class="accordion sm:w-full lg:w-7/12 mx-auto accordion-bg rounded-3xl md:p-10"
          id="accordionPanelsStayOpenExample"
        >
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button text-3xl "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                What is the web design process like when working with a client?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse"
            >
              <div class="accordion-body">
                Our web design process typically involves several phases,
                including consultation, wireframing, design, development, and
                testing. Throughout each stage, we work closely with clients to
                ensure that their vision is being realized and that they are
                satisfied with the final product.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed text-3xl"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Can you create a website that aligns with my brand and business
                goals?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              class="accordion-collapse collapse"
            >
              <div class="accordion-body">
                Absolutely. We work closely with clients to understand their
                brand and business goals, and then develop a website that aligns
                with their vision. We can incorporate specific branding elements
                and design a site that effectively communicates the unique value
                proposition of the business.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed text-3xl"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                How much input will I have in the design process?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              class="accordion-collapse collapse"
            >
              <div class="accordion-body">
                We value the input of our clients throughout the design process.
                We'll consult with you regularly to ensure that the design meets
                your expectations and requirements.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed text-3xl"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-four"
                aria-expanded="false"
                aria-controls="panelsStayOpen-four"
              >
                What are some common features that are included in a website?
              </button>
            </h2>
            <div id="panelsStayOpen-four" class="accordion-collapse collapse">
              <div class="accordion-body">
                Some common features that can be included in a website are a
                blog, contact form, social media integration, responsive design,
                e-commerce functionality, and analytics tracking. We can help
                you determine which features are most appropriate for your
                business.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed text-3xl"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-five"
                aria-expanded="false"
                aria-controls="panelsStayOpen-five"
              >
                How long does it take to build a website?
              </button>
            </h2>
            <div id="panelsStayOpen-five" class="accordion-collapse collapse">
              <div class="accordion-body">
                The time it takes to build a website can vary depending on the
                complexity of the design, the number of pages, and the features
                included. We work to complete projects as efficiently as
                possible while ensuring quality results. We'll work with you to
                establish a timeline that meets your needs.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
