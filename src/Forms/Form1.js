import React, { Component } from 'react'

class Form1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Username : '',
            comment : '',
            graduation: 'BE'
         }
    }
    handleUsername = (event) => {
        this.setState({
            Username: event.target.value
        })
    }

    handleComment = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    handleGrade = (event) => {
        this.setState({
            graduation: event.target.value
        })
    }
    handleSubmit =(event)=>{
       alert(`${this.state.Username}.${this.state.comment}.${this.state.graduation}`)
       event.preventDefault()
    }
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                <div>Form1</div>
                <div>
                    <label>Username :: </label>
                    <input type='text' value={this.state.Username} onChange={this.handleUsername} />
                </div><br></br>

                <div>
                    <label>Text area</label>
                    <textarea type='text' value={this.state.comment} onChange={this.handleComment} />
                </div><br></br>

                <div>
                    <label>Graduation</label>
                    <select value={this.state.graduation} onChange={this.handleGrade}>
                        <option value='BE'>BE</option>
                        <option value='BTech'>BTech</option>
                        <option value='ME'>ME</option>
                        <option value='MTech'>MTech</option>
                        <option value='MSC'>MSC</option>

                    </select>
                </div><br></br>
                <div>
                    <button type='Submit'>Submit</button>
                </div>
                </form>
            </>
        )
    }
}

export default Form1