import React from 'react'
import {StaticImage} from "gatsby-plugin-image";
import styled from "styled-components";
import "normalize.css"
import "../global.css"
import SEO from "../components/SEO/SEO";

const Wrapper = styled.div`
  box-sizing: border-box;
  justify-content: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 10%;
`

const Column = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Heading = styled.h1`
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 2em;
  @media (max-width: 600px) {
    font-size: 1em;
  }
`

const IndexPage = () => {

  return <Wrapper>
    <Column>
      <StaticImage src="../images/logo.jpeg" alt="Joatin Granlund AB" />
      <Heading>Hemsida kommer snart!</Heading>
    </Column>
  </Wrapper>
}

export default IndexPage;

export const Head = () => (
    <SEO />
)