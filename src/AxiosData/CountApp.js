import React, { useState,useEffect } from 'react'

function CountApp() {
    const [count, setCount] = useState(0)
     
    const useDocumentTitle = title =>{

        useEffect(()=>{
            document.title = title
        },[title])
    }
    
    useDocumentTitle(`User Clicked ${count} Times `)
    return (
        <>
            <div>CountApp</div>
            <h4>User clicked on a Button for {count} times</h4>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </>
    )
}

export default CountApp