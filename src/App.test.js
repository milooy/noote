import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Note from './components/Note'
import { Link } from 'react-router-dom';
import { StaticRouter } from 'react-router'

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    noteData: jest.fn()
  }

  const component = (
    <StaticRouter location="someLocation">
      <Note {...props} />
    </StaticRouter>
  );
  
  // const enzymeWrapper = mount(<Note {...props} />)
  const enzymeWrapper = mount(component)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  


  describe('Note', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()
      // expect(enzymeWrapper.find('header').hasClass('header')).toBe(true)
      expect(enzymeWrapper.find('h1').text()).toBe('Hi');
      expect(enzymeWrapper.find('h1').text()).toBe('Hi2');
      // const todoInputProps = enzymeWrapper.find('TodoTextInput').props()
      // expect(todoInputProps.newTodo).toBe(true)
      // expect(todoInputProps.placeholder).toEqual('What needs to be done?')
    })

    // it('should call addTodo if length of text is greater than 0', () => {
    //   const { enzymeWrapper, props } = setup()
    //   const input = enzymeWrapper.find('TodoTextInput')
    //   input.props().onSave('')
    //   expect(props.addTodo.mock.calls.length).toBe(0)
    //   input.props().onSave('Use Redux')
    //   expect(props.addTodo.mock.calls.length).toBe(1)
    // })
  })
})
