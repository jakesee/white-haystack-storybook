import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    width: 100%;

    img {
        width: 100%;
        vertical-align: middle;
    }

`


export interface SectionBannerProps {
    imgSrc: string
}

export const SectionBanner = (props: SectionBannerProps) => {

    return (
        <Wrapper>
            <img src={props.imgSrc} />
        </Wrapper>
    )
}
