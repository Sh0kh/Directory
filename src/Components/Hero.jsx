import React from 'react'
import '../Style/Hero.css'
import { motion } from 'framer-motion'
import framer from '../img/framer.png'
import { NavLink } from 'react-router-dom'
function Hero() {
  return (
    <section className='hero'>
        <div className='container'>
            <div className='hero__wrapper'>
                <div className='hero__content'>
                      <motion.h1
                    initial ={{
                      x:2000,
                      // y:-1000,
                    }}
                    animate = {{
                      x:0,
                    }}
                    transition={{
                      duration:1,
                    }}
                    whileHover={{
                      scale:1.3,
                      x:120,
                      color:'rgb(252, 103, 54)'
                    }}
                  >
                    Добро пожаловать
                  </motion.h1>
                  <p>
                    Рассмотрим библиотеку <motion.span
                    >Farmer motion</motion.span>. Это библиотека создана для React.js, которая позволяет легко добавлять анимации к компонентам React. Она предоставляет простой и декларативный способ определения анимаций с использованием компонентов React.
                  </p>
                  <NavLink to='/motion'><motion.button
                    whileHover={{
                      scale:1.3,
                      x:30,
                    }}
                    transition={{
                      duration:0.5,
                    }}
                    whileTap={{
                      scale:1,
                    }}
                  >
                      Подробней
                  </motion.button></NavLink>
                </div>
                <div className='hero__foto'>
                    <img src={framer} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero