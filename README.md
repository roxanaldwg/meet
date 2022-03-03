# meet
A serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. It uses the Google Calendar API to fetch upcoming events.

## Key Features

Filter events by city.
Show/hide event details.
Specify number of events.
Use the app when offline.
Add an app shortcut to the home screen.
View a chart showing the number of upcoming events by city.


## User Stories

### User story: as a user I should be able to filter events by cities, so that I can see the list of events by the chosen city.

#### Scenario 1:

Given: user did not chosen a city
When: user loads the event overview 
Then: all events for all cities will be shown

#### Scenario 2:

Given: the user is displayed a list of all events from all cities
When: user clicks on a drop down field for “cities” 
Then: user will see check boxes with all cities possible to choose from

#### Scenario 3:

Given: the drop down field for “cities” was opened
When: user clicks check box to choose the city/cities for which he wants to see events 
Then: only events for the chosen city will be shown


### User story: as a user I should be able to show and hide the details of events so that I get more information on given event

#### Scenario 1:

Given: user opened the main page
When: events are displayed
Then: details for all events will be hidden/collapsed

#### Scenario 2:

Given: the list events was loaded and details of the events are hidden/collapsed
When: user clicks on “show details” button for an event 
Then: the event element will be expanded to show the event details

#### Scenario 3:

Given: the details for an event are displayed after user has clicked the “show details” button
When: user clicks on “hide details” button for an event
Then: the details of the event will be collapsed

### User story: as a user I should be able to specify the number of events displayed so that I can choose how many events I see

#### Scenario 1:

Given: the user did not specify the number of events that should be displayed
When: user is on the main page
Then: user will see 32 events

#### Scenario 2:

Given: the user did not specify the number of events that should be displayed
When: user specifies number of events displayed
Then: the user will see the number of events he had chosen

### User story: as a user I should be able to use the app when offline so that I can get information on events even when I am not online

#### Scenario 1:

Given: user has no internet connection
When: user opens the app
Then: the cached data will be shown

#### Scenario 2:

Given: user has no internet connection
When: user opens the app and changes settings
Then: the user will see an error message “settings can’t be changed while offline”

### User story: as a user I should be see an overview of upcoming events by city so that  I will be informed if there are events in my city or near by.

#### Scenario 1:

Given: user opened the main page 
When: user checks the top of the page
Then: there will be a banner displayed showing a chart with the number of upcoming events for each city


## Technical Details

A React application.
Built using the TDD technique.
Uses the Google Calendar API and OAuth2 authentication flow.
Uses serverless functions (AWS lambda) for the authorization server instead of using a traditional server.
Passes Lighthouse’s PWA checklist.
Works offline or in slow network conditions with the help of a service worker.
The API calls use React axios and async/await.
Implements an alert system using an OOP approach to show information to the user.
Makes use of data visualization (recharts preferred).
