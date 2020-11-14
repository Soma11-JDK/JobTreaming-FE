import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Subtitle from 'Components/common/Subtitle';
import ImageUploader from 'react-images-upload';
import CustomSingleDate from 'Components/common/CustomSingleDate';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Container } from 'reactstrap';
import Dropdown from 'Components/common/Dropdown';

function uploadImageCallBack(file) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.imgur.com/3/image');
    xhr.setRequestHeader('Authorization', process.env.IMGUR_CLIENT_ID);
    const data = new FormData();
    data.append('image', file);
    xhr.send(data);
    xhr.addEventListener('load', () => {
      const response = JSON.parse(xhr.responseText);
      resolve(response);
    });
    xhr.addEventListener('error', () => {
      const error = JSON.parse(xhr.responseText);
      reject(error);
    });
  });
}

const marginTop = css`
  ${({ marginTopValue }) => marginTopValue && `margin-top : ${marginTopValue};`}
`;

const marginBottom = css`
  ${({ marginBottomValue }) =>
    marginBottomValue && `margin-bottom : ${marginBottomValue};`}
`;

const marginRight = css`
  ${({ marginRightValue }) =>
    marginRightValue && `margin-right : ${marginRightValue};`}
`;

const marginLeft = css`
  ${({ marginLeftValue }) =>
    marginLeftValue && `margin-left : ${marginLeftValue};`}
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 55px;
  margin: auto;
  display: flex;
  ${marginTop}
  ${marginBottom}
`;

const LectureImage = styled.img``;

const MyBlock = styled.div`
  .demo-editor {
    height: 550px !important;
    border: 1px solid #f1f1f1 !important;
    padding: 5px !important;
    border-radius: 2px !important;
    margin-top: 20px !important;
  }
`;
// editorState, handleChange, handleSubmit prop 추가
// editorState는 리액트드래프트위지윅에 입력된 내용을 저장하기 위한 prop
// handleChange는 제목을 정보를 저장하기 위한 함수
// handleSubmit는 제목, 입력 내용을 서버로 전송할 함수

const Span = styled.span`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  opacity: ${props => props.fontopacity};
  color: ${props => props.fontColor};
  word-break: keep-all;
  ${marginTop}
  ${marginBottom}
  ${marginLeft}
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #5570ff;
  ${marginTop}
  ${marginBottom}
`;

const ImageUploaderContainer = styled.div`
  width: 100%;
  height: 100%;
  ${marginBottom}
`;

const ListContainer = styled.div`
  border-radius: 999px;
  width: 140px;
  ${marginTop}
  ${marginBottom}
`;

const Menu = styled.div`
  width: 140px;
  height: 68px;
  border: 2px solid black;
  border-radius: 999px;
  margin-right: 10px;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${props => props.bgColor};
`;

const Input = styled.input`
  width: 100%;
  opacity: 0.8;
  border-radius: 66px;
  border: solid 2px #000000;
  font-size: 20px;
  padding: 20px;
  ${marginTop}
  ${marginBottom}
`;

const ButtonContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  ${marginTop}
`;

const Button = styled.button`
  background-color: #5570ff;
  opacity: 0.8;
  border-radius: 66px;
  width: 200px;
  height: 50px;
  ${marginTop}
  ${marginLeft}
  ${marginRight}
`;

const DateContainer = styled.div`
  ${marginTop}
