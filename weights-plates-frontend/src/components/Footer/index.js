import React from 'react'
import {animateScroll as scroll} from 'react-scroll';
import { FaFacebook, FaInstagram, FaSnapchat } from 'react-icons/fa';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTiltle, FooterLink} from './FooterElements';
import {SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements';
const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
              <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTiltle>About Us</FooterLinkTiltle>
                            <FooterLink to='/'>Testimonials</FooterLink>
                            <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTiltle>Contact Us</FooterLinkTiltle>
                            <FooterLink to='/'>Contact</FooterLink>
                            <FooterLink to='/'>Support</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTiltle>Social Media</FooterLinkTiltle>
                            <FooterLink to='/'>Facebook</FooterLink>
                            <FooterLink to='/'>Instagram</FooterLink>
                            <FooterLink to='/'>Snapchat</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
              </FooterLinksContainer>
              <SocialMedia>
                  <SocialMediaWrap>
                      <SocialLogo to='/' onClick={toggleHome}>Weights and Plates</SocialLogo>
                      <WebsiteRights>Weights and Plates © {new Date().getFullYear()}All rights reserved</WebsiteRights>
                      <SocialIcons>
                          <SocialIconLink href='//www.facebook.com/jorge.r.carranza.3/' target='_blank' aria-label='Facebook'>
                              <FaFacebook/>
                          </SocialIconLink>
                          <SocialIconLink href='//www.https://www.instagram.com/laidpidgeon/' target='_blank' aria-label='Instagram'>
                              <FaInstagram/>
                          </SocialIconLink>
                          <SocialIconLink href='/' target='_blank' aria-label='Snapchat'>
                              <FaSnapchat/>
                          </SocialIconLink>
                      </SocialIcons>
                  </SocialMediaWrap>
              </SocialMedia>
            </FooterWrap>  
        </FooterContainer>
    )
}

export default Footer
