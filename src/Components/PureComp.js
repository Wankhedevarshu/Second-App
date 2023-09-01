import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        console.log("This is pure component");
        return (
            <>
                <h3>This is PureComp... My name is {this.props.name}</h3>
            </>
        )
    }
}

export default PureComp