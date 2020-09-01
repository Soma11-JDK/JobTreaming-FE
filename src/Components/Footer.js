import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const Container = styled.footer`
  display: flex;
  padding: 20px;
  bottom: 0;
  border-top: 1px solid black;
  width: 100%;
  height: 150px;
  background-color: lightgray;
`;

const Logo = styled.div`
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
        <Logo> JobTreaming</Logo>
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
