import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/Footer.css'
function Footer() {
    return (
        <>
        <section className="footer">
            <div className="content">
                <div className="footer-content">
                    <div className="company-info">
                        <Link to="/"><h2 className="heading">MoviesX</h2> </Link>
                        <a href="mailto:vyasbhumika77@gmail.com">vyasbhumika77@gmail.com</a>
                        <p>+91 12-34-567890</p>
                    </div>
                    <div className="footer-links">
                        <div className="col-1">
                            <Link to="/">FAQ</Link>
                            <Link to="/">Investor Relations</Link>
                            <Link to="/">Privacy</Link>
                            <Link to="/">Speed Test</Link>
                        </div>
                        <div className="col-1">
                            <Link to="/">Help Center</Link>
                            <Link to="/">Jobs</Link>
                            <Link to="/">Cookies</Link>
                            <Link to="/">Legal Notices</Link>
                        </div>
                        <div className="col-1">
                            <Link to="/">Account</Link>
                            <Link to="/">Ways To Watch</Link>
                            <Link to="/">Corporate Info.</Link>
                            <Link to="/">Only On MoviesX</Link>
                        </div>
                        <div className="col-1">
                            <Link to="/">Media Centre</Link>
                            <Link to="/">Terms Of Use</Link>
                            <Link to="/">Privacy</Link>
                            <Link to="/">Contact us</Link>
                        </div>
                    </div>
                </div>
                <div className="credits">
                    <h4>Designed & Developed By 
                        <a href="/" className="heading" rel="noreferrer" target="_blank">Bhumika & Saloni</a> 
                        | &copy; 2021 All Rights reserved.
                    </h4>
                </div>
            </div>      
        </section>  
        </>
    )
}

export default Footer
