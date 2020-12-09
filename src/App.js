import React from 'react';
import axios from 'axios';

const api = 'https://api.hgbrasil.com/weather?woeid=455991&format=json-cors&locale=pt';

export default class App extends React.Component {
  state = {
    city:'',
    forecast: [],
  }

  componentDidMount(){
    axios.get(api)
    .then(({data}) => {
      this.setState({
        city: data.results.city_name,
        forecast: data.results.forecast,
      });
    })

  }

  render(){
    return (
    <div className='container'>
      <h1>{this.state.city}</h1>
      <table className='striped centered'>
        <thead>
          <tr>
            <th>Data</th>
            <th>Min.</th>
            <th>Max.</th>
            <th>Previsão</th>
            <th>Img</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.forecast.map((day, index) => {
              return(
                <tr key={index}>
                  <td>{day.date}</td>
                  <td>{day.min}</td>
                  <td>{day.max}</td>
                  <td>{day.description}</td>
                  <td><img src={'/weather-icons/' + day.condition +'.svg'} alt="day.description"/></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
    )
  }
}

//export default App;