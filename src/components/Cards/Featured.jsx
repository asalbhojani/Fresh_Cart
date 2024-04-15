import React from 'react'

import rice from '../../assets/Featured/rice.png'
import daawat from '../../assets/Featured/daawat.png'
import aata from '../../assets/Featured/aata.png'
import aashirwaad from '../../assets/Featured/aashirwaad.png'
import tea from '../../assets/Featured/tea.png'
import lipton from '../../assets/Featured/lipton.png'

const Featured = () => {
  return (
    <div >
    <div style={{ marginLeft: '100px', marginTop: '50px' }}>
        <span className='text-xl font-semibold' style={{ fontFamily: 'poppins', fontSize: '22px', fontWeight: '500' }}>Featured </span>
        <span className='text-xl font-semibold' style={{ fontFamily: 'poppins', fontSize: '22px', fontWeight: '500', color: 'rgb(55, 167, 4)' }}>Brands</span>
        <div style={{ borderBottom: '2px solid rgb(55, 167, 4)', width: '120px', marginTop: '5px' }}></div>
    </div>

    <div style={{ marginLeft: '100px', display: 'flex', flexWrap: 'wrap' }}>

        <div className="card" style={{ width: '28rem',height:'15rem', marginTop: '50px', marginRight: '10px', background:'#0f4700' ,borderRadius:'25px'}}>
           <div className="card-body text-white" style={{width:'12rem'}}>
           <img className="card-img-top" src={daawat} alt="Card image cap" style={{height:'100px',width:'150px',marginTop:'-20px'}}/>
                <h5 className="card-title" style={{fontSize:'18px',fontFamily:'poppins',marginTop:'-30px',marginLeft:'29px'}}>The Finest</h5>
                <div style={{width:'220px',height:'50px',background:'#85c57498', borderRadius:'15px',paddingTop:'12px',paddingLeft:'25px'}}>
                    <span style={{textAlign:'center',fontSize:'17px',fontFamily:'poppins'}}>Cook Exotic Dishes</span>
                </div>
                <h5 className="card-title" style={{fontSize:'24px',fontFamily:'poppins',marginTop:'20px',marginLeft:'9px',marginRight:'-30px'}}>UP to <b>50% OFF</b></h5>
            </div>
            <div className='text-white' style={{width:'12rem'}}>
            <img className="card-img-top" src={rice} alt="Card image cap" style={{height:'200px',marginTop:'-220px',marginLeft:'250px'}}/>
            </div>
        </div>

        <div className="card" style={{ width: '28rem',height:'15rem', marginTop: '50px', marginRight: '10px', background:'#520000' ,borderRadius:'25px'}}>
           <div className="card-body text-white" style={{width:'12rem'}}>
           <img className="card-img-top" src={aashirwaad} alt="Card image cap" style={{height:'100px',width:'150px',marginTop:'-20px'}}/>

                <div style={{width:'220px',height:'50px',background:'#b961618a', borderRadius:'15px',paddingTop:'12px',paddingLeft:'25px'}}>
                    <span style={{textAlign:'center',fontSize:'17px',fontFamily:'poppins'}}>World's No.1 Aata</span>
                </div>
                <h5 className="card-title" style={{fontSize:'24px',fontFamily:'poppins',marginTop:'20px',marginLeft:'9px',marginRight:'-30px'}}>UP to <b>30% OFF</b></h5>
            </div>
            <div className='text-white' style={{width:'12rem'}}>
            <img className="card-img-top" src={aata} alt="Card image cap" style={{height:'200px',width:'270px',marginTop:'-220px',marginLeft:'220px'}}/>
            </div>
        </div>

        <div className="card" style={{ width: '28rem',height:'15rem', marginTop: '50px', marginRight: '10px', background:'#3a9605' ,borderRadius:'25px',border:'none'}}>
           <div className="card-body text-white" style={{width:'12rem'}}>
           <img className="card-img-top" src={lipton} alt="Card image cap" style={{height:'100px',width:'150px',marginTop:'-20px'}}/>
                
                <div style={{width:'220px',height:'50px',background:'#85c57498', borderRadius:'15px',paddingTop:'12px',paddingLeft:'25px'}}>
                    <span style={{textAlign:'center',fontSize:'17px',fontFamily:'poppins'}}>Best Green Tea</span>
                </div>
                <h5 className="card-title" style={{fontSize:'24px',fontFamily:'poppins',marginTop:'20px',marginLeft:'9px',marginRight:'-30px'}}>UP to <b>15% OFF</b></h5>
            </div>
            <div className='text-white' style={{width:'12rem'}}>
            <img className="card-img-top" src={tea} alt="Card image cap" style={{height:'200px',marginTop:'-220px',marginLeft:'250px'}}/>
            </div>
        </div>

       

    </div>


</div>
  )
}

export default Featured