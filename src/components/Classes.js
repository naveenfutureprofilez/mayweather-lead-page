import Button from "./common/Button";
import background from '../img/classesbg.png';
import ClassesSlider from "./ClassesSlider";
import Title from "./common/Title";

export default function Classes() {
    return <>
        <div className="classesWrapv position-relative  skew bgimage" style={{ backgroundImage: `url(${background})` }}>
            <div className="overlay"></div>
            <div className="container py-xl-5 skew-rev" >
                <div className="row align-items-center" >
                    <div className="col-lg-6" >
                        <Title
                            titleclass="md text-white text-center text-lg-start"
                            title={<>Mayweather BOXING + <br></br> FITNESS <strong>Classes!</strong></>}
                            des="An Inner Champion lives inside us all, waiting to be released."
                            desclass='my-3 text-white text-center text-lg-start'
                        />
                        <Button icon={true} text={"All Classes"} cls="btn btn-white m-auto d-table m-lg-0 mt-4" />
                    </div>
                    <div className="col-lg-6 mt-5 mt-lg-0 pb-5 pb-lg-0" >
                        <ClassesSlider />
                    </div>
                </div>
            </div>
        </div>
    </>

}