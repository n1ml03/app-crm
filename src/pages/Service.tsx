import {ImArrowRight2, ImFacebook, ImLinkedin2, ImTwitter} from "react-icons/im"
import {IoCall} from "react-icons/io5"
import {RiInstagramFill} from "react-icons/ri"
import {BookSmalver} from "@/components";

export const Service = () => {
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

            <div className="section hero services">
                <div className="container-default w-container">
                    <div className="inner-container _662px center">
                        <div className="text-center mg-bottom-48px">
                            <div className="subtitle">Specialities</div>
                            <h2 className="display-1">Medical specialities</h2>
                            <div className="inner-container _518px center"><p>Lorem ipsum dolor sit amet consectetur
                                commodo aliquam augue duis aliquet ipsum donec tempus ac int.</p></div>
                        </div>
                    </div>
                    <div className="w-dyn-list">
                        <div role="list" className="grid-3-columns card-grid-3-cols w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                                <a href="/services/pediatric"
                                   className="card card-link-icon-top border-neutral-300 w-inline-block">
                                    <div className="card-picture-wrapper specialities-picture"><img
                                        src="src/assets/icons/pediatric-icon.svg" alt="Pediatric"
                                        className="card-image"/></div>
                                    <div>
                                        <h2 className="card-title-dark display-4 mg-bottom-8px">Pediatric</h2>
                                        <p className="color-neutral-600 mg-bottom-24px">Lorem ipsum dolor sit amet
                                            consectetur sit dignissim pellentesque egestas.</p>
                                        <div className="card-link color-neutral-600">
                                            <div className="link-text">Learn more</div>
                                            <div className="line-rounded-icon card-arrow-right"><ImArrowRight2/></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div role="listitem" className="w-dyn-item">
                                <a href="/services/cardiology"
                                   className="card card-link-icon-top border-neutral-300 w-inline-block">
                                    <div className="card-picture-wrapper specialities-picture"><img
                                        src="src/assets/icons/cardiology-icon.svg" alt="Cardiology"
                                        className="card-image"/></div>
                                    <div>
                                        <h2 className="card-title-dark display-4 mg-bottom-8px">Cardiology</h2>
                                        <p className="color-neutral-600 mg-bottom-24px">Lorem ipsum dolor sit amet
                                            consectetur sit dignissim pellentesque egestas.</p>
                                        <div className="card-link color-neutral-600">
                                            <div className="link-text">Learn more</div>
                                            <div className="line-rounded-icon card-arrow-right"><ImArrowRight2/></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div role="listitem" className="w-dyn-item">
                                <a href="/services/ophthalmology"
                                   className="card card-link-icon-top border-neutral-300 w-inline-block">
                                    <div className="card-picture-wrapper specialities-picture"><img
                                        src="src/assets/icons/ophthalmology-icon.svg" alt="Ophthalmology"
                                        className="card-image"/></div>
                                    <div>
                                        <h2 className="card-title-dark display-4 mg-bottom-8px">Ophthalmology</h2>
                                        <p className="color-neutral-600 mg-bottom-24px">Lorem ipsum dolor sit amet
                                            consectetur sit dignissim pellentesque egestas.</p>
                                        <div className="card-link color-neutral-600">
                                            <div className="link-text">Learn more</div>
                                            <div className="line-rounded-icon card-arrow-right"><ImArrowRight2/></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div role="listitem" className="w-dyn-item">
                                <a href="/services/pathology"
                                   className="card card-link-icon-top border-neutral-300 w-inline-block">
                                    <div className="card-picture-wrapper specialities-picture"><img
                                        src="src/assets/icons/phatalogy-icon.svg" alt="Pathology"
                                        className="card-image"/></div>
                                    <div>
                                        <h2 className="card-title-dark display-4 mg-bottom-8px">Pathology</h2>
                                        <p className="color-neutral-600 mg-bottom-24px">Lorem ipsum dolor sit amet
                                            consectetur sit dignissim pellentesque egestas.</p>
                                        <div className="card-link color-neutral-600">
                                            <div className="link-text">Learn more</div>
                                            <div className="line-rounded-icon card-arrow-right"><ImArrowRight2/></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div role="listitem" className="w-dyn-item">
                                <a href="/services/pulmonology"
                                   className="card card-link-icon-top border-neutral-300 w-inline-block">
                                    <div className="card-picture-wrapper specialities-picture"><img
                                        src="src/assets/icons/pulmonology-icon.svg" alt="Pulmonology"
                                        className="card-image"/></div>
                                    <div>
                                        <h2 className="card-title-dark display-4 mg-bottom-8px">Pulmonology</h2>
                                        <p className="color-neutral-600 mg-bottom-24px">Lorem ipsum dolor sit amet
                                            consectetur sit dignissim pellentesque egestas.</p>
                                        <div className="card-link color-neutral-600">
                                            <div className="link-text">Learn more</div>
                                            <div className="line-rounded-icon card-arrow-right"><ImArrowRight2/></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div role="listitem" className="w-dyn-item">
                                <a href="/services/orthopedic"
                                   className="card card-link-icon-top border-neutral-300 w-inline-block">
                                    <div className="card-picture-wrapper specialities-picture"><img
                                        src="src/assets/icons/orthopedic-icon.svg" alt="Orthopedic"
                                        className="card-image"/></div>
                                    <div>
                                        <h2 className="card-title-dark display-4 mg-bottom-8px">Orthopedic</h2>
                                        <p className="color-neutral-600 mg-bottom-24px">Lorem ipsum dolor sit amet
                                            consectetur sit dignissim pellentesque egestas.</p>
                                        <div className="card-link color-neutral-600">
                                            <div className="link-text">Learn more</div>
                                            <div className="line-rounded-icon card-arrow-right"><ImArrowRight2/></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div role="listitem" className="w-dyn-item">
                                <a href="/services/generalmedicine"
                                   className="card card-link-icon-top border-neutral-300 w-inline-block">
                                    <div className="card-picture-wrapper specialities-picture"><img
                                        src="src/assets/icons/general-medicine-icon.svg" alt="General medicine"
                                        className="card-image"/></div>
                                    <div>
                                        <h2 className="card-title-dark display-4 mg-bottom-8px">General medicine</h2>
                                        <p className="color-neutral-600 mg-bottom-24px">Lorem ipsum dolor sit amet
                                            consectetur sit dignissim pellentesque egestas.</p>
                                        <div className="card-link color-neutral-600">
                                            <div className="link-text">Learn more</div>
                                            <div className="line-rounded-icon card-arrow-right"><ImArrowRight2/></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div role="listitem" className="w-dyn-item">
                                <a href="/services/oncology"
                                   className="card card-link-icon-top border-neutral-300 w-inline-block">
                                    <div className="card-picture-wrapper specialities-picture"><img
                                        src="src/assets/icons/oncology-icon.svg" alt="Oncology"
                                        className="card-image"/></div>
                                    <div>
                                        <h2 className="card-title-dark display-4 mg-bottom-8px">Oncology</h2>
                                        <p className="color-neutral-600 mg-bottom-24px">Lorem ipsum dolor sit amet
                                            consectetur sit dignissim pellentesque egestas.</p>
                                        <div className="card-link color-neutral-600">
                                            <div className="link-text">Learn more</div>
                                            <div className="line-rounded-icon card-arrow-right"><ImArrowRight2/></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div role="listitem" className="w-dyn-item">
                                <a href="/services/gastroenterology"
                                   className="card card-link-icon-top border-neutral-300 w-inline-block">
                                    <div className="card-picture-wrapper specialities-picture"><img
                                        src="src/assets/icons/gastroenterology-icon.svg" alt="Gastroenterology"
                                        className="card-image"/></div>
                                    <div>
                                        <h2 className="card-title-dark display-4 mg-bottom-8px">Gastroenterology</h2>
                                        <p className="color-neutral-600 mg-bottom-24px">Lorem ipsum dolor sit amet
                                            consectetur sit dignissim pellentesque egestas.</p>
                                        <div className="card-link color-neutral-600">
                                            <div className="link-text">Learn more</div>
                                            <div className="line-rounded-icon card-arrow-right"><ImArrowRight2/></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div role="listitem" className="w-dyn-item">
                                <a href="/services/neurology"
                                   className="card card-link-icon-top border-neutral-300 w-inline-block">
                                    <div className="card-picture-wrapper specialities-picture"><img
                                        src="src/assets/icons/neurology-icon.svg" alt="Neurology"
                                        className="card-image"/></div>
                                    <div>
                                        <h2 className="card-title-dark display-4 mg-bottom-8px">Neurology</h2>
                                        <p className="color-neutral-600 mg-bottom-24px">Lorem ipsum dolor sit amet
                                            consectetur sit dignissim pellentesque egestas.</p>
                                        <div className="card-link color-neutral-600">
                                            <div className="link-text">Learn more</div>
                                            <div className="line-rounded-icon card-arrow-right"><ImArrowRight2/></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div role="listitem" className="w-dyn-item">
                                <a href="/services/nutrition"
                                   className="card card-link-icon-top border-neutral-300 w-inline-block">
                                    <div className="card-picture-wrapper specialities-picture"><img
                                        src="src/assets/icons/nutrition-icon.svg" alt="Nutrition"
                                        className="card-image"/></div>
                                    <div>
                                        <h2 className="card-title-dark display-4 mg-bottom-8px">Nutrition</h2>
                                        <p className="color-neutral-600 mg-bottom-24px">Lorem ipsum dolor sit amet
                                            consectetur sit dignissim pellentesque egestas.</p>
                                        <div className="card-link color-neutral-600">
                                            <div className="link-text">Learn more</div>
                                            <div className="line-rounded-icon card-arrow-right"><ImArrowRight2/></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div role="listitem" className="w-dyn-item">
                                <a href="/services/plastic-surgeons"
                                   className="card card-link-icon-top border-neutral-300 w-inline-block">
                                    <div className="card-picture-wrapper specialities-picture"><img
                                        src="src/assets/icons/plastic-surgeons-icon.svg" alt="Plastic surgeons"
                                        className="card-image"/></div>
                                    <div>
                                        <h2 className="card-title-dark display-4 mg-bottom-8px">Plastic surgeons</h2>
                                        <p className="color-neutral-600 mg-bottom-24px">Lorem ipsum dolor sit amet
                                            consectetur sit dignissim pellentesque egestas.</p>
                                        <div className="card-link color-neutral-600">
                                            <div className="link-text">Learn more</div>
                                            <div className="line-rounded-icon card-arrow-right"><ImArrowRight2/></div>
                                        </div>
                                    </div>
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