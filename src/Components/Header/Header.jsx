import React from 'react'
import  styles from '../Header/Header.module.css'
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
            <h1>Time <span>Zone</span></h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Latest</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Pages</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
               
                
            </nav>
          

        </div>
        <div className={styles.icons}>
            <div className={styles.iconsOne}>
     <FaSearch/>
     </div>
    
     <div className={styles.iconsTwo}>
     <FaRegUser/>
     </div>
      <div className={styles.iconsThree}>
     <FaCartShopping />
     </div>
     




     </div>
       
    </div>
    

  )
}

export default Header




