import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import HelloWorld from './HelloWorld';

/*
describe(HelloWorld, () => 
{
    const name = 'Person';
    const mockRemoveGreeting = jest.fn();
    const component = shallow(
      <HelloWorld name={name} removeGreeting={mockRemoveGreeting}/>
    );

    it('contains the supplied name', () => 
    {
        expect(component.text()).toContain(name);
    });

    it('renders and matches our snapshot', () => 
    {
        const component = renderer.create( <HelloWorld name="Person" />  );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
*/

describe('Addition', () => 
{
    it('knows that 2 and 2 make 4', () => 
    {
      expect(2 + 2).toBe(4);
    });
  });
  