import React from 'react';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#FFC94A' }}>
        <b><span className="navbar-brand " href="#" style={{ fontSize: '13px', fontFamily: 'poppins', paddingLeft: '80px', color:'rgba( 0,0,0 , 0.65)' }}>Delivery in 10 minutes</span></b>
        <ul className="navbar-nav mr-auto" style={{ marginLeft: '700px' }}>

          <li className="nav-item active" style={{ marginLeft: '30px',marginTop:'-7px' }}>
            <span className="nav-link" style={{ color: '#ffdb88', fontSize: '18px' }}>
              <i className="fas fa-globe-americas"></i>
            </span>
          </li>
          <li className="nav-item active" >
            <span style={{ fontFamily: 'poppins', fontSize: '13px', fontWeight: '400' , color:'rgba( 0,0,0 , 0.65)'}}>Deliver to </span>
            <span style={{ fontFamily: 'poppins', fontSize: '13px', fontWeight: '500' , color:'rgba( 0,0,0 , 0.65)'}}>4841212</span>
          </li>
          <li className="nav-item active" >
            <div style={{ borderRight: '2px solid #ffdb88', width: '5px', height:'20px', marginTop: '5px' ,marginLeft:'20px' }}></div>
          </li>

          <li className="nav-item active" style={{ marginLeft: '30px',marginTop:'-7px' }}>
            <span className="nav-link" style={{ color: '#ffdb88', fontSize: '18px' }}>
              <i className="fas fa-truck"></i>
            </span>
          </li>
          <li className="nav-item active" >
            <span style={{ fontFamily: 'poppins', fontSize: '13px', fontWeight: '400' , color:'rgba( 0,0,0 , 0.65)'}}>Track your order </span>
          </li>
          <li className="nav-item active" >
            <div style={{ borderRight: '2px solid #ffdb88', width: '5px', height:'20px', marginTop: '5px' ,marginLeft:'20px' }}></div>
          </li>

          <li className="nav-item active" style={{ marginLeft: '30px',marginTop:'-7px' }}>
            <span className="nav-link" style={{ color: '#ffdb88', fontSize: '18px' }}>
              <i className="fas fa-box-open"></i>
            </span>
          </li>
          <li className="nav-item active" >
            <span style={{ fontFamily: 'poppins', fontSize: '13px', fontWeight: '400' , color:'rgba( 0,0,0 , 0.65)rgba( 0,0,0 , 0.65)'}}>All Offers </span>
          </li>

        </ul>

      </nav>


      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ backgroundColor: '#FFC94A' }}>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <b><span className="navbar-brand " href="#" style={{fontSize:'13px',fontFamily:'poppins', paddingLeft:'80px'}}>Delivery in 10 minutes</span></b>

    <ul className="navbar-nav mr-auto" style={{marginLeft:'350px'}}>
      <li className="nav-item active">
      <span className="nav-link" style={{ color: 'green', fontSize: '14px' }}>
          <i className="far fa-user"></i>
      </span>
      </li>
      <li className="nav-item active" >
      <a className="nav-link" href="/" style={{fontFamily:'poppins'}}>Login</a>
      </li>
      <li className="nav-item active" style={{marginLeft:'30px'}}>
      <span className="nav-link" style={{ color: 'green', fontSize: '14px' }}>
          <i className="fas fa-shopping-cart"></i>
      </span>
      </li>
       <li className="nav-item active">
        <a className="nav-link" href="/" style={{fontFamily:'poppins'}}>Cart</a>
      </li>
    </ul>

  </div>
</nav> */}

    </div>
  );
}

export default Header;
