import React from 'react'
import myStyle from '../styles/myStyle.css'

function Stylesheet(props) {
    let className = props.primary ? 'primary' : "";
    return (
        <>
            {/* <div>Stylesheet</div> */}
            <h1 className = {className}>Hello World..!</h1>
        </>
    )
}

export default Stylesheet