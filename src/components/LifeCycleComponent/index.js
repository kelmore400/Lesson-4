import React from 'react';

const url = 'https://jsonplaceholder.typicode.com/todos';

export class LifeCycleComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            data: null
        }
    }
    // componentWillMount() {
    //     console.log('Mounted');
    // }
    componentDidMount() {
        // console.log('Mounted after first render');
        fetch(url)
        .then(resp => resp.json())
        .then(items => this.setState({data: items }));
    }
    componentWillUnmount() {
        console.log('Un-mounted');
    }
    render() {
        console.log('render');
        return(
            <div>
                <h2>Hello!</h2>
                {!this.state.data ? ( <h2>Loading...</h2> ) : (
                this.state.data.map((obj) => {
                    return <p key={obj.id}>{obj.title}</p>;
                    })
                )}
            </div>
        )
    }
}