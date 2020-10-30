import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Container, Input, Button } from 'reactstrap';

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

const MyBlock = styled.div`
  .demo-editor {
    height: 550px !important;
    border: 1px solid #f1f1f1 !important;
    padding: 5px !important;
    border-radius: 2px !important;
  }
`;
// editorState, handleChange, handleSubmit prop 추가
// editorState는 리액트드래프트위지윅에 입력된 내용을 저장하기 위한 prop
// handleChange는 제목을 정보를 저장하기 위한 함수
// handleSubmit는 제목, 입력 내용을 서버로 전송할 함수

const WritePresenter = ({
  editorState,
  handleChange,
  handleSubmit,
  handleEditorStateChange,
  history,
}) => (
  <Container>
    <p />
    {/* 제목을 입력할 Input, 값이 변경되면 이를 저장하기 위한 onChagen 속성에 handleChange 설정 */}
    <Input
      style={{ marginTop: 20, marginBottom: 20 }}
      type="text"
      name="title"
      id="title"
      placeholder="제목"
      onChange={handleChange}
    />
    <p />
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
    {/* 입력된 제목, 내용을 서버로 전송할 Button 설정, 클릭 시 (onClick) handleSubmit 호출 */}
    <Button style={{ marginTop: 20 }} onClick={handleSubmit}>
      저장
    </Button>
    {/* 글 작성 취소시 이전 화면으로 이동 */}
    <Button
      style={{ marginTop: 20, marginLeft: 10 }}
      type="button"
      onClick={() => history.goBack()}
    >
      글작성 취소
    </Button>
  </Container>
);

WritePresenter.propTypes = {
  editorState: PropTypes.shape({}).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleEditorStateChange: PropTypes.func.isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default WritePresenter;
