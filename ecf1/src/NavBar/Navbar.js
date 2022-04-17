import React from 'react'
import {Link} from 'react-router-dom'


export default function Navbar() {
  return (

      // <nav >
      //
      //
      //
      //   <ul class="nav justify-content-center menu">
      //
      //     <div>
      //       <img className='Logo' src="./images/logo.png"/>
      //     </div>
      //
      //     <Link to="/">
      //       <li class="nav-item">
      //         <a class="navbtn" aria-current="page" >Acceuil</a>
      //       </li>
      //     </Link>
      //
      //     <Link to="Reservation">
      //       <li class=" nav-item">
      //         <a class="navbtn ">Reservation</a>
      //       </li>
      //     </Link>
      //
      //
      //
      //     <Link to="Nouscontacter">
      //       <li class=" nav-item">
      //         <a class="navbtn ">Nous contacter</a>
      //       </li>
      //     </Link>
      //
      //     <Link to="Seconnecter">
      //       <li class=" nav-item">
      //         <a class="navbtn ">Se connecter</a>
      //       </li>
      //     </Link>
      //
      //
      //     <Link to="sinscrire">
      //       <li class=" nav-item">
      //         <a class="navbtn ">S'inscrire</a>
      //       </li>
      //     </Link>
      //   </ul>
      //
      //
      // </nav>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/">
          <img className='Logo' src="./images/logo.png"/>
          </Link>
          <a className="navbar-brand" href="#"></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link to="/">
                <a className="nav-link active" aria-current="page" href="#">Acceuil</a>
                </Link>
              </li>


              <li className="nav-item">
                <Link to="Reservation">
                <a className="nav-link" href="#">Reservation</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="Nouscontacter">
                <a className="nav-link ">Nous contacter</a>
                </Link>
              </li>
            </ul>

            <form className="d-flex ms-3">
              <Link to="sinscrire">
              <button type="button" className="btn btn-primary">S'inscrire</button>
              </Link>
            </form>
            <form className="d-flex ms-3">
              <Link to="Seconnecter">

              <button type="button" className="btn btn-primary">Se connecter</button>
              </Link>
            </form>
            <form className="d-flex ms-3">
              <button type="button" className="btn btn-danger">Se deconnecter</button>
            </form>
          </div>
        </div>
      </nav>






   
  )
}
