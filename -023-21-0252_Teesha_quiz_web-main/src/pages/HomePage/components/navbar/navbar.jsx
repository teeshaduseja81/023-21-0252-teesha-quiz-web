import React from "react";
import logo from "../../../../assets/images/footer-logo.svg.svg"
import heroimg from "../../../../assets/images/div.svg"

import image1 from "../../../../assets/images/div (1).svg"

// images


const Navbar=()=>{
    return(
        <>
 

 <div class="bg-color">

    <div className="container pt-2"> 
    <header class="d-flex flex-wrap justify-content-center ">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
       <img width={50} src={logo}/>
        <span class="fs-4 fw-bold mx-2 logo-color"> writealy</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><a href="#" class="nav-link text-black fw-bold">product </a></li>
        <li class="nav-item"><a href="#" class="nav-link text-black  fw-bold">use cases</a></li>
        <li class="nav-item"><a href="#" class="nav-link text-black  fw-bold">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link text-black  fw-bold">customer</a></li>
        <li class="nav-item"><a href="#" class="nav-link text-black  fw-bold">resource</a></li>
        <button type="button" class="btn btn-outline-dark px-4  fw-bold rounded-pill">sign in </button>
      </ul>
    </header>
    </div>

    <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
      <img className="w-100" src={heroimg} alt="" />
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3 text-colorr">brainstrom</h1>
        <h1> your book easily</h1>
        <p class="lead">World-class companies use Writealy <br/> AI writing platform to unlock <br/> brainstorming for publishing a book.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
         
        <button type="button" class="btn btn-outline-dark px-4  fw-bold rounded-pill fw-bold"> request a demo </button>
          <button type="button" class="btn border-dark btn-lg px-5 rounded-pill me-md-2 btn1 text-white fw-bold">try free </button>
        </div>
      </div>
    </div>
   
  </div>
  <div className=""> 

<img className="w-100" src={image1} alt="" />
</div>
  </div>

        </>
    )
};
export default Navbar;