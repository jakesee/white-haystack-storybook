import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SectionConsultDoctor, SectionConsultDoctorProps } from '../src/component/section-consult-doctor'
import './global.css';

const meta: Meta = {
    title: 'Section/Consult Doctor',
    component: SectionConsultDoctor,
    argTypes: {
        imgSrc: {
            control: { type: 'text' },
        },
    },
    // parameters: {
    //     controls: { expanded: true },
    // },
};

export default meta;

const Template: Story<SectionConsultDoctorProps> = args => <SectionConsultDoctor className="consult-a-doctor" {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
    imgSrc: 'https://app.qa.my-doc.com/dai-ichi/assets/images/Banner_happy_family.png',
    title: 'Welcome to Dai-ichi e-Health Virtual Consultation!',
    body: 'Speak to an experienced GP within minutes',
    subText: 'Operational Hours: 0800H - 2200H, including weekend and holidays',
    button: {
        children: 'SPEAK WITH A DOCTOR NOW',
        border: '1px solid #C7000B',
        backgroundColor: '#C7000B',
        color: '#fff',
        borderRadius: 0,
    }
};
