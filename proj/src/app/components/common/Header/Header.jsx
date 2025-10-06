'use client';
import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Header() {
    const router = useRouter();
  
    const handleReload = () => {
      router.reload();
    };

    return (
      <>
        <nav className="navbar header-navbar">
          <div className="container">
            <div className="navbar-left">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#myNavbar"
              >
                <Image src="/assets/images/toggle-icon.png" className="toggle-icon" height={28} width={28} alt="Logo" />
              </button>
            </div>
            <div className="navbar-right" id="">
              <Link className="navbar-logo" onClick={handleReload} href="/">
                <Image src="/assets/images/logo.png" width={118} height={40} alt="Logo" />
              </Link>  
              <div className="h-button">
                <Link href="" className="orange">
                  Find your Shade
                </Link> 
                <Link href="" className="blue">
                  Visualize your Space
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <nav
          className="navbar navbardefault navbarfixedtop"
          style={{ display: "none" }}
        >
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#myNavbar"
              >
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <Link onClick={handleReload} className="navbar-logo" href="/">
                <Image src="/assets/images/logo.png"  width={118} height={40} alt="Logo" />
              </Link>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="navbar navbar-nav navbar-right">
                <li>
                  <Link href="about-us.html" onClick={handleReload}>About Us</Link>
                </li>
                <li>
                  <Link href="#" onClick={handleReload}>Products</Link>
                </li>
                <li>
                  <Link href="#" onClick={handleReload}>Inspirations</Link>
                </li>
                <li>
                  <Link href="#" onClick={handleReload}>Find your Shade</Link>
                </li>
                <li>
                  <Link href="/contact-us" onClick={handleReload}>Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>

    );
}
