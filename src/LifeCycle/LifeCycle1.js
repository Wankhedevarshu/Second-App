import React, { Component } from 'react'
import LifeCycle2 from './Lifecycle2';

class LifeCycle1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name : "Victor"
      }
      console.log("LifeCycle1 Constructor");
    }

    static getDerivedStateFromProps(Props,State){
        console.log("Lifecycle getDerivedstatefrom props");
        return null;
    }
    
      componentDidMount(){
        console.log("Lifecycle1 componentdid mount method");
      }

      shouldComponentUpdate(){
        console.log("Lifecycle1 shouldComponentUpdate method");
        return true;
      }

      getSnapshotBeforeUpdate(){
        console.log("Lifecycle1 getSnapshotBeforeUpdate method");
        return null;
    }

      componentDidUpdate(){
        console.log("Lifecycle1 componentDidUpdate method");
      }

      changeState = ()=>{
        this.setState({
            name :"Virat Kohli"
        })
      }
    render() {
        console.log("Lifecycle1 render method");
        return (
            <>
                <div>LifeCycle1</div>
                <button type='button' onClick={this.changeState}>Updating</button>
                <LifeCycle2 /> 
             </>
        )
    }
}

export default LifeCycle1