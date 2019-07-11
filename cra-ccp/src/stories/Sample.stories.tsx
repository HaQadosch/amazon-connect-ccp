import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import { text } from '@storybook/addon-knobs';
import Button from '@material-ui/core/Button';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add(
    'with text',
    () => (
      <Button variant='outlined' color='primary' onClick={action('clicked')}>
        {text('Label', 'Hello Storybook')}
      </Button>
    ),
    {
      notes: 'A very simple example of addon notes',
    },
  )
  .add('with some emoji', () => (
    <Button onClick={action('clicked')} variant='contained' color='secondary'>
      <span role='img' aria-label='so cool'>
        😀 😎 👍 💯
      </span>
    </Button>
  ));
