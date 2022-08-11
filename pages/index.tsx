import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Rectangle from './assets/Rectangle.png';

const Home: NextPage = () => {
  return (
    <>
    <div className={styles.Hero_container}>
      <h1>be the ulimate ibalr and winn your dream prize</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies velit lacus, nunc, lorem lacinia aliquam vestibulum. In adipiscing.</p>
      <a href="">
        <div className={styles.play_now_btn}>
        <Image src={Rectangle}/>
        <p>Play Now</p>
        </div>
      </a>
    </div>
    <div>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error aspernatur sapiente porro magnam nesciunt maxime obcaecati cumque reprehenderit ipsa ullam ea, beatae earum excepturi facere quam dolores eius, pariatur rerum magni praesentium. Velit nisi dignissimos alias aut fugiat impedit quis magnam. Pariatur atque aut ab et facilis fugit, nam, libero cum distinctio molestias similique at beatae aspernatur ipsa, a dolor? Corrupti fugit eius doloribus, eum voluptatem ab modi nesciunt quis voluptates tenetur architecto impedit unde quisquam praesentium quibusdam incidunt ullam reprehenderit. Ipsam nemo, quam magnam eum labore voluptatibus, inventore in non qui quia ullam velit obcaecati corporis! Unde, fugit ipsa?
    </div>
    </>
  )
}

export default Home
