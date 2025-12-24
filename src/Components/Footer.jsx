import React from 'react'
import styles from './Footer.module.css'
import logo from '../assets/logo2.png'   
import { FaApple , FaInstagram,FaFacebookF, FaTwitter,FaGooglePlay, FaPhoneAlt,FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa'    

const Footer = () => {
  return (
    <div>
        <footer className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.brand}>
                    <div className={styles.logo}>
                        <img src={logo} alt="IFAS Logo" height={80}/>
                    </div>
                        <p className={styles.desc}>Let's grow up your education level up. We are here to help you keep focus when studying.</p><br />
                        <h4 className={styles.download}>Download App Now</h4>
                    <div className={styles.storeButtons}>
                        <button className={styles.store}>
                            <FaApple size={30}/> 
                            <div>
                                <span className={styles.small}>Available on the</span>
                                <span className={styles.big}>App Store</span>
                            </div>
                        </button>
                        <button className={styles.store}>
                            <FaGooglePlay size={30}/>  
                            <div>
                                <span className={styles.small}>GET IT ON</span>
                                <span className={styles.big}>Google Play</span>
                            </div>
                        </button>
                    </div>
                </div>


                <div className={styles.links}>
                    <h4>Quick Links</h4><br />
                    <ul>
                        <li>About</li>
                        <li>Course</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>


                <div className={styles.contact}>
                    <h4>Contact us</h4><br /><br />
                    <p><FaPhoneAlt /> +91-9172266888</p><br />
                    <p><FaEnvelope /> info@yopmail.com</p><br />
                    <p><FaMapMarkerAlt /> ISH Infotech, Phase 1, Hinjewadi, Pune,<br /> Maharashtra - 411057</p>
                </div>
            </div>


            <div className={styles.bottom}>
                <p>Copyright 2023 | All Rights Reserved</p>
                <div className={styles.socials}>
                    <FaFacebookF size={20} />
                    <FaTwitter size={20} />
                    <FaInstagram size={20} />
                </div>
            </div>
        </footer>
  </div>
  )
}

export default Footer