import React from 'react'
import '../Style/Error.css'
import { NavLink } from 'react-router-dom'
function ErorPage() {
  return (
    <div className='Error'>
        <div className='Error__content'>
            <h1>
                Ошибка
            </h1>
            <h2>
                Что-то пошло не так 
            </h2>
            <NavLink className='home__router' to='/'>
                    Главная страница
            </NavLink>
        </div>
    </div>
  )
}

export default ErorPage