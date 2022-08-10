import background from '../img/herobg.png'
import Header from './common/Header';
import Title from './common/Title';
import HeroForm from '../booking/HeroForm';
import Popup from './common/Popup';
import videoPoster from '../img/trainVideoPoster.png';
import Button from './common/Button';
const Hero = () => {

  return <>
    <div className="herowrap bgimage position-relative skew"
      style={{ backgroundImage: `url(${background})` }} >
      <div className="overlay" ></div>
      <div className="herowrap skew-rev" >
        <Header /> 
        <div className='heroContent' >
          <div className='container' >
            <div className='row ' >
              <div className='col-lg-6 bannerContent' >
                <Title
                  titleclass="lg text-white text-center text-lg-start"
                  title={<>Train Like <strong>The</strong> CHAMP!</>}
                  des={<> <Button icon={true} tag="a" href="#booknow" text={"Book Now"} 
                  cls="btn btn-white d-table m-auto d-lg-none mb-4" /> <p>Mayweather Boxing  + Fitness Dallas offers an authentic experience for those who want to learn from Floyd’s techniques and training regimens, while getting in the best shape of their lives in a high-intensity group fitness setting. Get started by booking a FREE class!</p> 
                  </>} 
                  desclass='py-3 m-0 text-white text-center text-lg-start'
                  childrenVideo={<>
                    <Popup
                      modalClass="videoPopup"
                      btnclass="my-3 p-0 border-0"
                      text={<>
                        <img src={videoPoster} className="img-fluid" alt='poster' />
                      </>} >
                      <iframe title="MayWeather" src="https://player.vimeo.com/video/668977293?h=3f606f35c0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </Popup>
                  </>}
                />

               

              </div>
              <div className='pt-0 pt-lg-0 mt-2 mt-lg-0 col-lg-6 ps-lg-4 ps-xl-3' >
                <HeroForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Hero; 