import { Link } from 'react-router-dom'

export const Button = (props) => {
    return <div className={`${props.className}`}>{props.text}{props.icon}</div>

}


export default Button;