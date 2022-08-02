import Title from "./common/Title";
import testimonailBg from "../img/testimonailBg.png";
import timg from '../img/baseimg.png';
export default function Testimonials() {

    return <>  
        <div className="testimonials py-5 position-relative  skew bgimage" style={{ backgroundImage: `url(${testimonailBg})` }}>
            <div className="container pt-5 pb-0 skew-rev" >

                <Title
                    titleclass="md text-white text-center"
                    title={<>
                    You may not believe us, but you can <br></br>
                    <strong> Believe them!</strong></>}
                /> 

                <div className="row mt-5" >
                    <div className="col-md-4 mb-4" >
                        <div div className="testimonialBox" >
                            <div className="t-img" >
                                <img src={timg} className="img-fluid" alt="hero form" />
                            </div>
                            <div className="t-content" >
                                <div className="starRating" >
                                    <ul>
                                        <li>
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.1667 0.522949L12.9992 6.26128L19.3333 7.18712L14.75 11.6513L15.8317 17.9579L10.1667 14.9788L4.50167 17.9579L5.58333 11.6513L1 7.18712L7.33417 6.26128L10.1667 0.522949Z" fill="#BB9D5A" stroke="#BB9D5A" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.1667 0.522949L12.9992 6.26128L19.3333 7.18712L14.75 11.6513L15.8317 17.9579L10.1667 14.9788L4.50167 17.9579L5.58333 11.6513L1 7.18712L7.33417 6.26128L10.1667 0.522949Z" fill="#BB9D5A" stroke="#BB9D5A" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.1667 0.522949L12.9992 6.26128L19.3333 7.18712L14.75 11.6513L15.8317 17.9579L10.1667 14.9788L4.50167 17.9579L5.58333 11.6513L1 7.18712L7.33417 6.26128L10.1667 0.522949Z" fill="#BB9D5A" stroke="#BB9D5A" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.1667 0.522949L12.9992 6.26128L19.3333 7.18712L14.75 11.6513L15.8317 17.9579L10.1667 14.9788L4.50167 17.9579L5.58333 11.6513L1 7.18712L7.33417 6.26128L10.1667 0.522949Z" fill="#BB9D5A" stroke="#BB9D5A" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.1667 0.522949L12.9992 6.26128L19.3333 7.18712L14.75 11.6513L15.8317 17.9579L10.1667 14.9788L4.50167 17.9579L5.58333 11.6513L1 7.18712L7.33417 6.26128L10.1667 0.522949Z" stroke="#BB9D5A" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </li>
                                    </ul>
                                </div>

                                <p>“Just WOW. This class was such a great experience. I went into this class an absolute beginner. I had no creative experience and to me this class was the best for Boxing I could take. Mayweather Boxing + Fitness upon everything!”</p>

                                <div className="mt-4 mb-3 profileAvatar" >
                                    <div className="proImg" >
                                        <img src={timg} className="img-fluid" alt="hero form" />
                                    </div>
                                    <div className="proName" >
                                        <h2>Alex Cuban</h2>
                                        <p>Management Associate, United States</p>
                                    </div>
                                </div>

                            </div>
                        </div >
                    </div>
                    <div className="col-md-4 mb-4" >
                        <div div className="testimonialBox" >
                            <div className="t-img" >
                                <img src={timg} className="img-fluid" alt="hero form" />
                            </div>
                            <div className="t-content" >
                                <div className="starRating" >
                                    <ul>
                                        <li>
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.1667 0.522949L12.9992 6.26128L19.3333 7.18712L14.75 11.6513L15.8317 17.9579L10.1667 14.9788L4.50167 17.9579L5.58333 11.6513L1 7.18712L7.33417 6.26128L10.1667 0.522949Z" fill="#BB9D5A" stroke="#BB9D5A" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.1667 0.522949L12.9992 6.26128L19.3333 7.18712L14.75 11.6513L15.8317 17.9579L10.1667 14.9788L4.50167 17.9579L5.58333 11.6513L1 7.18712L7.33417 6.26128L10.1667 0.522949Z" fill="#BB9D5A" stroke="#BB9D5A" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.1667 0.522949L12.9992 6.26128L19.3333 7.18712L14.75 11.6513L15.8317 17.9579L10.1667 14.9788L4.50167 17.9579L5.58333 11.6513L1 7.18712L7.33417 6.26128L10.1667 0.522949Z" fill="#BB9D5A" stroke="#BB9D5A" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.1667 0.522949L12.9992 6.26128L19.3333 7.18712L14.75 11.6513L15.8317 17.9579L10.1667 14.9788L4.50167 17.9579L5.58333 11.6513L1 7.18712L7.33417 6.26128L10.1667 0.522949Z" fill="#BB9D5A" stroke="#BB9D5A" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.1667 0.522949L12.9992 6.26128L19.3333 7.18712L14.75 11.6513L15.8317 17.9579L10.1667 14.9788L4.50167 17.9579L5.58333 11.6513L1 7.18712L7.33417 6.26128L10.1667 0.522949Z" stroke="#BB9D5A" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </li>
                                    </ul>
                                </div>

                                <p>“Just WOW. This class was such a great experience. I went into this class an absolute beginner. I had no creative experience and to me this class was the best for Boxing I could take. Mayweather Boxing + Fitness upon everything!”</p>

                                <div className="mt-4 mb-3 profileAvatar" >
                                    <div className="proImg" >
                                        <img src={timg} className="img-fluid" alt="hero form" />
                                    </div>
                                    <div className="proName" >
                                        <h2>Alex Cuban</h2>
                                        <p>Management Associate, United States</p>
                                    </div>
                                </div>

                            </div>
                        </div >
                    </div>
                    <div className="col-md-4 mb-4" >
                        <div div className="testimonialBox" >
                            <div className="t-img" >
                                <img src={timg} className="img-fluid" alt="hero form" />
                            </div>
                            <div className="t-content" >
                                <div className="starRating" >
                                    <ul>
                                        <li>
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.1667 0.522949L12.9992 6.26128L19.3333 7.18712L14.75 11.6513L15.8317 17.9579L10.1667 14.9788L4.50167 17.9579L5.58333 11.6513L1 7.18712L7.33417 6.26128L10.1667 0.522949Z" fill="#BB9D5A" stroke="#BB9D5A" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.1667 0.522949L12.9992 6.26128L19.3333 7.18712L14.75 11.6513L15.8317 17.9579L10.1667 14.9788L4.50167 17.9579L5.58333 11.6513L1 7.18712L7.33417 6.26128L10.1667 0.522949Z" fill="#BB9D5A" stroke="#BB9D5A" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.1667 0.522949L12.9992 6.26128L19.3333 7.18712L14.75 11.6513L15.8317 17.9579L10.1667 14.9788L4.50167 17.9579L5.58333 11.6513L1 7.18712L7.33417 6.26128L10.1667 0.522949Z" fill="#BB9D5A" stroke="#BB9D5A" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.1667 0.522949L12.9992 6.26128L19.3333 7.18712L14.75 11.6513L15.8317 17.9579L10.1667 14.9788L4.50167 17.9579L5.58333 11.6513L1 7.18712L7.33417 6.26128L10.1667 0.522949Z" fill="#BB9D5A" stroke="#BB9D5A" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.1667 0.522949L12.9992 6.26128L19.3333 7.18712L14.75 11.6513L15.8317 17.9579L10.1667 14.9788L4.50167 17.9579L5.58333 11.6513L1 7.18712L7.33417 6.26128L10.1667 0.522949Z" stroke="#BB9D5A" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </li>
                                    </ul>
                                </div>

                                <p>“Just WOW. This class was such a great experience. I went into this class an absolute beginner. I had no creative experience and to me this class was the best for Boxing I could take. Mayweather Boxing + Fitness upon everything!”</p>

                                <div className="mt-4 mb-3 profileAvatar" >
                                    <div className="proImg" >
                                        <img src={timg} className="img-fluid" alt="hero form" />
                                    </div>
                                    <div className="proName" >
                                        <h2>Alex Cuban</h2>
                                        <p>Management Associate, United States</p>
                                    </div>
                                </div>

                            </div>
                        </div >
                    </div>
                    <div className="col-md-4 mb-4" >
                        <div div className="testimonialBox" >
                            <div className="t-img" >
                                <img src={timg} className="img-fluid" alt="hero form" />
                            </div>
                            <div className="t-content" >
                                <div className="starRating" >
                                    <ul>
                                        <li>
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.1667 0.522949L12.9992 6.26128L19.3333 7.18712L14.75 11.6513L15.8317 17.9579L10.1667 14.9788L4.50167 17.9579L5.58333 11.6513L1 7.18712L7.33417 6.26128L10.1667 0.522949Z" fill="#BB9D5A" stroke="#BB9D5A" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.1667 0.522949L12.9992 6.26128L19.3333 7.18712L14.75 11.6513L15.8317 17.9579L10.1667 14.9788L4.50167 17.9579L5.58333 11.6513L1 7.18712L7.33417 6.26128L10.1667 0.522949Z" fill="#BB9D5A" stroke="#BB9D5A" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.1667 0.522949L12.9992 6.26128L19.3333 7.18712L14.75 11.6513L15.8317 17.9579L10.1667 14.9788L4.50167 17.9579L5.58333 11.6513L1 7.18712L7.33417 6.26128L10.1667 0.522949Z" fill="#BB9D5A" stroke="#BB9D5A" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.1667 0.522949L12.9992 6.26128L19.3333 7.18712L14.75 11.6513L15.8317 17.9579L10.1667 14.9788L4.50167 17.9579L5.58333 11.6513L1 7.18712L7.33417 6.26128L10.1667 0.522949Z" fill="#BB9D5A" stroke="#BB9D5A" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.1667 0.522949L12.9992 6.26128L19.3333 7.18712L14.75 11.6513L15.8317 17.9579L10.1667 14.9788L4.50167 17.9579L5.58333 11.6513L1 7.18712L7.33417 6.26128L10.1667 0.522949Z" stroke="#BB9D5A" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </li>
                                    </ul>
                                </div>

                                <p>“Just WOW. This class was such a great experience. I went into this class an absolute beginner. I had no creative experience and to me this class was the best for Boxing I could take. Mayweather Boxing + Fitness upon everything!”</p>

                                <div className="mt-4 mb-3 profileAvatar" >
                                    <div className="proImg" >
                                        <img src={timg} className="img-fluid" alt="hero form" />
                                    </div>
                                    <div className="proName" >
                                        <h2>Alex Cuban</h2>
                                        <p>Management Associate, United States</p>
                                    </div>
                                </div>

                            </div>
                        </div >
                    </div>
                    <div className="col-md-4 mb-4" >
                        <div div className="testimonialBox" >
                            <div className="t-img" >
                                <img src={timg} className="img-fluid" alt="hero form" />
                            </div>
                            <div className="t-content" >
                                <div className="starRating" >
                                    <ul>
                                        <li>
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.1667 0.522949L12.9992 6.26128L19.3333 7.18712L14.75 11.6513L15.8317 17.9579L10.1667 14.9788L4.50167 17.9579L5.58333 11.6513L1 7.18712L7.33417 6.26128L10.1667 0.522949Z" fill="#BB9D5A" stroke="#BB9D5A" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.1667 0.522949L12.9992 6.26128L19.3333 7.18712L14.75 11.6513L15.8317 17.9579L10.1667 14.9788L4.50167 17.9579L5.58333 11.6513L1 7.18712L7.33417 6.26128L10.1667 0.522949Z" fill="#BB9D5A" stroke="#BB9D5A" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.1667 0.522949L12.9992 6.26128L19.3333 7.18712L14.75 11.6513L15.8317 17.9579L10.1667 14.9788L4.50167 17.9579L5.58333 11.6513L1 7.18712L7.33417 6.26128L10.1667 0.522949Z" fill="#BB9D5A" stroke="#BB9D5A" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.1667 0.522949L12.9992 6.26128L19.3333 7.18712L14.75 11.6513L15.8317 17.9579L10.1667 14.9788L4.50167 17.9579L5.58333 11.6513L1 7.18712L7.33417 6.26128L10.1667 0.522949Z" fill="#BB9D5A" stroke="#BB9D5A" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.1667 0.522949L12.9992 6.26128L19.3333 7.18712L14.75 11.6513L15.8317 17.9579L10.1667 14.9788L4.50167 17.9579L5.58333 11.6513L1 7.18712L7.33417 6.26128L10.1667 0.522949Z" stroke="#BB9D5A" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </li>
                                    </ul>
                                </div>

                                <p>“Just WOW. This class was such a great experience. I went into this class an absolute beginner. I had no creative experience and to me this class was the best for Boxing I could take. Mayweather Boxing + Fitness upon everything!”</p>

                                <div className="mt-4 mb-3 profileAvatar" >
                                    <div className="proImg" >
                                        <img src={timg} className="img-fluid" alt="hero form" />
                                    </div>
                                    <div className="proName" >
                                        <h2>Alex Cuban</h2>
                                        <p>Management Associate, United States</p>
                                    </div>
                                </div>

                            </div>
                        </div >
                    </div>
                    <div className="col-md-4 mb-4" >
                        <div div className="testimonialBox" >
                            <div className="t-img" >
                                <img src={timg} className="img-fluid" alt="hero form" />
                            </div>
                            <div className="t-content" >
                                <div className="starRating" >
                                    <ul>
                                        <li>
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.1667 0.522949L12.9992 6.26128L19.3333 7.18712L14.75 11.6513L15.8317 17.9579L10.1667 14.9788L4.50167 17.9579L5.58333 11.6513L1 7.18712L7.33417 6.26128L10.1667 0.522949Z" fill="#BB9D5A" stroke="#BB9D5A" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.1667 0.522949L12.9992 6.26128L19.3333 7.18712L14.75 11.6513L15.8317 17.9579L10.1667 14.9788L4.50167 17.9579L5.58333 11.6513L1 7.18712L7.33417 6.26128L10.1667 0.522949Z" fill="#BB9D5A" stroke="#BB9D5A" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.1667 0.522949L12.9992 6.26128L19.3333 7.18712L14.75 11.6513L15.8317 17.9579L10.1667 14.9788L4.50167 17.9579L5.58333 11.6513L1 7.18712L7.33417 6.26128L10.1667 0.522949Z" fill="#BB9D5A" stroke="#BB9D5A" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.1667 0.522949L12.9992 6.26128L19.3333 7.18712L14.75 11.6513L15.8317 17.9579L10.1667 14.9788L4.50167 17.9579L5.58333 11.6513L1 7.18712L7.33417 6.26128L10.1667 0.522949Z" fill="#BB9D5A" stroke="#BB9D5A" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.1667 0.522949L12.9992 6.26128L19.3333 7.18712L14.75 11.6513L15.8317 17.9579L10.1667 14.9788L4.50167 17.9579L5.58333 11.6513L1 7.18712L7.33417 6.26128L10.1667 0.522949Z" stroke="#BB9D5A" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </li>
                                    </ul>
                                </div>

                                <p>“Just WOW. This class was such a great experience. I went into this class an absolute beginner. I had no creative experience and to me this class was the best for Boxing I could take. Mayweather Boxing + Fitness upon everything!”</p>

                                <div className="mt-4 mb-3 profileAvatar" >
                                    <div className="proImg" >
                                        <img src={timg} className="img-fluid" alt="hero form" />
                                    </div>
                                    <div className="proName" >
                                        <h2>Alex Cuban</h2>
                                        <p>Management Associate, United States</p>
                                    </div>
                                </div>

                            </div>
                        </div >
                    </div>
                </div>
                
            </div>
        </div>
    </>
}