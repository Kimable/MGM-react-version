import React from "react";
import story from "../img/our-story-sm.jpg";
import male from "../img/male-avatar.png";
import female from "../img/female-avatar.png";

function About() {
  return (
    <>
      <div>
        <div className="container-fluid bg-image text-white about-hero">
          <div className="d-flex justify-content-center align-items-center flex-column">
            <div className="headerLine"></div>
            <h1>About Us</h1>
          </div>
        </div>
        <div className="container p-5">
          <p>
            MGM Boys Academy is a private school that is in a fast-growing
            residential area along Kangundo Road. Malaa, Machakos County, that
            is offering the 8-4-4 system of secondary education but will be
            transitioning to the new Kenyan system of education the CBC
            (Competency based curriculum) 2-6-6-3. Therefore, the school has
            been set up to incorporate the extra classes to facilitate the
            transition. This will also include the training of teachers in
            preparation of the same. Making MGM Boys a pioneer in the secondary
            CBC program.
          </p>
          <p>
            MGM Boys Academy will offer a unique learning proposition that will
            focus on holistic growth of the learner this includes the core
            education, life skills that prepares the children to face the
            challenges that life presents and learner support services in a
            secure and conducive environment for the students.
          </p>
          <p>
            MGM Boys Academy encourages the integration of children with
            disabilities both with physical and with learning disabilities. The
            CBC program of education gives children the opportunity to learn at
            their own pace to their full potential. They will have the chance to
            interact with the other children and not feel different and when
            they leave MGM Boys Academy, they will compete in the career space
            with the skills required and the confidence to succeed.
          </p>
          <p>
            The school is committed to students' overall best interest as guided
            by our values and professional ethics. This will be actualized by
            our commitment to offering quality facilities and hiring of
            experienced teachers who are passionate in imparting knowledge to
            students at varying stages of learning competence.
          </p>
        </div>
        <div className="container p-5">
          <div className="d-flex justify-content-center align-items-center flex-column">
            <div className="headerLine"></div>
            <h2>Our story</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <img className="img-fluid" src={story} alt="Our Story" />
            </div>
            <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
              <p className="p-3">
                The education sector in Kenya is currently experiencing a
                shortage in secondary school spots, presenting an opportunity
                for additional secondary schools to open especially for boys.
                The opening of MGM Boys Academy is addressing the current need
                for additional Boys Secondary schools in Kenya
              </p>
            </div>
          </div>
        </div>

        <div className="container p-5">
          <div className="d-flex justify-content-center align-items-center flex-column">
            <div className="headerLine"></div>
            <h2>Our team</h2>
          </div>

          <div className="row">
            {/* Team first member */}
            <div className="col-lg-4 p-2">
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src={female}
                  alt="Member"
                />
                <div className="card-body text-center">
                  <h4 className="card-title">Lauren Wambua</h4>
                  <p className="card-text">Principal</p>
                  <a href="/coming-soon" className="btn-custom">
                    See Profile
                  </a>
                </div>
              </div>
            </div>
            {/* Team second member */}
            <div className="col-lg-4 p-2">
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src={male}
                  alt="Member"
                />
                <div className="card-body text-center">
                  <h4 className="card-title">Shako Omondi</h4>
                  <p className="card-text">Deputy Principal</p>
                  <a href="/coming-soon" className="btn-custom">
                    See Profile
                  </a>
                </div>
              </div>
            </div>
            {/* Team third member */}
            <div className="col-lg-4 p-2">
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src={female}
                  alt="Member"
                />
                <div className="card-body text-center">
                  <h4 className="card-title">Jane Michael</h4>
                  <p className="card-text">Senior Teacher</p>
                  <a href="/coming-soon" className="btn-custom">
                    See Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
