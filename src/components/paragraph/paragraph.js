import './paragraph.css'

const Paragraph = (props)=>{
    return <p className = "text" >{props.text}</p>
}

Paragraph.defaultProps = {
    color: 'red'
}
export default Paragraph