import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  background-color: black;
  color: white;
  padding: 2%;
  margin-top: 3%;
`;

const Footer = () => {
  //simple footer for the copyright
  return (
    <Footer>
      <p>Copyright © 2020 DevDeskQueue. All Rights Reserved</p>
    </Footer>
  );
};

export default Footer;
