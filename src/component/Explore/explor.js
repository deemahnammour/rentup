import React from "react";
import './explor.css';
import Data from "../../Data";

const Explor = ()=>{

    const exportitem = Data.exp.map((item)=>{
        return(
            <div className="col-md-4">
                <div className="box">
                    <img src={item.cover} alt=""/>
                    <div className="overlay">
                        <h4>{item.title}</h4>
                        <p>
                            <label>{item.villas}</label>
                            <label>{item.offices}</label>
                            <label>{item.apartments}</label>
                        </p>
                    </div>
                    
                </div>
                
                
            </div>
        )
    }
    )
    


    return(
        <section className="explore">
            <div className="container">
                <div className="row">
                    <h2>Explore By Location</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut<br/> labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>

                <div className="row">

                    {exportitem}
                </div>
            </div>
        </section>

    )
}

export default Explor;