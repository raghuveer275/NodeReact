import React, { Component } from 'react'
import './App.css'
import { Card } from 'antd'

export class App extends Component {
  state = {
    apiRes: [],
    character: '',
  }
  callApi = () => {
    fetch('http://localhost:5000/')
    .then(res => res.text())
    .then(resp => {
      this.setState({ apiRes: JSON.parse(resp) })
      console.log(resp)
    })
    .catch(err => console.error(err))
  }
  callSubmit = () => {
    const data = {
      character: this.state.character
    }
    console.log(data)
    fetch('http://localhost:5000/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.text())
    .then(resp => this.setState({ apiRes: JSON.parse(resp) }))
    .catch(err => console.error(err))
  }

  calDelete = () => {
    fetch('http://localhost:5000/5e8b072a7cfd6f2785ee7a12', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.text())
    .then(resp => this.setState({ apiRes: JSON.parse(resp) }))
    .catch(err => console.error(err))
  }
  componentDidMount () {
    this.callApi()
  }
  render() {
    return (
      <div className="App">
        {this.state.apiRes.map(item =>
        <Card>
          {item.name}
        </Card>)}
        <br />
        <input type='text' value={this.state.character} onChange={(e) => this.setState({character: e.target.value})} /><br />
        <input type='submit' value='Submit' onClick={this.callSubmit} />
        <input type='submit' value='Delete' onClick={this.calDelete} />
      </div>
    )
  }
}

export default App

