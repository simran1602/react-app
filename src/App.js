import React, { Component } from "react";
import Card from "../src/Components/Cards";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.Apikey = "7f61a1566bd0c095140d51983d389042";
    this.state = {
      cardsData: "0",
      SearchCity: "Patiala"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ SearchCity: event.target.value });
  }

  weatherApi = () => {
    console.log(this.state.SearchCity);
    let api =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      this.state.SearchCity +
      "&appid=" +
      this.Apikey;

    fetch(api)
      .then(response => {
        return response.json();
      })
      .then(res => {
        this.setState({
          cardsData: res
        });
      });
  };

  componentDidMount() {
    //this.weatherApi();
  }

  render() {
    var data = [];
    console.log(this.state.cardsData);
    data = this.state.cardsData.weather;

    return (
      <div className="App">
        <div className="header">
          <input
            name="text"
            className="search"
            type="text"
            placeholder="Enter City"
            onChange={this.handleChange}
          />
          <button value="Search" className="b" onClick={this.weatherApi}>
            Search
          </button>
        </div>

        <div>
          {" "}
          {this.state.cardsData != 0 && (
            <div className="temp">{this.state.cardsData.main.temp}</div>
          )}
        </div>
        <div>
          {" "}
          {this.state.cardsData != 0 && (
            <div className="min">{this.state.cardsData.main.temp_min}</div>
          )}
        </div>
        <div>
          {" "}
          {this.state.cardsData != 0 && (
            <div className="max">{this.state.cardsData.main.temp_max}</div>
          )}
        </div>
        <div>
          {" "}
          {this.state.cardsData != 0 && (
            <div className="weather">
              {this.state.cardsData.weather[0].description}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
