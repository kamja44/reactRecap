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

# 3.1

React에서 어플리케이션을 다룰 때 변수를 저장하는 방법

- ReactDOM이 렌더하는 태그(App or Container)의 return문 전에 useStatus를 사용한다.
- function App(){
  const data = React.useState(0)
  return ...
  }
- data 즉, React.useState()는 2가지 요소를 지니고 있는 배열을 반환하는데[data, function] data는 할당받은 값이다.(data는 초기값을 가질 수 있다.) function은 data를 바꿀 떄 사용하는 함수이다.

javascript에서 배열의 요소를 꺼내는 방법

- const food = ["tomato","potato"]
- const [myFavFood, mySecondFavFood] = food;
- 이렇게 사용하면 myFavFood에는 tomato가 할당되고, mySecondFavFood에는 potato가 할당된다.

#

React.useState()가 반환하는 배열의 2가지 요소를 아래와 같이 꺼내 사용한다.

- const[counter, modifier] = React.useState();
- React.useState()는 ["data", function]을 반환하는데 이렇게 사용하면 counter에는 "data"가 할당되고 modifier에는 function이 할당된다.
- const[counter, modifier] = React.useState(0);
- 위 문장에서 counter에는 초깃값인 0이 할당되고 modifier에는 data를 바꿀 때 사용하는 function이 할당된다. 즉, counter = 0이고 modifier=function이 할당된다.
- modifier함수는 값을 하나 할당받을 수 있다. modifier함수에 어떤 값을 부여하든 modifier함수는 그 값으로 업데이트하고 리렌더링 한다.
- const [counter, modifier] = React.useState(0);
- const onClick = () => {
  modifier(4444);
  }
- counter를 출력할 때 클릭 이벤트를 발생시키면 0에서 4444로 업데이트된다.
- 즉, React.useState 함수는 counter같은 데이터를 숫자형 데이터로 건네주고, 그 데이터 값을 바꿀 함수(modifier)도 함께 준다. 그리고 그 함수(modifier)를 이용하여 데이터를 바꿧을 때 데이터의 값이 바뀌고 컴포넌트도 동시에 리렌더링 된다.
- 위 코드에서는 [counter, modifier]로 설정했지만 관습적으로 [counter, setCounter]로 사용한다.

# 3.4

modifyFunction(setCoutner)에는 함수를 할당할 수 있다.

- setCounter(current => current +1);
- setCounter에 현재의 값을 할당하는 방법보다 함수를 할당하여 현재의 값을 변경하는 방법이 안전하다.(함수의 argument가 현재 값 확실히 현재값이라는걸 보장 가능)
- 즉, 현재 state(현재값)을 기반으로 계산을 하려면 함수를 이용해야한다. modifyFunction에 함수를 할당하면 함수의 argument는 현재값이라는걸 보장할 수 있다.( const [counter, setCoutner] = React.useState(0)에서 setCounter((current) => current + 1) 이라고 한다면 current에는 현재값인 coutner가 들어간다.)

# 3.5

현재 사용중인 react는 production버전이다.

- <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  production 버전을 development 버전으로 변셩하면 html의 예약어 사용이 불가능하다.
- <script src="https://unpkg.com/react@17.0.2/umd/react.development.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.min.js"></script>

html 예약어 사용 불가

- <label for="minutes" class="hi">Minutes </label>
  <input id="minutes" placeholder="Minutes" type="number" />
  <label for="hours">Minutes </label>
  <input id="hours" placeholder="Hours" type="number" />
  아래와 같이 변경해서 사용해야 한다.
- <label htmlFor="minutes" className="hi">Minutes </label>
  <input id="minutes" placeholder="Minutes" type="number" />
  <label htmlFor="hours">Minutes </label>
  <input id="hours" placeholder="Hours" type="number" />

onChnage Event

- 새로운 값을 입력할 때 마다 value를 업데이트 시킨다.
- <input value={minutes} id="minutes" placeholder="Minutes" type="number"
  onChange={}>

# 4.0

JSX Props

- 개발자가 만들고 사용하는 모든 컴포넌트들은 argument를 받는다.
  즉,
- const Btn = (props) => {}
- <Btn dev="kamja">
- 이러한 코드가 있다고 가정하면 Btn의 argumentㅇ니 props에는 {dev:"kamja"}가 들어간다.
- 즉, {props.dev}를 사용하면 dev의 값인 kamja가 출력된다.
