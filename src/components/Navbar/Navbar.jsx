import React from 'react'

const Navbar = () => {
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{marginLeft:'100px'}}>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown" >
    <ul className="navbar-nav" >
    <li className="nav-item dropdown">
        <a className="nav-link " style={{ marginRight: '35px' ,fontFamily:'poppins' ,fontSize:'14px' ,fontWeight:'500'}} href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Fruits & Vegetables<i className="fas fa-chevron-down" style={{ marginLeft:'10px', fontSize: '12px' }}></i>
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link " style={{ marginRight: '35px' ,fontFamily:'poppins' ,fontSize:'14px' ,fontWeight:'500'}} href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dairy & Breakfast <i className="fas fa-chevron-down" style={{ marginLeft:'10px', fontSize: '12px' }}></i>
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link " style={{ marginRight: '35px' ,fontFamily:'poppins' ,fontSize:'14px' ,fontWeight:'500'}} href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Eggs, Meat & Fish<i className="fas fa-chevron-down" style={{ marginLeft:'10px', fontSize: '12px' }}></i>
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link " style={{ marginRight: '35px' ,fontFamily:'poppins' ,fontSize:'14px' ,fontWeight:'500'}} href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Bath & Body <i className="fas fa-chevron-down" style={{ marginLeft:'10px', fontSize: '12px' }}></i>
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link " style={{ marginRight: '35px' ,fontFamily:'poppins' ,fontSize:'14px' ,fontWeight:'500'}} href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Cold drinks & Juices <i className="fas fa-chevron-down" style={{ marginLeft:'10px', fontSize: '12px' }}></i>
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link " style={{ marginRight: '35px' ,fontFamily:'poppins' ,fontSize:'14px' ,fontWeight:'500'}} href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Snacks & Munchies <i className="fas fa-chevron-down" style={{ marginLeft:'10px', fontSize: '12px' }}></i>
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link " style={{ marginRight: '35px' ,fontFamily:'poppins' ,fontSize:'14px' ,fontWeight:'500'}} href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Toy Delights <i className="fas fa-chevron-down" style={{ marginLeft:'10px', fontSize: '12px' }}></i>
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>

    </ul>
  </div>
</nav>

    </div>
  )
}

export default Navbar
