import React, { Component } from 'react'
// import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : "John"
      }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
               name : "Varsha" 
            })
        }, 5000)
    }
    render() {
        console.log("----- parent components-----");
        return (
            <>
                <h3>This is ParentComp</h3>
                {/* <RegComp name = {this.state.name}/> */}
                <PureComp name = {this.state.name}/>
                <MemoComp name = {this.state.name} />
            </>
        )
    }
}

export default ParentComp