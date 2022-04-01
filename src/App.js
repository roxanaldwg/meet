import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import { NumberOfEvents } from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import { OfflineAlert } from './Alert';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import EventGenre from './EventGenre';
// eslint-disable-next-line
import NProgress from 'nprogress';

class App extends Component {
  state = {
    events: [],
    locations: [],
    currentLocation: 'all',
    numberOfEvents: 32,
    offlineText: ''
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }

      if (!navigator.onLine) {
        this.setState({
          offlineText: 'You are currently offline, events may not be updated.'
        })
      } else {
        this.setState({
          offlineText: ''
        })
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventCount = this.state.eventCount) => {
    getEvents().then((events) => {
      let locationEvents = (location === "all" ? events : events.filter((event) => event.location === location));
      locationEvents = locationEvents.slice(0, eventCount)
      this.setState({
        events: locationEvents,
        numberOfEvents: eventCount,
        activeLocation: location
      });
    });
  }

  updateNumberOfEvents = (numberOfEvents) => {
    this.setState(
      {
        numberOfEvents,
      },
      this.updateEvents(this.state.location, numberOfEvents)
    );
  };

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return { city, number };
    })
    return data;
  };

  render() {
    const { locations, numberOfEvents, events, OfflineAlertText } = this.state;
    return (
      <div className="App">
        <h1>Let's Meet!</h1>
        <OfflineAlert text={OfflineAlertText} />
        <h4>Choose your nearest city</h4>
        <CitySearch
          updateEvents={this.updateEvents}
          locations={locations}
        />
        <NumberOfEvents
          updateNumberOfEvents={this.updateNumberOfEvents}
          numberOfEvents={numberOfEvents}
        />
        <h4>Events in each city</h4>

        <div className='data-vis-wrapper'>
          <EventGenre events={events} />
          <ResponsiveContainer height={400}>
            <ScatterChart
              width={800}
              height={400}
              margin={{
                top: 20, right: 20, bottom: 20, left: 20,
              }}
            >
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <EventList
          events={events}
          numberOfEvents={numberOfEvents} />

      </div>
    );
  }
}

export default App;