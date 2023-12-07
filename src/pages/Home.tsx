import {IoCall} from "react-icons/io5"
import {ImArrowLeft2, ImArrowRight2, ImFacebook, ImLinkedin2, ImTwitter} from "react-icons/im";
import {RiInstagramFill} from "react-icons/ri";
import {GiHospitalCross} from "react-icons/gi";
import {PiPencilSimple} from "react-icons/pi";
import {Footer} from '@/components'

export const Home = () => {
    return (
        <>
            <div className="page-wrapper">
                {/* Navbar */}
                <div className="navbar position-relative">
                    <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease"
                         data-easing2="ease" role="banner" className="header-wrapper bg-transparent w-nav">
                        <div className="container-default w-container">
                            <div className="header-content-wrapper">
                                <div className="header-left-side">
                                    <a href="/home" className="header-logo-link w-nav-brand"><img
                                        src="src/assets/icons/logo-web-white.svg" alt=""/></a>
                                    <nav role="navigation" className="header-nav-menu-wrapper w-nav-menu">
                                        <ul role="list" className="header-nav-menu-list">
                                            <li className="header-nav-list-item left"><a href="/home"
                                                                                         className="header-nav-link white-link tablet w-nav-link">Home</a>
                                            </li>
                                            <li className="header-nav-list-item left"><a href="/about"
                                                                                         className="header-nav-link white-link tablet w-nav-link">About</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="header-right-side">
                                    <div className="social-media-flex-container gap-column-16px hidden-on-tablet">
                                        <a href="https://facebook.com/" target="_blank"
                                           className="social-icon-single white w-inline-block">
                                            <div className="social-icon-font font-size-20px-mbl"><ImFacebook/></div>
                                        </a>
                                        <a href="https://twitter.com/" target="_blank"
                                           className="social-icon-single white w-inline-block">
                                            <div className="social-icon-font font-size-20px-mbl"><ImTwitter/></div>
                                        </a>
                                        <a href="https://www.instagram.com/" target="_blank"
                                           className="social-icon-single white w-inline-block">
                                            <div className="social-icon-font font-size-20px-mbl"><RiInstagramFill/>
                                            </div>
                                        </a>
                                        <a href="https://www.linkedin.com/" target="_blank"
                                           className="social-icon-single white w-inline-block">
                                            <div className="social-icon-font font-size-20px-mbl"><ImLinkedin2/></div>
                                        </a>
                                    </div>
                                    <div className="hidden-on-tablet">
                                        <div className="mg-right-20px">
                                            <a href="/booking" className="btn-primary small w-button"><span
                                                className="doctr-custom-icon btn-icon-left small"><IoCall/></span>Book
                                                an appointment</a>
                                        </div>
                                    </div>
                                    <div className="hamburger-menu-wrapper w-nav-button">
                                        <div className="hamburger-menu-bar top white-transparent"></div>
                                        <div className="hamburger-menu-bar bottom white-transparent"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero*/}
                <div className="section hero home-v3">
                    <div className="container-default z-index-1 w-container">
                        <div className="inner-container _600px center">
                            <div className="text-center">
                                <div className="subtitle white">
                                    Welcome to doctr X
                                </div>
                                <h1 className="display-1 color-neutral-100">
                                    Holistic wellness for optimal living
                                </h1>
                                <p className="color-neutral-300 mg-bottom-40px">
                                    Lorem ipsum dolor sit amet consectetur commodo aliquam augue duis aliquet ipsum
                                    donec tempus ac interdum enim.
                                </p>
                                <div className="buttons-row center">
                                    <a href="/booking" className="btn-primary button-row w-button"><span
                                        className="doctr-custom-icon btn-icon-left"><IoCall/></span>Book an appointment</a>
                                    <a href="/services" className="btn-secondary white w-button"><span
                                        className="doctr-custom-icon btn-icon-left"><GiHospitalCross/></span>Our
                                        specialities</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero image*/}
                <div className="hero-home-image---bg">
                    <img
                        src="src/assets/images/city-optimal-living.jpg"
                        loading="eager"
                        sizes="100vw"
                        srcSet="
                        src/assets/images/city-optimal-living-p-500.jpg   500w,
                        src/assets/images/city-optimal-living-p-800.jpg   800w,
                        src/assets/images/city-optimal-living-p-1080.jpg 1080w,
                        src/assets/images/city-optimal-living-p-1600.jpg 1600w,
                        src/assets/images/city-optimal-living.jpg        2160w
                    "
                        alt="Holistic Wellness For Optimal Living"
                        className="_w-h-100 fit-cover"
                    />
                    <div className="position-absolute bg-image-overlay"></div>
                </div>
                {/* CTA card*/}
                <div className="section cta-section-card booking">
                    <div className="container-default w-container">
                        <div className="card booking-card">
                            <div className="w-layout-grid grid-3-columns booking-grid-3-col">
                                <div
                                    id="w-node-_08e9d63a-aa6b-fe17-6540-ffee451f3662-f7a60d05"
                                    className="inner-container _432px _100-tablet"
                                >
                                    <div className="subtitle">Booking</div>
                                    <h2 className="display-2 mg-bottom-8px">Let us take care of your health</h2>
                                    <p className="mg-bottom-0">Lorem ipsum dolor sit amet consectetur venenatis nisi et
                                        in quis fermentum vel.</p>
                                </div>
                                <div
                                    id="w-node-_08e9d63a-aa6b-fe17-6540-ffee451f3669-f7a60d05"
                                    className="inner-container _330px _100-tablet"
                                >
                                    <div className="mg-bottom-24px">
                                        <div className="image-wrapper size-80px">
                                            <img src="src/assets/icons/contact-visit-us-icon.svg"
                                                 alt="Contact Visit Us Icon" className="circle-icon"/>
                                        </div>
                                    </div>
                                    <h3 className="display-4 mg-bottom-16px">Visit us on</h3>
                                    <p className="color-neutral-800 mg-bottom-12px">680 47th St. San Francisco, CA
                                        90011</p>
                                    <a href="https://www.google.com/maps" target="_blank"
                                       className="card-link color-neutral-600 blue w-inline-block">
                                        <div className="link-text">Open on Google Maps</div>
                                        <div className="line-rounded-icon card-arrow-right"><ImArrowRight2/></div>
                                    </a>
                                    <div className="divider _32px"></div>
                                    <div className="mg-bottom-16px">
                                        <div className="text-200 medium color-neutral-800">Mon - Fri: 8:00am to 5:00pm
                                        </div>
                                    </div>
                                    <div className="text-200 medium color-neutral-800">Saturday: 9:00am to 3:30pm</div>
                                </div>
                                <div
                                    id="w-node-_08e9d63a-aa6b-fe17-6540-ffee451f367c-f7a60d05"
                                    className="inner-container _196px _100-tablet"
                                >
                                    <div className="mg-bottom-24px">
                                        <div className="image-wrapper size-80px">
                                            <img src="src/assets/icons/contact-phone-icon.svg" alt="Contact Phone Icon"
                                                 className="circle-icon"/>
                                        </div>
                                    </div>
                                    <h3 className="display-4 mg-bottom-16px">Contact us</h3>
                                    <div className="text-medium mg-bottom-4px">Phone number</div>
                                    <a href="tel:(253)456-1189" className="link-bold text-200 text-decoration-none">(253)
                                        456 - 1189</a>
                                    <div className="divider _32px"></div>
                                    <div className="mg-bottom-8px">
                                        <div className="text-200 medium color-neutral-600">Email address</div>
                                    </div>
                                    <a href="mailto:contact@doctr.com"
                                       className="link-bold text-200 text-decoration-none">contact@doctr.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Info*/}
                <div className="section infomation">
                    <div className="container-default w-container">
                        <div className="w-layout-grid grid-2-columns grid-about-us">
                            <div className="picture-wrapper _02">
                                <div className="image-rounded-corners-wrapper _03">
                                    <img
                                        src="src/assets/images/doctor-team-meeting.jpg"
                                        loading="eager"
                                        sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1439px) 46vw, 574px"
                                        srcSet="
                                        src/assets/images/doctor-team-meeting-p-500.jpg  500w,
                                        src/assets/images/doctor-team-meeting-p-800.jpg  800w,
                                        src/assets/images/doctor-team-meeting.jpg       1148w
                                    "
                                        alt="Our Caring Doctors Are Here For You - Doctr X Webflow Template"
                                    />
                                </div>
                                <div className="blue-square _04">
                                    <div className="blue-inner-square"><img
                                        src="src/assets/icons/shape-bg-home-v3-about-us.svg" alt=""
                                        className="image-shape _03"/></div>
                                </div>
                            </div>
                            <div>
                                <div className="subtitle">About us</div>
                                <h2 className="display-2">Our caring doctors are here for you</h2>
                                <div className="inner-container _460px _100---tablet">
                                    <p className="mg-bottom-32px mg-bottom-20px-tablet">Lorem ipsum dolor sit amet
                                        consectetur venenatis nisi et in quis fermentum vel magna magna risus arcu et
                                        turpis ac lacus quam etiam integer eget dolor.</p>
                                    <div className="stats-container mg-bottom-48px mg-bottom-32px-tablet">
                                        <div>
                                            <div className="display-1 mg-bottom-4px">10<span
                                                className="color-accent-1">K</span></div>
                                            <div className="text-200 medium">Happy clients</div>
                                        </div>
                                        <div>
                                            <div className="display-1 mg-bottom-4px">100<span
                                                className="color-accent-1">+</span></div>
                                            <div className="text-200 medium">Team members</div>
                                        </div>
                                    </div>
                                    <div className="buttons-row">
                                        <a href="/booking" className="btn-primary w-button"><span
                                            className="doctr-custom-icon btn-icon-left"><IoCall/></span>Book an
                                            appointment</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Service*/}
                <div className="border-radius-40px border-radius-16px-mbl bg-neutral-800">
                    <div className="section">
                        <div className="container-default w-container">
                            <div className="mg-bottom-48px">
                                <div className="w-layout-grid grid-2-columns title-and-buttons">
                                    <div id="w-node-f7143da0-fef0-5a06-9457-3c350494c1cd-f7a60d05"
                                         className="inner-container _470px _100---tablet">
                                        <div id="w-node-f7143da0-fef0-5a06-9457-3c350494c1ce-f7a60d05"
                                             className="subtitle">Specialities
                                        </div>
                                        <h2 className="display-2 color-neutral-100 mg-bottom-0">Our wide range of
                                            specialities</h2>
                                    </div>
                                    <div id="w-node-f7143da0-fef0-5a06-9457-3c350494c1d2-f7a60d05">
                                        <a href="/services" className="btn-secondary white w-button"><span
                                            className="doctr-custom-icon btn-icon-left"><GiHospitalCross/></span>Browse
                                            all specialities</a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-dyn-list">
                                <div
                                    role="list"
                                    className="grid-3-columns gap-row-32px w-dyn-items"
                                >
                                    <div role="listitem" className="w-dyn-item">
                                        <a href="/services/pediatric"
                                           className="card card-link-icon-top w-inline-block">
                                            <div className="card-picture-wrapper specialities-picture"><img
                                                src="src/assets/icons/pediatric-icon.svg" alt="Pediatric"
                                                className="card-image"/></div>
                                            <div>
                                                <h3 className="card-title-dark display-4">Pediatric</h3>
                                                <p className="color-neutral-600 mg-bottom-24px">Lorem ipsum dolor sit
                                                    amet consectetur sit dignissim pellentesque egestas.</p>
                                                <div className="card-link color-neutral-600">
                                                    <div className="link-text">Learn more</div>
                                                    <div className="line-rounded-icon card-arrow-right"><ImArrowRight2/>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div role="listitem" className="w-dyn-item">
                                        <a href="/services/cardiology"
                                           className="card card-link-icon-top w-inline-block">
                                            <div className="card-picture-wrapper specialities-picture"><img
                                                src="src/assets/icons/cardiology-icon.svg" alt="Cardiology"
                                                className="card-image"/></div>
                                            <div>
                                                <h3 className="card-title-dark display-4">Cardiology</h3>
                                                <p className="color-neutral-600 mg-bottom-24px">Lorem ipsum dolor sit
                                                    amet consectetur sit dignissim pellentesque egestas.</p>
                                                <div className="card-link color-neutral-600">
                                                    <div className="link-text">Learn more</div>
                                                    <div className="line-rounded-icon card-arrow-right"><ImArrowRight2/>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div role="listitem" className="w-dyn-item">
                                        <a href="/services/ophthalmology"
                                           className="card card-link-icon-top w-inline-block">
                                            <div className="card-picture-wrapper specialities-picture"><img
                                                src="src/assets/icons/ophthalmology-icon.svg" alt="Ophthalmology"
                                                className="card-image"/></div>
                                            <div>
                                                <h3 className="card-title-dark display-4">Ophthalmology</h3>
                                                <p className="color-neutral-600 mg-bottom-24px">Lorem ipsum dolor sit
                                                    amet consectetur sit dignissim pellentesque egestas.</p>
                                                <div className="card-link color-neutral-600">
                                                    <div className="link-text">Learn more</div>
                                                    <div className="line-rounded-icon card-arrow-right"><ImArrowRight2/>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div role="listitem" className="w-dyn-item">
                                        <a href="/services/pathology"
                                           className="card card-link-icon-top w-inline-block">
                                            <div className="card-picture-wrapper specialities-picture"><img
                                                src="src/assets/icons/phatalogy-icon.svg" alt="Pathology"
                                                className="card-image"/></div>
                                            <div>
                                                <h3 className="card-title-dark display-4">Pathology</h3>
                                                <p className="color-neutral-600 mg-bottom-24px">Lorem ipsum dolor sit
                                                    amet consectetur sit dignissim pellentesque egestas.</p>
                                                <div className="card-link color-neutral-600">
                                                    <div className="link-text">Learn more</div>
                                                    <div className="line-rounded-icon card-arrow-right"><ImArrowRight2/>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div role="listitem" className="w-dyn-item">
                                        <a href="/services/pulmonology"
                                           className="card card-link-icon-top w-inline-block">
                                            <div className="card-picture-wrapper specialities-picture"><img
                                                src="src/assets/icons/pulmonology-icon.svg" alt="Pulmonology"
                                                className="card-image"/></div>
                                            <div>
                                                <h3 className="card-title-dark display-4">Pulmonology</h3>
                                                <p className="color-neutral-600 mg-bottom-24px">Lorem ipsum dolor sit
                                                    amet consectetur sit dignissim pellentesque egestas.</p>
                                                <div className="card-link color-neutral-600">
                                                    <div className="link-text">Learn more</div>
                                                    <div className="line-rounded-icon card-arrow-right"><ImArrowRight2/>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div role="listitem" className="w-dyn-item">
                                        <a href="/services/orthopedic"
                                           className="card card-link-icon-top w-inline-block">
                                            <div className="card-picture-wrapper specialities-picture"><img
                                                src="src/assets/icons/orthopedic-icon.svg" alt="Orthopedic"
                                                className="card-image"/></div>
                                            <div>
                                                <h3 className="card-title-dark display-4">Orthopedic</h3>
                                                <p className="color-neutral-600 mg-bottom-24px">Lorem ipsum dolor sit
                                                    amet consectetur sit dignissim pellentesque egestas.</p>
                                                <div className="card-link color-neutral-600">
                                                    <div className="link-text">Learn more</div>
                                                    <div className="line-rounded-icon card-arrow-right"><ImArrowRight2/>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Differentiation*/}
                <div className="section overflow-hidden">
                    <div className="container-default w-container">
                        <div className="w-layout-grid grid-2-columns choose-us-grid-2-col">
                            <div className="inner-container _600px _100---tablet">
                                <div className="subtitle">Why choose us</div>
                                <h2 className="display-2 mg-bottom-24px mg-bottom-40px-tablet">The right care for your
                                    loved ones</h2>
                                <div>
                                    <div className="accordion-item-wrapper v2 first">
                                        <div className="accordion-image-left-wrapper">
                                            <div className="mg-right-36px mg-right-16px---mbl">
                                                <div className="image-wrapper size-80px">
                                                    <img src="src/assets/icons/resident-home-icon.svg" loading="lazy"
                                                         alt="Resident Home Icon" className="circle-icon"/>
                                                </div>
                                            </div>
                                            <div className="accordion-content-wrapper v2">
                                                <div className="accordion-header icon-inside">
                                                    <h3 className="accordion-title">Resident care</h3>
                                                    <div className="accordion-icon-wrapper">
                                                        <div className="accordion-btn-line v2 vertical"></div>
                                                        <div className="accordion-btn-line v2 horizontal"></div>
                                                    </div>
                                                </div>
                                                <div className="acordion-body">
                                                    <div className="accordion-spacer _12px"></div>
                                                    <div className="inner-container _434px _100---tablet"><p
                                                        className="mg-bottom-0">Lorem ipsum dolor sit amet consectetur
                                                        facilisis sagittis condimentum mauris fusce amet a elit.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item-wrapper v2">
                                        <div className="accordion-image-left-wrapper">
                                            <div className="mg-right-36px mg-right-16px---mbl">
                                                <div className="image-wrapper size-80px">
                                                    <img src="src/assets/icons/quality-icon.svg" loading="lazy"
                                                         alt="Quality Icon" className="circle-icon"/>
                                                </div>
                                            </div>
                                            <div className="accordion-content-wrapper v2">
                                                <div className="accordion-header icon-inside">
                                                    <h3 className="accordion-title">Quality support</h3>
                                                    <div className="accordion-icon-wrapper">
                                                        <div className="accordion-btn-line v2 vertical"></div>
                                                        <div className="accordion-btn-line v2 horizontal"></div>
                                                    </div>
                                                </div>
                                                <div className="acordion-body">
                                                    <div className="accordion-spacer _12px"></div>
                                                    <div className="inner-container _434px _100---tablet"><p
                                                        className="mg-bottom-0">Lorem ipsum dolor sit amet consectetur
                                                        facilisis sagittis condimentum mauris fusce amet a elit.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item-wrapper v2 last">
                                        <div className="accordion-image-left-wrapper">
                                            <div className="mg-right-36px mg-right-16px---mbl">
                                                <div className="image-wrapper size-80px">
                                                    <img src="src/assets/icons/nurse-staff-icon.svg" loading="lazy"
                                                         alt="Nurse Staff Icon" className="circle-icon"/>
                                                </div>
                                            </div>
                                            <div className="accordion-content-wrapper v2">
                                                <div className="accordion-header icon-inside">
                                                    <h3 className="accordion-title">24/7 nurse staff</h3>
                                                    <div className="accordion-icon-wrapper">
                                                        <div className="accordion-btn-line v2 vertical"></div>
                                                        <div className="accordion-btn-line v2 horizontal"></div>
                                                    </div>
                                                </div>
                                                <div className="acordion-body">
                                                    <div className="accordion-spacer _12px"></div>
                                                    <div className="inner-container _434px _100---tablet"><p
                                                        className="mg-bottom-0">Lorem ipsum dolor sit amet consectetur
                                                        facilisis sagittis condimentum mauris fusce amet a elit.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                id="w-node-a22cd6ab-5194-bda4-92a7-e6fcd60a8103-f7a60d05"
                                className="picture-wrapper _03"
                            >
                                <div className="image-rounded-corners-wrapper _04">
                                    <img
                                        src="src/assets/images/care-your-loved-ones-image.jpg"
                                        loading="eager"
                                        sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1439px) 43vw, 574.890625px"
                                        srcSet="
                                        src/assets/images/care-your-loved-ones-image-p-500.jpg  500w,
                                        src/assets/images/care-your-loved-ones-image-p-800.jpg  800w,
                                        src/assets/images/care-your-loved-ones-image.jpg       1264w
                                    "
                                        alt="The Right Care For Your Loved Ones"
                                        className="image"
                                    />
                                </div>
                                <div data-w-id="a22cd6ab-5194-bda4-92a7-e6fcd60a8106" className="blue-square _05">
                                    <div className="blue-inner-square _01">
                                        <img src="src/assets/icons/shape-bg-home-v3-choosing-us.svg"
                                             alt="Shape BG Home Choosing Us" className="image-shape _02"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Book Big*/}
                <div className="position-relative book-big">
                    <div className="container-default w-container">
                        <div className="cta-card card-image-bg">
                            <div className="z-index-1">
                                <div className="inner-container _514px center">
                                    <div className="text-center">
                                        <div className="subtitle white">Book now</div>
                                        <h2 className="display-2 color-neutral-100 mg-bottom-0">Book your medical
                                            appointment today</h2>
                                        <p className="color-neutral-300 mg-bottom-32px">Lorem ipsum dolor sit amet
                                            consectetur non venenatis nisi et in quis fermentum vel magna.</p>
                                    </div>
                                </div>
                                <div className="button-row-wrap center">
                                    <a href="/booking" className="btn-primary w-button"><span
                                        className="doctr-custom-icon btn-icon-left"><IoCall/></span>Book an appointment</a>
                                    <a href="/services" className="btn-secondary white w-button"><span
                                        className="doctr-custom-icon btn-icon-left"><GiHospitalCross/></span>Our
                                        specialities</a>
                                </div>
                            </div>
                            <div className="position-absolute full">
                                <img
                                    src="src/assets/images/waiting-room-hospital.jpg"
                                    loading="eager"
                                    sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1439px) 96vw, 1292px"
                                    srcSet="
                                    src/assets/images/waiting-room-hospital-p-500.jpg  500w,
                                    src/assets/images/waiting-room-hospital-p-800.jpg  800w,
                                    src/assets/images/waiting-room-hospital.jpg       1290w
                                "
                                    alt=""
                                    className="_w-h-100 fit-cover"
                                />
                                <div className="position-absolute bg-image-overlay v2"></div>
                            </div>
                        </div>
                    </div>
                    <div className="position-absolute cta-rectangle-bg bg-neutral-200"></div>
                </div>
                {/* Testimonial*/}
                <div className="border-radius-bottom-40px overflow-hidden">
                    <div className="section bg-neutral-200">
                        <div className="container-default w-container">
                            <div className="inner-container _574px center">
                                <div className="text-center mg-bottom-40px">
                                    <div className="subtitle">Testimonials</div>
                                    <h2 className="display-2 mg-bottom-0">Here’s what our great customers say</h2>
                                </div>
                            </div>
                            <div className="inner-container _1200px center">
                                <div
                                    data-delay="4000"
                                    data-animation="cross"
                                    className="slider-wrapper testimonial-slider w-slider"
                                    data-autoplay="false"
                                    data-easing="ease"
                                    data-hide-arrows="false"
                                    data-disable-swipe="false"
                                    data-autoplay-limit="0"
                                    data-nav-spacing="3"
                                    data-duration="500"
                                    data-infinite="true"
                                >
                                    <div className="slider-mask overflow-visible w-slider-mask">
                                        <div className="slide w-slide">
                                            <div className="inner-container _908px center">
                                                <div className="card testimonial-slide">
                                                    <div>
                                                        <div className="inner-container _440px center"><h3
                                                            className="heading-h2-size mg-bottom-16px">“The care and
                                                            service is exceptional”</h3></div>
                                                        <div className="inner-container _546px _100---tablet">
                                                            <p className="mg-bottom-32px">Lorem ipsum dolor sit amet
                                                                consectetur venenatis nisi et in quis fermentum vel
                                                                magna magna risus arcu et turpis ac lacus quam etiam
                                                                integer eget dolor.</p>
                                                        </div>
                                                        <div className="flex-horizontal vertical-mbp">
                                                            <div className="mg-bottom-12px---mbp">
                                                                <div className="mg-right-16px mg-right-0px---mbp">
                                                                    <div className="avatar-circle _04">
                                                                        <img
                                                                            src="src/assets/images/john-carter-testimonial-avatar-image.jpg"
                                                                            alt="John Carter Testimonial Avatar Image"
                                                                            className="avatar-image"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex-vertical start align-center---mbp">
                                                                <div className="mg-bottom-8px">
                                                                    <div
                                                                        className="text-200 bold color-neutral-800">John
                                                                        Carter
                                                                    </div>
                                                                </div>
                                                                <div className="text-200 medium color-accent-1">Patient
                                                                    since 2025
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slide w-slide">
                                            <div className="inner-container _908px center">
                                                <div className="card testimonial-slide">
                                                    <div>
                                                        <div className="inner-container _444px center"><h3
                                                            className="heading-h2-size mg-bottom-16px">“The best app for
                                                            medical appointments”</h3></div>
                                                        <div className="inner-container _546px _100---tablet">
                                                            <p className="mg-bottom-32px">Lorem ipsum dolor sit amet
                                                                consectetur venenatis nisi et in quis fermentum vel
                                                                magna magna risus arcu et turpis ac lacus quam etiam
                                                                integer eget dolor.</p>
                                                        </div>
                                                        <div className="flex-horizontal vertical-mbp">
                                                            <div className="mg-bottom-12px---mbp">
                                                                <div className="mg-right-16px mg-right-0px---mbp">
                                                                    <div className="avatar-circle _04">
                                                                        <img
                                                                            src="src/assets/images/sandy-houston-testimonial-avatar-image.jpg"
                                                                            alt="Sandy Houston Testimonial Avatar Image"
                                                                            className="avatar-image"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex-vertical start align-center---mbp">
                                                                <div className="mg-bottom-8px">
                                                                    <div
                                                                        className="text-200 bold color-neutral-800">Sandy
                                                                        Houston
                                                                    </div>
                                                                </div>
                                                                <div className="text-200 medium color-accent-1">Patient
                                                                    since 2022
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slide w-slide">
                                            <div className="inner-container _908px center">
                                                <div className="card testimonial-slide">
                                                    <div>
                                                        <div className="inner-container _400px center"><h3
                                                            className="heading-h2-size mg-bottom-16px">“The next-gen
                                                            medical app”</h3></div>
                                                        <div className="inner-container _546px _100---tablet">
                                                            <p className="mg-bottom-32px">Lorem ipsum dolor sit amet
                                                                consectetur venenatis nisi et in quis fermentum vel
                                                                magna magna risus arcu et turpis ac lacus quam etiam
                                                                integer eget dolor.</p>
                                                        </div>
                                                        <div className="flex-horizontal vertical-mbp">
                                                            <div className="mg-bottom-12px---mbp">
                                                                <div className="mg-right-16px mg-right-0px---mbp">
                                                                    <div className="avatar-circle _04">
                                                                        <img
                                                                            src="src/assets/images/graham-hills-testimonial-avatar-image.jpg"
                                                                            alt="Graham Hills Testimonial Avatar Image"
                                                                            className="avatar-image"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex-vertical start align-center---mbp">
                                                                <div className="mg-bottom-8px">
                                                                    <div
                                                                        className="text-200 bold color-neutral-800">Graham
                                                                        Hills
                                                                    </div>
                                                                </div>
                                                                <div className="text-200 medium color-accent-1">Patient
                                                                    since 2021
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-circle-secondary btn-testimonial left w-slider-arrow-left">
                                        <div className="line-rounded-icon"><ImArrowLeft2/></div>
                                    </div>
                                    <div className="btn-circle-secondary btn-testimonial right w-slider-arrow-right">
                                        <div className="line-rounded-icon"><ImArrowRight2/></div>
                                    </div>
                                    <div className="hidden-on-desktop w-slider-nav w-round"></div>
                                </div>
                            </div>
                            <div className="buttons-row center">
                                <a href="/booking" className="btn-primary w-button"><span
                                    className="doctr-custom-icon btn-icon-left"><IoCall/></span>Book an appointment</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Blog */}
                <div className="section overflow-hidden">
                    <div className="container-default w-container">
                        <div className="inner-container _690px center">
                            <div className="text-center mg-bottom-48px">
                                <div className="subtitle">Our blog</div>
                                <h2 className="display-2 mg-bottom-0">Browse our latest articles on
                                    healthcare &amp; wellness</h2>
                            </div>
                        </div>
                        <div className="mg-bottom-48px w-dyn-list">
                            <div role="list" className="grid-2-columns gap-row-40px w-dyn-items">
                                <div role="listitem" className="w-dyn-item">
                                    <a data-w-id="557efbd1-4759-9c0d-3ee0-46aed8c338d0" href="/blogs/hearthealth"
                                       className="card blog-v3 w-inline-block">
                                        <div id="w-node-_557efbd1-4759-9c0d-3ee0-46aed8c338d1-f7a60d05"
                                             className="card-picture-wrapper">
                                            <img
                                                src="src/assets/images/heart-health-featured-image.jpg"
                                                alt="3 simple and easy steps to jump-start your heart health"
                                                sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 46vw, (max-width: 1439px) 47vw, 632px"
                                                srcSet="
                                                src/assets/images/heart-health-featured-image-p-500.jpg   500w,
                                                src/assets/images/heart-health-featured-image-p-800.jpg   800w,
                                                src/assets/images/heart-health-featured-image-p-1080.jpg 1080w,
                                                src/assets/images/heart-health-featured-image-p-1600.jpg 1600w,
                                                src/assets/images/heart-health-featured-image.jpg        2732w
                                            "
                                                className="card-image"
                                            />
                                        </div>
                                        <div className="card-description blog-v3-description">
                                            <h3 className="card-title-dark display-4 mg-bottom-16px">3 simple and easy
                                                steps to jump-start your heart health</h3>
                                            <p className="color-neutral-600 mg-bottom-24px">Lorem ipsum dolor sit amet
                                                consectetur nisl neque sagittis fermentum leo dui vel velit eu egestas
                                                in eget enim euismod.</p>
                                            <div className="card-details-flex-container blog-v3">
                                                <div className="card-details-flex-container">
                                                    <div className="badge-primary">News</div>
                                                    <div className="text-200 medium color-neutral-800">July 17, 2023
                                                    </div>
                                                </div>
                                                <div className="card-link color-neutral-600">
                                                    <div className="link-text">Read more</div>
                                                    <div className="line-rounded-icon card-arrow-right"><ImArrowRight2/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div role="listitem" className="w-dyn-item">
                                    <a href="/blogs/the-role-of-vaccines-in-protecting-against-allergies"
                                       className="card blog-v3 w-inline-block">
                                        <div id="w-node-_557efbd1-4759-9c0d-3ee0-46aed8c338d1-f7a60d05"
                                             className="card-picture-wrapper">
                                            <img
                                                src="src/assets/images/vaccines-protecting-featured-image.jpg"
                                                alt="The role of vaccines in protecting against allergies"
                                                sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 46vw, (max-width: 1439px) 47vw, 632px"
                                                srcSet="
                                                src/assets/images/vaccines-protecting-featured-image-p-500.jpg   500w,
                                                src/assets/images/vaccines-protecting-featured-image-p-800.jpg   800w,
                                                src/assets/images/vaccines-protecting-featured-image-p-1080.jpg 1080w,
                                                src/assets/images/vaccines-protecting-featured-image-p-1600.jpg 1600w,
                                                src/assets/images/vaccines-protecting-featured-image-p-2000.jpg 2000w,
                                                src/assets/images/vaccines-protecting-featured-image-p-2600.jpg 2600w,
                                                src/assets/images/vaccines-protecting-featured-image-p-3200.jpg 3200w,
                                                src/assets/images/vaccines-protecting-featured-image.jpg        5464w
                                            "
                                                className="card-image"
                                            />
                                        </div>
                                        <div className="card-description blog-v3-description">
                                            <h3 className="card-title-dark display-4 mg-bottom-16px">The role of
                                                vaccines in protecting against allergies</h3>
                                            <p className="color-neutral-600 mg-bottom-24px">Lorem ipsum dolor sit amet
                                                consectetur nisl neque sagittis fermentum leo dui vel velit eu egestas
                                                in eget enim euismod.</p>
                                            <div className="card-details-flex-container blog-v3">
                                                <div className="card-details-flex-container">
                                                    <div className="badge-primary">Articles</div>
                                                    <div className="text-200 medium color-neutral-800">July 17, 2023
                                                    </div>
                                                </div>
                                                <div className="card-link color-neutral-600">
                                                    <div className="link-text">Read more</div>
                                                    <div className="line-rounded-icon card-arrow-right"><ImArrowRight2/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="buttons-row center">
                            <a href="/blogs" className="btn-secondary w-button"><span
                                className="doctr-custom-icon btn-icon-left"><PiPencilSimple/></span>Browse all articles</a>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}