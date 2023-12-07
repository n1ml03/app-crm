import {IoCall, IoPerson} from "react-icons/io5"
import {HiOutlineMagnifyingGlass} from "react-icons/hi2";
import {FaPlus, FaRegStar} from "react-icons/fa6";
import {ImFacebook, ImLinkedin2, ImTwitter} from "react-icons/im";
import {RiInstagramFill} from "react-icons/ri";
import {BookSmalver} from "@/components";

export const Pediatric = () => {
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
                                        <li className="header-nav-list-item left"><a href="/home"
                                                                                     className="header-nav-link tablet w-nav-link">Home</a>
                                        </li>
                                        <li className="header-nav-list-item left"><a href="/about"
                                                                                     className="header-nav-link tablet w-nav-link">About</a>
                                        </li>
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

            <div className="section hero service-single">
                <div className="container-default w-container">
                    <div className="mg-bottom-64px mg-bottom-40px-mbl">
                        <div className="heading-flex align-bottom gap-row-32px">
                            <div className="services-cms---hero-title">
                                <img src="src/assets/icons/cardiology-icon.svg" alt=""
                                     className="circle-icon _64px-mbl"/>
                                <div>
                                    <h1 className="display-1 mg-bottom-0">Cardiology</h1>
                                    <div id="w-node-_8da0e07f-6029-bdd7-ede2-900145eee3bc-f7a60ccb"
                                         className="inner-container _560px _100---mbl">
                                        <p className="mg-bottom-0">Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                            <a href="/doctors" className="btn-primary w-button"><span
                                className="doctr-custom-icon btn-icon-left"><HiOutlineMagnifyingGlass/></span>Find
                                doctors</a>
                        </div>
                    </div>
                    <div className="image-full-width-right service-single">
                        <img
                            loading="eager"
                            alt="Pediatric"
                            src="src/assets/images/pediatrics-main-image.jpg"
                            sizes="(max-width: 479px) 96vw, (max-width: 767px) 97vw, 98vw"
                            srcSet="
                            src/assets/images/pediatrics-main-image-p-500.jpg   500w,
                            src/assets/images/pediatrics-main-image-p-800.jpg   800w,
                            src/assets/images/pediatrics-main-image-p-1080.jpg 1080w,
                            src/assets/images/pediatrics-main-image-p-1600.jpg 1600w,
                            src/assets/images/pediatrics-main-image.jpg        2732w
                            "
                            className="fit-cover _w-h-100 fit-position-top"
                        />
                    </div>
                    <div className="z-index-1">
                        <div className="w-layout-grid grid-2-columns service-single-grid-2-col">
                            <div className="service-single-hero-col-left">
                                <div className="inner-container _742px _100-tablet">
                                    <div className="rich-text w-richtext">
                                        <h2>About the speciality</h2>
                                        <p>
                                            Amet mauris lectus a facilisi elementum ornare id sed sed aliquet dolor
                                            elementum magnis quisque id ultrices viverra cursus nunc odio in egestas
                                            consectetur cras lorem consequat sodales netus
                                            pretium feugiat nulla semper senectus bibendum ornare sit adipiscing ut atid
                                            viverra donec nund donec pulvinar enim ac habitasse fermentum.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur aliquet faucibus semper tincidunt
                                            consequat massa urna tellus eu enim blandit amet orci luctus pharetra
                                            pharetra pellentesque id velit bibendum urna quam
                                            tristique id ante purus quam ac varius.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="service-single-hero-col-right">
                                <div className="form-container service-single">
                                    <div>
                                        <div className="display-4 mg-bottom-16px">Receive a call from our doctors</div>
                                        <p className="mg-bottom-24px">Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit, sed do eiusmod tempor.</p>
                                    </div>
                                    <div className="_3-inputs-and-button-form w-form">
                                        <form
                                            id="wf-form-Services-Form"
                                            name="wf-form-Services-Form"
                                            data-name="Services Form"
                                            method="get"
                                            data-wf-page-id="64b5aaead25fc7fff7a60ccb"
                                            data-wf-element-id="c5923404-7336-ed44-4f46-2f4c5f89b8a2"
                                        >
                                            <div className="w-layout-grid grid-1-column">
                                                <div className="position-relative">
                                                    <input type="text" className="input w-input" name="Name"
                                                           data-name="Name" placeholder="John Carter" id="Name-2"/>
                                                    <div className="floating-item icon"><img
                                                        src="src/assets/icons/user-icon-blue.svg"
                                                        alt="User Icon Blue "/></div>
                                                </div>
                                                <div className="position-relative">
                                                    <input type="email" className="input w-input" name="Email"
                                                           data-name="Email" placeholder="example@email.com"
                                                           id="email"/>
                                                    <div className="floating-item icon"><img
                                                        src="src/assets/icons/email-icon-font.svg"
                                                        alt="Email Icon Font "/></div>
                                                </div>
                                                <div className="position-relative">
                                                    <input type="tel" className="input w-input" name="Phone"
                                                           data-name="Phone" placeholder="(123) 456 -7890"
                                                           id="Phone-2"/>
                                                    <div className="floating-item icon"><img
                                                        src="src/assets/icons/phone-icon-font-v2.svg"
                                                        alt="Phone Icon Font V2 "/></div>
                                                </div>
                                                <div id="w-node-c5923404-7336-ed44-4f46-2f4c5f89b8b4-f7a60ccb"
                                                     className="mg-top-8px">
                                                    <input type="submit" value="Send message" data-wait="Please wait..."
                                                           id="w-node-c5923404-7336-ed44-4f46-2f4c5f89b8b5-f7a60ccb"
                                                           className="btn-primary width-100 w-button"/>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="success-message contact-form w-form-done">
                                            <div>
                                                <div
                                                    className="line-rounded-icon success-message-check large">�&nbsp;�
                                                </div>
                                                <h3 className="display-4">Thank you</h3>
                                                <div>Thanks for reaching out. We will get back to you soon.</div>
                                            </div>
                                        </div>
                                        <div className="error-message w-form-fail">
                                            <div>Oops! Something went wrong</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-default w-container">
                <div className="divider _0px"></div>
            </div>
            <div id="doctors" className="section pd-top-and-bottom-150px overflow-hidden">
                <div className="container-default w-container">
                    <div className="mg-bottom-48px">
                        <div className="w-layout-grid grid-2-columns title-and-buttons">
                            <h2 id="w-node-_065e38be-fc1d-f75c-cb58-5590db3afa8f-f7a60ccb"
                                className="display-2 mg-bottom-0">Cardiologists</h2>
                            <div id="w-node-_7553c76a-bff7-45bd-e1b6-cd3f0b817ca6-f7a60ccb">
                                <a href="/doctors" className="btn-secondary w-button"><span
                                    className="doctr-custom-icon btn-icon-left"><IoPerson/></span>Browse all doctors</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-dyn-list">
                        <div role="list" className="grid-3-columns card-grid-3-cols w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                                <div className="card">
                                    <a href="/doctors/dr-sophie-moore" className="display-block w-inline-block">
                                        <div className="card-picture-wrapper">
                                            <img
                                                src="src/assets/images/dr-sophie-moore-portrait.jpg"
                                                alt="Dr. Sophie Moore"
                                                sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 46vw, (max-width: 1439px) 30vw, 412px"
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
                                                    className="badge-secondary small badge-special-left-bottom">Cardiologists
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="card-description doctors-description">
                                        <a href="/doctors/dr-sophie-moore"
                                           className="text-decoration-none w-inline-block">
                                            <h2 className="card-title-dark heading-h4-size mg-bottom-8px">Dr. Sophie
                                                Moore</h2>
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
                                    <a href="/doctors/dr-lily-woods" className="display-block w-inline-block">
                                        <div className="card-picture-wrapper">
                                            <img
                                                src="src/assets/images/dr-lily-woods-portrait.jpg"
                                                alt="Dr. Lily Woods"
                                                sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 46vw, (max-width: 1439px) 30vw, 412px"
                                                srcSet="
                                                src/assets/images/dr-lily-woods-portrait-p-500.jpg   500w,
                                                src/assets/images/dr-lily-woods-portrait-p-800.jpg   800w,
                                                src/assets/images/dr-lily-woods-portrait-p-1080.jpg 1080w,
                                                src/assets/images/dr-lily-woods-portrait.jpg        1648w
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
                                        <a href="/doctors/dr-lily-woods"
                                           className="text-decoration-none w-inline-block">
                                            <h2 className="card-title-dark heading-h4-size mg-bottom-8px">Dr. Lily
                                                Woods</h2>
                                        </a>
                                        <p className="color-neutral-600 mg-bottom-24px">Lorem ipsum dolor sit amet
                                            consectetur nisl enim quam faucibus ut in id.</p>
                                        <div className="card-details-flex-container doctors-card-tag">
                                            <a href="/doctors/dr-lily-woods"
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
                </div>
            </div>
            <div className="container-default w-container">
                <div className="divider _0px"></div>
            </div>
            <div className="section pd-top-and-bottom-150px overflow-hidden">
                <div className="container-default w-container">
                    <div className="mg-bottom-48px">
                        <div className="w-layout-grid grid-2-columns title-and-buttons">
                            <div id="w-node-_8c1c1377-7ea2-0d2f-b4e4-09cd6d3f5449-f7a60ccb"
                                 className="inner-container _690px"><h2 className="display-2 mg-bottom-0">More
                                specialities</h2></div>
                            <div id="w-node-_8c1c1377-7ea2-0d2f-b4e4-09cd6d3f544c-f7a60ccb">
                                <a href="/services" className="btn-secondary w-button"><span
                                    className="doctr-custom-icon btn-icon-left"><FaRegStar/></span>Browse all
                                    specialities</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-dyn-list">
                        <div role="list" className="grid-4-columns card-grid-4-cols w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                                <a href="/services/cardiology"
                                   className="card card-link-icon-top border-neutral-300 w-inline-block">
                                    <div className="card-picture-wrapper specialities-picture"><img
                                        src="src/assets/icons/cardiology-icon.svg" alt="Cardiology"
                                        className="card-image"/></div>
                                    <h2 className="card-title-dark display-4 mg-bottom-0">Cardiology</h2>
                                </a>
                            </div>
                            <div role="listitem" className="w-dyn-item">
                                <a href="/services/ophthalmology"
                                   className="card card-link-icon-top border-neutral-300 w-inline-block">
                                    <div className="card-picture-wrapper specialities-picture"><img
                                        src="src/assets/icons/ophthalmology-icon.svg" alt="Ophthalmology"
                                        className="card-image"/></div>
                                    <h2 className="card-title-dark display-4 mg-bottom-0">Ophthalmology</h2>
                                </a>
                            </div>
                            <div role="listitem" className="w-dyn-item">
                                <a href="/services/pathology"
                                   className="card card-link-icon-top border-neutral-300 w-inline-block">
                                    <div className="card-picture-wrapper specialities-picture"><img
                                        src="src/assets/icons/phatalogy-icon.svg" alt="Pathology"
                                        className="card-image"/></div>
                                    <h2 className="card-title-dark display-4 mg-bottom-0">Pathology</h2>
                                </a>
                            </div>
                            <div role="listitem" className="w-dyn-item">
                                <a href="/services/pulmonology"
                                   className="card card-link-icon-top border-neutral-300 w-inline-block">
                                    <div className="card-picture-wrapper specialities-picture"><img
                                        src="src/assets/icons/pulmonology-icon.svg" alt="Pulmonology"
                                        className="card-image"/></div>
                                    <h2 className="card-title-dark display-4 mg-bottom-0">Pulmonology</h2>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BookSmalver/>
        </>
    )
}