import React from "react";

const url = 'https://jsonplaceholder.typicode.com/comments';

class Task1 extends React.Component {
    constructor() {
        super();
        this.state = {
            data: null
        }
    }
    componentDidMount() {
        fetch(url)
            .then(resp => resp.json())
            .then(items => this.setState({data: items }));
    }
    componentWillUpdate() {
        alert('Component opened');
    }
    componentWillUnmount() {
        alert('Component closed');
    }
    render() {
        return (
            <div>
                {!this.state.data ? (<h2>Loading...</h2>) : (
                    this.state.data.map((obj) => {
                        return <div className='comments' key={obj.id}>
                            <p><b>Author: </b>{obj.name}</p>
                            <p><b>Email: </b>{obj.email}</p>
                            <p><b>Comment: </b>{obj.body}</p></div>;
                    })
                )}
            </div>
        )
    }
}
export default Task1;