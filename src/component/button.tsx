import React, { CSSProperties, HTMLAttributes } from 'react';

export interface ButtonProp extends HTMLAttributes<HTMLButtonElement> {
    children: string,

    color?: string
    backgroundColor?: string,
    borderRadius?: string,
    border?: string,
}

export const Button = (props: ButtonProp) => {

    const style: CSSProperties = {
        padding: '4px 6px',
        backgroundColor: props.backgroundColor, // ?? '#0E7AE6',
        border: props.border, // ?? '1px solid #0E7AE6',
        borderRadius: props.borderRadius, // ?? '4px',
        color: props.color, // ?? '#fff',
    }

    return (
        <button style={style}>{props.children}</button>
    )
}
