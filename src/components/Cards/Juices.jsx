import React from 'react'
import slider from '../../assets/slider.png'

const Juices = () => {
  return (
    <div >
    <div style={{ marginLeft: '100px', marginTop: '50px' }}>
        <span className='text-xl font-semibold' style={{ fontFamily: 'poppins', fontSize: '20px', fontWeight: '500' }}>Cold drinks & Juices </span>
        {/* <span className='text-xl font-semibold' style={{ fontFamily: 'poppins', fontSize: '20px', fontWeight: '500', color: 'rgb(55, 167, 4)' }}>Top Categories</span> */}
        <div style={{ borderBottom: '2px solid rgb(55, 167, 4)', width: '200px', marginTop: '5px' }}></div>
    </div>

    <div style={{ marginLeft: '100px', display: 'flex', flexWrap: 'wrap' }}>
        <div className="card" style={{ width: '12rem', marginTop: '50px' , marginRight: '10px', }}>
            <img className="card-img-top" src={slider} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Fruits & Vegetables</h5>
            </div>
        </div>

        <div className="card" style={{ width: '12rem', marginTop: '50px', marginRight: '10px', }}>
            <img className="card-img-top" src={slider} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Fruits & Vegetables</h5>
            </div>
        </div>

        <div className="card" style={{ width: '12rem', marginTop: '50px' , marginRight: '10px',}}>
            <img className="card-img-top" src={slider} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Fruits & Vegetables</h5>
            </div>
        </div>

        <div className="card" style={{ width: '12rem', marginTop: '50px' , marginRight: '10px',}}>
            <img className="card-img-top" src={slider} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Fruits & Vegetables</h5>
            </div>
        </div>

        <div className="card" style={{ width: '12rem', marginTop: '50px' , marginRight: '10px',}}>
            <img className="card-img-top" src={slider} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Fruits & Vegetables</h5>
            </div>
        </div>

        <div className="card" style={{ width: '12rem', marginTop: '50px' , marginRight: '10px',}}>
            <img className="card-img-top" src={slider} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Fruits & Vegetables</h5>
            </div>
        </div>

        <div className="card" style={{ width: '12rem', marginTop: '50px' , marginRight: '10px',}}>
            <img className="card-img-top" src={slider} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Fruits & Vegetables</h5>
            </div>
        </div>

    </div>


</div>
  )
}

export default Juices