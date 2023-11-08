import "./button.css"

const labelIdentifier = (props)=>{
    const buttonContent = props.target.innerHTML;
    alert(`A label desse botão é: '${buttonContent}'`);
}

const Button = (props)=>{
    return <button className='btn' onClick={labelIdentifier}>{props.label}</button>
}

Button.defaultProps = {
    label: "Clique aqui"
}

export default Button