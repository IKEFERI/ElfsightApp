import React from "react";
import styled from "styled-components";
const StyledFooter = styled.footer`
    padding: 40px 10px;
    background-color: #282c34;
    color: #fff;
`;

const FooterItem = styled.div`
    font-size: 1.2em;
    font-weight: 600;
    margin-bottom: 1em;
`;

const Footer = () => {
    return <StyledFooter>
        <h2>My Contacts</h2>
        <FooterItem>
            Tel: <a href="tel:79128411225">+7 (912) 841-12-25</a>
        </FooterItem>
        <FooterItem>
            Mail: <a href="mailto:remkefer@gmail.com">remkefer@gmail.com</a>
        </FooterItem>
        <FooterItem>
            Social: <a href="https://vk.com/1nks1">VK</a>
        </FooterItem>
    </StyledFooter>
}
export default Footer;

