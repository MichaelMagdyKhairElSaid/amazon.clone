import React from 'react'
import { Link } from 'react-router-dom'
import styles from"./NavBar.module.css"
import Logo from "../../assets/AmazonNavbar.png"
// import { useContext } from 'react'
// import { counterContext } from '../../Context/CounterContext'
export default function NavBar({userData,logOut}) {
  // let {counter} = useContext(counterContext)
function tooltips(id) {
  
}  
  return (
    <><nav className={`navbar navbar-expand-lg  ${styles.NavBarColor} navbar-dark`}>
    <main className="container-fluid">
      <img className={`${styles.logo} navbar-brand img-fluid` } src={Logo} alt=''/>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
          {/* location box */}
       <section className='d-flex px-3'>
        <i class="fa-solid fa-location-dot d-block me-1 mt-auto"></i>
       <div className={` ${styles.currentLocationBox}`}>
                <p className='' >
                   Deliver to
                </p>
                <span className=''>
                   Egypt
                </span>
            </div>
       </section>
          {/* collapse NavBar */}
      <section className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* if user data exist */}
        {userData &&   <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link "  to="Products">products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link "  to="Cart">Cart</Link>
          </li>
        </ul>  }
          {/* social media icons */}
        {/* <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className='mx-2'>
            <i className='fa-brands fa-facebook-f text-white'></i>
          </li>
          <li className='mx-2'>
            <i className='fa-brands fa-twitter text-white'></i>
          </li>
          <li className='mx-2'>
            <i className='fa-brands fa-instagram text-white'></i>
          </li>
          </ul> */}
          <form  role="search" className={`${styles.Dropdown_Menu}`}>
          < div class="input-group">
             <select class={`  rounded-start p-1`} id='select_Category' > 
                  <option ><a class="dropdown-item " href="#">All</a></option>
                  <option ><a class="dropdown-item " href="#">All Departments</a></option>
                  <option ><a class="dropdown-item" href="#">Arts &amp; Crafts</a></option>
                  <option ><a class="dropdown-item" href="#">Automotive</a></option>
                  <option ><a class="dropdown-item" href="#">Baby </a></option>
                  <option ><a class="dropdown-item" href="#"> Beauty &amp; Personal Care </a></option>
                  <option ><a class="dropdown-item" href="#"> Books</a></option>
                  <option ><a class="dropdown-item" href="#"> Boys' Fashion </a></option>
                  <option ><a class="dropdown-item" href="#"> Computers </a></option>
                  <option ><a class="dropdown-item" href="#"> Deals </a></option>
                  <option ><a class="dropdown-item" href="#"> Digital Music </a></option>
                  <option ><a class="dropdown-item" href="#"> Electronics </a></option>
                  <option ><a class="dropdown-item" href="#"> Girls' Fashion </a></option>
                  <option ><a class="dropdown-item" href="#"> Health &amp; Household </a></option>
                  <option ><a class="dropdown-item" href="#"> Home &amp; Kitchen </a></option>
                  <option ><a class="dropdown-item" href="#"> Industrial &amp; Scientific </a></option>
                  <option ><a class="dropdown-item" href="#"> Kindle Store </a></option>
                  <option ><a class="dropdown-item" href="#"> Luggage </a></option>
                  <option ><a class="dropdown-item" href="#"> Men's Fashion </a></option>
                  <option ><a class="dropdown-item" href="#"> Movies &amp; TV </a></option>
                  <option ><a class="dropdown-item" href="#"> Music, CDs &amp; Vinyl </a></option>
                  <option ><a class="dropdown-item" href="#"> Pet Suppoptiones </a></option>
                  <option ><a class="dropdown-item" href="#"> Prime Video </a></option>
                  <option ><a class="dropdown-item" href="#"> Software </a></option>
                  <option ><a class="dropdown-item" href="#"> Sports &amp; Outdoors </a></option>
                  <option ><a class="dropdown-item" href="#"> Tools &amp; Home Improvement </a></option>
                  <option ><a class="dropdown-item" href="#"> Toys &amp; Games </a></option>
                  <option ><a class="dropdown-item" href="#"> Video Games </a></option>
                  <option ><a class="dropdown-item" href="#"> Women's Fashion </a></option>
             </select>
             {/* <div className='position-relative'> */}
              <input class="form-control  " type="search" placeholder="Search Amazon" aria-label="Search" aria-describedby="basic-addon1"/>
            <button class="searchBtn" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
             {/* </div> */}
            
            </div>
          </form>
          
          <button type="button" className ={` ${styles.languageSelector} ${styles.NavBarColor} ${styles.defaultBtn} `} >
            <span className={`${styles.flag} ${styles.flag_us} mt-2`}></span>
            <div className={`${styles.lang}`}>EN</div>
            <i class="fa-solid fa-angle-down fa-2xs mb-2"></i>
          <div className={`${styles.tooltips} shadow-lg`}>    
          <p className='fa-sm py-2 text-start'>Change language &nbsp; <a href="">Learn more</a></p>
          <ul className='list-group text-start'>
            <li className="form-check"> <input type="radio" className={``}  name="flexRadioDefault" id="EN"/> <label class="form-check-label" for="EN" href=""> English - EN </label></li>
            < hr className=' m-2' />
            <li className="form-check"> <input type="radio" className={``}  name="flexRadioDefault" id="ES"/> <label class="form-check-label" for="ES" href=""> español - ES </label></li>
            <li className="form-check"> <input type="radio" className={``}  name="flexRadioDefault" id="AR"/> <label class="form-check-label" for="AR" href=""> العربية - AR </label></li>
            <li className="form-check"> <input type="radio" className={``}  name="flexRadioDefault" id="DE"/> <label class="form-check-label" for="DE" href=""> Deutsch - DE </label></li>
            <li className="form-check"> <input type="radio" className={``}  name="flexRadioDefault" id="HE"/> <label class="form-check-label" for="HE" href=""> עברית - HE </label></li>
            <li className="form-check"> <input type="radio" className={``}  name="flexRadioDefault" id="KO"/> <label class="form-check-label" for="KO" href=""> 한국어 - KO </label></li>
            <li className="form-check"> <input type="radio" className={``}  name="flexRadioDefault" id="PT"/> <label class="form-check-label" for="PT" href=""> português - PT </label></li>
            <li className="form-check"> <input type="radio" className={``}  name="flexRadioDefault" id="ZH"/> <label class="form-check-label" for="ZH" href=""> 中文 (简体) - ZH </label></li>
            <li className="form-check"> <input type="radio" className={``}  name="flexRadioDefault" id="ZH1"/> <label class="form-check-label" for="ZH1" href=""> 中文 (繁體) - ZH </label></li>
            </ul>
            <hr className='m-2'/>
            <p className='fa-sm py-3 text-start'>Change currency &nbsp; &nbsp;<a href="">Learn more</a></p>
            <div className={`${styles}`}>
             <div className='text-start fa-sm'><span>$ - USD - US Dollar &nbsp; &nbsp;</span> <a href="" className=' ms-auto'>Change</a></div>
             <hr className='m-3'/>
             <div className='d-flex align-items-start'>
                    <span className={`${styles.flag} ${styles.flag_us} my-1`}></span>
                    <p className='w-75 mb-0'>You are shopping on </p> 
             </div>
             <p className='text-start'>Amazon.com </p>
            </div>
               <a href="" className='fa-sm'>Change country/region.</a>

          </div>
          </button>
 {/* ========================================================================================================= */}
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          {userData ? 
          <li className="nav-item">
            <span className="nav-link cursor-pointer" onClick={logOut}>logOut</span>
          </li> :
          <> <li className="nav-item">
            <Link className="nav-link" to="Login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link "  to="Register">Register</Link>
          </li></>}
         
        </ul>
      </section>
    </main>
  </nav></>
  )
}
