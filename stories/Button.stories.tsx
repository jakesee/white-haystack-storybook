import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProp } from '../src/component/button'
import './global.css';

const meta: Meta = {
    title: 'UI Controls/Button',
    component: Button,
    argTypes: {
        chlidren: {
            control: { type: 'text' },
        },
        color: {
            control: { type: 'color' },
        },
        backgroundColor: {
            control: { type: 'color' },
        },
        borderRadius: {
            control: { type: 'number' },
        },
    },
    // parameters: {
    //     controls: { expanded: true },
    // },
};

export default meta;

const Template: Story<ButtonProp> = args => <Button {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
export const Rounded = Template.bind({});
export const Secondary = Template.bind({});
export const Squared = Template.bind({});


Default.args = {
    children: 'Consult Doctor'
};

Rounded.args = {
    children: 'Consult Doctor',
    border: '1px solid #FF0068',
    backgroundColor: '#FF0068',
    color: '#fff',
    borderRadius: 50,
};

Secondary.args = {
    children: 'Book Appointment',
    border: '1px solid #C7000B',
    backgroundColor: '#fff',
    color: '#C7000B',
    borderRadius: 50,
}

Squared.args = {
    children: 'Consult Doctor',
    border: '1px solid #C7000B',
    backgroundColor: '#C7000B',
    color: '#fff',
    borderRadius: 0,
}
