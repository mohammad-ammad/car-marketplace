import type { NextPage } from 'next'
import styles from '../../styles/Navbar.module.css';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import {FaTimes} from 'react-icons/fa';
import {TbMenu} from 'react-icons/tb';
import Image from 'next/image';
import Logo from '../assets/logo.png';
import { useState } from 'react';
import {motion} from 'framer-motion';

const Navbar: NextPage = () => {
    const [toggle, setToggle] = useState(false);
  return (
    <>
    <div className={styles.navbar_wrapper}>
        <div className={styles.navbar_container}>
            <div className={styles.navbar_left}>
                <a href=""  className={styles.nav__links}>
                    <div><AiOutlineInfoCircle/></div>
                    <div>About</div>
                </a>
                <a href=""  className={styles.nav__links}>
                    <div><AiOutlineInfoCircle/></div>
                    <div>Ecosystem</div>
                </a>
                <a href=""  className={styles.nav__links}>
                    <div><AiOutlineInfoCircle/></div>
                    <div>How To Play</div>
                </a>
                <a href=""  className={styles.nav__links}>
                <Image
                    src={Logo}
                    alt="Logo"
                    className={styles.nav_logo}
                />
                </a>
                <a href=""  className={styles.nav__links}>
                    <div><AiOutlineInfoCircle/></div>
                    <div>Play To Earn</div>
                </a>
            </div>
            <div>
                <button className={styles.connect_btn}>Connect Wallet</button>
            </div>
        </div>
    </div>
    <div className={styles.navbar_mob}>
        <div className={styles.mob_nav_container}>
            <a href=""  className={styles.mob_nav__links}>
                    <Image
                        src={Logo}
                        alt="Logo"
                        className={styles.mob_nav_logo}
                    />
            </a>
            <div className={styles.mob_nav_tab}>
                <TbMenu onClick={() => setToggle(true)}/>
            </div>
        </div>
        {toggle && <motion.div className={styles.sideBar}>
            <div className={styles.times}>
                <FaTimes onClick={() => setToggle(false)}/>
            </div>
            <div>
                <a href=""  className={styles.mob_nav__links}>
                    <div><AiOutlineInfoCircle/></div>
                    <div>About</div>
                </a>
                <a href=""  className={styles.mob_nav__links}>
                    <div><AiOutlineInfoCircle/></div>
                    <div>Ecosystem</div>
                </a>
                <a href=""  className={styles.mob_nav__links}>
                    <div><AiOutlineInfoCircle/></div>
                    <div>How To Play</div>
                </a>
                <a href=""  className={styles.mob_nav__links}>
                    <div><AiOutlineInfoCircle/></div>
                    <div>Play To Earn</div>
                </a>
                <button className={styles.connect_btn}>Connect Wallet</button>
            </div>
        </motion.div>}
    </div>
    </>
  )
}

export default Navbar
