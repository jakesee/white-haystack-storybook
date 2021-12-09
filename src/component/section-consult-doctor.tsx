import React, { HTMLAttributes } from "react"
import styled from "styled-components"
import { Button, ButtonProp } from "./button"

const Wrapper = styled.div`

    --size-xs: 300px;
    --size-sm: 576px;
    --size-md: 768px;
    --size-lg: 992px;
    --size-xl: 1200px;
    --size-xxl: 1400px;

    width: 100%;

    img {
        display: block;
        max-width: 100%;
    }

    #call-to-action {
        text-align: center;
        padding: 20px;
        font-size: 2.2rem;

        button {
            padding: 10px 18px;
            /* border: none;
            background-color: var(--theme-button-primary-background-color);
            color: var(--theme-button-primary-foreground-color); */
            box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
        }

        h1 { font-size: 100%; }
        p { font-size: 70% ; margin-bottom: 10px; }
        button { font-size: 80%; margin-bottom: 10px; }
        h2 { font-size: 60%; font-weight: 400;}
    }

    @media (min-width: 576px) {
        position: relative;

        #call-to-action {
            text-align: left;
            float: none;
            position: absolute;
            top: 20%;
            background-color: rgba(255, 255, 255, 0.5);
            font-size: 1.6rem;
            padding: 5%;

            h1 {
                margin-top: 0;
                margin-bottom: 5px;
                padding: 0;
            }
        }
    }
    @media (min-width: 768px) {
        #call-to-action {
            width: 70%;
            font-size: 2.4rem;
        }
    }
    @media (min-width: 992px) {
        #call-to-action {
            width: 50%;
            padding-left: 10%;
            font-size: 2.6rem;
            top: 20%;
        }
    }

`


export interface SectionConsultDoctorProps extends HTMLAttributes < HTMLDivElement > {
    imgSrc: string,
    title: string,
    body: string,
    subText: string,
    button: ButtonProp;
}

export const SectionConsultDoctor = ({ imgSrc, title, body, button, subText }: SectionConsultDoctorProps) => {

    return (
        <Wrapper className="wh-row" id="background">
            <div className="wh-col-md-12">
                <img src={imgSrc} />
            </div>
            <div className="wh-col-sm-6" id="call-to-action">
                <h1>{title}</h1>
                <p>{body}</p>
                <Button className="wh-button wh-primary" style={{
                    color: button.color,
                    border: button.border,
                    borderRadius: button.borderRadius,
                    backgroundColor: button.backgroundColor,
                }}>{button.children}</Button>
                <h2>{subText}</h2>
            </div>
        </Wrapper >
    )
}
