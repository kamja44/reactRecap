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
