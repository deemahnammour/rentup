import React, { Fragment } from "react";
import Navs from "../Nav/nav";
import Header from "../Header/header";
import Featured from "../Featured/featured";
import Explor from "../Explore/explor";
import Team from "../team/team";
import Footer from "../Footer/footer";
import Pricing from "../Pricing/price";



const Home =()=>{
    return(
        <Fragment>
             <Navs/>
             <Header/>
             <Featured/>
             <Explor/>
             <Team/>
            <Pricing/>
             <Footer/>
            
            

        </Fragment>
       

    )
}

export default Home;