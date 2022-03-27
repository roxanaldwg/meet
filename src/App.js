import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import { NumberOfEvents } from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import { OfflineAlert } from './Alert';
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

  render() {
    const { locations, numberOfEvents, events, OfflineAlertText } = this.state;
    return (
      <div className="App">
        <OfflineAlert text={OfflineAlertText} />
        <CitySearch
          updateEvents={this.updateEvents}
          locations={locations}
        />
        <EventList
          events={events}
          numberOfEvents={numberOfEvents} />
        <NumberOfEvents
          updateNumberOfEvents={this.updateNumberOfEvents}
          numberOfEvents={numberOfEvents}
        />
      </div>
    );
  }
}

export default App;