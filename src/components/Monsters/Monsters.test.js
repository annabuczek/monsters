import { shallow } from 'enzyme';
import React from 'react';
import Monsters from './Monsters';
import Monster from '../Monster/Monster';

describe('Monsters', () => {
  it('displays monsters', () => {
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
    const wrapper = shallow(<Monsters monsters={monsters} />);

    expect(wrapper.find(Monster)).toHaveLength(2);
  });
});
