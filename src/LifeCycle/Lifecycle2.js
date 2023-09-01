import React, { Component } from 'react'

class LifeCycle2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name : "Victor"
      }
      console.log("----------LifeCycle2 Constructor----------");
    }

    static getDerivedStateFromProps(Props,State){
        console.log("--------Lifecycle2 getDerivedstatefrom props----------");
        return null;
    }
    
      componentDidMount(){
        console.log("--------Lifecycle2 componentdid mount method---------");
      }

      shouldComponentUpdate(){
        console.log("--------Lifecycle2 shouldComponentUpdate method------------");
        return true;
    }

      getSnapshotBeforeUpdate(){
        console.log("---------Lifecycle2 getSnapshotBeforeUpdate method---------");
        return null;
    }

      componentDidUpdate(){
        console.log("-----------Lifecycle2 componentDidUpdate method----------");
      }
      
    render() {
        console.log("--------Lifecycle2 render method-----------");
        return (
            <>
                <div>Lifecycle2</div>
             </>
        )
    }
}

export default LifeCycle2