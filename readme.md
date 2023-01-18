react 사용법

1. 2개의 javascrupt 코드 import(react와 react-dom)[CDN방식]

- <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js">
- <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js">

2. console에서 React를 입력하면 react를 확인할 수 있다.
3. react를 확인했다면 react코드를 사용한다.

react 규칙

- HTML을 페이지에 직접 작성하지 않는다. 대신 javascript를 사용한다.

react는 어플리케이션을 도와주는 라이브러리(엔진)
react-dom은 react element들을 HTML DOM에 넣을 수 있게 하는 라이브러리이다.

React.createElement("생성할element", {속성 ex) id="span"}, "span안에 들어갈 내용");

react 동작 순서

- javascript -> HTML & CSS

# 2.3

여러가지 태그 동시에 render하기

- const container = React.createElement("div", null, [span, btn]);
- ReactDOM.render(container,root);

# 2.5

JSX

- javascript를 확장한 문법
- HTML에서 사용한 문법과 비슷한 문법을 이용해서 react요소를 만든다.
- JSX를 이용하기 위해서는 babel을 사용해야 한다.

babel

- 신형코드 -> 옛코드로 변환
  babel CDN
- https://unpkg.com/@babel/standalone/babel.min.js
