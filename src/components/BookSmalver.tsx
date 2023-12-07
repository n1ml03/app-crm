import {IoCall} from "react-icons/io5";
import {GiHospitalCross} from "react-icons/gi";

export const BookSmalver = () => {
    return (
        <>
            <div className="position-relative">
                <div className="container-default z-index-1 w-container">
                    <div className="cta v1">
                        <div className="half-bg-left call-to-action-v1"></div>
                        <div className="z-index-1">
                            <div className="inner-container _548px center">
                                <div className="subtitle white">book now</div>
                                <h2 className="display-2 color-neutral-100 mg-bottom-24px">Book your medical appointment
                                    today</h2>
                            </div>
                            <div className="button-row-wrap center">
                                <a href="/booking" className="btn-primary black w-button"><span
                                    className="doctr-custom-icon btn-icon-left"><IoCall/></span>Book an appointment</a>
                                <a href="/services" className="btn-secondary white w-button"><span
                                    className="doctr-custom-icon btn-icon-left"><GiHospitalCross/></span>Our
                                    specialities</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="half-bg-bottom half-footer-bg"></div>
            </div>
        </>
    )
}