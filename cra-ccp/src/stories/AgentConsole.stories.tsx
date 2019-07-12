import React from 'react';

import { storiesOf } from '@storybook/react';
import { AgentConsole } from '../components/AgentConsole';
import '../components/AgentConsole.css';
import '../index.css';

storiesOf('AgentConsole', module).add('default', () => <AgentConsole />);
