import {IoCall, IoPerson} from "react-icons/io5"
import {FaPlus} from "react-icons/fa6";
import {ImFacebook, ImLinkedin2, ImTwitter} from "react-icons/im";
import {RiInstagramFill} from "react-icons/ri";
import {BookSmalver} from "@/components";

export const About = () => {
    return (
        <>
            <div className="position-relative">
                <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease"
                     data-easing2="ease" role="banner" className="header-wrapper bg-transparent w-nav">
                    <div className="container-default w-container">
                        <div className="header-content-wrapper">
                            <div className="header-left-side">
                                <a href="/home" className="header-logo-link w-nav-brand"><img
                                    src="src/assets/icons/logo-web.svg" alt=""/></a>
                                <nav role="navigation" className="header-nav-menu-wrapper w-nav-menu">
                                    <ul role="list" className="header-nav-menu-list">
                                        <li className="header-nav-list-item left"><a href="/home" className="header-nav-link tablet w-nav-link">Home</a></li>
                                        <li className="header-nav-list-item left"><a href="/about" className="header-nav-link tablet w-nav-link">About</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="header-right-side">
                                <div className="social-media-flex-container gap-column-16px hidden-on-tablet">
                                    <a href="https://facebook.com/" target="_blank"
                                       className="social-icon-single w-inline-block">
                                        <div className="social-icon-font font-size-20px-mbl"><ImFacebook/></div>
                                    </a>
                                    <a href="https://twitter.com/" target="_blank"
                                       className="social-icon-single w-inline-block">
                                        <div className="social-icon-font font-size-20px-mbl"><ImTwitter/></div>
                                    </a>
                                    <a href="https://www.instagram.com/" target="_blank"
                                       className="social-icon-single w-inline-block">
                                        <div className="social-icon-font font-size-20px-mbl"><RiInstagramFill/></div>
                                    </a>
                                    <a href="https://www.linkedin.com/" target="_blank"
                                       className="social-icon-single w-inline-block">
                                        <div className="social-icon-font font-size-20px-mbl"><ImLinkedin2/></div>
                                    </a>
                                </div>
                                <div className="hidden-on-tablet">
                                    <div className="mg-right-20px">
                                        <a href="/booking" className="btn-primary small w-button"><span
                                            className="doctr-custom-icon btn-icon-left small"><IoCall/></span>Book an
                                            appointment</a>
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

            <div className="section hero about">
                <div className="container-default w-container">
                    <div className="position-relative">
                        <div className="shape-image-container-hero">
                            <div className="z-index-1">
                                <div className="inner-container _1128px center">
                                    <div className="mg-bottom-64px">
                                        <div className="w-layout-grid grid-2-columns _1-col-tablet title-and-buttons">
                                            <div id="w-node-_58ba26e0-65ef-722a-d8eb-8510ca9b9ee7-f7a60c9c"
                                                 className="inner-container _690px">
                                                <div id="w-node-_58ba26e0-65ef-722a-d8eb-8510ca9b9ee8-f7a60c9c"
                                                     className="subtitle">About us
                                                </div>
                                                <h1 className="display-1 mg-bottom-0">Your well-being is our main
                                                    priority</h1>
                                            </div>
                                            <div id="w-node-_58ba26e0-65ef-722a-d8eb-8510ca9b9eec-f7a60c9c">
                                                <a href="/booking" className="btn-primary w-button"><span
                                                    className="doctr-custom-icon btn-icon-left"><IoCall/></span>Book an
                                                    appointment</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-layout-grid grid-2-columns hero-grid-image">
                                        <img
                                            className="image fit-cover border-radius-24px"
                                            src="src/assets/images/doctor-greeting-patient.jpg"
                                            alt="Your Well Being Is Our Main Priority"
                                            sizes="(max-width: 479px) 83vw, (max-width: 767px) 87vw, (max-width: 991px) 89vw, (max-width: 1439px) 48vw, 601.390625px"
                                            id="w-node-_2e9cad6a-f5b1-a791-5fcd-12cc2565b9f9-f7a60c9c"
                                            loading="eager"
                                            srcSet="
                                                src/assets/images/doctor-greeting-patient-p-500.jpg  500w,
                                                src/assets/images/doctor-greeting-patient-p-800.jpg  800w,
                                                src/assets/images/doctor-greeting-patient.jpg       1200w
                                            "
                                        />
                                        <p
                                            id="w-node-_4b8ebfb0-6469-b97a-1fb3-4b4a0ba8eb9b-f7a60c9c"
                                            className="mg-bottom-0 hidden-on-tablet"
                                        >
                                            Lorem ipsum dolor sit amet consectetur integer sit lorem diam risus sed
                                            lacus consectetur arcu integer est donec phasellus feugiat enim fusce
                                            gravida lacus dis in commodo consectetur habitant sit
                                            vel gravida.
                                        </p>
                                        <img
                                            className="border-radius-24px"
                                            src="src/assets/images/board-doctors-image.jpg"
                                            alt="Your Well Being Is Our Main Priority"
                                            sizes="(max-width: 479px) 83vw, (max-width: 767px) 87vw, (max-width: 991px) 89vw, (max-width: 1439px) 48vw, 601.3828125px"
                                            id="w-node-_2e9cad6a-f5b1-a791-5fcd-12cc2565b9fa-f7a60c9c"
                                            loading="eager"
                                            srcSet="src/assets/images/board-doctors-image-p-500.jpg 500w, 
                                                    src/assets/images/board-doctors-image.jpg 936w"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="position-absolute bottom">
                            <img src="src/assets/icons/bar-rectangle-shape-bg.svg" loading="eager" alt=""
                                 className="border-radius-24px"/>
                        </div>
                    </div>
                </div>
            </div>
            <section className="section small">
                <div className="w-layout-blockcontainer container-default w-container">
                    <div className="w-layout-grid grid-4-columns stats-grid">
                        <div
                            id="w-node-ed5e1661-927a-b1c9-edd0-076335d16e96-f7a60c9c"
                            className="text-center"
                        >
                            <div className="display-1">10<span className="color-accent-1">K</span></div>
                            <div className="text-200 medium">Happy clients</div>
                        </div>
                        <div
                            id="w-node-ed5e1661-927a-b1c9-edd0-076335d16e9d-f7a60c9c"
                            className="text-center"
                        >
                            <div className="display-1">100<span className="color-accent-1">+</span></div>
                            <div className="text-200 medium">Team members</div>
                        </div>
                        <div
                            id="w-node-ed5e1661-927a-b1c9-edd0-076335d16ea4-f7a60c9c"
                            className="text-center"
                        >
                            <div className="display-1">500<span className="color-accent-1">+</span></div>
                            <div className="text-200 medium">Positive reviews</div>
                        </div>
                        <div
                            id="w-node-ed5e1661-927a-b1c9-edd0-076335d16eab-f7a60c9c"
                            className="text-center"
                        >
                            <div className="display-1">20<span className="color-accent-1">+</span></div>
                            <div className="text-200 medium">Towns served</div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container-default w-container">
                <div className="divider _0px"></div>
            </div>
            <div className="section overflow-hidden">
                <div className="container-default w-container">
                    <div className="w-layout-grid grid-2-columns our-story-grid-2-col">
                        <div
                            id="w-node-f735f34c-0afa-cb42-d815-19802d924d26-f7a60c9c"
                            className="picture-wrapper _04"
                        >
                            <div className="image-rounded-corners-wrapper _02">
                                <img
                                    src="src/assets/images/story-mission.jpg"
                                    loading="eager"
                                    sizes="(max-width: 767px) 84vw, (max-width: 991px) 86vw, (max-width: 1439px) 43vw, 586.703125px"
                                    srcSet="
                                        src/assets/images/story-mission-p-500.jpg  500w,
                                        src/assets/images/story-mission-p-800.jpg  800w,
                                        src/assets/images/story-mission.jpg       1172w
                                    "
                                    alt="Our Story"
                                    className="image fit-cover"
                                />
                            </div>
                            <div className="blue-square _07">
                                <img src="src/assets/icons/shape-bg-our-professional.svg" alt=""
                                     className="image-shape _01"/>
                            </div>
                        </div>
                        <div
                            id="w-node-_1d0a34a0-1560-b5b5-4d08-98dc5667e254-f7a60c9c"
                            className="inner-container _522px _100---tablet"
                        >
                            <div className="subtitle">Our story</div>
                            <h2 className="display-2">The story of how our mission started</h2>
                            <div className="inner-container _460px _100---tablet">
                                <p className="mg-bottom-40px mg-bottom-24px-tablet">
                                    Lorem ipsum dolor sit amet consectetur venenatis ac volutpat vel viverra hendrerit
                                    sit eu tellus in ipsum sed venenatis dui a aliquam magna sem mi nullam augue quam
                                    viverra viverra ipsum pretium.
                                </p>
                            </div>
                            <a href="/doctors" className="btn-primary w-button"><span
                                className="doctr-custom-icon btn-icon-left"><IoPerson/></span>Meet our team</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section position-relative overflow-hidden-mbl">
                <div className="container-default w-container">
                    <div className="w-layout-grid grid-2-columns align-top gap-row-64px">
                        <div id="w-node-_91572671-f338-55c3-1505-840c0986be55-f7a60c9c"
                             className="sticky-top _24px-top static-mbl">
                            <div
                                id="w-node-_89939ca2-2d90-2291-0140-2acfa666a101-f7a60c9c"
                                className="inner-container _578px _100---tablet"
                            >
                                <div className="subtitle">Our values</div>
                                <h2 className="display-2 color-neutral-100">The values that drive everything we do</h2>
                                <p className="color-neutral-300 mg-bottom-40px mg-bottom-24px-tablet">
                                    Lorem ipsum dolor sit amet consectetur venenatis ac volutpat vel viverra hendrerit
                                    sit eu tellus in ipsum sed venenatis dui a aliquam magna sem mi nullam augue quam
                                    viverra viverra ipsum.
                                </p>
                                <a href="/booking" className="btn-primary w-button"><span
                                    className="doctr-custom-icon btn-icon-left"><IoCall/></span>Book an appointment</a>
                            </div>
                        </div>
                        <div
                            id="w-node-_86a0332b-f9da-6702-d1d1-4981283416a9-f7a60c9c"
                            className="inner-container _632px _100---mbl"
                        >
                            <div className="w-layout-grid grid-1-column gap-row-28px">
                                <div id="w-node-_0e9295ed-ce96-9b89-b93e-ddf0f2b1a051-f7a60c9c"
                                     className="card values-card">
                                    <img src="src/assets/icons/care-and-service-icon.svg" loading="lazy"
                                         alt="Care And Service Icon" className="circle-icon _64px-mbl"/>
                                    <div className="inner-container _392px _100---mbl">
                                        <h3 className="display-4">Care &amp; service</h3>
                                        <p className="mg-bottom-0">Lorem ipsum dolor sit amet consectetur sit dignissim
                                            pellentesque egestas.</p>
                                    </div>
                                </div>
                                <div id="w-node-_87a20446-004d-6d87-254e-77da507f6499-f7a60c9c"
                                     className="card values-card">
                                    <img src="src/assets/icons/patient-safety-icon.svg" loading="lazy"
                                         alt="Patient Safety Icon" className="circle-icon _64px-mbl"/>
                                    <div className="inner-container _392px _100---mbl">
                                        <h3 className="display-4">Patient safety</h3>
                                        <p className="mg-bottom-0">Lorem ipsum dolor sit amet consectetur sit dignissim
                                            pellentesque egestas.</p>
                                    </div>
                                </div>
                                <div id="w-node-_155b010d-b102-0cba-05c4-f2e0a38e419e-f7a60c9c"
                                     className="card values-card">
                                    <img src="src/assets/icons/communication-icon.svg" loading="lazy"
                                         alt="Communication Icon" className="circle-icon _64px-mbl"/>
                                    <div className="inner-container _392px _100---mbl">
                                        <h3 className="display-4">Communication</h3>
                                        <p className="mg-bottom-0">Lorem ipsum dolor sit amet consectetur sit dignissim
                                            pellentesque egestas.</p>
                                    </div>
                                </div>
                                <div id="w-node-ce64f629-1f9e-f193-bbb7-d13352499130-f7a60c9c"
                                     className="card values-card">
                                    <img src="src/assets/icons/commitment-icon.svg" loading="lazy" alt="Commitment Icon"
                                         className="circle-icon _64px-mbl"/>
                                    <div className="inner-container _392px _100---mbl">
                                        <h3 className="display-4">Commitment</h3>
                                        <p className="mg-bottom-0">Lorem ipsum dolor sit amet consectetur sit dignissim
                                            pellentesque egestas.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-bg-border-radius"></div>
            </div>
            <div className="section overflow-hidden">
                <div className="container-default w-container">
                    <div
                        className="inner-container _580px center"
                    >
                        <div className="text-center mg-bottom-48px">
                            <div className="subtitle">Professionals</div>
                            <h2 className="display-2">The team of great doctors behind Doctr</h2>
                        </div>
                    </div>
                    <div
                        className="mg-bottom-48px w-dyn-list"
                    >
                        <div role="list" className="grid-3-columns gap-row-32px _1-col-tablet w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                                <div className="card">
                                    <a href="/doctors/dr-john-carter" className="display-block w-inline-block">
                                        <div className="card-picture-wrapper">
                                            <img src="src/assets/images/dr-john-carter-portrait.jpg"
                                                 alt="Dr. John Carter" className="card-image"/>
                                            <div className="card-details-flex-container doctors-card-tag v2">
                                                <div
                                                    className="badge-secondary small badge-special-left-bottom">Cardiologist
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="card-description doctors-description">
                                        <a href="/doctors/dr-john-carter"
                                           className="text-decoration-none w-inline-block">
                                            <h3 className="card-title-dark heading-h4-size mg-bottom-4px">Dr. John
                                                Carter</h3>
                                        </a>
                                        <p className="color-neutral-600 mg-bottom-24px">Lorem ipsum dolor sit amet
                                            consectetur nisl enim quam faucibus ut in id.</p>
                                        <div className="card-details-flex-container doctors-card-tag">
                                            <a href="/doctors/dr-john-carter"
                                               className="btn-circle-secondary doctor-btn-circle w-inline-block">
                                                <div><FaPlus/></div>
                                            </a>
                                            <a href="tel:(345)569-1189"
                                               className="btn-circle-secondary doctor-btn-circle w-inline-block">
                                                <div><IoCall/></div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="listitem" className="w-dyn-item">
                                <div className="card">
                                    <a href="/doctors/dr-sophie-moore" className="display-block w-inline-block">
                                        <div className="card-picture-wrapper">
                                            <img
                                                src="src/assets/images/dr-sophie-moore-portrait.jpg"
                                                alt="Dr. Sophie Moore"
                                                sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1439px) 30vw, 412px"
                                                srcSet="
                                                    src/assets/images/dr-sophie-moore-portrait-p-500.jpg   500w,
                                                    src/assets/images/dr-sophie-moore-portrait-p-800.jpg   800w,
                                                    src/assets/images/dr-sophie-moore-portrait-p-1080.jpg 1080w,
                                                    src/assets/images/dr-sophie-moore-portrait.jpg        1648w
                                                "
                                                className="card-image"
                                            />
                                            <div className="card-details-flex-container doctors-card-tag v2">
                                                <div
                                                    className="badge-secondary small badge-special-left-bottom">Pediatrician
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="card-description doctors-description">
                                        <a href="/doctors/dr-sophie-moore"
                                           className="text-decoration-none w-inline-block">
                                            <h3 className="card-title-dark heading-h4-size mg-bottom-4px">Dr. Sophie
                                                Moore</h3>
                                        </a>
                                        <p className="color-neutral-600 mg-bottom-24px">Lorem ipsum dolor sit amet
                                            consectetur nisl enim quam faucibus ut in id.</p>
                                        <div className="card-details-flex-container doctors-card-tag">
                                            <a href="/doctors/dr-sophie-moore"
                                               className="btn-circle-secondary doctor-btn-circle w-inline-block">
                                                <div><FaPlus/></div>
                                            </a>
                                            <a href="tel:(414)809-4504"
                                               className="btn-circle-secondary doctor-btn-circle w-inline-block">
                                                <div><IoCall/></div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="listitem" className="w-dyn-item">
                                <div className="card">
                                    <a href="/doctors/dr-matt-cannon" className="display-block w-inline-block">
                                        <div className="card-picture-wrapper">
                                            <img
                                                src="src/assets/images/dr-matt-cannon-portrait.jpg"
                                                alt="Dr. Matt Cannon"
                                                sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1439px) 30vw, 412px"
                                                srcSet="
                                                    src/assets/images/dr-matt-cannon-portrait-p-500.jpg   500w,
                                                    src/assets/images/dr-matt-cannon-portrait-p-800.jpg   800w,
                                                    src/assets/images/dr-matt-cannon-portrait-p-1080.jpg 1080w,
                                                    src/assets/images/dr-matt-cannon-portrait.jpg        1648w
                                                "
                                                className="card-image"
                                            />
                                            <div className="card-details-flex-container doctors-card-tag v2">
                                                <div
                                                    className="badge-secondary small badge-special-left-bottom">Pulmonologist
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="card-description doctors-description">
                                        <a href="/doctors/dr-matt-cannon"
                                           className="text-decoration-none w-inline-block">
                                            <h3 className="card-title-dark heading-h4-size mg-bottom-4px">Dr. Matt
                                                Cannon</h3>
                                        </a>
                                        <p className="color-neutral-600 mg-bottom-24px">Lorem ipsum dolor sit amet
                                            consectetur nisl enim quam faucibus ut in id.</p>
                                        <div className="card-details-flex-container doctors-card-tag">
                                            <a href="/doctors/dr-matt-cannon"
                                               className="btn-circle-secondary doctor-btn-circle w-inline-block">
                                                <div><FaPlus/></div>
                                            </a>
                                            <a href="tel:(414)809-4504"
                                               className="btn-circle-secondary doctor-btn-circle w-inline-block">
                                                <div><IoCall/></div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="buttons-row center">
                        <a href="/doctors" className="btn-primary w-button"><span
                            className="doctr-custom-icon btn-icon-left"><IoPerson/></span>Meet our team</a>
                    </div>
                </div>
            </div>
            <div className="border-radius-40px border-radius-16px-mbl overflow-hidden">
                <div className="section bg-neutral-200">
                    <div className="container-default w-container">
                        <div className="inner-container _558px center">
                            <div className="text-center mg-bottom-40px">
                                <div className="subtitle">Our offices</div>
                                <h2 className="display-2">Come and visit us</h2>
                                <p className="mg-bottom-0">Lorem ipsum dolor sit amet consectetur commodo aliquam augue
                                    duis aliquet ipsum donec tempus ac interdum enim.</p>
                            </div>
                        </div>
                        <div className="mg-bottom-48px w-dyn-list">
                            <div role="list" className="grid-2-columns hospital-grid-card v1 w-dyn-items">
                                <div id="w-node-_689dcb3d-1cb9-034b-2602-b635987d9b67-f7a60c9c" role="listitem"
                                     className="flex w-dyn-item">
                                    <div className="card hospital-location-card v1">
                                        <div className="card-picture-wrapper hospital-card-picture v1 w-inline-block">
                                            <img
                                                src="src/assets/images/san-francisco-thumbnail-v2-image-location.jpg"
                                                alt="San Francisco, CA"
                                                sizes="(max-width: 479px) 100vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1439px) 47vw, 632px"
                                                srcSet="
                                                    src/assets/images/san-francisco-thumbnail-v2-image-location-p-500.jpg   500w,
                                                    src/assets/images/san-francisco-thumbnail-v2-image-location-p-800.jpg   800w,
                                                    src/assets/images/san-francisco-thumbnail-v2-image-location-p-1080.jpg 1080w,
                                                    src/assets/images/san-francisco-thumbnail-v2-image-location-p-1600.jpg 1600w,
                                                    src/assets/images/san-francisco-thumbnail-v2-image-location.jpg        2528w
                                                "
                                                className="card-image"
                                            />
                                        </div>
                                        <div className="card-description hospital-card-description v2">
                                            <div className="text-decoration-none w-inline-block"><h3
                                                className="card-title-dark display-4">San Francisco, CA</h3></div>
                                            <p className="color-neutral-600 mg-bottom-24px">Lorem ipsum dolor sit amet
                                                consectetur commodo aliquam augue duis aliquet ipsum donec tempus ac
                                                interdum enim.</p>
                                            <div className="w-layout-grid grid-3-columns info-grid-3-col v2">
                                                <div id="w-node-_689dcb3d-1cb9-034b-2602-b635987d9b73-f7a60c9c">
                                                    <div className="mg-bottom-12px mg-bottom-6px-mbl">
                                                        <div className="text-200 medium color-neutral-600">Phone
                                                            number
                                                        </div>
                                                    </div>
                                                    <a href="tel:(253)456-1189"
                                                       className="card-link color-neutral-600 w-inline-block">
                                                        <div className="link-text">(253) 456 - 1189</div>
                                                    </a>
                                                </div>
                                                <div id="w-node-_689dcb3d-1cb9-034b-2602-b635987d9b79-f7a60c9c"
                                                     className="divider-vertical info-line"></div>
                                                <div id="w-node-_689dcb3d-1cb9-034b-2602-b635987d9b7a-f7a60c9c">
                                                    <div>
                                                        <div className="mg-bottom-12px mg-bottom-6px-mbl">
                                                            <div className="text-200 medium color-neutral-600">Email
                                                                address
                                                            </div>
                                                        </div>
                                                        <a href="mailto:sanfrancisco@doctr.com"
                                                           className="card-link color-neutral-600 w-inline-block">
                                                            <div className="link-text">sanfrancisco@doctr.com</div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="w-node-_689dcb3d-1cb9-034b-2602-b635987d9b67-f7a60c9c" role="listitem"
                                     className="flex w-dyn-item">
                                    <div className="card hospital-location-card v1">
                                        <div className="card-picture-wrapper hospital-card-picture v1 w-inline-block">
                                            <img
                                                src="src/assets/images/mountain-view-thumbnail-v2-image-location.jpg"
                                                alt="Mountain View, CA"
                                                sizes="(max-width: 479px) 100vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1439px) 47vw, 632px"
                                                srcSet="
                                                    src/assets/images/mountain-view-thumbnail-v2-image-location-p-500.jpg   500w,
                                                    src/assets/images/mountain-view-thumbnail-v2-image-location-p-800.jpg   800w,
                                                    src/assets/images/mountain-view-thumbnail-v2-image-location-p-1080.jpg 1080w,
                                                    src/assets/images/mountain-view-thumbnail-v2-image-location-p-1600.jpg 1600w,
                                                    src/assets/images/mountain-view-thumbnail-v2-image-location-p-2000.jpg 2000w,
                                                    src/assets/images/mountain-view-thumbnail-v2-image-location.jpg        2528w
                                                "
                                                className="card-image"
                                            />
                                        </div>
                                        <div className="card-description hospital-card-description v2">
                                            <div className="text-decoration-none w-inline-block"><h3
                                                className="card-title-dark display-4">Mountain View, CA</h3></div>
                                            <p className="color-neutral-600 mg-bottom-24px">Lorem ipsum dolor sit amet
                                                consectetur commodo aliquam augue duis aliquet ipsum donec tempus ac
                                                interdum enim.</p>
                                            <div className="w-layout-grid grid-3-columns info-grid-3-col v2">
                                                <div id="w-node-_689dcb3d-1cb9-034b-2602-b635987d9b73-f7a60c9c">
                                                    <div className="mg-bottom-12px mg-bottom-6px-mbl">
                                                        <div className="text-200 medium color-neutral-600">Phone
                                                            number
                                                        </div>
                                                    </div>
                                                    <a href="tel:(253)456-1189"
                                                       className="card-link color-neutral-600 w-inline-block">
                                                        <div className="link-text">(253) 456 - 1189</div>
                                                    </a>
                                                </div>
                                                <div id="w-node-_689dcb3d-1cb9-034b-2602-b635987d9b79-f7a60c9c"
                                                     className="divider-vertical info-line"></div>
                                                <div id="w-node-_689dcb3d-1cb9-034b-2602-b635987d9b7a-f7a60c9c">
                                                    <div>
                                                        <div className="mg-bottom-12px mg-bottom-6px-mbl">
                                                            <div className="text-200 medium color-neutral-600">Email
                                                                address
                                                            </div>
                                                        </div>
                                                        <a href="mailto:mountainview@doctr.com"
                                                           className="card-link color-neutral-600 w-inline-block">
                                                            <div className="link-text">mountainview@doctr.com</div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            data-w-id="f3c17a3c-53fa-4e40-0312-36c01048eedf"
                            className="buttons-row center"
                        >
                            <a href="/booking" className="btn-primary w-button"><span
                                className="doctr-custom-icon btn-icon-left"><IoCall/></span>Book an appointment</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container-default w-container">
                    <div className="w-layout-grid grid-2-columns grid-faqs">
                        <div id="w-node-_35ad3736-35eb-c979-bece-4ee3a18e6c79-f7a60c9c"
                             className="sticky-top _24px-top static-mbl">
                            <div
                                id="w-node-_35ad3736-35eb-c979-bece-4ee3a18e6c7a-f7a60c9c"
                                className="inner-container _438px _100---tablet"
                            >
                                <div className="subtitle">FAQS</div>
                                <h2 className="display-2 mg-bottom-12px">Frequently asked questions</h2>
                                <p className="mg-bottom-0">Lorem ipsum dolor sit amet consectetur commodo aliquam augue
                                    duis aliquet ipsum.</p>
                            </div>
                        </div>
                        <div id="w-node-_35ad3736-35eb-c979-bece-4ee3a18e6c85-f7a60c9c">
                            <div className="accordion-item-wrapper v2 first">
                                <div className="accordion-image-left-wrapper">
                                    <div className="accordion-content-wrapper v2">
                                        <div className="accordion-header icon-inside">
                                            <h3 className="accordion-title display-4">How many hospital branches do you
                                                have?</h3>
                                            <div className="accordion-icon-wrapper">
                                                <div className="accordion-btn-line v2 vertical"></div>
                                                <div className="accordion-btn-line v2 horizontal"></div>
                                            </div>
                                        </div>
                                        <div className="acordion-body">
                                            <div className="accordion-spacer _12px"></div>
                                            <div className="inner-container _668px _100---tablet">
                                                <p className="mg-bottom-0">Lorem ipsum dolor sit amet consectetur
                                                    pellentesque in scelerisque fames at habitasse convallis dolor
                                                    scelerisque dictumst vitae lorem massa quisque.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item-wrapper v2">
                                <div className="accordion-image-left-wrapper">
                                    <div className="accordion-content-wrapper v2">
                                        <div className="accordion-header icon-inside">
                                            <h3 className="accordion-title display-4">What is the cost for an
                                                appointment?</h3>
                                            <div className="accordion-icon-wrapper">
                                                <div className="accordion-btn-line v2 vertical"></div>
                                                <div className="accordion-btn-line v2 horizontal"></div>
                                            </div>
                                        </div>
                                        <div className="acordion-body">
                                            <div className="accordion-spacer _12px"></div>
                                            <div className="inner-container _668px _100---tablet">
                                                <p className="mg-bottom-0">Lorem ipsum dolor sit amet consectetur
                                                    pellentesque in scelerisque fames at habitasse convallis dolor
                                                    scelerisque dictumst vitae lorem massa quisque.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item-wrapper v2">
                                <div className="accordion-image-left-wrapper">
                                    <div className="accordion-content-wrapper v2">
                                        <div className="accordion-header icon-inside">
                                            <h3 className="accordion-title display-4">What experience do your doctors
                                                have?</h3>
                                            <div className="accordion-icon-wrapper">
                                                <div className="accordion-btn-line v2 vertical"></div>
                                                <div className="accordion-btn-line v2 horizontal"></div>
                                            </div>
                                        </div>
                                        <div className="acordion-body">
                                            <div className="accordion-spacer _12px"></div>
                                            <div className="inner-container _668px _100---tablet">
                                                <p className="mg-bottom-0">Lorem ipsum dolor sit amet consectetur
                                                    pellentesque in scelerisque fames at habitasse convallis dolor
                                                    scelerisque dictumst vitae lorem massa quisque.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item-wrapper v2 last">
                                <div className="accordion-image-left-wrapper">
                                    <div className="accordion-content-wrapper v2">
                                        <div className="accordion-header icon-inside">
                                            <h3 className="accordion-title display-4">What medical specialities do you
                                                have?</h3>
                                            <div className="accordion-icon-wrapper">
                                                <div className="accordion-btn-line v2 vertical"></div>
                                                <div className="accordion-btn-line v2 horizontal"></div>
                                            </div>
                                        </div>
                                        <div className="acordion-body">
                                            <div className="accordion-spacer _12px"></div>
                                            <div className="inner-container _668px _100---tablet">
                                                <p className="mg-bottom-0">Lorem ipsum dolor sit amet consectetur
                                                    pellentesque in scelerisque fames at habitasse convallis dolor
                                                    scelerisque dictumst vitae lorem massa quisque.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BookSmalver/>
        </>
    )
}