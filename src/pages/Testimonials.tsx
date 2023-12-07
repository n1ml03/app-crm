import {ImFacebook, ImLinkedin2, ImTwitter} from "react-icons/im";
import {RiInstagramFill} from "react-icons/ri";
import {IoCall} from "react-icons/io5";
import {BookSmalver} from "@/components";

export const Testimonials = () => {
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

            <div className="section hero testimonial">
                <div className="container-default w-container">
                    <div className="mg-bottom-48px">
                        <div className="heading-flex align-bottom">
                            <div id="w-node-_45dd9066-30c9-374e-7d11-ef787d1052c1-f7a60d43"
                                 className="inner-container _670px _100-tablet">
                                <div id="w-node-_45dd9066-30c9-374e-7d11-ef787d1052c2-f7a60d43"
                                     className="subtitle">Testimonials
                                </div>
                                <h1 className="display-1 mg-bottom-0">What our great clients say about us</h1>
                            </div>
                            <div id="w-node-_45dd9066-30c9-374e-7d11-ef787d1052c6-f7a60d43"
                                 className="inner-container _446px _100-tablet">
                                <p className="mg-bottom-0">Lorem ipsum dolor sit amet consectetur ut neque sit volutpat
                                    massa lectus lectus consequat vivamus mi semper metus velit nunc gravida iaculis
                                    quam.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-layout-grid grid-3-columns gap-row-32px">
                        <div className="card testimonial-card">
                            <div className="avatar-circle _04 mg-bottom-24px">
                                <img src="src/assets/images/john-carter-testimonial-avatar-image.jpg"
                                     alt="John Carter Testimonial Avatar Image" className="avatar-image"/>
                            </div>
                            <div className="inner-container _260px _100---tablet"><h2 className="heading-h4-size">“The
                                care and service is exceptional”</h2></div>
                            <p className="mg-bottom-24px">Lorem ipsum dolor sit amet consectetur velit sed dignissim
                                viverra id lobortis egestas arcu senectus eleifend eu urna.</p>
                            <div className="mg-bottom-8px">
                                <div className="text-200 bold color-neutral-800">John Carter</div>
                            </div>
                            <div className="text-200 medium color-accent-1">Patient since 2024</div>
                        </div>
                        <div className="card testimonial-card">
                            <div className="avatar-circle _04 mg-bottom-24px">
                                <img src="src/assets/images/sandy-houston-testimonial-avatar-image.jpg"
                                     alt="Sandy Houston Testimonial Avatar Image" className="avatar-image"/>
                            </div>
                            <div className="inner-container _260px _100---tablet"><h2 className="heading-h4-size">“The
                                best app for medical appointments”</h2></div>
                            <p className="mg-bottom-24px">Lorem ipsum dolor sit amet consectetur velit sed dignissim
                                viverra id lobortis egestas arcu senectus eleifend eu urna.</p>
                            <div className="mg-bottom-8px">
                                <div className="text-200 bold color-neutral-800">Sandy Houston</div>
                            </div>
                            <div className="text-200 medium color-accent-1">Patient since 2022</div>
                        </div>
                        <div className="card testimonial-card">
                            <div className="avatar-circle _04 mg-bottom-24px">
                                <img src="src/assets/images/graham-hills-testimonial-avatar-image.jpg"
                                     alt="Graham Hills Testimonial Avatar Image" className="avatar-image"/>
                            </div>
                            <div className="inner-container _180px _100---tablet"><h2 className="heading-h4-size">“The
                                next-gen medical app”</h2></div>
                            <p className="mg-bottom-24px">Lorem ipsum dolor sit amet consectetur velit sed dignissim
                                viverra id lobortis egestas arcu senectus eleifend eu urna.</p>
                            <div className="mg-bottom-8px">
                                <div className="text-200 bold color-neutral-800">Graham Hills</div>
                            </div>
                            <div className="text-200 medium color-accent-1">Patient since 2021</div>
                        </div>
                        <div className="card testimonial-card">
                            <div className="avatar-circle _04 mg-bottom-24px">
                                <img src="src/assets/images/patrick-meyer-testimonial-avatar-image.jpg"
                                     alt="Patrick Meyer Testimonial Avatar Image" className="avatar-image"/>
                            </div>
                            <div className="inner-container _260px _100---tablet"><h2
                                className="heading-h4-size">“Superb medical resource”</h2></div>
                            <p className="mg-bottom-24px">Lorem ipsum dolor sit amet consectetur velit sed dignissim
                                viverra id lobortis egestas arcu senectus eleifend eu urna.</p>
                            <div className="mg-bottom-8px">
                                <div className="text-200 bold color-neutral-800">Patrick Meyer</div>
                            </div>
                            <div className="text-200 medium color-accent-1">Patient since 2020</div>
                        </div>
                        <div className="card testimonial-card">
                            <div className="avatar-circle _04 mg-bottom-24px">
                                <img src="src/assets/images/ella-lawrence-testimonial-avatar-image.jpg"
                                     alt="Ella Lawrence Testimonial Avatar Image" className="avatar-image"/>
                            </div>
                            <div className="inner-container _260px _100---tablet"><h2
                                className="heading-h4-size">“Excellent app for healthcare”</h2></div>
                            <p className="mg-bottom-24px">Lorem ipsum dolor sit amet consectetur velit sed dignissim
                                viverra id lobortis egestas arcu senectus eleifend eu urna.</p>
                            <div className="mg-bottom-8px">
                                <div className="text-200 bold color-neutral-800">Ella Lawrence</div>
                            </div>
                            <div className="text-200 medium color-accent-1">Patient since 2018</div>
                        </div>
                        <div className="card testimonial-card">
                            <div className="avatar-circle _04 mg-bottom-24px">
                                <img src="src/assets/images/joan-peterson-testimonial-avatar-image.jpg"
                                     alt="Joan Peterson Testimonial Avatar Image" className="avatar-image"/>
                            </div>
                            <div className="inner-container _180px _100---tablet"><h2 className="heading-h4-size">“A
                                must-have medical app”</h2></div>
                            <p className="mg-bottom-24px">Lorem ipsum dolor sit amet consectetur velit sed dignissim
                                viverra id lobortis egestas arcu senectus eleifend eu urna.</p>
                            <div className="mg-bottom-8px">
                                <div className="text-200 bold color-neutral-800">Joan Peterson</div>
                            </div>
                            <div className="text-200 medium color-accent-1">Patient since 2016</div>
                        </div>
                    </div>
                </div>
            </div>
            <BookSmalver/>
        </>
    )
}