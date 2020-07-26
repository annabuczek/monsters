import { shallow } from 'enzyme';
import React from 'react';
import Monster from './Monster';

describe('Monster', () => {
  it('displays monster', () => {
    const monster = {
      name: 'Stefan',
      images: {},
      statistics: {},
      description: 'Lorem Ipsum',
    };
    const wrapper = shallow(
      <Monster monster={monster} index={0} />,
    ).dive();

    expect(wrapper.find('.monster__name').text()).toContain('Stefan');
    expect(wrapper.find('.monster__description').text()).toContain(
      'Lorem Ipsum',
    );
  });

  it('displays monster statistics', () => {
    const monster = {
      name: 'Stefan',
      images: {},
      statistics: {
        power: '0.65',
        strength: '0.45',
      },
      description: 'Lorem Ipsum',
    };

    const wrapper = shallow(
      <Monster monster={monster} index={0} />,
    ).dive();

    expect(
      wrapper.find('.monster__statistics-item').at(0).text(),
    ).toContain('power65%');
    expect(
      wrapper.find('.monster__statistics-item').at(1).text(),
    ).toContain('strength45%');
  });
});
