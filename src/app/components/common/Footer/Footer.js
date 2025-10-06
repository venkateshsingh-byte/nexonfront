'use client';
import React from "react";
import Link from 'next/link';
import Image from 'next/image';
//import { useRouter } from 'next/navigation';

export default function Footer() {
	/*const router = useRouter();

  const handleReload = () => {
    router.reload();
  }; */

  return (
    <>
      <footer className="footer  text-white">
        <div className="container pt-3">
          <div className="row mb-0">
            <div className="col-12 row">
              <div className="col-md-4 d-flex flex-column order-2 order-md-1">
                <Link
                  className="footer-heading d-flex justify-content-start align-items-center"
                  data-bs-toggle="collapse"
                  href="#productsCollapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="productsCollapse"   
                >
                  <h6>
                    Products <i className="bi bi-chevron-down d-lg-none dropdown-icon" />
                  </h6>
                  <span className="d-md-none ms-2">▾</span>
                </Link>

                <div className="row sm-hide">
                  <div className="col-sm-6">
                    <Link href="">
                      <span>Top Coat Paint</span>
                    </Link>
                    <Link href="/interior-wall/">
                      <p>Interior Wall</p>
                    </Link>
                    <Link href="/exterior-wall/">
                      <p>Exterior Wall</p>
                    </Link>
                    <Link href="">
                      <p>Metallic Paint</p>
                    </Link>
                    <Link href="">
                      <p>Ceiling</p>
                    </Link>
                    <Link href="">
                      <p>Floor</p>
                    </Link>
                    <Link href="">
                      <span>Oil Based</span>
                    </Link>
                    <Link href="">
                      <p>Metal Paint</p>
                    </Link>
                    <Link href="">
                      <p>Metal Primer</p>
                    </Link>
                    <Link href="">
                      <p>Metallic Paint</p>
                    </Link>
                    <Link href="">
                      <p>Wood Finishes</p>
                    </Link>
                    <Link href="">
                      <span>Waterproof Coating</span>
                    </Link>
                    <Link href="">
                      <p>Roof &amp; Walls</p>
                    </Link>
                  </div>
                  <div className="col-sm-6">
                    <Link href="">
                      <span>Putty &amp; Texture</span>
                    </Link>
                    <Link href="">
                      <p>Water Proof Putty</p>
                    </Link>
                    <Link href="">
                      <p>Acrylic Putty</p>
                    </Link>
                    <Link href="">
                      <p>Texture</p>
                    </Link>
                    <Link href="">
                      <span>Primer</span>
                    </Link>
                    <Link href="">
                      <p>Interior Primer</p>
                    </Link>
                    <Link href="">
                      <p>Exterior Primer</p>
                    </Link>
                    <Link href="">
                      <p>Interior &amp; Exterior</p>
                    </Link>
                  </div>
                </div>


               
                  {/* Mobile Products Dropdown */}
                  <div className="collapse d-lg-none d-md-block" id="productsCollapse">
                    <div className="row" id="productsAccordion">
                      <div className="col-sm-6">
                        {/* Top Coat Paint */}
                        <Link
                          className="d-block head"
                          data-bs-toggle="collapse"
                          href="#topcoatMenu"
                          role="button"
                          aria-expanded="false"
                          aria-controls="topcoatMenu"
                        >
                          Top Coat Paint <i className="bi bi-chevron-down dropdown-icon" />
                        </Link>
                        <div
                          className="collapse part"
                          id="topcoatMenu"
                          data-bs-parent="#productsAccordion"
                        >
                          <Link href="">
                            <p>Interior Wall</p>
                          </Link>
                          <Link href="">
                            <p>Exterior Wall</p>
                          </Link>
                          <Link href="">
                            <p>Metallic Paint</p>
                          </Link>
                          <Link href="">
                            <p>Ceiling</p>
                          </Link>
                          <Link href="">
                            <p>Floor</p>
                          </Link>
                        </div>
                        {/* Oil Based */}
                        <Link
                          className="d-block head"
                          data-bs-toggle="collapse"
                          href="#oilMenu"
                          role="button"
                          aria-expanded="false"
                          aria-controls="oilMenu"
                        >
                          Oil Based <i className="bi bi-chevron-down dropdown-icon" />
                        </Link>
                        <div
                          className="collapse part"
                          id="oilMenu"
                          data-bs-parent="#productsAccordion"
                        >
                          <Link href="">
                            <p>Metal Paint</p>
                          </Link>
                          <Link href="">
                            <p>Metal Primer</p>
                          </Link>
                          <Link href="">
                            <p>Metallic Paint</p>
                          </Link>
                          <Link href="">
                            <p>Wood Finishes</p>
                          </Link>
                        </div>
                        {/* Waterproof Coating */}
                        <Link
                          className="d-block head"
                          data-bs-toggle="collapse"
                          href="#waterproofMenu"
                          role="button"
                          aria-expanded="false"
                          aria-controls="waterproofMenu"
                        >
                          Waterproof Coating <i className="bi bi-chevron-down dropdown-icon" />
                        </Link>
                        <div
                          className="collapse part"
                          id="waterproofMenu"
                          data-bs-parent="#productsAccordion"
                        >
                          <Link href="">
                            <p>Roof &amp; Walls</p>
                          </Link>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        {/* Putty & Texture */}
                        <Link
                          className="d-block head"
                          data-bs-toggle="collapse"
                          href="#puttyMenu"
                          role="button"
                          aria-expanded="false"
                          aria-controls="puttyMenu"
                        >
                          Putty &amp; Texture <i className="bi bi-chevron-down dropdown-icon" />
                        </Link>
                        <div
                          className="collapse part"
                          id="puttyMenu"
                          data-bs-parent="#productsAccordion"
                        >
                          <Link href="">
                            <p>Water Proof Putty</p>
                          </Link>
                          <Link href="">
                            <p>Acrylic Putty</p>
                          </Link>
                          <Link href="">
                            <p>Texture</p>
                          </Link>
                        </div>
                        {/* Primer */}
                        <Link
                          className="d-block head"
                          data-bs-toggle="collapse"
                          href="#primerMenu"
                          role="button"
                          aria-expanded="false"
                          aria-controls="primerMenu"
                        >
                          Primer <i className="bi bi-chevron-down dropdown-icon" />
                        </Link>
                        <div
                          className="collapse part"
                          id="primerMenu"
                          data-bs-parent="#productsAccordion"
                        >
                          <Link href="">
                            <p>Interior Primer</p>
                          </Link>
                          <Link href="">
                            <p>Exterior Primer</p>
                          </Link>
                          <Link href="">
                            <p>Interior &amp; Exterior</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                





              </div>
              <div className="col-md-2 order-3 order-md-2">
                <Link
                  className="footer-heading d-flex justify-content-start align-items-center"
                  data-bs-toggle="collapse"
                  href="#quickLinksMenu"
                  role="button"
                  aria-expanded="false"
                  aria-controls="quickLinksMenu"
                >
                  <h6>
                    Quick Links <i className="bi bi-chevron-down d-lg-none dropdown-icon" />
                  </h6>
                  <span className="d-md-none ms-2">▾</span>
                </Link>


                <div className="collapse d-md-block" id="quickLinksMenu">
                  <div className="head row">
                    <Link href="">About Us</Link>
                    <Link href="">Products</Link>
                    <Link href="">Inspirations</Link>
                    <Link href="">Careers</Link>
                    <Link href="">Contact Us</Link>
                  </div>
                </div>

                <Link
                className="footer-heading d-flex justify-content-start align-items-center pt-md-3"
                data-bs-toggle="collapse"
                href="#toolsMenu"
                role="button"
                aria-expanded="false"
                aria-controls="toolsMenu"
              >
                <h6>
                  Tools <i className="bi bi-chevron-down d-lg-none dropdown-icon" />
                </h6>
                <span className="d-md-none ms-2">▾</span>
              </Link>



                <div
                  className="collapse  d-md-block"
                  id="toolsMenu"
                  data-bs-parent="#footerAccordion"
                >
                  <div className="head row">
                    <Link href="">Find your Color</Link>
                    <Link href="">Visualize Your Room</Link>
                    <Link href="">Paint Calculator</Link>
                    <Link href="">Warranty</Link>
                    <Link href="">Branch Locator</Link>
                  </div>
                </div>

              </div>


              <div className="col-md-2 order-4 order-md-3">
                <Link
                  className="footer-heading d-flex justify-content-start align-items-center"
                  data-bs-toggle="collapse"
                  href="#resourcesMenu"
                  role="button"
                  aria-expanded="false"
                  aria-controls="resourcesMenu"
                >
                  <h6>
                    Resources <i className="bi bi-chevron-down d-lg-none dropdown-icon" />
                  </h6>
                  <span className="d-md-none ms-2">▾</span>
                </Link>
                <div
                  className="collapse d-md-block"
                  id="resourcesMenu"
                  data-bs-parent="#footerAccordion"
                >
                  <div className="head row">
                    <Link href="">Blogs</Link>
                    <Link href="">Downloads</Link>
                    <Link href="">FAQ’s</Link>
                    <Link href="">News &amp; Media</Link>
                  </div>
                </div>
              </div>


              <div className="col-md-4 contact-part order-1 order-md-4">
                <h4>
                  Get special offers, exclusive product news, and event info straight
                  to your inbox.
                </h4>
                <div className="my-3 w-100 email d-flex justify-content-between align-items-center">
                  <Link className="fw-regular w-100" href="">
                    Your active email ID
                  </Link>{" "}
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M18.4029 12.0941H3.55365"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M13.3202 5.15576L19.4907 12.0939L13.3202 19.0321"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="social-icon d-flex flex-row gap-4 my-3">
                  <div>
                    <Link href="https://www.facebook.com/NexonPaintsVibrantIdeas/">
                      <svg
                        xmlns="https://www.w3.org/2000/svg"
                        width={29}
                        height={28}
                        viewBox="0 0 29 28"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.86365 12.0557C6.72293 12.0557 6.48486 12.2796 6.48486 13.352V15.2964C6.48486 16.369 6.72293 16.5927 7.86365 16.5927H10.6212V24.3705C10.6212 25.4429 10.8593 25.6668 12 25.6668H14.7576C15.8983 25.6668 16.1363 25.4429 16.1363 24.3705V16.5927H19.2327C20.0979 16.5927 20.3208 16.4346 20.5585 15.6526L21.1494 13.7081C21.5564 12.3685 21.3056 12.0557 19.8236 12.0557H16.1363V8.81498C16.1363 8.09906 16.7536 7.51868 17.5151 7.51868H21.4394C22.5801 7.51868 22.8182 7.29485 22.8182 6.22238V3.62979C22.8182 2.55732 22.5801 2.3335 21.4394 2.3335H17.5151C13.7077 2.3335 10.6212 5.23536 10.6212 8.81498V12.0557H7.86365Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div>
                    <Link href="https://www.instagram.com/nexonpaints/">
                      <svg
                        xmlns="https://www.w3.org/2000/svg"
                        width={29}
                        height={28}
                        viewBox="0 0 29 28"
                        fill="none"
                      >
                        <path
                          d="M14.6511 2.9165C19.8758 2.9165 22.4889 2.91644 24.1121 4.53955C25.735 6.16265 25.7351 8.77515 25.7351 13.9995C25.7351 19.2242 25.7351 21.8373 24.1121 23.4604C22.4889 25.0835 19.8758 25.0835 14.6511 25.0835C9.42676 25.0835 6.81426 25.0833 5.19116 23.4604C3.56805 21.8373 3.56812 19.2242 3.56812 13.9995C3.56812 8.775 3.56808 6.16264 5.19116 4.53955C6.81425 2.91647 9.42661 2.9165 14.6511 2.9165ZM14.6511 7.87549C11.2686 7.87569 8.52612 10.6179 8.52612 14.0005C8.52639 17.3829 11.2687 20.1253 14.6511 20.1255C18.0337 20.1255 20.7759 17.383 20.7761 14.0005C20.7761 10.6177 18.0339 7.87549 14.6511 7.87549ZM14.6511 9.62549C17.0674 9.62549 19.0261 11.5842 19.0261 14.0005C19.0259 16.4165 17.0672 18.3755 14.6511 18.3755C12.2352 18.3753 10.2764 16.4164 10.2761 14.0005C10.2761 11.5844 12.235 9.62569 14.6511 9.62549ZM21.0671 6.4165C20.4228 6.4165 19.9001 6.93916 19.9001 7.5835C19.9002 8.22775 20.4229 8.75049 21.0671 8.75049H21.0779C21.7218 8.75005 22.2438 8.22749 22.2439 7.5835C22.2439 6.93943 21.7218 6.41694 21.0779 6.4165H21.0671Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div>
                    <Link href="https://youtube.com/@nexonpaints5828?si=w_I8Ha7KaSu_LjAG">
                      <svg
                        xmlns="https://www.w3.org/2000/svg"
                        width={28}
                        height={28}
                        viewBox="0 0 28 28"
                        fill="none"
                      >
                        <path
                          d="M14.0003 4.0835C16.1114 4.08352 18.1359 4.29188 20.012 4.67432C22.3557 5.15206 23.5276 5.39132 24.597 6.76611C25.6664 8.14103 25.6663 9.71973 25.6663 12.8765V15.1245C25.6663 18.2811 25.6663 19.859 24.597 21.2339C23.5276 22.6088 22.3557 22.8479 20.012 23.3257C18.1358 23.7081 16.1114 23.9165 14.0003 23.9165C11.889 23.9165 9.864 23.7081 7.98761 23.3257C5.64392 22.8479 4.47202 22.6088 3.40265 21.2339C2.33347 19.8591 2.33331 18.2809 2.33331 15.1245V12.8765C2.33331 9.71975 2.3333 8.14102 3.40265 6.76611C4.47203 5.39121 5.64389 5.15208 7.98761 4.67432C9.86399 4.29183 11.889 4.0835 14.0003 4.0835ZM15.6859 11.4048C13.6821 10.3007 12.6799 9.74888 11.8685 9.96143C11.5936 10.0335 11.3398 10.1606 11.1273 10.3325C10.5 10.84 10.5003 11.8934 10.5003 13.9995C10.5003 16.106 10.5 17.16 11.1273 17.6675C11.3398 17.8393 11.5936 17.9665 11.8685 18.0386C12.68 18.2511 13.6821 17.6992 15.6859 16.5952C17.5283 15.5799 18.4492 15.0715 18.6224 14.3647C18.6812 14.1244 18.6812 13.8756 18.6224 13.6353C18.4492 12.9285 17.5283 12.4201 15.6859 11.4048Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div>
                    <Link href="https://x.com/NexonPaints">
                      <svg
                        xmlns="https://www.w3.org/2000/svg"
                        width={23}
                        height={24}
                        viewBox="0 0 23 24"
                        fill="none"
                      >
                        <path
                          d="M1.65149 22.182L10.1911 13.6424L1.65149 22.182ZM22.0151 1.81836L13.4755 10.358L22.0151 1.81836ZM13.4755 10.358L7.30805 1.81836H1.65149L10.1911 13.6424M13.4755 10.358L22.0151 22.182H16.3586L10.1911 13.6424"
                          fill="white"
                        />
                        <path
                          d="M1.65149 22.182L10.1911 13.6424M10.1911 13.6424L1.65149 1.81836H7.30805L13.4755 10.358M10.1911 13.6424L16.3586 22.182H22.0151L13.4755 10.358M22.0151 1.81836L13.4755 10.358"
                          stroke="white"
                          strokeWidth="1.90909"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div>
                    <Link href="https://www.linkedin.com/company/nexon-paints/">
                      <svg
                        xmlns="https://www.w3.org/2000/svg"
                        width={31}
                        height={28}
                        viewBox="0 0 31 28"
                        fill="none"
                      >
                        <path
                          d="M5.36926 9.38232H4.73731C3.5457 9.38232 2.94991 9.38232 2.57971 9.7525C2.20953 10.1227 2.20953 10.7185 2.20953 11.9101V22.6532C2.20953 23.8448 2.20953 24.4405 2.57971 24.8107C2.94991 25.1809 3.5457 25.1809 4.73731 25.1809H5.36926C6.56086 25.1809 7.15666 25.1809 7.52685 24.8107C7.89703 24.4405 7.89703 23.8448 7.89703 22.6532V11.9101C7.89703 10.7185 7.89703 10.1227 7.52685 9.7525C7.15666 9.38232 6.56086 9.38232 5.36926 9.38232Z"
                          fill="white"
                        />
                        <path
                          d="M7.89703 4.20508C7.89703 5.77564 6.62384 7.04883 5.05328 7.04883C3.48272 7.04883 2.20953 5.77564 2.20953 4.20508C2.20953 2.63452 3.48272 1.36133 5.05328 1.36133C6.62384 1.36133 7.89703 2.63452 7.89703 4.20508Z"
                          fill="white"
                        />
                        <path
                          d="M14.9688 9.38232H13.9248C12.7332 9.38232 12.1374 9.38232 11.7672 9.7525C11.397 10.1227 11.397 10.7185 11.397 11.9101V22.6532C11.397 23.8448 11.397 24.4405 11.7672 24.8107C12.1374 25.1809 12.7332 25.1809 13.9248 25.1809H14.5568C15.7484 25.1809 16.3441 25.1809 16.7143 24.8107C17.0845 24.4405 17.0845 23.8448 17.0845 22.6532L17.0847 18.2297C17.0847 16.1357 17.752 14.438 19.7234 14.438C20.709 14.438 21.5081 15.2868 21.5081 16.3338V22.0213C21.5081 23.2129 21.5081 23.8087 21.8783 24.1789C22.2484 24.5491 22.8443 24.5491 24.0359 24.5491H24.6662C25.8576 24.5491 26.4532 24.5491 26.8234 24.1791C27.1936 23.809 27.1937 23.2133 27.194 22.022L27.1958 15.0701C27.1958 11.9291 24.2083 9.38263 21.2513 9.38263C19.5679 9.38263 18.0662 10.2078 17.0847 11.4981C17.0845 10.7017 17.0845 10.3036 16.9116 10.0079C16.8021 9.82072 16.6461 9.66484 16.4589 9.55531C16.1633 9.38232 15.7652 9.38232 14.9688 9.38232Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer d-flex justify-content-center gap-5 mt-5 mb-0 pb-0">
              <p>© 2025 Nexon Paints. All Rights Reserved</p>
              <p>
                <svg
                  className="mx-1"
                  xmlns="https://www.w3.org/2000/svg"
                  width={25}
                  height={24}
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M9.6585 5.71223L9.25584 4.80625C8.99256 4.21388 8.86092 3.91768 8.66405 3.69101C8.41732 3.40694 8.09571 3.19794 7.73592 3.08785C7.44883 3 7.1247 3 6.47645 3C5.52815 3 5.054 3 4.65597 3.18229C4.18711 3.39702 3.76368 3.86328 3.59497 4.3506C3.45175 4.76429 3.49278 5.18943 3.57482 6.0397C4.44815 15.0902 9.41006 20.0521 18.4605 20.9254C19.3108 21.0075 19.736 21.0485 20.1496 20.9053C20.637 20.7366 21.1032 20.3131 21.318 19.8443C21.5002 19.4462 21.5002 18.9721 21.5002 18.0238C21.5002 17.3755 21.5002 17.0514 21.4124 16.7643C21.3023 16.4045 21.0933 16.0829 20.8092 15.8362C20.5826 15.6393 20.2864 15.5077 19.694 15.2444L18.788 14.8417C18.1465 14.5566 17.8257 14.4141 17.4998 14.3831C17.1878 14.3534 16.8733 14.3972 16.5813 14.5109C16.2762 14.6297 16.0066 14.8544 15.4672 15.3038C14.9304 15.7512 14.662 15.9749 14.334 16.0947C14.0432 16.2009 13.6588 16.2403 13.3526 16.1951C13.0071 16.1442 12.7426 16.0029 12.2135 15.7201C10.5675 14.8405 9.65977 13.9328 8.78011 12.2867C8.49738 11.7577 8.35602 11.4931 8.30511 11.1477C8.25998 10.8414 8.29932 10.457 8.40554 10.1663C8.52536 9.83828 8.74905 9.56986 9.19643 9.033C9.64586 8.49368 9.87058 8.22402 9.98939 7.91891C10.1031 7.62694 10.1469 7.3124 10.1172 7.00048C10.0862 6.67452 9.94362 6.35376 9.6585 5.71223Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                1800-120-8200
              </p>
              <p>
                <svg
                  className="mx-1"
                  xmlns="https://www.w3.org/2000/svg"
                  width={25}
                  height={24}
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M2.5 6L9.41302 9.91697C11.9616 11.361 13.0384 11.361 15.587 9.91697L22.5 6"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.51577 13.4756C2.58114 16.5412 2.61383 18.0739 3.74496 19.2094C4.87608 20.3448 6.45033 20.3843 9.59883 20.4634C11.5393 20.5122 13.4607 20.5122 15.4012 20.4634C18.5497 20.3843 20.1239 20.3448 21.2551 19.2094C22.3862 18.0739 22.4189 16.5412 22.4842 13.4756C22.5053 12.4899 22.5053 11.5101 22.4842 10.5244C22.4189 7.45886 22.3862 5.92609 21.2551 4.79066C20.1239 3.65523 18.5497 3.61568 15.4012 3.53657C13.4607 3.48781 11.5393 3.48781 9.59882 3.53656C6.45033 3.61566 4.87608 3.65521 3.74495 4.79065C2.61382 5.92608 2.58114 7.45885 2.51576 10.5244C2.49474 11.5101 2.49475 12.4899 2.51577 13.4756Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
                care@nexonpaints.com
              </p>
            </div>
          </div>
        </div>
        <div id="cirId" className="topup1">
          <Link href="javascript:;" className="topup" title="To Top">
            <p className="logo">
              <Image src="/nexontest/assets/images/logo1.png" height={55} width={155} alt="logo" />
            </p>
            <p>
              Visualize <br /> your Space
            </p>
          </Link>
        </div>
      </footer>

    </>
  );
}
