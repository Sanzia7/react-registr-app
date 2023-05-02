import s from './Modal.module.css'
import { Routes, Route } from 'react-router-dom'
import FormElem from '../FormElem/FormElem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function Modal(props) {

   const { active, setActive } = props

   return (
      <div
         onClick={() => setActive(false)}
         className={`${s.modal} ${active && s.active}`}
      >
         
         <div
            onClick={(e) => e.stopPropagation()}
            className={`${s.modal_content} ${active && s.active}`}
         >
            <FontAwesomeIcon
               onClick={() => setActive(false)}
               icon={faXmark}
               style={{ position: 'absolute', right: '5%' }}
            />
            <Routes>
               <Route path='/reg' element={
                  <FormElem
                     title={'Регистрация'}
                     link={'/login'}
                     input={{ email: 'Почта:', password: 'Пароль:', repeatPassword: 'Введите свой пароль повторно:' }}
                     button={{ redirect: 'Войти', submit: 'Зарегестрироваться' }}
                     infoText={'Регстрируясь на сайте, вы соглашаетесь с нашими правилами и политикой конфиденциальности и соглашается на информационную рассылку'}
                     type={'reg'}
                  />
               } />
               <Route path='/login' element={
                  <FormElem
                     title={'Авторизация'}
                     link={'/reg'}
                     input={{ email: 'Почта', password: 'Пароль' }}
                     button={{ redirect: 'Регистрация', submit: 'Авторизоватьтся'}}
                     infoText={'Введите логин и пароль вашего аккаунта'}
                     type={'login'}
                  />
               } />
               <Route path='/reset' element={
                  <FormElem
                     title={'Cбросить пароль'}
                     link={'/login'}
                     input={{ email: 'Почта'}}
                     button={{ redirect: 'Bойти', submit: 'Подтвердить сброс' }}
                     infoText={'Укажите почту зарегистрированного аккаунта. Ссылка на сброс пароля придет на указанную почту. Срок активации - 24 часа'}
                     type={'reset'}
                  />
               } />
            </Routes>
         </div>
      </div>
   )
}

export default Modal

//первоначальная кнопка с X:
//{/* <button onClick={() => setActive(false)}>X</button> */ }

//импорт и установка иконки с крестиком из загруженных библиотек 
// < FontAwesomeIcon icon = { faXmark } />
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faXmark } from '@fortawesome/free-solid-svg-icons'
