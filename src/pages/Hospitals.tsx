import {ImArrowRight2, ImFacebook, ImLinkedin2, ImTwitter} from "react-icons/im"
import {IoCall} from "react-icons/io5"
import {RiInstagramFill} from "react-icons/ri"
import {BookSmalver} from "@/components";

export const Hospitals = () => {
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

            <div className="section hero hospitals">
                <div className="container-default w-container">
                    <div className="inner-container _700px center">
                        <div className="text-center mg-bottom-48px">
                            <div className="subtitle">Our locations</div>
                            <h1 className="display-1">Visit our locations</h1>
                            <div className="inner-container _518px center"><p className="mg-bottom-0">Lorem ipsum dolor
                                sit amet consectetur commodo aliquam augue duis aliquet ipsum donec tempus ac
                                interd.</p></div>
                        </div>
                    </div>
                    <div className="inner-container _1100px center">
                        <div className="w-dyn-list">
                            <div role="list" className="grid-1-column gap-row-32px w-dyn-items">
                                <div role="listitem" className="card hospital-location-card w-dyn-item">
                                    <div className="card-picture-wrapper hospital-card-picture">
                                        <img
                                            src="src/assets/images/san-francisco-thumbnail-image-location.jpg"
                                            alt="San Francisco, CA"
                                            sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1439px) 42vw, 480px"
                                            srcSet="
                                                src/assets/images/san-francisco-thumbnail-image-location-p-500.jpg 500w,
                                                src/assets/images/san-francisco-thumbnail-image-location.jpg       960w
                                            "
                                            className="card-image"
                                        />
                                    </div>
                                    <div className="card-description hospital-card-description">
                                        <h2 className="card-title-dark display-4 mg-bottom-16px">San Francisco, CA</h2>
                                        <p className="color-neutral-600 mg-bottom-40px-tablet">Lorem ipsum dolor sit
                                            amet consectetur commodo aliquam augue duis aliquet ipsum donec tempus ac
                                            interdum enim.</p>
                                        <div className="w-layout-grid grid-1-column gap-row-48px gap-row-32px-tablet">
                                            <div id="w-node-_7e8fa4f4-7e02-c990-db3b-062d11f26bec-f7a60d07"
                                                 className="flex align-center vertical-left-mbl">
                                                <div
                                                    className="w-layout-grid grid-2-columns info-grid-2-col icon-left-80px---vertical-mbl">
                                                    <div>
                                                        <img
                                                            alt="Contact Phone Icon"
                                                            loading="lazy"
                                                            src="src/assets/icons/contact-phone-icon.svg"
                                                            className="circle-icon _64px-mbl bg-light"
                                                        />
                                                    </div>
                                                    <div id="w-node-_7e8fa4f4-7e02-c990-db3b-062d11f26bf0-f7a60d07">
                                                        <div className="mg-bottom-8px">
                                                            <div className="text-200 medium">Phone number</div>
                                                        </div>
                                                        <a href="tel:(253)456-1189"
                                                           className="card-link color-neutral-600 w-inline-block">
                                                            <div className="link-text">(253) 456 - 1189</div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div id="w-node-_7e8fa4f4-7e02-c990-db3b-062d11f26bf6-f7a60d07"
                                                     className="divider-vertical info-line v2"></div>
                                                <div>
                                                    <div className="mg-bottom-8px">
                                                        <div className="text-200 medium">Email address</div>
                                                    </div>
                                                    <a href="mailto:sanfrancisco@doctr.com"
                                                       className="card-link color-neutral-600 w-inline-block">
                                                        <div className="link-text">sanfrancisco@doctr.com</div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div
                                                className="w-layout-grid grid-2-columns info-grid-2-col icon-left-80px---vertical-mbl">
                                                <img
                                                    alt="Contact Visit Us Icon"
                                                    loading="lazy"
                                                    src="src/assets/icons/contact-visit-us-icon.svg"
                                                    className="circle-icon _64px-mbl bg-light"
                                                />
                                                <div id="w-node-_7e8fa4f4-7e02-c990-db3b-062d11f26bff-f7a60d07">
                                                    <div className="color-neutral-800 mg-bottom-12px">680 47th St. San
                                                        Francisco, CA 90011
                                                    </div>
                                                    <div className="text-200">
                                                        <a href="/hospital/san-francisco-ca"
                                                           className="card-link color-neutral-600 blue w-inline-block">
                                                            <div className="link-text">Visit location</div>
                                                            <div className="line-rounded-icon card-arrow-right">
                                                                <ImArrowRight2/></div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="card hospital-location-card w-dyn-item">
                                    <div className="card-picture-wrapper hospital-card-picture">
                                        <img
                                            src="src/assets/images/mountain-view-thumbnail-image-location.jpg"
                                            alt="Mountain View, CA"
                                            sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1439px) 42vw, 480px"
                                            srcSet="
                                                src/assets/images/mountain-view-thumbnail-image-location-p-500.jpg 500w,
                                                src/assets/images/mountain-view-thumbnail-image-location.jpg       960w
                                            "
                                            className="card-image"
                                        />
                                    </div>
                                    <div className="card-description hospital-card-description">
                                        <h2 className="card-title-dark display-4 mg-bottom-16px">Mountain View, CA</h2>
                                        <p className="color-neutral-600 mg-bottom-40px-tablet">Lorem ipsum dolor sit
                                            amet consectetur commodo aliquam augue duis aliquet ipsum donec tempus ac
                                            interdum enim.</p>
                                        <div className="w-layout-grid grid-1-column gap-row-48px gap-row-32px-tablet">
                                            <div id="w-node-_7e8fa4f4-7e02-c990-db3b-062d11f26bec-f7a60d07"
                                                 className="flex align-center vertical-left-mbl">
                                                <div
                                                    className="w-layout-grid grid-2-columns info-grid-2-col icon-left-80px---vertical-mbl">
                                                    <div>
                                                        <img
                                                            alt="Contact Phone Icon"
                                                            loading="lazy"
                                                            src="src/assets/icons/contact-phone-icon.svg"
                                                            className="circle-icon _64px-mbl bg-light"
                                                        />
                                                    </div>
                                                    <div id="w-node-_7e8fa4f4-7e02-c990-db3b-062d11f26bf0-f7a60d07">
                                                        <div className="mg-bottom-8px">
                                                            <div className="text-200 medium">Phone number</div>
                                                        </div>
                                                        <a href="tel:(253)456-1189"
                                                           className="card-link color-neutral-600 w-inline-block">
                                                            <div className="link-text">(253) 456 - 1189</div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div id="w-node-_7e8fa4f4-7e02-c990-db3b-062d11f26bf6-f7a60d07"
                                                     className="divider-vertical info-line v2"></div>
                                                <div>
                                                    <div className="mg-bottom-8px">
                                                        <div className="text-200 medium">Email address</div>
                                                    </div>
                                                    <a href="mailto:mountainview@doctr.com"
                                                       className="card-link color-neutral-600 w-inline-block">
                                                        <div className="link-text">mountainview@doctr.com</div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div
                                                className="w-layout-grid grid-2-columns info-grid-2-col icon-left-80px---vertical-mbl">
                                                <img
                                                    alt="Contact Visit Us Icon"
                                                    loading="lazy"
                                                    src="src/assets/icons/contact-visit-us-icon.svg"
                                                    className="circle-icon _64px-mbl bg-light"
                                                />
                                                <div id="w-node-_7e8fa4f4-7e02-c990-db3b-062d11f26bff-f7a60d07">
                                                    <div className="color-neutral-800 mg-bottom-12px">384 San Antonio RD
                                                        Mountain View, CA 94040
                                                    </div>
                                                    <div className="text-200">
                                                        <a data-w-id="7e8fa4f4-7e02-c990-db3b-062d11f26c02"
                                                           href="/hospital/mountain-view-ca"
                                                           className="card-link color-neutral-600 blue w-inline-block">
                                                            <div className="link-text">Visit location</div>
                                                            <div className="line-rounded-icon card-arrow-right">
                                                                <ImArrowRight2/></div>
                                                        </a>
                                                    </div>
                                                </div>
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