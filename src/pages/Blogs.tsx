import {FaMagnifyingGlass} from "react-icons/fa6"
import {ImArrowRight2, ImFacebook, ImLinkedin2, ImTwitter} from "react-icons/im"
import {IoCall} from "react-icons/io5"
import {RiInstagramFill} from "react-icons/ri"
import {BookSmalver} from "@/components";


export const Blogs = () => {
    return (
        <>
            <div className="position-relative">
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
                                        <div className="social-icon-font font-size-20px-mbl"><RiInstagramFill/></div>
                                    </a>
                                    <a href="https://www.linkedin.com/" target="_blank"
                                       className="social-icon-single white w-inline-block">
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

            <div className="section hero blog-v1">
                <div className="container-default w-container">
                    <div className="z-index-1">
                        <div className="mg-bottom-72px">
                            <div className="w-layout-grid grid-2-columns title-and-search">
                                <div id="w-node-fcefa1d7-32f7-ef81-a3ac-6bf361c78f1e-f7a60ca1">
                                    <div className="subtitle">Our blog</div>
                                    <h1 className="display-1 color-neutral-100 mg-bottom-0">News &amp; articles</h1>
                                </div>
                                <div className="inner-container _420px _100---tablet">
                                    <form action="/search" className="position-relative mg-bottom-0 w-form">
                                        <div className="position-relative">
                                            <input type="search" className="input button-inside w-input" name="query"
                                                   placeholder="Search for articles" id="search"/>
                                            <div className="line-rounded-icon search-input default"><FaMagnifyingGlass/>
                                            </div>
                                        </div>
                                        <input type="submit" value="Search"
                                               className="btn-primary inside-input default w-button"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="mg-bottom-32px w-dyn-list">
                            <div role="list" className="w-dyn-items">
                                <div role="listitem" className="w-dyn-item">
                                    <a href="/blogs/hearthealth" className="card blog-v1-main-card w-inline-block">
                                        <div id="w-node-_8bf90f25-30e3-fe98-3dff-a50170b11aa9-f7a60ca1"
                                             className="card-picture-wrapper">
                                            <img
                                                src="src/assets/images/heart-health-thumbnail-V3-image.jpg"
                                                alt="3 simple and easy steps to jump-start your heart health"
                                                sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1439px) 44vw, 593.6171875px"
                                                srcSet="
                                                        src/assets/images/heart-health-thumbnail-V3-image-p-500.jpg   500w,
                                                        src/assets/images/heart-health-thumbnail-V3-image-p-800.jpg   800w,
                                                        src/assets/images/heart-health-thumbnail-V3-image-p-1080.jpg 1080w,
                                                        src/assets/images/heart-health-thumbnail-V3-image.jpg        1484w
                                                    "
                                                className="card-image"
                                            />
                                        </div>
                                        <div id="w-node-_8bf90f25-30e3-fe98-3dff-a50170b11aab-f7a60ca1"
                                             className="card-description blog-v1-main-card">
                                            <div className="card-details-flex-container mg-bottom-24px">
                                                <div className="badge-primary">News</div>
                                                <div className="text-200 medium color-neutral-800">July 17, 2023</div>
                                            </div>
                                            <h2 className="card-title-dark heading-h2-size mg-bottom-16px">3 simple and
                                                easy steps to jump-start your heart health</h2>
                                            <p className="mg-bottom-0 color-neutral-600">Lorem ipsum dolor sit amet
                                                consectetur velit faucibus elit feugiat nunc ornare scelerisque ipsum
                                                purus ut in nisi duis.</p>
                                            <div className="divider _32px"></div>
                                            <div className="card-author-details">
                                                <div className="flex-horizontal justify-start">
                                                    <div className="avatar-circle _02 mg-right-16px"><img
                                                        src="src/assets/images/dr-john-carter-avatar.jpg" alt=""
                                                        className="avatar-image"/></div>
                                                    <div>
                                                        <div className="mg-bottom-4px">
                                                            <div className="text-200 bold color-neutral-800">Dr. John
                                                                Carter
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="text-200 medium color-neutral-600">Cardiologist
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-link color-neutral-600">
                                                    <div className="link-text">Read article</div>
                                                    <div className="line-rounded-icon card-arrow-right"><ImArrowRight2/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            data-w-id="0ffc7026-0dcd-6c22-d03e-d020e95f76b0"
                            className="w-dyn-list"
                        >
                            <div role="list" className="grid-2-columns _1-col-tablet w-dyn-items">
                                <div id="w-node-_0ffc7026-0dcd-6c22-d03e-d020e95f76b2-f7a60ca1" role="listitem"
                                     className="flex w-dyn-item">
                                    <a data-w-id="14d6cb83-8281-08dc-ef46-f5137ce49eb4"
                                       href="/blog/the-role-of-vaccines-in-protecting-against-allergies"
                                       className="card w-inline-block">
                                        <div className="card-description blog-v1-card-small">
                                            <h3 className="card-title-dark display-4 mg-bottom-16px">The role of
                                                vaccines in protecting against allergies</h3>
                                            <p className="color-neutral-600 mg-bottom-24px">Lorem ipsum dolor sit amet
                                                consectetur. Id vel lorem et eget faucibus volutpat nam. Lectus
                                                sollicitudin habitasse in leo.</p>
                                            <div className="card-details-flex-container blog-v1">
                                                <div className="badge-primary">Articles</div>
                                                <div className="text-200 medium color-neutral-800">July 17, 2023</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div id="w-node-_0ffc7026-0dcd-6c22-d03e-d020e95f76b2-f7a60ca1" role="listitem"
                                     className="flex w-dyn-item">
                                    <a data-w-id="14d6cb83-8281-08dc-ef46-f5137ce49eb4"
                                       href="/blog/5-steps-to-prepare-for-a-pediatrician-appointment"
                                       className="card w-inline-block">
                                        <div className="card-description blog-v1-card-small">
                                            <h3 className="card-title-dark display-4 mg-bottom-16px">5 steps to prepare
                                                for a Pediatrician appointment</h3>
                                            <p className="color-neutral-600 mg-bottom-24px">Lorem ipsum dolor sit amet
                                                consectetur. Id vel lorem et eget faucibus volutpat nam. Lectus
                                                sollicitudin habitasse in leo.</p>
                                            <div className="card-details-flex-container blog-v1">
                                                <div className="badge-primary">Tips</div>
                                                <div className="text-200 medium color-neutral-800">July 17, 2023</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="half-bg-top blog-v1-bg-top"></div>
            <div>
                <div className="container-default w-container">
                    <div className="cta v3">
                        <div data-w-id="bf2bd02e-f550-07b1-c850-30d57f38e3d7"
                             className="half-bg-right call-to-action-v3"></div>
                        <div data-w-id="bf2bd02e-f550-07b1-c850-30d57f38e3d8" className="z-index-1">
                            <div className="w-layout-grid grid-2-columns call-to-action-grid-2-col v1">
                                <div className="w-layout-grid grid-2-columns call-to-action-grid-2-col v2">
                                    <div id="w-node-bf2bd02e-f550-07b1-c850-30d57f38e3db-7f38e3d6"
                                         className="avatar-circle _04">
                                        <img src="src/assets/icons/contact-email-icon.svg" alt="Contact Email Icon"/>
                                    </div>
                                    <div id="w-node-bf2bd02e-f550-07b1-c850-30d57f38e3dd-7f38e3d6"
                                         className="inner-container _538px _100-tablet"><h2
                                        className="display-2 color-neutral-100 mg-bottom-0">Subscribe to our weekly
                                        newsletter</h2></div>
                                </div>
                                <div className="mg-bottom-0 w-form">
                                    <form id="wf-form-CTA-V3-Form" name="wf-form-CTA-V3-Form" data-name="CTA V3 Form"
                                          method="get" data-wf-page-id="64b5aaead25fc7fff7a60ca1"
                                          data-wf-element-id="bf2bd02e-f550-07b1-c850-30d57f38e3e4">
                                        <div className="position-relative">
                                            <div className="position-relative">
                                                <input type="email" className="input small w-input" name="name-3"
                                                       data-name="Name 3" placeholder="Enter your email" id="name-3"/>
                                                <div className="floating-item icon"><img alt="Email Icon Font"
                                                                                         src="src/assets/icons/email-icon-font.svg"/>
                                                </div>
                                            </div>
                                            <input type="submit" value="Subscribe" data-wait="Please wait..."
                                                   className="btn-primary inside-input default---white-mbp w-button"/>
                                        </div>
                                    </form>
                                    <div className="success-message white-message w-form-done">
                                        <div className="flex-horizontal success-message-horizontal">
                                            <div className="line-rounded-icon success-message-check---left">�&nbsp;�
                                            </div>
                                            <div>Thanks for joining our newsletter.</div>
                                        </div>
                                    </div>
                                    <div className="error-message w-form-fail">
                                        <div>Oops! Something went wrong.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section top-150px">
                <div className="container-default w-container">
                    <div
                        data-w-id="19536618-8014-2bd0-8a29-82fb150d8d65"
                        className="w-layout-grid grid-2-columns title-and-categories"
                    >
                        <h2 className="display-2 mg-bottom-0">Latest articles</h2>
                        <div className="w-dyn-list">
                            <div role="list" className="categories-badges-wrapper w-dyn-items">
                                <div role="listitem" className="categories-badges-item-wrapper w-dyn-item">
                                    <a href="/blog-pages/blog-v1" aria-current="page"
                                       className="badge-secondary category-badges w-inline-block w--current">
                                        <div>All</div>
                                    </a>
                                    <a href="/blog-post-categories/articles"
                                       className="badge-secondary category-badges w-inline-block">
                                        <div>Articles</div>
                                    </a>
                                </div>
                                <div role="listitem" className="categories-badges-item-wrapper w-dyn-item">
                                    <a href="/blog-pages/blog-v1" aria-current="page"
                                       className="badge-secondary category-badges w-inline-block w-condition-invisible w--current">
                                        <div>All</div>
                                    </a>
                                    <a href="/blog-post-categories/news"
                                       className="badge-secondary category-badges w-inline-block">
                                        <div>News</div>
                                    </a>
                                </div>
                                <div role="listitem" className="categories-badges-item-wrapper w-dyn-item">
                                    <a href="/blog-pages/blog-v1" aria-current="page"
                                       className="badge-secondary category-badges w-inline-block w-condition-invisible w--current">
                                        <div>All</div>
                                    </a>
                                    <a href="/blog-post-categories/tips"
                                       className="badge-secondary category-badges w-inline-block">
                                        <div>Tips</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        data-w-id="2bc4e9f4-f444-205b-d15c-f1b550ef2678"
                        className="w-dyn-list"
                    >
                        <div role="list" className="grid-3-columns gap-row-32px w-dyn-items">
                            <div role="listitem" className="flex w-dyn-item">
                                <a data-w-id="2bc4e9f4-f444-205b-d15c-f1b550ef267b"
                                   href="/blog/3-simple-and-easy-steps-to-jump-start-your-heart-health"
                                   className="card w-inline-block">
                                    <div className="card-picture-wrapper">
                                        <img
                                            src="src/assets/images/heart-health-thumbnail-image.jpg"
                                            alt="3 simple and easy steps to jump-start your heart health"
                                            sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 46vw, (max-width: 1439px) 30vw, 412px"
                                            srcSet="
                                                src/assets/images/heart-health-thumbnail-image-p-500.jpg   500w,
                                                src/assets/images/heart-health-thumbnail-image-p-800.jpg   800w,
                                                src/assets/images/heart-health-thumbnail-image-p-1080.jpg 1080w,
                                                src/assets/images/heart-health-thumbnail-image.jpg        1648w
                                            "
                                            className="card-image"
                                        />
                                    </div>
                                    <div className="card-description blog-v1">
                                        <h3 className="card-title-dark mg-bottom-16px">3 simple and easy steps to
                                            jump-start your heart health</h3>
                                        <p className="color-neutral-600 mg-bottom-24px">Lorem ipsum dolor sit amet
                                            consectetur ac fermentum donec nisi proin sit dui.</p>
                                        <div className="card-details-flex-container blog-v1">
                                            <div className="badge-primary small">News</div>
                                            <div className="text-200 medium color-neutral-800">July 17, 2023</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div role="listitem" className="flex w-dyn-item">
                                <a data-w-id="2bc4e9f4-f444-205b-d15c-f1b550ef267b"
                                   href="/blog/the-role-of-vaccines-in-protecting-against-allergies"
                                   className="card w-inline-block">
                                    <div className="card-picture-wrapper">
                                        <img
                                            src="src/assets/images/vaccines-protecting-thumbnail-image.jpg"
                                            alt="The role of vaccines in protecting against allergies"
                                            sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 46vw, (max-width: 1439px) 30vw, 412px"
                                            srcSet="
                                                src/assets/images/vaccines-protecting-thumbnail-image-p-500.jpg   500w,
                                                src/assets/images/vaccines-protecting-thumbnail-image-p-800.jpg   800w,
                                                src/assets/images/vaccines-protecting-thumbnail-image-p-1080.jpg 1080w,
                                                src/assets/images/vaccines-protecting-thumbnail-image.jpg        1648w
                                            "
                                            className="card-image"
                                        />
                                    </div>
                                    <div className="card-description blog-v1">
                                        <h3 className="card-title-dark mg-bottom-16px">The role of vaccines in
                                            protecting against allergies</h3>
                                        <p className="color-neutral-600 mg-bottom-24px">Lorem ipsum dolor sit amet
                                            consectetur ac fermentum donec nisi proin sit dui.</p>
                                        <div className="card-details-flex-container blog-v1">
                                            <div className="badge-primary small">Articles</div>
                                            <div className="text-200 medium color-neutral-800">July 17, 2023</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div role="listitem" className="flex w-dyn-item">
                                <a data-w-id="2bc4e9f4-f444-205b-d15c-f1b550ef267b"
                                   href="/blog/5-steps-to-prepare-for-a-pediatrician-appointment"
                                   className="card w-inline-block">
                                    <div className="card-picture-wrapper">
                                        <img
                                            src="/src/assets/images/pediatrician-appointment-thumbnail-image.jpg"
                                            alt="5 steps to prepare for a Pediatrician appointment"
                                            sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 46vw, (max-width: 1439px) 30vw, 412px"
                                            srcSet="
                                                /src/assets/images/pediatrician-appointment-thumbnail-image-p-500.jpg   500w,
                                                /src/assets/images/pediatrician-appointment-thumbnail-image-p-800.jpg   800w,
                                                /src/assets/images/pediatrician-appointment-thumbnail-image-p-1080.jpg 1080w,
                                                /src/assets/images/pediatrician-appointment-thumbnail-image.jpg        1648w
                                            "
                                            className="card-image"
                                        />
                                    </div>
                                    <div className="card-description blog-v1">
                                        <h3 className="card-title-dark mg-bottom-16px">5 steps to prepare for a
                                            Pediatrician appointment</h3>
                                        <p className="color-neutral-600 mg-bottom-24px">Lorem ipsum dolor sit amet
                                            consectetur ac fermentum donec nisi proin sit dui.</p>
                                        <div className="card-details-flex-container blog-v1">
                                            <div className="badge-primary small">Tips</div>
                                            <div className="text-200 medium color-neutral-800">July 17, 2023</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div role="listitem" className="flex w-dyn-item">
                                <a data-w-id="2bc4e9f4-f444-205b-d15c-f1b550ef267b"
                                   href="/blog/vegetarian-diet-benefits-risks-and-tips" className="card w-inline-block">
                                    <div className="card-picture-wrapper">
                                        <img
                                            src="/src/assets/images/vegetarian-diet-thumbnail-image.jpg"
                                            alt="Vegetarian diet: Benefits, risks, and tips"
                                            sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 46vw, (max-width: 1439px) 30vw, 412px"
                                            srcSet="
                                                /src/assets/images/vegetarian-diet-thumbnail-image-p-500.jpg   500w,
                                                /src/assets/images/vegetarian-diet-thumbnail-image-p-800.jpg   800w,
                                                /src/assets/images/vegetarian-diet-thumbnail-image-p-1080.jpg 1080w,
                                                /src/assets/images/vegetarian-diet-thumbnail-image.jpg        1648w
                                            "
                                            className="card-image"
                                        />
                                    </div>
                                    <div className="card-description blog-v1">
                                        <h3 className="card-title-dark mg-bottom-16px">Vegetarian diet: Benefits, risks,
                                            and tips</h3>
                                        <p className="color-neutral-600 mg-bottom-24px">Lorem ipsum dolor sit amet
                                            consectetur ac fermentum donec nisi proin sit dui.</p>
                                        <div className="card-details-flex-container blog-v1">
                                            <div className="badge-primary small">News</div>
                                            <div className="text-200 medium color-neutral-800">July 17, 2023</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div role="listitem" className="flex w-dyn-item">
                                <a data-w-id="2bc4e9f4-f444-205b-d15c-f1b550ef267b"
                                   href="/blog/answers-to-all-your-questions-about-covid-19"
                                   className="card w-inline-block">
                                    <div className="card-picture-wrapper">
                                        <img
                                            src="/src/assets/images/covid-19-thumbnail-image.jpg"
                                            alt="Answers to all your questions about COVID-19"
                                            sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 46vw, (max-width: 1439px) 30vw, 412px"
                                            srcSet="
                                                /src/assets/images/covid-19-thumbnail-image-p-500.jpg   500w,
                                                /src/assets/images/covid-19-thumbnail-image-p-800.jpg   800w,
                                                /src/assets/images/covid-19-thumbnail-image-p-1080.jpg 1080w,
                                                /src/assets/images/covid-19-thumbnail-image-p-1600.jpg 1600w,
                                                /src/assets/images/covid-19-thumbnail-image.jpg        1648w
                                            "
                                            className="card-image"
                                        />
                                    </div>
                                    <div className="card-description blog-v1">
                                        <h3 className="card-title-dark mg-bottom-16px">Answers to all your questions
                                            about COVID-19</h3>
                                        <p className="color-neutral-600 mg-bottom-24px">Lorem ipsum dolor sit amet
                                            consectetur ac fermentum donec nisi proin sit dui.</p>
                                        <div className="card-details-flex-container blog-v1">
                                            <div className="badge-primary small">Tips</div>
                                            <div className="text-200 medium color-neutral-800">July 17, 2023</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div role="listitem" className="flex w-dyn-item">
                                <a data-w-id="2bc4e9f4-f444-205b-d15c-f1b550ef267b"
                                   href="/blog/how-to-follow-a-healthy-diet-with-a-tight-schedule-2"
                                   className="card w-inline-block">
                                    <div className="card-picture-wrapper">
                                        <img
                                            src="/src/assets/images/healthy-diet-thumbnail-image.jpg"
                                            alt="How to follow a healthy diet with a tight schedule"
                                            sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 46vw, (max-width: 1439px) 30vw, 412px"
                                            srcSet="
                                                /src/assets/images/healthy-diet-thumbnail-image-p-500.jpg   500w,
                                                /src/assets/images/healthy-diet-thumbnail-image-p-800.jpg   800w,
                                                /src/assets/images/healthy-diet-thumbnail-image-p-1080.jpg 1080w,
                                                /src/assets/images/healthy-diet-thumbnail-image.jpg        1648w
                                            "
                                            className="card-image"
                                        />
                                    </div>
                                    <div className="card-description blog-v1">
                                        <h3 className="card-title-dark mg-bottom-16px">How to follow a healthy diet with
                                            a tight schedule</h3>
                                        <p className="color-neutral-600 mg-bottom-24px">Lorem ipsum dolor sit amet
                                            consectetur ac fermentum donec nisi proin sit dui.</p>
                                        <div className="card-details-flex-container blog-v1">
                                            <div className="badge-primary small">Articles</div>
                                            <div className="text-200 medium color-neutral-800">July 17, 2023</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div role="navigation" aria-label="List" className="w-pagination-wrapper pagination">
                            <a data-w-id="2bc4e9f4-f444-205b-d15c-f1b550ef268d" href="blogs" aria-label="Next Page"
                               className="w-pagination-next btn-primary btn-pagination">
                                <div className="w-inline-block">Next</div>
                                <div className="line-rounded-icon link-icon-right icon-size-16px w-inline-block">
                                    <ImArrowRight2/></div>
                            </a>
                            <link rel="prerender" href="blogs"/>
                        </div>
                    </div>
                </div>
            </div>
            <BookSmalver/>
        </>
    )
}