import React from "react";
import Image from "next/image";

export default function EveryHome() {
  return (
    <>
        <section className="section6 section-space">
            <div className="container">
                <div className="rows">
                    <div className="top">
                    <div className="hm info text-right">
                        <h2>
                        Every Home <br /> deserves <br /> Nexon Paints{" "}
                        </h2>
                    </div>
                    </div>
                    <div className="btm">
                    <div className="row">
                        <div className="col-sm-3">
                        <div className="bx text-center">
                            <div className="image">
                            <Image src="/assets/images/washable.jpg" width={189} height={198} className="img-responsive" alt="Washable" />
                            </div>
                            <div className="title">
                            <p>Washable</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="bx text-center">
                            <div className="image">
                            <Image src="/assets/images/long-lasting.jpg" width={189} height={198} className="img-responsive" alt="Long Lasting" />
                            </div>
                            <div className="title">
                            <p>Long Lasting</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="bx text-center">
                            <div className="image">
                            <Image src="/assets/images/stain-free.jpg" width={189} height={198} className="img-responsive" alt="Long Lasting" />
                            </div>
                            <div className="title">
                            <p>Long Lasting</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="bx text-center">
                            <div className="image">
                            <Image src="/assets/images/eco-friendly.jpg" width={189} height={198} className="img-responsive" alt="Eco-Friendly" />
                            </div>
                            <div className="title">
                            <p>Eco-Friendly</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}