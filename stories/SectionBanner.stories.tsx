import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SectionBanner, SectionBannerProps } from '../src/component/section-banner'
import './global.css';

const meta: Meta = {
    title: 'Section/Banner',
    component: SectionBanner,
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

const Template: Story<SectionBannerProps> = args => <SectionBanner {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
    imgSrc: 'https://app.qa.my-doc.com/dai-ichi/assets/images/Banner_footer_english.png'
};
