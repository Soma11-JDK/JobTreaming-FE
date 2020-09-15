import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  width: 20vw;
  height: 50px;
  margin-top: 10px;
  border: 1px solid black;
  display: flex;
  font-size: calc(12px + 0.5vw);
  justify-content: center;
  align-items: center;
`;

const PetitionListContainer = styled.div`
  width: 80%;
  height: 100%;
  margin-top: 10px;
  background-color: lightgray;
`;

const PetitionList = styled.div`
  display: flex;
  width: 100%;
  background-color: blue;
`;

const PetitionInputForm = styled.form`
  width: 80%;
  height: 20%;
  bottom: 0;
  margin-bottom: 10px;
  background-color: #5570ff;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const PetitionInputTitle = styled.input`
  width: 200px;
  height: 30px;
`;

const PetitionInputContent = styled.input`
  width: 90%;
  height: calc(100% - 30px);
  margin-top: 5px;
`;

const PetitionInputButton = styled.button`
  width: 50px;
  height: 30px;
`;

const PetitionPresenter = ({
  title,
  contents,
  handleSubmit,
  updateTitle,
  updateContents,
}) => (
  <Container>
    <TitleContainer>청원 목록</TitleContainer>
    <PetitionListContainer>
      <PetitionList />
    </PetitionListContainer>
    <PetitionInputForm onSubmit={handleSubmit}>
      <PetitionInputTitle
        placeholder="제목을 입력해주세요"
        value={title}
        onChange={updateTitle}
      />
      <PetitionInputContent
        placeholder="내용을 입력해주세요"
        value={contents}
        onChange={updateContents}
      />
      <PetitionInputButton> 등록 </PetitionInputButton>
    </PetitionInputForm>
  </Container>
);

PetitionPresenter.propTypes = {
  title: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired,
  updateTitle: PropTypes.func.isRequired,
  updateContents: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
export default PetitionPresenter;
