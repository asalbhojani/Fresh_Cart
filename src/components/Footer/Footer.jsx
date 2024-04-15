import React from 'react'
import Freshcart from '../../assets/Freshcart.png'
import download from '../../assets/download.png'

const Footer = () => {
    return (
        <div>
            <br /><br />
            <footer className="text-center text-lg-start bg-body-tertiary text-muted" >

                <section className="" style={{background:'#dddddd'}}>
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3" >

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4" style={{marginTop:'30px'}}>

                                <h6 className="text-uppercase fw-bold mb-4">
                                    <img src={Freshcart} style={{ width: "50%", height: "50%", marginRight: '00px', marginLeft: '0px' }} />
                                </h6>
                                <h6 className="text-uppercase fw-bold mb-4" style={{ fontFamily: 'poppins' }}>Contact Us</h6>
                                <p style={{ fontFamily: 'poppins' }}><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                                <p style={{ fontFamily: 'poppins' }}>
                                    <i className="fas fa-envelope me-3"></i>
                                    info@example.com
                                </p>
                                <div>
                                    <a href="/" className="me-4 " style={{ color: 'rgb(55, 167, 4)',fontSize:'22px' }}>
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="/" className="me-4 " style={{ color: 'rgb(55, 167, 4)', fontSize:'22px'}}>
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="/" className="me-4 " style={{ color: 'rgb(55, 167, 4)', fontSize:'22px'}}>
                                        <i className="fab fa-google"></i>
                                    </a>
                                    <a href="/" className="me-4 " style={{ color: 'rgb(55, 167, 4)',fontSize:'22px' }}>
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="/" className="me-4 " style={{ color: 'rgb(55, 167, 4)', fontSize:'22px'}}>
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                    <a href="/" className="me-4 " style={{ color: 'rgb(55, 167, 4)', fontSize:'22px'}}>
                                        <i className="fab fa-github"></i>
                                    </a>
                                </div>

                                {/* <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p> */}
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" style={{marginTop:'30px'}}>

                                <h6 className=" mb-4" style={{ fontFamily: 'poppins' }}>
                                    Popular Categories
                                </h6>
                                <div style={{ borderBottom: '2px solid grey', width: '120px', marginTop: '-20px', marginBottom: '20px' }}></div>

                                <div style={{ fontFamily: 'poppins', border: 'none', lineHeight: '0.85' }}>
                                    <p> Fruits & Vegetables </p>
                                    <p> Dairy & Breakfast</p >
                                    <p> Egg, Meat & Fish</p>
                                    <p> Bath & Body</p>
                                    <p> Cold drinks & Juices</p>
                                    <p> Snacks & Munchies</p>
                                </div>

                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" style={{ marginRight: '-800px', marginTop:'30px'}}>

                                <h6 className=" mb-4" style={{ fontFamily: 'poppins' }}>
                                    Customer Services
                                </h6>
                                <div style={{ borderBottom: '2px solid grey', width: '120px', marginTop: '-20px', marginBottom: '20px' }}></div>

                                <div style={{ fontFamily: 'poppins', border: 'none', lineHeight: '0.85' }}>
                                    <p> About Us </p>
                                    <p> Terms and Conditions</p >
                                    <p> FAQ</p>
                                    <p> Privacy Policy</p>
                                    <p> E-Waste Policy</p>
                                    <p> Return Policy</p>
                                </div>

                            </div>


                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" style={{marginTop:'30px'}}>
                                <h6 className=" mb-4" style={{ fontFamily: 'poppins' }}>
                                    Download App
                                </h6>
                                <div style={{ borderBottom: '2px solid grey', width: '90px', marginTop: '-20px', marginBottom: '20px' }}></div>

                                <div style={{ fontFamily: 'poppins', border: 'none', lineHeight: '0.85' }}>
                                <img src={download} style={{ width: "80%", marginRight: '00px', marginLeft: '0px' }} />
                                </div>
                            </div>

                        </div>
                    </div>

                </section>

                <div style={{ borderBottom: '2px solid grey', width: '1220px', marginTop: '-20px',marginLeft:'175px' }}></div>


                <div className="text-center p-4" style={{background:'#dddddd'}}>
                    © 2024 All Rights Reserved : FreshCart Ltd
                   
                </div>

            </footer>


        </div>
    )
}

export default Footer