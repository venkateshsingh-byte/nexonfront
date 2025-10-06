'use client';
import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Footer() {
	const router = useRouter();

  const handleReload = () => {
    router.reload();
  };

  return (
    <>
      <footer className="footer containerfluid textcenter">
        <div className="container">
          <div className="rows">
            <div className="left">
              <p>© 2025 Nexon Paints. All Rights Reserved</p>
            </div>
            <div className="right">
              <ul>
                <li>
                  <Link href="/" onClick={handleReload}>Home</Link>
                </li>
                <li>
                  <Link href="/about-us" onClick={handleReload}>About Us</Link>  
                </li>
                <li>
                  <Link href="#">Products</Link>
                </li>
                <li>
                  <Link href="#">Branch Locator</Link>
                </li>
                <li>
                  <Link href="#">Inspirations</Link>
                </li>       
                <li>
                  <Link href="#">FAQ’s</Link>
                </li>
                <li>
                  <Link href="#">News &amp; Media</Link>
                </li>
                <li>
                  <Link href="/career" onClick={handleReload}>Careers</Link>  
                </li>
                <li>
                  <Link href="/contact-us" onClick={handleReload}>Contact Us</Link>  
                </li>
              </ul>  
            </div>
          </div>
        </div>
        <div id="cirId" className="topup1">
          <a href="javascript:;" className="topup" title="To Top">
            <p className="logo">
              <Image src="/assets/images/logo.png" height={27} width={80} alt="Logo" />  
            </p>
            <p>
              Visualize <br /> your Space
            </p>
          </a>
        </div>
      </footer>

    </>
  );
}
