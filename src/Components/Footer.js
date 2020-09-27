import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

const Container = styled.footer`
  display: flex;
  padding: 20px;
  bottom: 0;
  border-top: 1px solid black;
  width: 100%;
  height: 150px;
  background-color: #dcecff;
`;

const smallLogo = require('assets/Logo/Logo.png');
const mediumLogo = require('assets/Logo/Logo@2x.png');
const largeLogo = require('assets/Logo/Logo@3x.png');

const Logo = styled.img`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  object-fit: contain;
  margin-right: 10px;
`;

const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-left: 10px;
`;

const ShortCutContainer = styled.div`
  height: 14px;
`;

const ShortCut = styled.li`
  :not(:first-child) {
    margin-left: 10px;
  }
  list-style: none;
  float: left;
  font-size: 14px;
`;

const AddressName = styled.address`
  margin-top: 20px;
  font-size: 14px;
`;

const AddressEmail = styled.address`
  margin-top: 20px;
  font-size: 14px;
`;

const AddressList = styled.li`
  :not(:first-child) {
    margin-left: 10px;
  }
  list-style: none;
  float: left;
`;

const Footer = () => {
  return (
    <Container>
      <Link to="/">
        <Logo
          src={smallLogo}
          srcSet={`${smallLogo} 300w, ${mediumLogo} 768w, ${largeLogo} 1280w`}
        />
      </Link>
      <InfoContainer>
        <ShortCutContainer>
          <ShortCut> 개인정보처리방침 </ShortCut>
          <ShortCut> 이용약관 </ShortCut>
          <ShortCut> FAQ </ShortCut>
          <ShortCut> 광고 문의 </ShortCut>
          <ShortCut> 고객 센터 </ShortCut>
        </ShortCutContainer>
        <AddressName>
          <AddressList>대표자명: jdk</AddressList>
          <AddressList>상호명: jdk</AddressList>
        </AddressName>
        <AddressEmail>
          <AddressList>이메일: sw11jdk@jdk.com</AddressList>
        </AddressEmail>
      </InfoContainer>
    </Container>
  );
};

export default Footer;
