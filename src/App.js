import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import { NumberOfEvents } from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
// eslint-disable-next-line
import NProgress from 'nprogress';

class App extends Component {
  state = {
    events: [],
    locations: [],
    currentLocation: "all",
    numberOfEvents: 32,
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    this.mounted = true;
    getEvents().then((events) => {
      const locationEvents =
        location === "all" && eventCount === 0
          ? events
          : location !== "all" && eventCount === 0
            ? events.filter((event) => event.location === location)
            : events.slice(0, eventCount);
      if (this.mounted) {
        this.setState({
          events: locationEvents,
          numberOfEvents: eventCount,
        });
      }
    });
  };

  updateNumberOfEvents = (numberOfEvents) => {
    this.setState(
      {
        numberOfEvents,
      },
      this.updateEvents(this.state.location, numberOfEvents)
    );
  };

  render() {
    return (
      <div className="App">
        <CitySearch
          locations={this.state.locations}
          numberOfEvents={numberOfEvents}
          updateEvents={this.updateEvents} />
        <EventList events={events} numberOfEvents={numberOfEvents} />
        <NumberOfEvents
          updateNumberOfEvents={(number) => {
            this.updateNumberOfEvents(number);
          }} />
      </div>
    );
  }
}

export default App;