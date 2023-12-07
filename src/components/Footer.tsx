import {ImFacebook, ImLinkedin2, ImTwitter} from "react-icons/im";
import {RiInstagramFill} from "react-icons/ri";

export const Footer = () => {
    return (
        <>
            <footer className="footer-wrapper">
                <div className="container-default w-container">
                    <div className="footer-top">
                        <div className="menu-main-wrapper">
                            <div id="w-node-_663f362b-bae3-1417-ab7a-7defe1940c68-91dd5701"
                                 className="menu-wrapper _01">
                                <div id="w-node-_663f362b-bae3-1417-ab7a-7defe1940c69-91dd5701"
                                     className="inner-container _418px _100-tablet">
                                    <a href="/home" className="footer-logo-wrapper w-inline-block">
                                        <img src="src/assets/icons/logo-web-white.svg" alt="Doctr X Webflow Template"/>
                                    </a>
                                    <p className="color-neutral-300 mg-bottom-24px">Lorem ipsum dolor sit amet
                                        consectetur elit eget eu enim ante eget curabitur auctor arcu.</p>
                                    <div className="social-media-flex-container gap-column-16px">
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
                                    <div className="divider white-10 footer"></div>
                                    <div className="mg-bottom-32px mg-bottom-20px-tablet">
                                        <div className="text-300 bold color-neutral-100">Sign up for our newsletter
                                        </div>
                                    </div>
                                    <div className="inner-container _412px _100---tablet">
                                        <div className="form-container footer-v1">
                                            <div className="mg-bottom-0 w-form">
                                                <form
                                                    id="wf-form-Footer-Subscribe"
                                                    name="wf-form-Footer-Subscribe"
                                                    data-name="Footer Subscribe"
                                                    method="get"
                                                    data-wf-page-id="64b5aaead25fc7fff7a60d05"
                                                    data-wf-element-id="663f362b-bae3-1417-ab7a-7defe1940c80"
                                                >
                                                    <div className="position-relative">
                                                        <div className="position-relative">
                                                            <input type="email" className="input small w-input"
                                                                   name="Footer-Email" data-name="Footer Email"
                                                                   placeholder="Enter your email" id="Footer-Email-3"/>
                                                            <div className="floating-item icon">
                                                                <img src="src/assets/icons/email-icon-font.svg"
                                                                     alt="Email Icon Font"/>
                                                            </div>
                                                        </div>
                                                        <div id="w-node-_641519a9-ecc3-361d-708c-d5dcb4f7ee18-91dd5701"
                                                             className="mg-top-16px---mbp">
                                                            <input type="submit" value="Subscribe"
                                                                   data-wait="Please wait..."
                                                                   className="btn-primary inside-input default w-button"/>
                                                        </div>
                                                    </div>
                                                </form>
                                                <div className="success-message footer-v1 w-form-done">
                                                    <div>Thanks for joining our newsletter.</div>
                                                </div>
                                                <div className="error-message w-form-fail">
                                                    <div>Oops! Something went wrong while submitting the form.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="w-node-_663f362b-bae3-1417-ab7a-7defe1940c8c-91dd5701" className="menu-wrapper">
                                <div className="inner-container _300px">
                                    <div className="text-300 bold footer-title">Main pages</div>
                                    <div className="nav-content">
                                        <ul role="list" className="nav-menu-list-wrapper">
                                            <li className="nav-menu-list-item"><a href="/home"
                                                                                  className="nav-link white">Home</a>
                                            </li>
                                            <li className="nav-menu-list-item"><a href="/about"
                                                                                  className="nav-link white">About</a>
                                            </li>
                                            <li className="nav-menu-list-item"><a href="/doctors"
                                                                                  className="nav-link white">Doctors</a>
                                            </li>
                                            <li className="nav-menu-list-item"><a href="/blogs"
                                                                                  className="nav-link white">Blogs</a>
                                            </li>
                                        </ul>
                                        <ul role="list" className="nav-menu-list-wrapper">
                                            <li className="nav-menu-list-item"><a href="/contact"
                                                                                  className="nav-link white">Contact</a>
                                            </li>
                                            <li className="nav-menu-list-item"><a href="/packages"
                                                                                  className="nav-link white">Packages</a>
                                            </li>
                                            <li className="nav-menu-list-item"><a href="/hospitals"
                                                                                  className="nav-link white">Hospitals</a>
                                            </li>
                                            <li className="nav-menu-list-item"><a href="/services"
                                                                                  className="nav-link white">Services</a>
                                            </li>
                                            <li className="nav-menu-list-item last"><a
                                                href="/client/src/pages/Testimonials"
                                                className="nav-link white">Testimonials</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-wrapper">
                                <div className="inner-container _138px">
                                    <div className="text-300 bold footer-title">Utility pages</div>
                                    <div>
                                        <ul role="list" className="nav-menu-list-wrapper">
                                            <li className="nav-menu-list-item"><a href="/coming-soon"
                                                                                  className="nav-link white">Coming
                                                soon</a></li>
                                            <li className="nav-menu-list-item"><a href="/faqs"
                                                                                  className="nav-link white">FAQS</a>
                                            </li>
                                            <li className="nav-menu-list-item"><a href="/booking"
                                                                                  className="nav-link white">Booking</a>
                                            </li>
                                            <li className="nav-menu-list-item"><a href="/insurance"
                                                                                  className="nav-link white">Insurance</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p className="color-neutral-300 mg-bottom-0">
                            Copyright Namle <a href="" target="_blank"
                                               className="hover-color-neutral-100">NamLesiuuuuu</a> - Powered by
                            <a href="" target="_blank" className="hover-color-neutral-100"> NamLe</a>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

