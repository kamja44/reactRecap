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
