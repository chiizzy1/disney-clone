import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <CTA>
            <CTALogoOne src='/images/cta-logo-one.svg' />

            <SignUp>
                GET ALL THERE
            </SignUp>

            <Description>
            lorem  lorem  lorem  lorem  lorem  lorem  lorem  lorem  lorem  lorem  lorem  lorem  lorem  lorem  lorem  lorem  lorem  lorem  
            </Description>

            <CTALogoTwo src='/images/cta-logo-two.png' />
        </CTA>
    </Container>
  )
}

export default Login


const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;
    

    &:before{
        position: absolute;
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("/images/login-background.jpg");
        content: "";
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        opacity: 0.7;
        z-index: -1;
    }

`

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;

`

const CTALogoOne = styled.img`

`

const SignUp = styled.a`
    background-color: #0063e5;
    color: #f9f9f9;
    padding: 17px 0;
    font-weight: bold;
    border-radius: 4px;
    width: 100%;
    font-size: 18px;
    text-align: center;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;
    

    &:hover{
        background: #0483ee;
    }

`

const Description = styled.p`
    font-size: 11px;
    line-height: 1.5;
    color: #f9f9f9;
    text-align: center;
    letter-spacing: 1.5px;
`

const CTALogoTwo = styled.img`
    width: 90%;
`