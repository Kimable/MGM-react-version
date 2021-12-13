import heroImg from "./img/Learning-cuate.png";
import aboutImg from "./img/Questions-amico.png";

function App() {
  return (
    <>
      <main>
        <section className="container">
          <div className="hero pt-5 pb-5">
            <div className="textContainer">
              <div className="headerLine"></div>
              <h1>Learn With Us</h1>
              <p>
                Learning has never been Easier and more inclusive! At MGM Boys
                Academy, We take pride in helping each child achieve their
                optimum potential and set them for success in life.
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
              The new competency based curriculum is going to transform
              education in Kenya and we are happy to be using it to enable our
              students achieve their dreams. We also offer the 8-4-4 curriculum
              as the CBC curriculum continues to be rolled out so that no child
              is left behind.
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

                <a href="/about" className="btn-custom">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
