import { shallow } from 'enzyme';
import React from 'react';
import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
  it('displays progress bar with given value', () => {
    const wrapper = shallow(<ProgressBar value={'0.67'} />);

    expect(wrapper.find('#grow-progress-67')).toHaveLength(1);
  });
});
