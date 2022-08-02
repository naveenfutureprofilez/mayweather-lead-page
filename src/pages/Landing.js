import Hero from "../components/Hero";
import ClassesBenefits from "../components/ClassesBenefits";
import AboutMay from "../components/AboutMay";
import Title from "../components/common/Title";
import Button from "../components/common/Button";
import boxingclasses from "../img/boxingclasses.png";

// classes images 
import c1 from '../img/c1.png';
import c2 from '../img/c2.png';
import c3 from '../img/c3.png';
import c4 from '../img/c4.png';

// stages
import stage1 from '../img/stage1.png';
import stage2 from '../img/stage2.png';
import trial from '../img/trial.png';
import Footer from "../components/common/Footer";
import Testimonials from "../components/Testimonials";

export default function Landing() {
  return <>
    <Hero />
    <ClassesBenefits />
    <AboutMay />
    <Testimonials />

    {/* trail signup */}
    <div className="trialSignup skew" >
      <div className="container skew-rev" >
        <div className="row align-items-center cliprow flex-lg-row-reverse " >
          <div className="col-lg-6  rightContent ps-lg-5" >
            <h2 className="heading md text-dark"> <span className="text-white" >SIGN UP</span> <span className="text-black" >TO TRY US</span> <br></br><strong>FREE!</strong> </h2>
            <div className="row signupContent align-items-center" >
              <div className="col-sm-6 " >
                <p>Mayweather Highland Park <br></br>
                  4252 Oaklawn Drive<br></br>
                  Dallas, TX 75219</p>
                <p>(469) 638-8552</p>
                <p>highlandpark@mayweather.fit</p>`
              </div>
              <div className="col-sm-6" >
                <div className="openMap mb-5 mb-sm-0">
                  <a href="#" className="btn bg-transparent border-0" >OPEN MAP &nbsp; <svg width="31" height="22" viewBox="0 0 31 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.23" d="M30.5 11C30.5 8.21522 29.3938 5.54451 27.4246 3.57538C25.4555 1.60624 22.7848 0.499997 20 0.499997L11 0.499998C8.21523 0.499998 5.54451 1.60625 3.57538 3.57538C1.60625 5.54451 0.499999 8.21523 0.5 11C0.5 13.7848 1.60625 16.4555 3.57538 18.4246C5.54451 20.3938 8.21523 21.5 11 21.5L20 21.5C22.7848 21.5 25.4555 20.3938 27.4246 18.4246C29.3938 16.4555 30.5 13.7848 30.5 11ZM11 20C8.61305 20 6.32387 19.0518 4.63604 17.364C2.94821 15.6761 2 13.3869 2 11C2 8.61305 2.94821 6.32386 4.63604 4.63604C6.32387 2.94821 8.61305 2 11 2L20 2C22.3869 2 24.6761 2.94821 26.364 4.63604C28.0518 6.32386 29 8.61305 29 11C29 13.3869 28.0518 15.6761 26.364 17.364C24.6761 19.0518 22.3869 20 20 20L11 20Z" fill="white" />
                    <path d="M15.125 11.7502L15.125 11.6827L15.2825 11.5327C15.3528 11.463 15.4086 11.38 15.4467 11.2886C15.4847 11.1973 15.5043 11.0992 15.5043 11.0002C15.5043 10.9012 15.4847 10.8032 15.4467 10.7118C15.4086 10.6204 15.3528 10.5374 15.2825 10.4677L15.125 10.3177L15.125 10.2502L15.0575 10.2502L10.7825 5.96772L9.7175 7.03271L12.9425 10.2502L5 10.2502L5 11.7502L12.9425 11.7502L9.7175 14.9677L10.7825 16.0327L15.0575 11.7502L15.125 11.7502Z" fill="white" />
                  </svg>
                  </a>
                </div>
              </div>
            </div>
            <Button icon={true} text={"Signup Today!"} cls="btn btn-white mt-xl-4 mb-4" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0" >
            <h3 className="champtext" >Champ</h3>
            <div className="clipImage" >
              <img className="img-fluid" src={trial} alt="free trail" />
            </div>
          </div>

        </div>
      </div>
    </div>

    <Footer />
  </>
} 