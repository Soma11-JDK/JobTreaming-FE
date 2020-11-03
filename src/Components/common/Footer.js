/*
=============================================================
파일명:
프로그램명:
설명:
작성자:
작성일: 
=============================================================
*/
import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

const Container = styled.footer`
  margin-top: 120px;
  padding: 40px;
  border-top: 1px solid black;
  width: 100%;
  height: 100%;
  background-color: #dcecff;
`;

const smallLogo = require('assets/Logo/Logo.png');
const mediumLogo = require('assets/Logo/Logo@2x.png');
const largeLogo = require('assets/Logo/Logo@3x.png');

const Logo = styled.img`
  height: 25px;
  object-fit: contain;
  margin-right: 10px;
`;

const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-left: 10px;
`;

const InfoTopContainer = styled.div`
  display: flex;
`;

const ShortCutContainer = styled.div`
  width: 100%;
  height: 14px;
  display: flex;
  justify-content: flex-end;
`;

const ShortCut = styled.li`
  :not(:first-child) {
    margin-left: 7px;
  }
  list-style: none;
  float: left;
  font-size: 14px;
`;

const CompanyName = styled.address`
  margin: 20px 0px;
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
`;

const AddressName = styled.address`
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

const CopyWriteContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const smallCopyImg = require('assets/CopyWrite/CopyWrite.png');
const mediumCopyImg = require('assets/CopyWrite/CopyWrite.png');
const largeCopyImg = require('assets/CopyWrite/CopyWrite.png');

const CopyWriteImage = styled.img`
  object-fit: contain;
`;

const CopyWriteText = styled.span`
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #868686;
  margin-left: 10px;
`;

const Footer = () => {
  return (
    <Container>
      <InfoContainer>
        <InfoTopContainer>
          <Link to="/">
            <Logo
              src={smallLogo}
              srcSet={`${smallLogo} 300w, ${mediumLogo} 768w, ${largeLogo} 1280w`}
            />
          </Link>

          <ShortCutContainer>
            <ShortCut> 개인정보처리방침 </ShortCut>
            <ShortCut> | </ShortCut>
            <ShortCut> 이용약관 </ShortCut>
            <ShortCut> | </ShortCut>
            <ShortCut> FAQ </ShortCut>
            <ShortCut> | </ShortCut>
            <ShortCut> 광고 문의 </ShortCut>
            <ShortCut> | </ShortCut>
            <ShortCut> 고객 센터 </ShortCut>
          </ShortCutContainer>
        </InfoTopContainer>
        <CompanyName>(주)잡트리밍</CompanyName>
        <AddressName>
          <AddressList>대표자명: jdk</AddressList>
          <AddressList>상호명: jdk</AddressList>
        </AddressName>
        <AddressEmail>
          <AddressList>이메일: sw11jdk@jdk.com</AddressList>
        </AddressEmail>
      </InfoContainer>
      <CopyWriteContainer>
        <CopyWriteImage
          src={smallCopyImg}
          srcSet={`${smallCopyImg} 300w, ${mediumCopyImg} 768w, ${largeCopyImg} 1280w`}
        />
        <CopyWriteText>Jobtreaming All Rights Reserved</CopyWriteText>
      </CopyWriteContainer>
    </Container>
  );
};

export default Footer;
