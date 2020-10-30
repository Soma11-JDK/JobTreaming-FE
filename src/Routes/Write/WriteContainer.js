// PostContainer.js 컴포넌트
import { compose, withState, withHandlers } from 'recompose';
// 에디터의 현재 콘텐츠 정보를 추출하는 함수 import
import { EditorState, convertToRaw } from 'draft-js';
// draftjs 콘텐츠를 html로 변환하는 함수 import
import draftToHtml from 'draftjs-to-html';
// PostView 컴포넌트 import
import { withRouter } from 'react-router-dom';

import WritePresenter from './WritePresenter';
// 글목록으로 이동하기 위해 withRouter HOC import

export default compose(
  withRouter,
  // editorState state를 생성하고 초기값을 createEmpty() 즉, 빈값으로 설정
  withState('editorState', 'setEditorState', EditorState.createEmpty()),
  // title state를 생성하고 초기값은 빈 문자열
  withState('title', 'setTitle', ''),
  withHandlers({
    // 제목(title)이 변경되는 경우 setTitle로 title state 변경
    handleChange: props => e => {
      props.setTitle(e.target.value);
    },
    // 에디터 상태(editorState) 변경되는 경우 setEditorState로 editorState 변경
    handleEditorStateChange: props => editorState => {
      props.setEditorState(editorState);
    },
    // 저장 버튼을 클릭하는 경우, 콘솔에 제목과 editorState 정보 출력
    handleSubmit: props => () => {
      // withRouter HOC에 포함되 history 추출
      const { history } = props;
      const newLecture = {
        title: props.title,
        content: draftToHtml(
          convertToRaw(props.editorState.getCurrentContent()),
        ),
      };
      console.log(newLecture);
    },
  }),
)(WritePresenter);
