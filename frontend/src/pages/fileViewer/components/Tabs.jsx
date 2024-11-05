import  { IconX } from '@tabler/icons-react'

const Tabs = (props) => {
    return (
        <div className="tabs"
         style={props.active === props.inde ? {"backgroundColor": "#2b2a2a", "border": "1px solid #f2ce72", "borderBottom": "none"} : {"backgroundColor": "#202126", "border": "0.25px solid white", "borderBottom": "none"}}
         onClick={(e) => {props.setActivePdf(props.file); props.setActive(props.inde)} }>
            <p>{props.file.filename}</p>
            <IconX stroke={2} size={30} color={'#f2ce72'} />
        </div>
    )
}

export default Tabs