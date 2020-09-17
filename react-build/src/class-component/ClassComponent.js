import React, { Component } from 'react';


class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: ''
        }
    }

    componentDidMount() {
        (async () => {
            const res = await fetch('http://localhost:9000/api/tweets')
            const tweets = await res.json()
            this.setState({ tweets })
        })()
        
    }

    render() {
        return (
            <div>
                {this.state.tweets}
            </div>
        );
    }
}


export default ClassComponent;