import React from 'react';
import { shallow } from 'enzyme';
import { NumberOfEvents } from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  let spy;

  beforeAll(() => {
    spy = jest.spyOn({ mockUpdateNumberOfEvents: () => { } }, "mockUpdateNumberOfEvents");
    NumberOfEventsWrapper = shallow(<NumberOfEvents numberOfEvents={32} updateNumberOfEvents={spy} />);
  });

  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
  });

  test('render text input correctly', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents').prop('value')).toBe(32);
  });

  test('change state when text input changes', () => {
    const numberOfEventObject = { target: { value: '30' } };
    NumberOfEventsWrapper.find('.numberOfEvents').simulate('change', numberOfEventObject);
    expect(spy).toHaveBeenCalled();
  });

});