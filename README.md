# JobTreaming



# 1. 프로젝트 소개

## Why?

아래와 같은 조사 결과는 취업 관련 문제 해결의 필요성을 보여주고 있다.

* 4년제 대학생들의 약 48.6%는 진로를 결정하지 못하고 있다고 대답함
* 휴학생의 34.4%는 진로를 모색하기 위해 휴학을 했다고 대답함
* 취준생의 74.6%는 취업 도우미가 필요하다고 대답함

## How?

위와 같은 문제들을 해결하기 위해 본 프로젝트는 아래와 같은 기능을 갖는 플랫폼을 제시한다.

* 다양한 분야의 실무자들이 강연을 개설해 어떤 분야에 어떤 직업이 있는지, 어떤 일을 하는지 자세히 알 수 있음.
* 전문가의 실시간 강연을 통해 즉각적인 질의응답이 가능.
* 챗봇을 이용하여 어떤 강연을 들어야하는지 모르는 사용자에게 강연을 추천함
* 듣고 싶은 강연이 없을 경우 강연 청원을 등록할 수 있음.

![overview](/uploads/4e95d22099d0fac559dd361677cf5afa/overview.png)
<br/><br/>
# 2. 핵심 기능 및 시스템 구성도

## 핵심 기능

* 실시간 강연: WebRTC 기반으로 실시간 강연 모듈 구현
* 챗봇: Channel.io 와 같은 기술을 통해 챗봇을 구현
* AI 기반의 강연 추천: 원하는 강연을 텍스트로 입력하면 AI 기반으로 원하는 강연 추천
* 자동 강연 청원 등록: 원하는 강연이 존재하지 않는 경우 원하는 강연 내용을 자동으로 청원 등록

## 시스템 구성

![architecture](/uploads/e08c8b40d95297f2b1660717d1b31688/architecture.png)

# 3. 기술 스택 및 산출물

## 기술 스택

![stack](/uploads/938ccd482865d863e121a9a3f60c2168/stack.png)



## 산출물 및 소스코드 관리

- [요구사항 정의서](https://docs.google.com/spreadsheets/d/1shebn4ccE5Rxb3ogWD3ZbBjPg64D1uAgfd2KeD5vUdk/edit?ts=5f05afe3#gid=221702792)
- 화면 설계서(PPT로 작성해서 추후 추가 예정)
- DB 설계서
- API 문서
- 예상 손익 계산서
![예상손익계산서](/uploads/b2284d28e88f5449ffd8e221f69abf0c/예상손익계산서.png)
- 소스 코드
  * 프론트엔드: https://13.125.91.162/swmaestro/jdk-1
  * 백엔드: https://13.125.91.162/swmaestro/jdk
  * Web RTC: https://13.125.91.162/swmaestro/jdk-2
  * AI 추천: https://13.125.91.162/swmaestro/jdk-3



## 개발

- eslint & prettier 설정(https://13.125.91.162/swmaestro/jdk-1/-/wikis/VS-Code-&-Project-Setup)



## 개발 환경

- React js
- Spring Boot, Spring security
- Node.js

# 4. 자원 이용 계획

## 일정

* 6월 : 기획 및 분석
* 7월 : 설계
* 8월 : 개발, 디자인 외주, 인프라 구축
* 9월 : 개발
* 10월 : 개발
* 11월 : 버그 수정 및 배포

## 프로젝트 비 

* 디자인 : 2~300만원
* SW라이센스 : 100만원

# 5. 개발 담당

## 메인테이너

- 조민규
- 김성진
- 김지영

---



## 아래의 내용은 CRA로 생성 후 자동 생성된 내용으로 필요한 내용은 추후 정리 예정

## 

## 프로젝트 클론 후 시작 방법

---

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
