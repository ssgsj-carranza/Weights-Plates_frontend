import React from 'react'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTiltle, FooterLink} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
              <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTiltle>About Us</FooterLinkTiltle>
                            <FooterLink to='/signin'>Contact Us</FooterLink>
                            <FooterLink to='/signin'>Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTiltle>About Us</FooterLinkTiltle>
                            <FooterLink to='/signin'>Contact Us</FooterLink>
                            <FooterLink to='/signin'>Terms of Service</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTiltle>About Us</FooterLinkTiltle>
                            <FooterLink to='/signin'>Contact Us</FooterLink>
                            <FooterLink to='/signin'>Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTiltle>About Us</FooterLinkTiltle>
                            <FooterLink to='/signin'>Contact Us</FooterLink>
                            <FooterLink to='/signin'>Terms of Service</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
              </FooterLinksContainer>
            </FooterWrap>  
        </FooterContainer>
    )
}

export default Footer
