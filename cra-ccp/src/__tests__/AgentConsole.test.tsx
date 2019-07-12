import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';

import { AgentConsole } from '../components/AgentConsole';

afterEach(cleanup);

describe('<AgentConsole />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AgentConsole />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('loads and display <AgentConsole />', () => {
    const { getByTestId } = render(<AgentConsole />);
    const calc = getByTestId('agentConsole');
    expect(calc).toBeInTheDocument();
  });
});
