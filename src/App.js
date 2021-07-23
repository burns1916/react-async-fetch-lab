// create your App component here
import React, { Component } from 'react'

class App extends React.Component {
    state = {
        apiData: []
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(data => 
            this.setState({
                apiData: data
            }))
    }

    render() {
        return(
            <div>
                {this.state.apiData.map(data => data)}
            </div>
        )
    }
}

export default App
