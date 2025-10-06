'use client';
import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MENU_GROUPS } from "../../../lib/product-menu";  

export default function Header() {
    const router = useRouter();
  
    const handleReload = () => {
      router.reload();
    }; 


    return (
      <>
        <header className="header">  
          {/* top bar */}
          <div className="header-top ">
            <div className="container d-flex flex-wrap align-items-center col-12 justify-content-right">
              <Link href="#" className="me-3 sm-hide">
                {/* phone svg */}
                <svg
                  xmlns="https://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M7.63212 4.76019L7.29658 4.00521C7.07718 3.51157 6.96748 3.26473 6.80342 3.07584C6.59781 2.83912 6.3298 2.66495 6.02998 2.57321C5.79073 2.5 5.52063 2.5 4.98042 2.5C4.19017 2.5 3.79504 2.5 3.46335 2.65191C3.07263 2.83085 2.71978 3.2194 2.57918 3.6255C2.45983 3.97024 2.49403 4.32453 2.56239 5.03308C3.29017 12.5752 7.42509 16.7101 14.9671 17.4378C15.6757 17.5062 16.03 17.5404 16.3747 17.4211C16.7809 17.2805 17.1694 16.9276 17.3484 16.5369C17.5002 16.2052 17.5002 15.8101 17.5002 15.0198C17.5002 14.4796 17.5002 14.2095 17.427 13.9702C17.3353 13.6704 17.1611 13.4024 16.9244 13.1968C16.7355 13.0327 16.4887 12.9231 15.995 12.7037L15.24 12.3681C14.7055 12.1305 14.4381 12.0117 14.1665 11.9859C13.9065 11.9612 13.6445 11.9977 13.4011 12.0924C13.1469 12.1914 12.9222 12.3787 12.4727 12.7532C12.0254 13.126 11.8017 13.3124 11.5284 13.4122C11.286 13.5007 10.9657 13.5336 10.7105 13.4959C10.4226 13.4535 10.2022 13.3358 9.76129 13.1001C8.38962 12.3671 7.63318 11.6107 6.90013 10.2389C6.66453 9.79808 6.54673 9.57758 6.5043 9.28975C6.46669 9.0345 6.49948 8.71417 6.58799 8.47192C6.68784 8.19857 6.87425 7.97488 7.24707 7.5275C7.62159 7.07807 7.80886 6.85335 7.90787 6.59909C8.00262 6.35578 8.03909 6.09367 8.01437 5.83373C7.98853 5.5621 7.86972 5.2948 7.63212 4.76019Z"
                    stroke="white"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                  />
                </svg>
                1800-120-8200
              </Link>
              <Link href="/branch-locator" className="me-3">
                {" "}
                {/* branch locator */}
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="https://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 17.5H17.5M4.16667 17.5V5.83333L10.8333 2.5V17.5M15.8333 17.5V9.16667L10.8333 5.83333M7.5 7.5V7.50833M7.5 10V10.0083M7.5 12.5V12.5083M7.5 15V15.0083"
                    stroke="white"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Branch Locator
              </Link>
              <Link href="#" className="me-3 sm-hide">
                <svg
                  xmlns="https://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M15.8332 5H16.6665C17.1085 5 17.5325 5.17559 17.845 5.48816C18.1576 5.80072 18.3332 6.22464 18.3332 6.66667C18.3332 7.77174 17.8942 8.83154 17.1128 9.61294C16.3314 10.3943 15.2716 10.8333 14.1665 10.8333H9.99984V12.5M4.1665 4.16667C4.1665 3.72464 4.3421 3.30072 4.65466 2.98816C4.96722 2.67559 5.39114 2.5 5.83317 2.5H14.1665C14.6085 2.5 15.0325 2.67559 15.345 2.98816C15.6576 3.30072 15.8332 3.72464 15.8332 4.16667V5.83333C15.8332 6.27536 15.6576 6.69928 15.345 7.01184C15.0325 7.3244 14.6085 7.5 14.1665 7.5H5.83317C5.39114 7.5 4.96722 7.3244 4.65466 7.01184C4.3421 6.69928 4.1665 6.27536 4.1665 5.83333V4.16667ZM8.33317 13.3333C8.33317 13.1123 8.42097 12.9004 8.57725 12.7441C8.73353 12.5878 8.94549 12.5 9.1665 12.5H10.8332C11.0542 12.5 11.2661 12.5878 11.4224 12.7441C11.5787 12.9004 11.6665 13.1123 11.6665 13.3333V16.6667C11.6665 16.8877 11.5787 17.0996 11.4224 17.2559C11.2661 17.4122 11.0542 17.5 10.8332 17.5H9.1665C8.94549 17.5 8.73353 17.4122 8.57725 17.2559C8.42097 17.0996 8.33317 16.8877 8.33317 16.6667V13.3333Z"
                    stroke="white"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Paint Calculator
              </Link>
              <Link href="#" className="me-3">
                <svg
                  xmlns="https://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M1.6665 6.66667C1.6665 6.66667 5.39746 2.5 9.99984 2.5C14.6022 2.5 18.3332 6.66667 18.3332 6.66667"
                    stroke="white"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                  />
                  <path
                    d="M17.9532 10.8708C18.2065 11.2261 18.3332 11.4038 18.3332 11.6667C18.3332 11.9296 18.2065 12.1073 17.9532 12.4625C16.8148 14.0588 13.9075 17.5 9.99984 17.5C6.09215 17.5 3.18492 14.0588 2.04654 12.4625C1.79318 12.1073 1.6665 11.9296 1.6665 11.6667C1.6665 11.4038 1.79318 11.2261 2.04654 10.8708C3.18492 9.27451 6.09215 5.83334 9.99984 5.83334C13.9075 5.83334 16.8148 9.27451 17.9532 10.8708Z"
                    stroke="white"
                    strokeWidth="1.25"
                  />
                  <path
                    d="M12.5 11.6667C12.5 10.2859 11.3807 9.16666 10 9.16666C8.61925 9.16666 7.5 10.2859 7.5 11.6667C7.5 13.0474 8.61925 14.1667 10 14.1667C11.3807 14.1667 12.5 13.0474 12.5 11.6667Z"
                    stroke="white"
                    strokeWidth="1.25"
                  />
                </svg>
                Visualize Your Room
              </Link>
            </div>
          </div>
          {/* Navbar (Bootstrap 5) */}
          <nav className="navbar navbardefault navbar-expand-lg navbar-light bg-white">
            <div className="container d-flex justify-content-between align-items-center">
              <div className="collapse navbar-collapse " id="mainNavbar">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="about-us.html"
                      id="aboutDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      About Us
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                      <li>
                        <Link className="dropdown-item" href="/who-we-are">
                          Who We Are
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/our-clients">
                          Our Clients
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/achievements-and-infrastructure">
                          R&amp;D Facility
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* Products Dropdown */}
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" href="#" id="productsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Products
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="productsDropdown">
                        <div className="d-flex flex-row">
                          {MENU_GROUPS.map((group) => (
                            <li key={group.heading}>
                              <Link className="dropdown-item heading" href="#">
                                {group.heading}
                              </Link>

                              {group.items.map((item) => (
                                <Link
                                  key={`${group.heading}-${item.slug}`}
                                  href={item.slug}
                                  className="dropdown-item divisions"
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </li>
                          ))}
                        </div>
                      </ul>
                  </li>
                  {/* Warranty Dropdown */}
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle remove_dropdown"
                      href="#"
                      id="warrantyDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Warranty
                    </Link>
                    
                  </li>
                </ul>
              </div>
              <Link className="navbar-brand navbar-logo" href="/">
                <Image src="/nexontest/assets/images/logo1.png" height={55} width={155} alt="logo" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mainNavbar"
                aria-controls="mainNavbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="mainNavbar">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle remove_dropdown"
                      href="/inspirations"   
                    >
                      Inspirations
                    </Link>
                  </li>
                  {/* Find Your Color Dropdown */}
                  <li className="nav-item">
                    <Link
                      className="nav-link dropdown-toggle remove_dropdown"
                      href="#"
                    >
                      Find Your Color
                    </Link>
                  </li>
                  {/* Contact Us Dropdown */}
                  <li className="nav-item">
                    <Link
                      className="nav-link dropdown-toggle remove_dropdown"
                      href="#"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

      </>

    );
}
