import { shallow } from 'enzyme';
import React from 'react';
import { App } from './App';
import Monsters from './components/Monsters/Monsters';
import Navigation from './components/Navigation/Navigation';

describe('Monsters', () => {
  it('displays Navigation and Monsters components', () => {
    const monsters = [
      {
        name: 'Stefan',
        images: {},
        statistics: {},
        description: 'Lorem Ipsum',
      },
      {
        name: 'Henryk',
        images: {},
        statistics: {},
        description: 'Ipsum Lorem',
      },
    ];
    const wrapper = shallow(
      <App
        monsters={monsters}
        error=""
        fetching={false}
        fetchMonsters={jest.fn()}
      />,
    );

    expect(wrapper.find(Monsters)).toHaveLength(1);
    expect(wrapper.find(Navigation)).toHaveLength(1);
  });

  it('displays loading', () => {
    const wrapper = shallow(
      <App
        monsters={[]}
        error=""
        fetching={true}
        fetchMonsters={jest.fn()}
      />,
    );

    expect(wrapper.text()).toContain('Loading Monsters...');
  });

  it('displays error', () => {
    const wrapper = shallow(
      <App
        monsters={[]}
        error="Error"
        fetching={false}
        fetchMonsters={jest.fn()}
      />,
    );

    expect(wrapper.text()).toContain(
      'Could not load Monsters, check your connection and try again',
    );
  });
});
