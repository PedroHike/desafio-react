import './paragraph.css'

const Paragraph = ({text, color})=>{
    return <p className = "text" style={{color: color, textTransform:'uppercase'}}>{text}</p>
}

export default Paragraph