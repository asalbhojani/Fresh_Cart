import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Slider/slider.css'
import slider from '../../assets/slider.png'
import slider1 from '../../assets/slider1.png'
import cone from '../../assets/cone.png'
import sale from '../../assets/sale.png'
import splash from '../../assets/splash.png'
const Slider = () => {
  return (
    <div>

      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel" data-interval='1000' >

        <div className="carousel-inner" style={{ height: '400px' }}>

          <div className="carousel-item active">
            <div className="overlay " >

              <div className=' w-[50%] text-white mt-[50px] ml-[80px]' style={{ paddingLeft: '200px', paddingTop: '50px' }}>
                <h1 className='text-xl font-semibold' style={{ fontFamily: 'poppins', fontSize: '25px', fontWeight: '400' }}>Best Deal on icy Delights</h1>
                <h1 className='text-2xl font-semibold' style={{ fontFamily: 'poppins', fontSize: '60px', fontWeight: '700' }}>BEAT </h1>
                <h1 className='text-2xl font-semibold outlined-text' style={{ fontFamily: 'poppins', fontSize: '60px', fontWeight: '700' }}>THE HEAT </h1>
                <p className='text-xs font-light mt-[10px] mb-[20px] text-[#cbd5e1]' style={{ fontFamily: 'poppins', fontSize: '25px', fontWeight: '400' }}>UP to 50%  OFF</p>
                <img className="d-block w-40" src={splash} style={{ width: '20%', marginLeft:'-340px',marginTop:'-29px'}} alt="First slide" />

              </div>

              <div className='w-[50%]'>
                <img className="d-block w-40" src={sale} style={{ width: '14%', height: '10%', marginLeft: '720px', marginTop: '-450px', }} alt="First slide" />
                <img className="d-block w-40" src={slider} style={{ marginRight: '100px', marginLeft: '800px', marginTop: '-220px',  zIndex: 1 }} alt="First slide" />
                <img className="d-block w-40" src={cone} style={{ width: '14%', height: '10%', marginLeft: '1200px', marginTop: '-400px',  }} alt="First slide" />
                <img className="d-block w-40" src={slider1} style={{  marginRight: '100px', marginLeft: '800px', marginTop: '-70px', opacity: 0.07, transition: 'opacity 1s ease-in-out', transform: 'rotate(-1deg)'}} alt="First slide" />
                <img className="d-block w-40" src={splash} style={{ width: '20%', marginLeft:'1400px',marginTop:'-510px'}} alt="First slide" />
             </div>



            </div>
            <img className="d-block w-50" src={slider} style={{ width: "30%", height: "30%", marginRight: '300px', marginLeft: '200px' }} alt="First slide" />


          </div>


        </div>

      </div>
    </div>
  );
}

export default Slider;
