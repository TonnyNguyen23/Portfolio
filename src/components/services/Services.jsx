import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Write service about it here.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Write service about it here.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Write service about it here.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Write service about it here.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Write service about it here.</p>
            </li>
          </ul>
        </article>
        {/* End Of UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Website Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Write service about it here.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Write service about it here.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Write service about it here.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Write service about it here.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Write service about it here.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Write service about it here.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Write service about it here.</p>
            </li>
          </ul>
        </article>
        {/* End Of Website Development */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Write service about it here.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Write service about it here.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Write service about it here.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Write service about it here.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Write service about it here.</p>
            </li>
          </ul>
        </article>
        {/* End Of Create Content */}
      </div>
    </section>
  );
};

export default Services;
