import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../img/Learning-cuate.png";
import aboutImg from "../img/Questions-amico.png";

function Home() {
  return (
    <main>
      <section className="container">
        <div className="hero pt-5 pb-5">
          <div className="textContainer">
            <div className="headerLine"></div>
            <h1>Learn With Us</h1>
            <p>
              Learning has never been Easier and more inclusive! At MGM Boys
              Academy, We take pride in helping each child achieve their optimum
              potential and set them for success in life.
            </p>
            <a href="/about" className="btn-custom">
              Learn More
            </a>
          </div>
          <div className="imageContainer">
            <img className="img-fluid" src={heroImg} alt="Student Learning" />
          </div>
        </div>
      </section>
      <section className="curriculumSection">
        <div className="container centerContent">
          <div className="headerLine"></div>
          <h2>Our Curriculum</h2>
          <p>
            The new competency based curriculum is going to transform education
            in Kenya and we are happy to be using it to enable our students
            achieve their dreams. We also offer the 8-4-4 curriculum as the CBC
            curriculum continues to be rolled out so that no child is left
            behind.
          </p>
          <a
            href="https://kicd.ac.ke/cbc-materials/curriculum-designs/"
            className="btn-custom"
            target="_blank"
            rel="noreferrer"
          >
            Learn More About CBC
          </a>
        </div>
      </section>
      <section className="aboutSectionContainer">
        <div className="container">
          <div className="aboutSection">
            <div className="imageContainer">
              <img
                className="img-fluid"
                src={aboutImg}
                alt="About MGM illustration"
              />
            </div>
            <div className="textContainer">
              <div className="headerLine"></div>
              <h2>About Us</h2>
              <p>
                MGM Boys Academy is a private school that is in a fast-growing
                residential area along Kangundo Road. Malaa, Machakos County
              </p>
              <Link to="/about" className="btn-custom">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="container p-5">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <div className="headerLine"></div>
          <h2>Our Values</h2>
        </div>
        <div className="row">
          <div className="col-lg-4 p-3">
            <div className="card text-center p-3">
              <i className="bi bi-tools"></i>
              <h4 className="card-title">Leadership</h4>
              <p className="card-text">
                The ability to build relationships with people, to inspire and
                empower
              </p>
            </div>
          </div>
          <div className="col-lg-4 p-3">
            <div className="card text-center p-3">
              <i className="bi bi-briefcase"></i>
              <h4 className="card-title">Entrepreneurship</h4>
              <p className="card-text">
                Developing or having the courage to pursue your dreams passions
                and aspirations
              </p>
            </div>
          </div>
          <div className="col-lg-4 p-3">
            <div className="card text-center p-3">
              <i className="bi bi-apple"></i>
              <h4 className="card-title">Innovation</h4>
              <p className="card-text">
                Always finding new ways to do it better
              </p>
            </div>
          </div>
          <div className="col-lg-4 p-3">
            <div className="card text-center p-3">
              <i className="bi bi-hand-thumbs-up"></i>
              <h4 className="card-title">Integrity</h4>Name
              <p className="card-text">
                Taking responsibility for your actions and always choosing
                honesty
              </p>
            </div>
          </div>
          <div className="col-lg-4 p-3">
            <div className="card text-center p-3">
              <i className="bi bi-emoji-sunglasses"></i>
              <h4 className="card-title">Excellence</h4>
              <p className="card-text">
                Setting our own high standards and celebrating the achievements
                of others
              </p>
            </div>
          </div>
          <div className="col-lg-4 p-3">
            <div className="card text-center p-3">
              <i className="bi bi-diagram-3"></i>
              <h4 className="card-title">Diversity</h4>
              <p className="card-text">
                About all of us with different thoughts, looks, challenges
                facing new challenges together everyday
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
