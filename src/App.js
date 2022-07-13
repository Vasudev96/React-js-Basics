import React, { Component } from "react"
import "./App.css"
import CardList from "./components/CardList"
import SearchBox from "./components/SearchBox"
import Scroll from "./components/Scroll"

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: "",
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }))
  }

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value })
  }
  render() {
    const { robots, searchField } = this.state;
    const filterRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    })
    return !robots.length ? (
      <h1>Loading...</h1>
    ) : (
      <>
        <div className="container">
          <div className="tc">
            <h1>Robot Test</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
              <CardList robots={filterRobots} />
            </Scroll>
          </div>
        </div>
      </>
    )
  }
}

export default App
