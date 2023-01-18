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
- JSX를 이용하기 위해서는 babel을 사용한 후 script의 타입을 text/babel로 설정해야한다.
- <script type="text/babel"></script>

babel

- 신형코드 -> 옛코드로 변환
  babel CDN
- https://unpkg.com/@babel/standalone/babel.min.js

# 2.6

JSX를 이용하여 Container 생성하기

- 기존에 생성한 Button과 Title 상수들을 함수로 선언한다.
- const Title = () => (
    <h3 id="title" onMouseEnter={() => console.log("mouse enter")}>
      Hello I'm a title
    </h3>
  );
  const Button = () => (
    <button
      id="button"
      onClick={() => console.log("I'm Clicked")}
      style={{ backgroundColor: "tomato" }}
    >
      Click me
    </button>
  );
- 선언한 함수들을 Container에 함수를 호출하는 방식이 아닌 셀프 클로징 태그로 선언한다. Title() -> <Title/> && Button() -> <Button/>
- Container 상수도 함수로 선언 후 render한다.
- const Container = () => (
  <div>
  <Title /><Button />
  </div>
  )
- ReactDOM.render(<container />, root);
  !!!!!
  함수로 선언할 때와 JSX에서 셀프 클로징 태그를 선언할 때 첫 글자는 항상 대문자로 선언한다.(소문자로 선언 시 JSX는 HTML 태그로 인식한다.)

# 3.0

JSX에 변수 할당하기

- let counter=10;
<h3>Total clicks: {counter}<h3>
- Total clicks: 10이 반환된다.

JSX에 함수 할당하기

- function countUp(){
  counter++;
  }
- <button onClick={countUp}>Click me</button>

ReactDOM.render(<Container />, root);

- 카운터를 증가시켜도 초기상태에서 한번만 렌더했기에 카운터의 값은 0이다. 즉, 값이 갱신되지 않는 문제가 발생한다.
- counter값을 갱신시키고, 그 후 Container를 다시 한번 렌더한다.
- function countUp(){
  counter++;
  ReactDOM.render(<Container />, root);
  }
  -React.js는 UI에서 바뀐부분(counter)만 업데이트 해준다.
- 기존의 javascript는 태그까지 업데이트(재선언)한다.