`;

const WritePresenter = ({
  editorState,
  handleTitle,
  handleDate,
  handleCount,
  handleSubmit,
  handleKeyword,
  handleEditorStateChange,
  history,
  match,
  categoryItems,
}) => {
  const [pictures, setPictures] = useState([]);
  const [dropdownCategory, setDropdown] = useState(false);
  const [categoryId, setCategory] = useState(-1);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  const changeCategory = () => {
    setCategory(parseInt(match.params.id, 10));
  };

  useEffect(() => setCategory(parseInt(match.params.id, 10)), [
    parseInt(match.params.id, 10),
  ]);

  const onDrop = picture => {
    // https://github.com/JakeHartnell/react-images-upload/issues/109 참고
    setPictures([...pictures, picture]);
  };
  return (
    <Container>
      <TitleContainer marginTopValue="50px">
        <Subtitle title="강의 개설하기" />
      </TitleContainer>
      {/* 제목을 입력할 Input, 값이 변경되면 이를 저장하기 위한 onChagen 속성에 handleChange 설정 */}
      <ImageUploaderContainer marginBottomValue="50px">
        <ImageUploader
          withIcon={false}
          onChange={onDrop}
          imgExtension={['.jpg', '.gif', '.png', '.gif']}
          maxFileSize={5242880}
          withPreview
          singleImage
          buttonText="강연 사진을 골라주세요"
          buttonStyles={{ backgroundColor: '#465fcc' }}
        />
      </ImageUploaderContainer>
      <Span
        fontSize="20px"
        fontWeight="bold"
        fontColor="#5570ff"
        marginTopValue="50px"
      >
        강의 정보
      </Span>
      <Line marginTopValue="8px" marginBottomValue="50px" />
      <Span fontSize="16px" fontWeight="500" fontColor="#000000">
        강의 타입
      </Span>
      <ListContainer
        marginTopValue="20px"
        marginBottomValue="20px"
        onMouseEnter={() => onMouseEnter()}
        onMouseLeave={onMouseLeave}
        onClick={changeCategory}
      >
        <Menu>
          <Span fontSize="16px">
            {categoryId === -1 ? '카테고리' : categoryItems[categoryId].title}
          </Span>
        </Menu>
        {dropdownCategory && (
          <Dropdown categoryItems={categoryItems} nowPage="write" />
        )}
      </ListContainer>
      <Span fontSize="16px" fontWeight="500" fontColor="#000000">
        강의 명
      </Span>
      <Input
        marginTopValue="20px"
        marginBottomValue="20px"
        type="text"
        name="title"
        id="title"
        placeholder="강의 명을 입력해 주세요."
        onChange={handleTitle}
      />
      <Span fontSize="16px" fontWeight="500" fontColor="#000000">
        강의 날짜
      </Span>
      <DateContainer marginTopValue="20px">
        <CustomSingleDate placeholder="강의 날짜를 설정해주세요." />
      </DateContainer>
      <Input
        marginTopValue="20px"
        marginBottomValue="20px"
        type="text"
        name="title"
        id="title"
        placeholder="강의 날짜를 설정해주세요."
        onChange={handleDate}
      />
      <Span fontSize="16px" fontWeight="500" fontColor="#000000">
        목표 수강생
      </Span>
      <Input
        marginTopValue="20px"
        marginBottomValue="20px"
        type="text"
        name="title"
        id="title"
        placeholder="모집 정원(숫자로 입력해주세요.)"
        onChange={handleCount}
      />
      <Span fontSize="16px" fontWeight="500" fontColor="#000000">
        강의 키워드
      </Span>
      <Input
        marginTopValue="20px"
        marginBottomValue="50px"
        type="text"
        name="title"
        id="title"
        placeholder="키워드를 입력해 주세요"
        onChange={handleKeyword}
      />
      <Span
        fontSize="20px"
        fontWeight="bold"
        fontColor="#5570ff"
        marginTopValue="50px"
      >
        강의 설명
      </Span>
      <Line marginTopValue="8px" marginBottomValue="50px" />
      <Span fontSize="16px" fontWeight="500" fontColor="#000000">
        강의 소개
      </Span>
      <div className="demo-section">
        {/* 에디터 컴포넌트 */}
        <MyBlock>
          <Editor
            // css Wrapper class name
            wrapperClassName="demo-wrapper"
            // css editor class name
            editorClassName="demo-editor"
            editorState={editorState}
            // language 설정
            localization={{
              locale: 'ko',
            }}
            onFocus={event => {}}
            placeholder="내용을 입력해주세요"
            // 에디터 상단에 표시될 toolbar 설정
            toolbar={{
              inline: { inDropdown: true },
              list: { inDropdown: true },
              textAlign: { inDropdown: true },
              link: { inDropdown: true },
              history: { inDropdown: true },
              image: {
                uploadCallback: uploadImageCallBack,
                alt: { present: true, mandatory: true },
              },
            }}
            // 에디터 값이 변경될 때 호출될 함수 정의
            onEditorStateChange={handleEditorStateChange}
          />
        </MyBlock>
      </div>
      <p />
      {/* 글 작성 취소시 이전 화면으로 이동 */}
      <ButtonContainer>
        <Button
          marginTopValue="20px"
          marginRightValue="10px"
          type="button"
          onClick={() => history.push('/tutor/proceeding')}
        >
          <Span fontWeight="900" fontColor="#000000">
            글작성 취소
          </Span>
        </Button>
        {/* 입력된 제목, 내용을 서버로 전송할 Button 설정, 클릭 시 (onClick) handleSubmit 호출 */}
        <Button
          marginTopValue="20px"
          marginLeftValue="10px"
          onClick={handleSubmit}
        >
          <Span fontWeight="900" fontColor="#000000">
            저장
          </Span>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

WritePresenter.propTypes = {
  editorState: PropTypes.shape({}).isRequired,
  handleTitle: PropTypes.func.isRequired,
  handleDate: PropTypes.func.isRequired,
  handleCount: PropTypes.func.isRequired,
  handleKeyword: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleEditorStateChange: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  categoryItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

WritePresenter.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: '0',
    }),
  }),
};

export default WritePresenter;
