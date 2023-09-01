import React, { Component } from 'react'
import axios from 'axios'
class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: ' ',
            title: '',
            body: ''

        }
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state);

        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(Response => {
                console.log(Response);
            })
            .catch(error => {
                console.log("Something went wrong here");
            })
    }
    render() {
        const { userId, title, body } = this.state
        return (
            <>
                <div>PostForm</div>
                    <form onSubmit={this.submitHandler}>
                        <div>
                            <label>userId :: </label>
                            <input type='text' name='userId' value={userId} onChange={this.changeHandler} />
                        </div>
                        <div>
                            <label>title :: </label>
                            <input type='text' name='title' value={title} onChange={this.changeHandler} />
                        </div>

                        <div>
                            <label>body :: </label>
                            <input type='text' name='body' value={body} onChange={this.changeHandler} />
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                
            </>
        )
    }
}

export default PostForm