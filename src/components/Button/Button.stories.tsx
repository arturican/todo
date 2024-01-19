import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 * Example Button story with React Hooks.
 * See note below related to this example.
 */
const ButtonWithHooksMemo = () => {
  // Sets the hooks for both the label and primary props
  const [value, setValue] = useState('Secondary');
  const [isPrimary, setIsPrimary] = useState(false);

  // Sets a click handler to change the label's value
  const handleOnChange = () => {
    if (!isPrimary) {
      setIsPrimary(true);
      setValue('Primary');
    }
  };
  return <Button primary={isPrimary} onClick={handleOnChange} label={value} />;
};

const ButtonWithHooks = React.memo(ButtonWithHooksMemo);

export const Primary: Story = {
  render: () => <ButtonWithHooks />,
};
