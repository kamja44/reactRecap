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
