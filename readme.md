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

# 4.1

아래와 같은 코드가 있을 때 첫 번째 props는 value가 변경될 때 재생성(render)되는게 맞지만 두 번째 Component는 value가 없음에도 render된다.

- const [value, setValue] = React.useState("Save Changes");
- <Btn kamja={value} onClick={changeValue} />
     <Btn kamja="kokuma" />
  이러한 문제를 React.memo()를 사용하여 해결할 수 있다.
- const MemorizedBtn = React.memo(Btn);
- <MemorizedBtn kamja={value} onClick={changeValue} />
  <MemorizedBtn kamja="kokuma" />
- React.momo()를 사용하면 value가 변경되지 않는 props는 재생성(render)되지 않는다.
- application이 느려지는 원인이 될 수 있다.

# 4.2

PropType

- 개발자가 어떤 타입의 prop을 받고 있는지 체크한다.

PropType 사용법

1. PropType설치[CDN]

- <script src="https://unpkg.com/prop-types@15.7.2/prop-types.js"></script>

2. React에게 prop들의 타입이 무엇인지 명시

-     Btn.propTypes = {
      text: propTypes.string,
      fontSize: propTypes.number,
  }
- console.log(propTypes)로 propTypes을 확인할 수 있다.
- 컴포넌트가 prop들을 무조건 갖고 있어야 한다면 isRequired옵션을 사용할 수 있다.
- text: propTypes.string.isRequired
- 즉, text는 항상 값이 존재한다고 보장할 수 있다.
- prop을 받을 때 기본값을 설정할 수 있다.
- const Btn = ({text, fontSize = 30}) => {}
- props을 받지 못했을 때 설정한 기본값을 props의 설정값으로 사용한다.

# 4.3 Recap

- prop을 전달할 때 전달할 때의 이름과 전달 받는 argument의 이름은 동일해야한다.

# 5.0

Create React app

1. npx create-react-app 어플리케이션 이름

- npx create-react-app react-recap

# 5.0

Create React app

1. npx create-react-app 어플리케이션 이름

- npx create-react-app react-recap

2. prop-types 설치(필수 아님)

- npm i prop-types

# 5.1

create-react-app은 CSS 코드를 javascript 오브젝트로 변환시켜준다.
import styled from "./Button/moduels.css"
styled에는 .btn이 들어있다.
즉, 자바스크립트 오브젝트는 styled.btn 오브젝트를 갖고 있다.
이렇게 사용하면 button은 무작위 calssname을 갖게 된다.

# 6.1

useEffect

- State가 변경되도 한번만 실행한다.
- 두 개의 argument를 가지는 function이다.
- 첫 번째 argument는 사용자가 딱 한번 실행하고 싶은 코드
- useState를 사용하면 state가 변경될 때마다 코드가 재실행 되었는데 useEffect를 사용하면 state가 변경되더라도 useEffect에 설정한 코드는 한번만 실행된다.
- useEffect(() => console.log("Loading API..."), []);

# 6.2

useEffect의 2번째 argument

- 2번째 argument는 중괄호 안에 state를 할당한다. ex) [keyword]
- 2번째 argument에 설정한 state가 변화할 때만 1번째 argument에서 설정한 코드를 실행한다.
- useEffect(() => {
  console.log(`Search For ${keyword}`);
  }, [keyword]);
- 2번째 argument인 keyword가 변경될 때마다 console.log(`Search For ${keyword}`); 문장이 실행된다.
- 즉, 다른 state가 변경될 떄는 keyword가 설정된 useEffect는 실행되지 않는다.

- 배열에 2개의 state를 등록하면 2개 중 하나의 state변경 시 첫 번째 argument에서 설정한 코드를 실행한다.

# 6.4

Cleanup Function

- useEffect의 return
- useEffect의 return을 사용하면 component가 삭제될 때 (즉, useEffect의 state가 삭제될 때) return문(cleanup Function)을 실행한다.
- useEffect(() => {
  console.log("Created");
  return () => console.log("Destroyed");
  }, []);
  return <h1>Hello</h1>;
- 즉, 위의 코드에서 <h1>Hello<h1>이 사라진다면 return () => console.log("Destroyed");가 실행된다.
- 위의 코드는 아래의 코드와 동일한 코드이다.
- function byFn(){console.log("bye");}
- function hiFn(){console.loog("created"); return byFn;}
- useEffect(hiFn, []);
- reurn <h1>Hello</h1>;

# 7.0

ToDo List

기존 배열에 배열 추가하기

- [6]배열이 있고 let food = [1,2,3,4]배열이 있다. food 배열을 [6]배열에 추가하는 방법은 [6, ...food]이다.
- [6, ...food] => [6,1,2,3,4]가 반환된다.

useState를 사용할 때 react는 modify함수의 첫번째 argument로 현재의 state를 보낸다.

- const [toDo, setToDo] = useState("");
- setToDo 함수는 toDo를 가지고 있다.
- 즉, setToDo((data) => "kamja")함수를 사용하게 되면 data는 setToDo함수가 가지고 있는 toDo가 되고 toDo는 "kamja"를 값으로 가지게 된다.

# 7.1

javascript array.map(item, index)
react에서 배열을 이용하여 연속적으로 html 태그를 생성할 때 태그에 key값을 입력해야 한다. <- map의 2번째 argument인 index를 key값에 할당함으로써 해결

# 7.4 ~ 7.5

Key는 React.js에서만 map 안에서 component들을 render할 때 사용한다.

PropTypes

- Component들의 타입을 체크한다.

React Router

1. npm i react-router-dom@5.3.0

2. import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

3. Create Router Component and use Switch

```
return (
  <Router>
    <Switch>
      <Route></Route>
    </Switch>
  </Router>
);
```

+Router는 URL을 찾으면 컴포넌트를 렌더링하는 역할

4. Route 컴포넌트에 경로와 경로에 접근했을 때 동작할 컴포넌트 작성

```
return(
    <Router>
      <Switch>
        <Route path = "/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
  # Route path="/" <- Home URL로 접근할 때 Route안의 컴포넌트 즉, Home 컴포넌트를 실행한다.
```

### Switch component

- 한번에 하나의 Route만 렌더링 하기 위해 사용

* React Router는 두개의 Route를 한번에 렌더링이 가능하다.

react router에는 Browser Router와 Hash Router가 있다.

### Browser Router

- Normal URL

### Hash Router

- URL에 특수한 기호가 추가됨 ex) #

### Link Component

- 브라우저 새로고침이 없이도 유저를 다른 페이지로 이동시켜주는 컴포넌트

```
<Link to ="/movie">{title}</Link>
```

## URL에 변수 추가하기

- :변수명

* MovieApp.js

```
<Route path="/movie/:id">
  <Detail/>
<Route />
```

- Home.js

```
{movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
```

### react-router-dom의 useParams()를 이용하면 URL에 추가한 변수를 사용할 수 있다.

```
import { useParams } from "react-router-dom";
function Detail() {
  const x = useParams();
  console.log(x);
  return <h1>Detail</h1>;
}
```

- console.log(x)에는 URL에 할당한 변수인 :id가 Object형식으로 출력된다.
