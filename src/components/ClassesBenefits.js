import Button from "./common/Button";
import background from '../img/classesbg.png';
import Title from "./common/Title";

export default function ClassesBenefits() {

    const check = <>
        <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.7395 0.759766H2.00007C1.53592 0.760083 1.09087 0.94465 0.762723 1.27291C0.434573 1.60118 0.250159 2.04628 0.25 2.51044V15.2502C0.250079 15.7143 0.434487 16.1594 0.762672 16.4876C1.09086 16.8158 1.53595 17.0002 2.00007 17.0002H14.7395C15.2037 17.0002 15.6488 16.8157 15.977 16.4875C16.3052 16.1592 16.4896 15.714 16.4896 15.2499V2.51044C16.4895 2.04626 16.3051 1.60111 15.9769 1.27282C15.6488 0.944545 15.2037 0.760004 14.7395 0.759766ZM15.5549 14.3874C15.555 14.5908 15.515 14.7922 15.4372 14.9802C15.3594 15.1681 15.2454 15.3389 15.1016 15.4827C14.9578 15.6266 14.7871 15.7407 14.5992 15.8186C14.4113 15.8965 14.21 15.9366 14.0066 15.9366H2.73451C2.53105 15.9367 2.32955 15.8967 2.14156 15.8189C1.95356 15.7411 1.78275 15.6269 1.63887 15.4831C1.495 15.3392 1.38089 15.1684 1.30306 14.9804C1.22523 14.7924 1.18521 14.5909 1.18529 14.3874V3.11568C1.18529 2.91224 1.22536 2.7108 1.30322 2.52286C1.38108 2.33492 1.4952 2.16415 1.63907 2.02032C1.78293 1.87648 1.95372 1.76239 2.14167 1.68457C2.32963 1.60675 2.53108 1.56671 2.73451 1.56675H14.0066C14.4172 1.56699 14.811 1.73028 15.1013 2.02072C15.3917 2.31117 15.5548 2.70501 15.5549 3.11568V14.3874" fill="#BB9D5A" />
            <path d="M16.5048 0.568826C14.347 2.39186 12.3674 4.3259 10.6954 6.58912C9.95788 7.58758 9.37814 8.69677 8.84239 9.80623C8.59049 10.3284 8.44002 10.8717 8.29852 11.4149C7.26933 10.4815 6.26761 9.52162 5.13783 8.69185C4.33224 8.10048 1.62828 9.95496 2.57256 10.6489C4.26499 11.8912 5.67441 13.4378 7.31921 14.7354C8.00795 15.2775 9.53422 14.1008 9.89176 13.6062C11.0689 11.9795 11.2297 9.98941 12.088 8.21421C13.3982 5.49961 15.7214 3.27112 18.0143 1.33271C19.7263 -0.113036 17.6579 -0.405302 16.5054 0.567733" fill="#BB9D5A" />
        </svg>
    </>

    return <>
        <div className="classesWrapv position-relative  skew bgimage" style={{ backgroundImage: `url(${background})` }}>
            <div className="overlay"></div>
            <div className="container py-xl-0 skew-rev" >
                <div className="row align-items-center justify-content-center " >
                    <div className="col-lg-9" >
                        <Title
                            titleclass="md text-white text-center"
                            title={<>
                                Does This Sound
                                <strong> Like You?</strong></>}
                            des={<>
                                <p>{check}You’re tired of being TIRED all the time and not having enough energy to keep up with life?</p>

                                <p>{check}You want to workout, but you have don’t have time  to get to the gym?</p>

                                <p>{check}When you finally DO make it to the gym, what do you even do?</p>

                                <p>{check}The small changes you might’ve made don’t seem to be making a  difference?</p>

                                <p>{check}Things that fit a while ago no longer fit, and you’re tired of boing up a size?</p>

                                <p>{check}You’re unhappy with the way you look and feel?</p>

                                <p>{check}You keep trying a new plan just to give up on it in a week or two and go back to bad habits?</p>

                                <p>{check}You need to break the cycle!!!</p>
                            </>}
                            desclass='my-3 text-white text-start checkList'
                        />
                        <Button tag="a" href="#booknow" text={"Book NOW!"} cls="btn btn-primary mt-4 mt-lg-5 m-auto d-table" />
                    </div>
                </div>
            </div>
        </div>
    </>
}