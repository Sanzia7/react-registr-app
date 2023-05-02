import s from './Input.module.css'
import { forwardRef } from 'react'
//forwardRef - функция, которая позволяет получить отдельно пропсы и передаваймый ref

const Input = forwardRef((props, ref) => {
   return (
      <input ref={ref} {...props} className={s.input_elem} />
   )
})
export default Input


   // Задача useRef - создание объекта, значение которого после обновления не будет переопределяться
   // Дополнительно хранит всегда актуальные данные!!!