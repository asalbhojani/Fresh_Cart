import React from 'react'
import Freshcart from '../../assets/Freshcart.png'

const Logo = () => {
  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
<img src={Freshcart} style={{width:"10%",height:"10%",marginRight:'200px', marginLeft:'80px'}}/>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <form className="form-inline my-2 my-lg-2"  style={{background:'#dddddd' ,borderRadius:'15px'}}>
    <span  style={{ color: 'green', fontSize: '14px' ,marginLeft:'30px'}}>
  <i className="fas fa-search" ></i>
      </span>
      <input className="form-control mr-sm-2 " type="search" placeholder="Search essential,Groceries and More" aria-label="Search"  style={{ width: '400px' ,border:'none',fontFamily:'poppins',fontSize:'13px',background:'#dddddd'}}/>
      {/* <button classNameName="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
    </form>

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
      <span className="nav-link" style={{ color: 'rgb(55, 167, 4)', fontSize: '14px' }}>
      <i class="material-icons">shopping_cart</i>
      </span>
      </li>
       <li className="nav-item active">
        <a className="nav-link" href="/" style={{fontFamily:'poppins'}}>Cart</a>
      </li>
    </ul>

  </div>
</nav>


    </div>
  )
}

export default Logo