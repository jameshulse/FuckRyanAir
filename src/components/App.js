import React, { Component } from 'react';
import Search from './Search';
import flightData from '../data.json'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cancelled: null,
      flight: null,
      date: null
    }
  }

  render() {
    let showStatus = this.state.cancelled !== null;
    
    let status = null;

    if(this.state.cancelled) {
      status = <div className="status-cancelled">Fucking cancelled.<br />Fuck Ryanair.</div>;
    } else {
      status = <div className="status-okay">Not cancelled.<br />But still - fuck Ryanair.</div>;
    }

    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <Search onSearch={this.search.bind(this)} />
              { showStatus && <div className="date">{this.state.date}</div> }
              { showStatus && <div className="flight">{this.state.flight}</div> }
              { showStatus && <div className="status">{status}</div> }
              {showStatus && !this.state.cancelled && <p>This list might not be fully up to date so might still be worth checking <a href="https://www.ryanair.com/ie/en/useful-info/help-centre/travel-updates/flight-cancellations7">here</a></p>}
              {showStatus && this.state.cancelled && <p>See <a href="https://www.ryanair.com/ie/en/useful-info/help-centre/travel-updates/flight-cancellations7">here</a> for details on what to do</p>}
            </div>
          </div>
        </div>
      </section>
    );
  }

  search(value) {
    for(let i = 0; i < flightData.length; i++) {
      let dataSet = flightData[i];

      for(let j = 0; j < dataSet.flights.length; j++) {
        let flight = dataSet.flights[j];

        if(flight.toLowerCase().startsWith(value.toLowerCase()+' ')) {
          this.setState((prev) => ({
            ...prev,
            cancelled: true,
            flight,
            date: dataSet.dates
          }));

          return;
        }
      }
    }

    this.setState((prev) => ({
      ...prev,
      flight: null,
      date: null,
      cancelled: false
    }));
  }
}

export default App;
