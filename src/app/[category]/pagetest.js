'use client';
import Image from "next/image";



export default function Page() {

    return (
        <>
            <section className="product-section1 section-space page-banner p-0 head-space">
                <div className="banner position-relative">
                {/* Background image */}
                <Image src="/nexontest/assets/images/product-banner.png" width={1905} height={661} alt="Banner" className="img-fluid" />
                {/* Overlay content */}
                <div className="container">
                    <div className="row p-0 m-0">
                    <div className="col-12 d-flex hm info">
                        <h2 className="text-white position-absolute ">
                        Paints That Do More <br /> Than Just Color
                        <p>
                            Make every wall a statement—inside or out. Explore our range of
                            high-performance interior and exterior paints designed for
                            lasting beauty, protection and style.
                        </p>
                        <div className="image w-100">
                            <Image className="w-75" src="/nexontest/assets/images/bucket-bundel.png" width={471} height={160} alt="Paints That" />
                        </div>
                        </h2>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section
                className="section4 ps1 nav-section section-space py-5 bg-light pt-0"
                id="Luxury"
            >
                <div className="container">
                <div className="dark-text">
                    <div className="d-flex flex-row hm info progression py-5">
                    <p>Home </p>
                    <div className="px-1 ">
                        <Image src="/nexontest/assets/images/progression-icon-dark.svg" width={20} height={21} alt="" />
                    </div>
                    <p>...</p>
                    <div className="px-1 ">
                        <Image src="/nexontest/assets/images/progression-icon-dark.svg" width={20} height={21} alt="" />
                    </div>
                    <p className="active-page">Find your Color</p>
                    </div>
                </div>
                <div className="top info mb-4">
                    <h2>Interior Wall Paints</h2>
                    <h5 className="dark-text">
                    Explore the versatile range of interior paints for your home!
                    </h5>
                </div>
                <div className="btm position-relative mb-3">
                    <div className="rows bucket-container my-3 position-absolute">
                    <div className="paint-bucket" data-target="#tab1">
                        <Image src="/nexontest/assets/images/imagepaint3.png" width={80} height={107} alt="Bucket 1" />
                    </div>
                    <div className="paint-bucket" data-target="#tab2">
                        <Image src="/nexontest/assets/images/imagepaint4.png" width={80} height={107} alt="Bucket 2" />
                    </div>
                    </div>
                    {/* Tab Content Wrapper */}
                    <div className="tab-content">
                    {/* First Tab */}
                    <div className="tab-pane fade show active" id="tab1">
                        <div className="row content-right  d-flex justify-content-between gx-4">
                        <div className="col-sm-5 p-0">
                            <div className="image">
                            <Image src="/nexontest/assets/images/imagep1.png" width={540} height={416} className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="rows hm ">
                            <h1 className="dark-text">
                                Rubycon<sup>®</sup> High Gloss
                            </h1>
                            <h6 className="dark-text">Interior Luxury Emulsion</h6>
                            <div className="d-flex flex-wrap gap-3 my-3">
                                <div className="d-flex flex-column align-items-center col-12 col-lg-2 col-md-3 col-sm-4 p-0 text-center">
                                <div className="icon-image mb-2">
                                    <Image src="/nexontest/assets/images/image115.png" width={130} height={130} alt="Anti-Bacterial" />
                                </div>
                                <span>
                                    Anti-Bacterial <br />
                                    Anti-Viral{" "}
                                </span>
                                </div>
                                <div className="d-flex flex-column align-items-center col-12 col-lg-2 col-md-3 col-sm-4 p-0 text-center">
                                <div className="icon-image mb-2">
                                    <Image src="/nexontest/assets/images/image112.png" width={130} height={130} alt="Excellent" />
                                </div>
                                <span>
                                    Excellent <br />
                                    Washability
                                </span>
                                </div>
                                <div className="d-flex flex-column align-items-center col-12 col-lg-2 col-md-3 col-sm-4 p-0 text-center">
                                <div className="icon-image mb-2">
                                    <Image src="/nexontest/assets/images/image113.png" width={130} height={130} alt="Dirt" />
                                </div>
                                <span>
                                    Dirt &amp; Stain <br />
                                    Resistant
                                </span>
                                </div>
                                <div className="d-flex flex-column align-items-center col-12 col-lg-2 col-md-3 col-sm-4 p-0 text-center">
                                <div className="icon-image mb-2">
                                    <Image src="/nexontest/assets/images/image114.png" width={130} height={130} alt="Excellent" />
                                </div>
                                <span>
                                    Excellent <br />
                                    Washability
                                </span>
                                </div>
                            </div>
                            <div className="d-flex flex-wrap gap-3">
                                <div className="anc">
                                <a href="#" className="btn btn-outline-dark ">
                                    Discover Rubicon<sup>®</sup>
                                </a>
                                </div>
                                <div className="anc-opp">
                                <a href="#" className="btn btn-outline-dark ">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    >
                                    <path
                                        d="M2.5 14.1669C2.5 14.9419 2.5 15.3294 2.58519 15.6473C2.81636 16.51 3.49022 17.1839 4.35296 17.415C4.67087 17.5002 5.05836 17.5002 5.83333 17.5002H14.1667C14.9417 17.5002 15.3292 17.5002 15.6471 17.415C16.5098 17.1839 17.1837 16.51 17.4148 15.6473C17.5 15.3294 17.5 14.9419 17.5 14.1669"
                                        stroke="#00ABE8"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M13.75 9.58349C13.75 9.58349 10.9882 13.3335 9.99995 13.3335C9.01178 13.3335 6.25 9.58349 6.25 9.58349M9.99995 12.5002V2.50012"
                                        stroke="#00ABE8"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    </svg>
                                    Technical Datasheet
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Second Tab */}
                    <div className="tab-pane fade" id="tab2">
                        <div className="row content-right  d-flex justify-content-between gx-4">
                        <div className="col-sm-5 p-0">
                            <div className="image">
                            <Image src="/nexontest/assets/images/imagep1.png"  className="img-fluid" width={1168} height={900} alt="Interior Luxury Emulsion" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="rows hm ">
                            <h1 className="dark-text">
                                Rubycon<sup>®</sup>{" "}
                            </h1>
                            <h6 className="dark-text">Interior Luxury Emulsion</h6>
                            <div className="d-flex flex-wrap gap-3 my-3">
                                <div className="d-flex flex-column align-items-center col-12 col-lg-2 col-md-3 col-sm-4 p-0 text-center">
                                <div className="icon-image mb-2">
                                    <Image src="/nexontest/assets/images/image115.png" width={130} height={130} alt="Anti-Bacterial " />
                                </div>
                                <span>
                                    Anti-Bacterial <br />
                                    Anti-Viral{" "}
                                </span>
                                </div>
                                <div className="d-flex flex-column align-items-center col-12 col-lg-2 col-md-3 col-sm-4 p-0 text-center">
                                <div className="icon-image mb-2">
                                    <Image src="/nexontest/assets/images/image112.png" width={130} height={130} alt="Excellent" />
                                </div>
                                <span>
                                    Excellent <br />
                                    Washability
                                </span>
                                </div>
                                <div className="d-flex flex-column align-items-center col-12 col-lg-2 col-md-3 col-sm-4 p-0 text-center">
                                <div className="icon-image mb-2">
                                    <Image src="/nexontest/assets/images/image113.png" width={130} height={130} alt="Dirt" />
                                </div>
                                <span>
                                    Dirt &amp; Stain <br />
                                    Resistant
                                </span>
                                </div>
                                <div className="d-flex flex-column align-items-center col-12 col-lg-2 col-md-3 col-sm-4 p-0 text-center">
                                <div className="icon-image mb-2">
                                    <Image src="/nexontest/assets/images/image114.png" width={130} height={130}  alt="Excellent" />
                                </div>
                                <span>
                                    Excellent <br />
                                    Washability
                                </span>
                                </div>
                            </div>
                            <div className="d-flex flex-wrap gap-3">
                                <div className="anc">
                                <a href="#" className="btn btn-outline-dark ">
                                    Discover Rubicon<sup>®</sup>
                                </a>
                                </div>
                                <div className="anc-opp">
                                <a href="#" className="btn btn-outline-dark ">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    >
                                    <path
                                        d="M2.5 14.1669C2.5 14.9419 2.5 15.3294 2.58519 15.6473C2.81636 16.51 3.49022 17.1839 4.35296 17.415C4.67087 17.5002 5.05836 17.5002 5.83333 17.5002H14.1667C14.9417 17.5002 15.3292 17.5002 15.6471 17.415C16.5098 17.1839 17.1837 16.51 17.4148 15.6473C17.5 15.3294 17.5 14.9419 17.5 14.1669"
                                        stroke="#00ABE8"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M13.75 9.58349C13.75 9.58349 10.9882 13.3335 9.99995 13.3335C9.01178 13.3335 6.25 9.58349 6.25 9.58349M9.99995 12.5002V2.50012"
                                        stroke="#00ABE8"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    </svg>
                                    Technical Datasheet
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
            </section>

            <section
                className="section4 ps2 nav-section section-space py-5 bg-light"
                id="Premium"
            >
                <div className="container">
                <div className="btm position-relative mb-3">
                    <div className="rows bucket-container-left my-3 position-absolute">
                    <div className="paint-bucket" data-target="#tab3">
                        <Image src="/nexontest/assets/images/imagepaint2.png" width={80} height={106} alt="Bucket 1" />
                    </div>
                    <div className="paint-bucket" data-target="#tab4">
                        <Image src="/nexontest/assets/images/imagepaint4.png" width={80} height={106} alt="Bucket 2" />
                    </div>
                    </div>
                    {/* Tab Content Wrapper */}
                    <div className="tab-content">
                    {/* First Tab */}
                    <div className="tab-pane fade show active" id="tab3">
                        <div className="row content-left d-flex justify-content-between align-items-start">
                        <div className="col-sm-6">
                            <div className="rows">
                            <h1 className="dark-text">
                                Tiara<sup>®</sup> High Gloss
                            </h1>
                            <h6 className="dark-text">Interior Premium Emulsion</h6>
                            <div className="d-flex flex-wrap gap-3 my-3">
                                <div className="d-flex flex-column align-items-center col-12 col-lg-2 col-md-3 col-sm-4 p-0 text-center">
                                <div className="icon-image mb-2">
                                    <Image src="/nexontest/assets/images/image112.png" width={50} height={50} alt="Excellent" />
                                </div>
                                <span>
                                    Excellent <br />
                                    Washability
                                </span>
                                </div>
                                <div className="d-flex flex-column align-items-center col-12 col-lg-2 col-md-3 col-sm-4 p-0 text-center">
                                <div className="icon-image mb-2">
                                    <Image src="/nexontest/assets/images/image115.png" width={50} height={50} alt="Anti-Bacterial" />
                                </div>
                                <span>
                                    Anti-Bacterial <br />
                                    Anti-Viral{" "}
                                </span>
                                </div>
                                <div className="d-flex flex-column align-items-center col-12 col-lg-2 col-md-3 col-sm-4 p-0 text-center">
                                <div className="icon-image mb-2">
                                    <Image src="/nexontest/assets/images/image116.png" width={50} height={50} alt="Long Lasting" />
                                </div>
                                <span>
                                    Long Lasting <br />
                                    Shades
                                </span>
                                </div>
                            </div>
                            <div className="d-flex flex-wrap gap-3">
                                <div className="anc">
                                <a href="#" className="btn btn-outline-dark ">
                                    Discover Tiara<sup>®</sup>
                                </a>
                                </div>
                                <div className="anc-opp">
                                <a href="#" className="btn btn-outline-dark ">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    >
                                    <path
                                        d="M2.5 14.1669C2.5 14.9419 2.5 15.3294 2.58519 15.6473C2.81636 16.51 3.49022 17.1839 4.35296 17.415C4.67087 17.5002 5.05836 17.5002 5.83333 17.5002H14.1667C14.9417 17.5002 15.3292 17.5002 15.6471 17.415C16.5098 17.1839 17.1837 16.51 17.4148 15.6473C17.5 15.3294 17.5 14.9419 17.5 14.1669"
                                        stroke="#00ABE8"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M13.75 9.58349C13.75 9.58349 10.9882 13.3335 9.99995 13.3335C9.01178 13.3335 6.25 9.58349 6.25 9.58349M9.99995 12.5002V2.50012"
                                        stroke="#00ABE8"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    </svg>
                                    Technical Datasheet
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-5 p-0">
                            <div className="image">
                            <Image src="/nexontest/assets/images/image120.png" width={1168} height={900} className="img-fluid" alt="Tiara" />
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Second Tab */}
                    <div className="tab-pane fade" id="tab4">
                        <div className="row content-left d-flex justify-content-between align-items-start">
                        <div className="col-sm-6">
                            <div className="rows">
                            <h1 className="dark-text">
                                Tiara<sup>®</sup> High Gloss
                            </h1>
                            <h6 className="dark-text">Interior Premium Emulsion</h6>
                            <div className="d-flex flex-wrap gap-3 my-3">
                                <div className="d-flex flex-column align-items-center col-12 col-lg-2 col-md-3 col-sm-4 p-0 text-center">
                                <div className="icon-image mb-2">
                                    <Image src="/nexontest/assets/images/image112.png" width={130} height={130} alt="Excellent" />
                                </div>
                                <span>
                                    Excellent <br />
                                    Washability
                                </span>
                                </div>
                                <div className="d-flex flex-column align-items-center col-12 col-lg-2 col-md-3 col-sm-4 p-0 text-center">
                                <div className="icon-image mb-2">
                                    <Image src="/nexontest/assets/images/image115.png" width={130} height={130} alt="Anti-Bacterial" />
                                </div>
                                <span>
                                    Anti-Bacterial <br />
                                    Anti-Viral{" "}
                                </span>
                                </div>
                                <div className="d-flex flex-column align-items-center col-12 col-lg-2 col-md-3 col-sm-4 p-0 text-center">
                                <div className="icon-image mb-2">
                                    <Image src="/nexontest/assets/images/image116.png" width={130} height={130} alt="Long Lasting" />
                                </div>
                                <span>
                                    Long Lasting <br />
                                    Shades
                                </span>
                                </div>
                            </div>
                            <div className="d-flex flex-wrap gap-3">
                                <div className="anc">
                                <a href="#" className="btn btn-outline-dark ">
                                    Discover Tiara<sup>®</sup>
                                </a>
                                </div>
                                <div className="anc-opp">
                                <a href="#" className="btn btn-outline-dark ">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    >
                                    <path
                                        d="M2.5 14.1669C2.5 14.9419 2.5 15.3294 2.58519 15.6473C2.81636 16.51 3.49022 17.1839 4.35296 17.415C4.67087 17.5002 5.05836 17.5002 5.83333 17.5002H14.1667C14.9417 17.5002 15.3292 17.5002 15.6471 17.415C16.5098 17.1839 17.1837 16.51 17.4148 15.6473C17.5 15.3294 17.5 14.9419 17.5 14.1669"
                                        stroke="#00ABE8"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M13.75 9.58349C13.75 9.58349 10.9882 13.3335 9.99995 13.3335C9.01178 13.3335 6.25 9.58349 6.25 9.58349M9.99995 12.5002V2.50012"
                                        stroke="#00ABE8"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    </svg>
                                    Technical Datasheet
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-5 p-0">
                            <div className="image">
                            <Image src="/nexontest/assets/images/imagep3.png" width={540} height={416} className="img-fluid" alt="Area" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <section
                className="section4 ps3 nav-section section-space py-5 bg-light"
                id="Economy"
            >
                <div className="container">
                <div className="btm position-relative mb-3">
                    <div className="rows bucket-container my-3 position-absolute">
                    <div className="paint-bucket" data-target="#tab5">
                        <Image src="/nexontest/assets/images/imagepaint3.png" width={80} height={106} alt="Bucket 1" />
                    </div>
                    <div className="paint-bucket" data-target="#tab6">
                        <Image src="/nexontest/assets/images/imagepaint4.png" width={80} height={106} alt="Bucket 2" />
                    </div>
                    </div>
                    {/* Tab Content Wrapper */}
                    <div className="tab-content">
                    {/* First Tab */}
                    <div className="tab-pane fade show active" id="tab5">
                        <div className="row content-right d-flex justify-content-between align-items-start">
                        <div className="col-sm-5 p-0">
                            <div className="image">
                            <Image src="/nexontest/assets/images/imagep3.png" width={540} height={416} className="img-fluid" alt="SuperTrack" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="rows">
                            <h1 className="dark-text">
                                SuperTrack<sup>®</sup> High Gloss
                            </h1>
                            <h6 className="dark-text"> Interior Emulsion</h6>
                            <div className="d-flex flex-wrap gap-3 my-3">
                                <div className="d-flex flex-column align-items-center col-12 col-lg-2 col-md-3 col-sm-4 p-0 text-center">
                                <div className="icon-image mb-2">
                                    <Image src="/nexontest/assets/images/image117.png" width={130} height={130} alt="Better" />
                                </div>
                                <span>
                                    Better <br />
                                    Coverage
                                </span>
                                </div>
                                <div className="d-flex flex-column align-items-center col-12 col-lg-2 col-md-3 col-sm-4 p-0 text-center">
                                <div className="icon-image mb-2">
                                    <Image src="/nexontest/assets/images/image118.png" width={130} height={130} alt="Value for" />
                                </div>
                                <span>
                                    Value for <br />
                                    Money
                                </span>
                                </div>
                                <div className="d-flex flex-column align-items-center col-12 col-lg-2 col-md-3 col-sm-4 p-0 text-center">
                                <div className="icon-image mb-2">
                                    <Image src="/nexontest/assets/images/image119.png" width={130} height={130} alt="High" />
                                </div>
                                <span>
                                    High <br />
                                    Opacity
                                </span>
                                </div>
                            </div>
                            <div className="d-flex flex-wrap gap-3">
                                <div className="anc">
                                <a href="#" className="btn btn-outline-dark ">
                                    Discover SuperTrack<sup>®</sup> High Gloss
                                </a>
                                </div>
                                <div className="anc-opp">
                                <a href="#" className="btn btn-outline-dark ">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    >
                                    <path
                                        d="M2.5 14.1669C2.5 14.9419 2.5 15.3294 2.58519 15.6473C2.81636 16.51 3.49022 17.1839 4.35296 17.415C4.67087 17.5002 5.05836 17.5002 5.83333 17.5002H14.1667C14.9417 17.5002 15.3292 17.5002 15.6471 17.415C16.5098 17.1839 17.1837 16.51 17.4148 15.6473C17.5 15.3294 17.5 14.9419 17.5 14.1669"
                                        stroke="#00ABE8"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M13.75 9.58349C13.75 9.58349 10.9882 13.3335 9.99995 13.3335C9.01178 13.3335 6.25 9.58349 6.25 9.58349M9.99995 12.5002V2.50012"
                                        stroke="#00ABE8"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    </svg>
                                    Technical Datasheet
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Second Tab */}
                    <div className="tab-pane fade" id="tab6">
                        <div className="row content-right d-flex justify-content-between align-items-start">
                        <div className="col-sm-5 p-0">
                            <div className="image">
                            <Image src="/nexontest/assets/images/imagep4.png" width={540} height={416} className="img-fluid" alt="SuperTrack" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="rows">
                            <h1 className="dark-text">
                                SuperTrack<sup>®</sup>{" "}
                            </h1>
                            <h6 className="dark-text"> Exterior Emulsion</h6>
                            <div className="d-flex flex-wrap gap-3 my-3">
                                <div className="d-flex flex-column align-items-center col-12 col-lg-2 col-md-3 col-sm-4 p-0 text-center">
                                <div className="icon-image mb-2">
                                    <Image src="/nexontest/assets/images/image117.png" width={130} height={130} alt="Smooth" />
                                </div>
                                <span>
                                    Smooth <br />
                                    Coverage
                                </span>
                                </div>
                                <div className="d-flex flex-column align-items-center col-12 col-lg-2 col-md-3 col-sm-4 p-0 text-center">
                                <div className="icon-image mb-2">
                                    <Image src="/nexontest/assets/images/image118.png" width={130} height={130} alt="Value for" />
                                </div>
                                <span>
                                    Value for <br />
                                    Money
                                </span>
                                </div>
                                <div className="d-flex flex-column align-items-center col-12 col-lg-2 col-md-3 col-sm-4 p-0 text-center">
                                <div className="icon-image mb-2">
                                    <Image src="/nexontest/assets/images/image119.png" width={130} height={130} alt="High" />
                                </div>
                                <span>
                                    High <br />
                                    Opacity
                                </span>
                                </div>
                            </div>
                            <div className="d-flex flex-wrap gap-3">
                                <div className="anc">
                                <a href="#" className="btn btn-outline-dark ">
                                    Discover SuperTrack<sup>®</sup> High Gloss
                                </a>
                                </div>
                                <div className="anc-opp">
                                <a href="#" className="btn btn-outline-dark ">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    >
                                    <path
                                        d="M2.5 14.1669C2.5 14.9419 2.5 15.3294 2.58519 15.6473C2.81636 16.51 3.49022 17.1839 4.35296 17.415C4.67087 17.5002 5.05836 17.5002 5.83333 17.5002H14.1667C14.9417 17.5002 15.3292 17.5002 15.6471 17.415C16.5098 17.1839 17.1837 16.51 17.4148 15.6473C17.5 15.3294 17.5 14.9419 17.5 14.1669"
                                        stroke="#00ABE8"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M13.75 9.58349C13.75 9.58349 10.9882 13.3335 9.99995 13.3335C9.01178 13.3335 6.25 9.58349 6.25 9.58349M9.99995 12.5002V2.50012"
                                        stroke="#00ABE8"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    </svg>
                                    Technical
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
            </section>

            <section
                className="section4 ps4 nav-section section-space py-5 bg-light"
                id="Value"
            >
                <div className="container">
                <div className="btm position-relative">
                    <div className="rows bucket-container-left my-3 position-absolute">
                    <div className="paint-bucket" data-target="#tab7">
                        <Image src="/nexontest/assets/images/imagepaint5.png" width={78} height={104} alt="Bucket 1" />
                    </div>
                    <div className="paint-bucket" data-target="#tab8">
                        <Image src="/nexontest/assets/images/imagepaint4.png" width={78} height={104} alt="Bucket 2" />
                    </div>
                    </div>
                    {/* Tab Content Wrapper */}
                    <div className="tab-content">
                    {/* First Tab */}
                    <div className="tab-pane fade show active" id="tab7">
                        <div className="row content-left d-flex justify-content-between align-items-start">
                        <div className="col-sm-6">
                            <div className="rows">
                            <h1 className="dark-text">
                                Vivo<sup>®</sup>
                            </h1>
                            <h6 className="dark-text">Interior Emulsion</h6>
                            <div className="d-flex flex-wrap gap-3 my-3">
                                <div className="d-flex flex-column align-items-center col-12 col-lg-2 col-md-3 col-sm-4 p-0 text-center">
                                <div className="icon-image mb-2">
                                    <Image src="/nexontest/assets/images/image115.png" width={130} height={130} alt="Anti-Bacterial" />
                                </div>
                                <span>
                                    Anti-Bacterial <br />
                                    Anti-Viral{" "}
                                </span>
                                </div>
                                <div className="d-flex flex-column align-items-center col-12 col-lg-2 col-md-3 col-sm-4 p-0 text-center">
                                <div className="icon-image mb-2">
                                    <Image src="/nexontest/assets/images/image112.png" width={130} height={130} alt="Excellent" />
                                </div>
                                <span>
                                    Excellent <br />
                                    Washability
                                </span>
                                </div>
                                <div className="d-flex flex-column align-items-center col-12 col-lg-2 col-md-3 col-sm-4 p-0 text-center">
                                <div className="icon-image mb-2">
                                    <Image src="/nexontest/assets/images/image113.png" width={130} height={130} alt="Dirt" />
                                </div>
                                <span>
                                    Dirt &amp; Stain <br />
                                    Resistant
                                </span>
                                </div>
                                <div className="d-flex flex-column align-items-center col-12 col-lg-2 col-md-3 col-sm-4 p-0 text-center">
                                <div className="icon-image mb-2">
                                    <Image src="/nexontest/assets/images/image114.png" width={130} height={130} alt="Luxury" />
                                </div>
                                <span>
                                    Luxury <br />
                                    Finish
                                </span>
                                </div>
                            </div>
                            <div className="d-flex flex-wrap gap-3">
                                <div className="anc">
                                <a href="#" className="btn btn-outline-dark ">
                                    Discover Vivo<sup>®</sup>
                                </a>
                                </div>
                                <div className="anc-opp">
                                <a href="#" className="btn btn-outline-dark ">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    >
                                    <path
                                        d="M2.5 14.1669C2.5 14.9419 2.5 15.3294 2.58519 15.6473C2.81636 16.51 3.49022 17.1839 4.35296 17.415C4.67087 17.5002 5.05836 17.5002 5.83333 17.5002H14.1667C14.9417 17.5002 15.3292 17.5002 15.6471 17.415C16.5098 17.1839 17.1837 16.51 17.4148 15.6473C17.5 15.3294 17.5 14.9419 17.5 14.1669"
                                        stroke="#00ABE8"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M13.75 9.58349C13.75 9.58349 10.9882 13.3335 9.99995 13.3335C9.01178 13.3335 6.25 9.58349 6.25 9.58349M9.99995 12.5002V2.50012"
                                        stroke="#00ABE8"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    </svg>{" "}
                                    Technical Datasheet
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-5 p-0">
                            <div className="image">
                            <Image src="/nexontest/assets/images/pimage44.png" width={540} height={416} className="img-fluid" alt="Vivo" />
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Second Tab */}
                    <div className="tab-pane fade" id="tab8">
                        <div className="row content-left d-flex justify-content-between align-items-start">
                        <div className="col-sm-6">
                            <div className="rows">
                            <h1 className="dark-text">
                                Vivo<sup>®</sup>
                            </h1>
                            <h6 className="dark-text">Exterior Emulsion</h6>
                            <div className="d-flex flex-wrap gap-3 my-3">
                                <div className="d-flex flex-column align-items-center col-12 col-lg-2 col-md-3 col-sm-4 p-0 text-center">
                                <div className="icon-image mb-2">
                                    <Image src="/nexontest/assets/images/image115.png" width={130} height={130} alt="Anti-Bacterial" />
                                </div>
                                <span>
                                    Anti-Bacterial <br />
                                    Anti-Viral{" "}
                                </span>
                                </div>
                                <div className="d-flex flex-column align-items-center col-12 col-lg-2 col-md-3 col-sm-4 p-0 text-center">
                                <div className="icon-image mb-2">
                                    <Image src="/nexontest/assets/images/image112.png" width={130} height={130} alt="Excellent" />
                                </div>
                                <span>
                                    Excellent <br />
                                    Washability
                                </span>
                                </div>
                                <div className="d-flex flex-column align-items-center col-12 col-lg-2 col-md-3 col-sm-4 p-0 text-center">
                                <div className="icon-image mb-2">
                                    <Image src="/nexontest/assets/images/image113.png" width={130} height={130} alt="Dirt" />
                                </div>
                                <span>
                                    Dirt &amp; Stain <br />
                                    Resistant
                                </span>
                                </div>
                                <div className="d-flex flex-column align-items-center col-12 col-lg-2 col-md-3 col-sm-4 p-0 text-center">
                                <div className="icon-image mb-2">
                                    <Image src="/nexontest/assets/images/image114.png" width={130} height={130} alt="Luxury" />
                                </div>
                                <span>
                                    Luxury <br />
                                    Finish
                                </span>
                                </div>
                            </div>
                            <div className="d-flex flex-wrap gap-3">
                                <div className="anc">
                                <a href="#" className="btn btn-outline-dark ">
                                    Discover Vivo<sup>®</sup>
                                </a>
                                </div>
                                <div className="anc-opp">
                                <a href="#" className="btn btn-outline-dark ">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    >
                                    <path
                                        d="M2.5 14.1669C2.5 14.9419 2.5 15.3294 2.58519 15.6473C2.81636 16.51 3.49022 17.1839 4.35296 17.415C4.67087 17.5002 5.05836 17.5002 5.83333 17.5002H14.1667C14.9417 17.5002 15.3292 17.5002 15.6471 17.415C16.5098 17.1839 17.1837 16.51 17.4148 15.6473C17.5 15.3294 17.5 14.9419 17.5 14.1669"
                                        stroke="#00ABE8"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M13.75 9.58349C13.75 9.58349 10.9882 13.3335 9.99995 13.3335C9.01178 13.3335 6.25 9.58349 6.25 9.58349M9.99995 12.5002V2.50012"
                                        stroke="#00ABE8"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    </svg>{" "}
                                    Technical Datasheet
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-5 p-0">
                            <div className="image">
                            <Image src="/nexontest/assets/images/imagep3.png" width={540} height={416} className="img-fluid" alt="Tiara" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <section className="section5 section-space py-5">
                <div className="container">
                <div className="top info mb-4 text-center">
                    <h2 className="fw-bold">
                    Why Choose Nexon <br /> Paints for Your Home?
                    </h2>
                    <p>
                    Because your walls deserve the best. Everything <br /> your home needs
                    in every color you love.
                    </p>
                </div>
                <div className="middle d-flex justify-content-center align-items-center gap-5 flex-wrap">
                    <div className="text-center">
                    <Image src="/nexontest/assets/images/image60.svg" width={100} height={100} alt="Washable" />
                    <p>Washable</p>
                    </div>
                    <div className="text-center">
                    <Image src="/nexontest/assets/images/image61.svg" width={100} height={100} alt="Long Lasting" />
                    <p>Long Lasting</p>
                    </div>
                    <div className="text-center">
                    <Image src="/nexontest/assets/images/image62.svg" width={100} height={100} alt="Stain Free" />
                    <p>Stain Free</p>
                    </div>
                    <div className="text-center">
                    <Image src="/nexontest/assets/images/image63.svg" width={100} height={100} alt="Eco-Friendly" />
                    <p>Eco-Friendly</p>
                    </div>
                </div>
                </div>
            </section>
            
            <section className="product-section-footer section-space p-0">
                <div className="image">
                <Image src="/nexontest/assets/images/contact-footer.png" width={1905} height={1233} alt="Looking" />
                <div className="overlay">
                    <h2 className="hm info">
                    Looking for <br />
                    Painting Services?
                    </h2>
                    <h5>
                    Experience world-class enterprise coating <br />
                    solutions with Nexon’s expertise.
                    </h5>
                    <div className="anc">
                    <a href="#" className="btn btn-outline-dark ">
                        Book Free Consultation Now
                    </a>
                    </div>
                </div>
                </div>
            </section>
        </>

    );
}