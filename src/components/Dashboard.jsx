import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";


const Dashboard = () =>
{
        // etat du MenuMobile
        const [MenuMobile, setMenuMobile] = useState(false)

        return( 
                <section className="container">

                        <div className="d_flex">
<div className="link-content">
        <div className= "sidebar" >
                <div className="images">
                        <img src="monartisan.png" alt="" />
                                        </div>
                                        
        <div className={ MenuMobile ? "active" : "link" }>
                        
                        <Link to="/" style={{ textDecoration: 'none' }}><li>Sinistre</li></Link>       
                        <Link to="/contact" style={{ textDecoration: 'none' }}><li>Contact</li></Link>        
                     
                                </div>
                                <button className="sid" onClick={()=>setMenuMobile(!MenuMobile)}>
                                        {
                                                MenuMobile? <i className="fas fa-times close home-btn"></i> : <i class="fa-solid fa-bars"></i>
                                        }
                        </button>
                                </div>

</div>
                         
                </div>
        </section>
        )
}

export default  Dashboard 