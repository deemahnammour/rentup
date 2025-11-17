import React, { Fragment } from "react";
import Data from "../../Data";
import './featured.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Featured = () => {

    const featitem = Data.feat.map((item) => {
        return (
            <div className="col-md-3">
                <div className="box">
                    <a href="url" >
                        <img src={item.img} alt="" />
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                    </a>
                </div>

            </div>
        )
    })

    const recitem = Data.rec.map((item) => {
        return (
            <div className="col-md-4">
                <div className="card">
                    <img src={item.img} alt="" />
                    <div className="card-flex">
                        <span className="type">{item.type}</span>
                        <FontAwesomeIcon className="icon" icon={item.icon} />
                    </div>
                    <a href="url" ><h4>{item.title}</h4></a>
                    <p><FontAwesomeIcon className="icon1" icon={item.icon1} />{item.text}</p>
                    <div className="price-flex flex">
                        <div className="price ">
                            <button className="bt">{item.price}</button> 
                            <label htmlFor=""> /sqf</label>
                        </div>
                        <span className="typ"> {item.typ}</span>
                    </div>
                </div>

            </div>
        )
    })

    const awardsitem = Data.awar.map((item) => {
        return (
            <div className="col-md-3">
                <div className="box">
                    <FontAwesomeIcon className="icon" icon={item.icon} />
                    <h1>{item.num}</h1>
                    <p>{item.name}</p>
                </div>
            </div>

        )
    })


    return (

        <Fragment>
            <section className="featured">
                <div className="container">
                    <div className="row">
                        <h2>Featured Property Types</h2>
                        <p>Find All Type of Property.</p>
                    </div>

                    <div className="row last">
                        {featitem}
                    </div>
                </div>
            </section>

            <section className="recent">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Recent Property Listed</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /> Ut enim ad minim veniam.</p>
                        </div>
                    </div>

                    <div className="row">
                        {recitem}
                    </div>
                </div>

            </section>

            <section className="awards">
                <div className="container">
                    <div className="row">
                        <span className="sp" >our Awards</span>
                        <h2>Over 1,24,000+ Happy User <br /> Bieng with us Still they Love Our <br /> Services</h2>
                    </div>

                    <div className="row">
                        {awardsitem}

                    </div>
                </div>

            </section>

        </Fragment>

    )
}

export default Featured;