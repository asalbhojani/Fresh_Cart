import React from 'react'
import slider from '../../assets/slider.png'
import cheese from '../../assets/SuperSaver/cheese.png'
import chocolateSyrup from '../../assets/SuperSaver/chocolateSyrup.png'
import egg from '../../assets/SuperSaver/egg.png'
import juice from '../../assets/SuperSaver/juice.png'
import soanPapri from '../../assets/SuperSaver/soanPapri.png'

const SuperSaver = () => {
    return (
        <div >
            <div style={{ marginLeft: '100px', marginTop: '50px' }}>
                <span className='text-xl font-semibold' style={{ fontFamily: 'poppins', fontSize: '20px', fontWeight: '500' }}>Supersaver </span>
                <span className='text-xl font-semibold' style={{ fontFamily: 'poppins', fontSize: '20px', fontWeight: '500', color: 'rgb(55, 167, 4)' }}>Upto 50% OFF</span>
                <div style={{ borderBottom: '2px solid rgb(55, 167, 4)', width: '200px', marginTop: '5px' }}></div>
            </div>

            <div style={{ marginLeft: '100px', display: 'flex', flexWrap: 'wrap' }}>

                <div className="card" style={{ width: '17rem', marginTop: '50px', marginRight: '10px', borderTopRightRadius: '15px' }}>
                    <div style={{paddingTop:'10px', lineHeight: '0.75', background: 'rgb(55, 167, 4)', width: '50px', height: '50px', borderTopRightRadius: '15px', borderBottomLeftRadius: '15px', marginLeft: '220px' }}>
                        <span style={{paddingLeft:'10px', marginRight: '10px', color: 'white', fontFamily: 'poppins' }}>10%</span>
                        <span style={{paddingLeft:'10px', marginRight: '10px', color: 'white', fontFamily: 'poppins' }}>OFF</span>
                    </div>
                    <img className="card-img-top" src={juice} alt="Card image cap" style={{height:'200px',marginTop:'-20px'}}/>
                    <div className="card-body">
                        <h5 className="card-title" style={{fontSize:'18px',fontFamily:'poppins'}}>Simply Orange & Mango Juice</h5>
                        <span className="card-title" style={{fontSize:'18px',fontFamily:'poppins',textAlign:'left',marginLeft:'20px'}}>$10</span>
                        <span className="card-title" style={{fontSize:'20px',fontFamily:'poppins',textAlign:'right',marginLeft:'150px',color: 'rgb(55, 167, 4)'}}>
                        <i class="material-icons">shopping_cart</i>
                        </span>
                    </div>
                </div>

                <div className="card" style={{ width: '17rem', marginTop: '50px', marginRight: '10px', borderTopRightRadius: '15px' }}>
                    <div style={{paddingTop:'10px', lineHeight: '0.75', background: 'rgb(55, 167, 4)', width: '50px', height: '50px', borderTopRightRadius: '15px', borderBottomLeftRadius: '15px', marginLeft: '220px' }}>
                        <span style={{paddingLeft:'10px', marginRight: '10px', color: 'white', fontFamily: 'poppins' }}>17%</span>
                        <span style={{paddingLeft:'10px', marginRight: '10px', color: 'white', fontFamily: 'poppins' }}>OFF</span>
                    </div>
                    <img className="card-img-top" src={egg} alt="Card image cap" style={{height:'200px' ,width:'250px',marginLeft:'10px',marginTop:'-20px'}}/>
                    <div className="card-body">
                        <h5 className="card-title" style={{fontSize:'18px',fontFamily:'poppins'}}>Hen White High Protein Eggs</h5>
                        <span className="card-title" style={{fontSize:'18px',fontFamily:'poppins',textAlign:'left',marginLeft:'20px'}}>$10</span>
                        <span className="card-title" style={{fontSize:'20px',fontFamily:'poppins',textAlign:'right',marginLeft:'150px',color: 'rgb(55, 167, 4)'}}>
                        <i class="material-icons">shopping_cart</i>
                        </span>
                    </div>
                </div>

                <div className="card" style={{ width: '17rem', marginTop: '50px', marginRight: '10px', borderTopRightRadius: '15px' }}>
                    <div style={{paddingTop:'10px', lineHeight: '0.75', background: 'rgb(55, 167, 4)', width: '50px', height: '50px', borderTopRightRadius: '15px', borderBottomLeftRadius: '15px', marginLeft: '220px' }}>
                        <span style={{paddingLeft:'10px', marginRight: '10px', color: 'white', fontFamily: 'poppins' }}>15%</span>
                        <span style={{paddingLeft:'10px', marginRight: '10px', color: 'white', fontFamily: 'poppins' }}>OFF</span>
                    </div>
                    <img className="card-img-top" src={cheese} alt="Card image cap" style={{height:'200px',marginTop:'-20px'}}/>
                    <div className="card-body">
                        <h5 className="card-title" style={{fontSize:'18px',fontFamily:'poppins'}}>Adam Cheese Slices <br/>200g</h5>
                        <span className="card-title" style={{fontSize:'18px',fontFamily:'poppins',textAlign:'left',marginLeft:'20px'}}>$10</span>
                        <span className="card-title" style={{fontSize:'20px',fontFamily:'poppins',textAlign:'right',marginLeft:'150px',color: 'rgb(55, 167, 4)'}}>
                        <i class="material-icons">shopping_cart</i>
                        </span>
                    </div>
                </div>

                <div className="card" style={{ width: '17rem', marginTop: '50px', marginRight: '10px', borderTopRightRadius: '15px' }}>
                    <div style={{paddingTop:'10px', lineHeight: '0.75', background: 'rgb(55, 167, 4)', width: '50px', height: '50px', borderTopRightRadius: '15px', borderBottomLeftRadius: '15px', marginLeft: '220px' }}>
                        <span style={{paddingLeft:'10px', marginRight: '10px', color: 'white', fontFamily: 'poppins' }}>12%</span>
                        <span style={{paddingLeft:'10px', marginRight: '10px', color: 'white', fontFamily: 'poppins' }}>OFF</span>
                    </div>
                    <img className="card-img-top" src={soanPapri} alt="Card image cap" style={{height:'200px',marginTop:'-20px'}}/>
                    <div className="card-body">
                        <h5 className="card-title" style={{fontSize:'18px',fontFamily:'poppins'}}>Haldiram's Elaichi Soan Papri</h5>
                        <span className="card-title" style={{fontSize:'18px',fontFamily:'poppins',textAlign:'left',marginLeft:'20px'}}>$10</span>
                        <span className="card-title" style={{fontSize:'20px',fontFamily:'poppins',textAlign:'right',marginLeft:'150px',color: 'rgb(55, 167, 4)'}}>
                        <i class="material-icons">shopping_cart</i>
                        </span>
                    </div>
                </div>

                <div className="card" style={{ width: '17rem', marginTop: '50px', marginRight: '10px', borderTopRightRadius: '15px' }}>
                    <div style={{paddingTop:'10px', lineHeight: '0.75', background: 'rgb(55, 167, 4)', width: '50px', height: '50px', borderTopRightRadius: '15px', borderBottomLeftRadius: '15px', marginLeft: '220px' }}>
                        <span style={{paddingLeft:'10px', marginRight: '10px', color: 'white', fontFamily: 'poppins' }}>19%</span>
                        <span style={{paddingLeft:'10px', marginRight: '10px', color: 'white', fontFamily: 'poppins' }}>OFF</span>
                    </div>
                    <img className="card-img-top" src={chocolateSyrup} alt="Card image cap" style={{height:'220px',marginTop:'-30px'}}/>
                    <div className="card-body">
                        <h5 className="card-title" style={{fontSize:'18px',fontFamily:'poppins'}}>Hershey's Chocolate Syrup</h5>
                        <span className="card-title" style={{fontSize:'18px',fontFamily:'poppins',textAlign:'left',marginLeft:'20px'}}>$10</span>
                        <span className="card-title" style={{fontSize:'20px',fontFamily:'poppins',textAlign:'right',marginLeft:'150px',color: 'rgb(55, 167, 4)'}}>
                        <i class="material-icons">shopping_cart</i>
                        </span>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default SuperSaver