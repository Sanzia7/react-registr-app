import s from './FormElem.module.css'
import { Link } from 'react-router-dom'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import { useForm } from 'react-hook-form'
import { useRef } from 'react'

// Задача useRef - создание объекта, значение которого после обновления не будет переопределяться
// Дополнительно хранит всегда актуальные данные!!!

function FormElem(props) {
   const { title, link, button, input, infoText, type } = props

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
      watch
   } = useForm()

   const password = useRef()
   password.current = watch('password', '')

   const emailElem = register('email', {
         required: 'Почта должна быть заполнена',
         pattern: {
            value: /^([A-z])+([0-9-_.])*([A-z0-9-_.])*@([A-z])+([0-9-_.])*([A-z0-9-_.])*[.]([A-z]){2,3}$/,
            message: 'Указана неверная почта'
         }
      })

   const passwordElem = register('password', {
      required: 'Пароль должен быть заполнен!',
      pattern: {
         value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
         message: 'пароль должен содержать минимум 8 букв и 1 цифру'
      }
   })

   const repeatPasswordElem = (type === 'reg') ?
      register('repeatPassword', {
         required: 'Пароль должен быть заполнен',
         validate: (value) => value === password.current || 'Пароли не соответсвуют друг другу'
      })
      : ''

   const onSubmit = (data) => {
      console.log(data)
      reset()
   }

   return (
      <div>
         <form onSubmit={handleSubmit(onSubmit)}>
            <h2>{title}</h2>

            <p>{input.email}</p>
            <Input {...emailElem} />
            <div>
               {errors.email && <p className={s.warning_text}>{errors.email.message}</p>}
            </div>

            {(type !== 'reset') &&  
               <>
                  <p>{input.password}</p>
                  <Input {...passwordElem} />
                  <div>
                  { errors.password && <p className={s.warning_text}>{errors.password.message}</p>}
                  </div>
               </>
            }

            {(type === 'reg') &&
               <>
                  <p>{input.repeatPassword}</p>
                  <Input {...repeatPasswordElem} />
                  <div>
                  {errors.repeatPassword && <p className={s.warning_text}>{errors.repeatPassword.message}</p>}
                  </div>
               </>
            }
            <p className={s.info_text}>{infoText}</p>

            {(type === 'login') &&
               <Link to='/reset'>
                  <p className={s.info_text}>Восстановить доступ</p>
               </Link>
            }

            <Button title={button.submit} color='yellow' />

            <Link to={link}>
               <Button title={button.redirect} color='white' />
            </Link>
         </form>
      </div>
   )
}
export default FormElem


//импортированная из useForm() функция register автоматически создает функцию ref для каждого инпут поля 
  // console.log(register('test'));
//    < Input {...register('test') />
//этот ref  необходимо получить отдельно от пропсов в компоненте Input через специальную функцию forwardRef, импортируя ее: import { forwardRef } from 'react'
//функция watch позволяет следить за input(полем ввода) через дополнительный hook useRef()

//----------------
/* первый вриант без сброса пароля (третья страница)
const repeatPasswordElem = register('repeatPassword',
      {required: 'Пароль должен быть заполнен',
         validate: (value) => value === password.current || 'Пароли не соответсвуют друг другу!'
      })
*/ 