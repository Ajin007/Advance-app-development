import React from 'react'
import '../../assets/css/p2.scss'
import Header from '../common/header/Header'
import  a from '../../assets/images/l/avif.avif'
import Footer from '../common/footer/Footer'
import { Link } from 'react-router-dom'
const Applications = () => {
  return (
    <>
    <div>
        <img src={a} alt="Login Image" className="login-image3" />
        <Header/>
        <main class="div-table__main">
        <h15 class="app-heading">My Application</h15>

        
        <article class="div-table__row">
          <img src="https://pbs.twimg.com/profile_images/1192649745329618944/aGOAw4lX_400x400.jpg" alt="Profile Picture" class="div-table__img" />
          <div class="div-table__text">
            <p class="div-table__text--primary div-table__text--left">SKCET</p>
            <p class="div-table__text--secondary div-table__text--left">Coimbatore</p>
          </div>
          
          <div class="div-table__text">
            <p class="div-table__text--primary div-table__text--center">Computer Science and Engineering </p>
            <p class="div-table__text--secondary div-table__text--center">Department</p>
          </div> 
          
          <div class="div-table__text">
            <p class="div-table__text--primary div-table__text--center .commons__green">Accepted</p>
            <p class="div-table__text--secondary div-table__text--center">Procced to Payemt</p>
          </div>
          
        </article>
        
        <article class="div-table__row">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/PSG_College_of_Technology_logo.png/220px-PSG_College_of_Technology_logo.png" alt="Profile Picture" class="div-table__img" />
          <div class="div-table__text">
            <p class="div-table__text--primary div-table__text--left">PSG</p>
            <p class="div-table__text--secondary div-table__text--left">Coimbatore</p>
          </div>
          
          <div class="div-table__text">
            <p class="div-table__text--primary div-table__text--center">Information Technology</p>
            <p class="div-table__text--secondary div-table__text--center">Department</p>
          </div> 
          
          <div class="div-table__text">
            <p class="div-table__text--primary div-table__text--center commons__green">Submitted</p>
            <p class="div-table__text--secondary div-table__text--center">Please Wait</p>
          </div>
          

        </article>
        
        <article class="div-table__row">
          <img src="https://upload.wikimedia.org/wikipedia/en/f/f2/Kumaraguru_College_of_Technology_logo.png" alt="Profile Picture" class="div-table__img" />
          <div class="div-table__text">
            <p class="div-table__text--primary div-table__text--left">Kumaraguru</p>
            <p class="div-table__text--secondary div-table__text--left">Coimbatore</p>
          </div>
          
          <div class="div-table__text">
            <p class="div-table__text--primary div-table__text--center">Artificial Intelligence</p>
            <p class="div-table__text--secondary div-table__text--center">Department</p>
          </div> 
          
          <div class="div-table__text">
            <p class="div-table__text--primary div-table__text--center commons__green">Not Qualified</p>
            <p class="div-table__text--secondary div-table__text--center"></p>
          </div>
          

        </article>
        <article class="div-table__row">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJUdYOO0GUvrku8vbaT0-x27ybNZl_kn_frpAG8AHP9g&s" alt="Profile Picture" class="div-table__img" />
          <div class="div-table__text">
            <p class="div-table__text--primary div-table__text--left">IIT</p>
            <p class="div-table__text--secondary div-table__text--left">Madras</p>
          </div>
          
          <div class="div-table__text">
            <p class="div-table__text--primary div-table__text--center">Mechatronics</p>
            <p class="div-table__text--secondary div-table__text--center">Department</p>
          </div> 
          
          <div class="div-table__text">
            <p class="div-table__text--primary div-table__text--center commons__green">Accepted</p>
            <Link to = '/pay'><p class="div-table__text--secondary div-table__text--center"> Procced to Payemt</p></Link>
          </div>
          

        </article>
        
      </main>
    </div>
    <div  className='cv'>
      <Footer/>
    </div>
      </>
  )
}

export default Applications