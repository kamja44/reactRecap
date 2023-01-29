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
