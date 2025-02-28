import "../index.css";
import { BsGithub, BsLinkedin, BsLink45Deg } from "react-icons/bs";
import imgs from "../Assets/img1.png";
import NavBars from "./navbar";
import Footer from "./footer";

function Team() {
  return (
    <div>
      <NavBars />
      <section className="section-area section-sp3 team-wraper">
        <div className="container">
          <div className="heading-bx text-center">
            <h6 className="title-ext text-secondary">Our Team</h6>
            <h2 className="title">Meet the creators</h2>
          </div>
          <div className="row justify-content-evenly">
            <div className="col-lg-4 col-sm-6 mb-30">
              <div className="team-member">
                <div className="team-media">
                  <img src={imgs} alt="img" />
                </div>
                <div className="team-info">
                  <div className="team-info-comntent">
                    <h4 className="title">Umer Ali Tahir</h4>
                    <span className="text-secondary">App Developer</span>
                  </div>
                  <ul className="social-media">
                    <li>
                      <a
                        href="#"
                        target="_blank"
                      >
                        <BsGithub />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        target="_blank"
                      >
                        <BsLinkedin />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        target="_blank"
                      >
                        <BsLink45Deg />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-30">
              <div className="team-member">
                <div className="team-media">
                  <img src={imgs} alt="img" />
                </div>
                <div className="team-info">
                  <div className="team-info-comntent">
                    <h4 className="title">Dr.Muhammad Ilyas</h4>
                    <span className="text-secondary">Project Manager</span>
                  </div>
                  <ul className="social-media">
                    <li>
                      <a
                        href="#"
                        target="_blank"
                      >
                        <BsGithub />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        target="_blank"
                      >
                        <BsLinkedin />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        target="_blank"
                      >
                        <BsLink45Deg />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-30">
              <div className="team-member">
                <div className="team-media">
                  <img src={imgs} alt="img" />
                </div>
                <div className="team-info">
                  <div className="team-info-comntent">
                    <h4 className="title">Dr.Muhammad Mustafa Qamar</h4>
                    <span className="text-secondary">Supervisor</span>
                  </div>
                  <ul className="social-media">
                    <li>
                      <a
                        href="#"
                        target="_blank"
                      >
                        <BsGithub />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        target="_blank"
                      >
                        <BsLinkedin />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        target="_blank"
                      >
                        <BsLink45Deg />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-30">
              <div className="team-member">
                <div className="team-media">
                  <img src={imgs} alt="img" />
                </div>
                <div className="team-info">
                  <div className="team-info-comntent">
                    <h4 className="title">Hassan Shahid</h4>
                    <span className="text-secondary">App Developer</span>
                  </div>
                  <ul className="social-media">
                    <li>
                      <a
                        href="#"
                        target="_blank"
                      >
                        <BsGithub />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        target="_blank"
                      >
                        <BsLinkedin />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        target="_blank"
                      >
                        <BsLink45Deg />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-30">
              <div className="team-member active">
                <div className="team-media">
                  <img src={imgs} alt="img" />
                </div>
                <div className="team-info">
                  <div className="team-info-comntent">
                    <h4 className="title">Ali Ijaz</h4>
                    <span className="text-secondary">Website Developer</span>
                  </div>
                  <ul className="social-media">
                    <li>
                      <a
                        href="#"
                        target="_blank"
                      >
                        <BsGithub />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        target="_blank"
                      >
                        <BsLinkedin />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        target="_blank"
                      >
                        <BsLink45Deg />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-30">
              <div className="team-member">
                <div className="team-media">
                  <img src={imgs} alt="img" />
                </div>
                <div className="team-info">
                  <div className="team-info-comntent">
                    <h4 className="title">Maryam Bibi</h4>
                    <span className="text-secondary">Designer</span>
                  </div>
                  <ul className="social-media">
                    <li>
                      <a href="#" target="_blank">
                        <BsGithub />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        target="_blank"
                      >
                        <BsLinkedin />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <BsLink45Deg />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-30">
              <div className="team-member">
                <div className="team-media">
                  <img src={imgs} alt="img" />
                </div>
                <div className="team-info">
                  <div className="team-info-comntent">
                    <h4 className="title">Khansa Sarfraz</h4>
                    <span className="text-secondary">Designer</span>
                  </div>
                  <ul className="social-media">
                    <li>
                      <a href="#" target="_blank">
                        <BsGithub />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        target="_blank"
                      >
                        <BsLinkedin />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <BsLink45Deg />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Team;
