import React from 'react'

import bread from '../../assets/Categories/bread.png'
import chips from '../../assets/Categories/chips.png'
import faceSoap from '../../assets/Categories/faceSoap.png'
import faceWash from '../../assets/Categories/faceWash.png'
import fish from '../../assets/Categories/fish.png'
import fruits from '../../assets/Categories/fruits.png'
import iceCream from '../../assets/Categories/iceCream.png'
import juice from '../../assets/Categories/juice.png'
import Kulfi from '../../assets/Categories/Kulfi.png'
import meat from '../../assets/Categories/meat.png'
import nimco from '../../assets/Categories/nimco.png'


const Categories = () => {
    return (
        <div >
            <div style={{ marginLeft: '100px', marginTop: '50px' }}>
                <span className='text-xl font-semibold' style={{ fontFamily: 'poppins', fontSize: '20px', fontWeight: '500' }}>Shop from </span>
                <span className='text-xl font-semibold' style={{ fontFamily: 'poppins', fontSize: '20px', fontWeight: '500', color: 'rgb(55, 167, 4)' }}>Top Categories</span>
                <div style={{ borderBottom: '2px solid rgb(55, 167, 4)', width: '200px', marginTop: '5px' }}></div>
            </div>

            <div style={{ marginLeft: '100px', display: 'flex', flexWrap: 'wrap' }}>

                 <div className="card" style={{ width: '12rem', marginTop: '50px', marginRight: '10px', }}>
                    <img className="card-img-top" src={fruits} alt="Card image cap" style={{height:'220px' ,background:'#dddddd'}}/>
                    <div className="card-body">
                        <h5 className="card-title" style={{fontSize:'18px',fontFamily:'poppins',textAlign:'center'}}>Fruits & Vegetables</h5>
                    </div>
                    </div>
               
                <div className="card" style={{ width: '12rem', marginTop: '50px' , marginRight: '10px', }}>
                    <img className="card-img-top" src={bread} alt="Card image cap" style={{height:'220px',background:'#dddddd'}} />
                    <div className="card-body">
                        <h5 className="card-title" style={{fontSize:'18px',fontFamily:'poppins',textAlign:'center'}}>Dairy & Breakfast</h5>
                    </div>
                </div>

                <div className="card" style={{ width: '12rem', marginTop: '50px', marginRight: '10px', }}>
                    <div style={{background:'#dddddd'}}>
                    <img className="card-img-top" src={fish} alt="Card image cap" />
                    <img className="card-img-top" src={meat} alt="Card image cap" style={{width:"250px",marginTop:"-140px",marginLeft:"10px"}}/>
                    </div>
                  
                    <div className="card-body">
                        <h5 className="card-title" style={{fontSize:'18px',fontFamily:'poppins',textAlign:'center'}}>Eggs, Meat & Fish</h5>
                    </div>
                </div>

                <div className="card" style={{ width: '12rem', marginTop: '50px' , marginRight: '10px',}}>
                    <div style={{background:'#dddddd',height:'215px'}}>
                    <img className="card-img-top" src={faceWash} alt="Card image cap" style={{marginLeft:"-40px"}}/>
                    <img className="card-img-top" src={faceSoap} alt="Card image cap" style={{width:"180px",marginTop:"-130px",marginLeft:"30px"}}/>
                    </div>
                         <div className="card-body">
                        <h5 className="card-title" style={{fontSize:'18px',fontFamily:'poppins',textAlign:'center'}}>Bath & Body</h5>
                    </div>
                </div>

                <div className="card" style={{ width: '12rem', marginTop: '50px' , marginRight: '10px',}}>
                    <img className="card-img-top" src={juice} alt="Card image cap" style={{height:'220px',background:'#dddddd'}}/>
                    <div className="card-body">
                        <h5 className="card-title" style={{fontSize:'18px',fontFamily:'poppins',textAlign:'center'}}>Cold drinks & Juices</h5>
                    </div>
                </div>

                <div className="card" style={{ width: '12rem', marginTop: '50px' , marginRight: '10px',}}>
                    <div style={{background:'#dddddd',height:'220px'}}>
                    <img className="card-img-top" src={chips} alt="Card image cap"style={{marginLeft:"-40px",height:'220px'}}/>
                    <img className="card-img-top" src={nimco} alt="Card image cap" style={{width:"150px",marginTop:"-150px",marginLeft:"60px"}}/>
                    </div>

                    <div className="card-body">
                        <h3 className="card-title" style={{fontSize:'18px',fontFamily:'poppins',textAlign:'center'}}>Snacks & Munchies</h3>
                    </div>
                </div>

                <div className="card" style={{ width: '12rem', marginTop: '50px' , marginRight: '10px',}}>
                    <div style={{background:'#dddddd',height:'220px'}}>
                    <img className="card-img-top" src={iceCream} alt="Card image cap" style={{width:"180px",height:'220px',marginLeft:"-20px"}}/>
                    <img className="card-img-top" src={Kulfi} alt="Card image cap" style={{width:"180px",marginTop:"-199px",marginLeft:"60px"}}/>
                    </div>
                    
                    <div className="card-body">
                        <h5 className="card-title" style={{fontSize:'18px',fontFamily:'poppins',textAlign:'center'}}>Icy Delights</h5>
                    </div>
                </div>

               

            </div>


        </div>
    )
}

export default Categories
