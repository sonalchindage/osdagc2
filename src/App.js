
import './App.css';
import img3 from "./img3.jpeg";

import Navbar from "./components/Navbar.js";

function App() {
  return (
    <>
    <Navbar/>
    <div className= "header navigation bar">
      
      <img src={img3} alt="img3" width="230" height="200px" />


      <div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary" type="button">Input dock</button>
  
</div>

      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Connecting members
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Connectivity</a></li>
            <li><a className="dropdown-item" href="/">Coloumn section</a></li>
            <li><a className="dropdown-item" href="/">Beam section</a></li>
            <li><a className="dropdown-item" href="/">fu(MPa)*</a></li>
            <li><a className="dropdown-item" href="/">fy(MPa)*</a></li>
          </ul>
        </li>

<li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Factored shear load
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Vert.shear (kN)*</a></li>
            
          </ul>
        </li>

<li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Bolt
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Diameter(mm)*</a></li>
            <li><a className="dropdown-item" href="/">Type*</a></li>
            <li><a className="dropdown-item" href="/">Gread*</a></li>
            
          </ul>
        </li>
      
<li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Plate
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Thickness(mm)*</a></li>
            <li><a className="dropdown-item" href="/">Height(mm)</a></li>
            <li><a className="dropdown-item" href="/">Width(mm)</a></li>
            
          </ul>
        </li>

<li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Weld
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Thickness(mm)*</a></li> 
          </ul>
        </li>

    </div>
    <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Osdag module</h5>
        <p class="card-text">modules for designing structural steel components </p>
        <a href="#" class="btn btn-primary">Click Here</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Dimension</h5>
        <p class="card-text">Needed dimension</p>
        <a href="#" class="btn btn-primary">Click Here</a>
      </div>
    </div>
  </div>
</div>





<div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary" type="button">Reset</button>
  
</div>


    </>
  );
}

export default App;


