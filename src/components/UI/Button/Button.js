import s from './Button.module.css'

function Button(props) {
   const { title, color, ...otherProps } = props
   // console.log(props);
   // console.log(otherProps);

   return (
      <button
         {...otherProps}
         className={`${s.button_elem} ${s[color]}`}>
         {title}
      </button>
   )
}
export default Button