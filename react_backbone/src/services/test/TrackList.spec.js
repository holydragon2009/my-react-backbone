import React from 'react';
import TrackList from './TrackList';
import { shallow } from 'enzyme';

describe('Test TrackList component', () => {
  it('show 2 tracks', () => {
    // const props = {
    //   tracks: [{ id: 1, title: 'foo' }, { id: 2, title: 'bar' }]
    // }
    const tracks = [{ id: 1, title: 'foo' }, { id: 2, title: 'bar' }]
    const element = shallow(<TrackList tracks={tracks} />);

    expect(element.find('div > div')).toHaveLength(2);
    expect(element.contains('foo')).toBeTruthy();

    expect(element.find('div > div').at(0).text()).toBe('Track: foo');
  });
});