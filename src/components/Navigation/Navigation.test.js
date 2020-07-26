import { mount } from 'enzyme';
import React from 'react';
import Navigation from './Navigation';

describe('Navigation', () => {
  it('displays navigation links', () => {
    const wrapper = mount(<Navigation navItemsNumber={3} />);

    expect(wrapper.text()).toContain('123');
    expect(wrapper.find('a')).toHaveLength(3);
  });
});
