# 202130432 최지민

## 5/12 12주차
### Chapter 14. 컨텍스트

<컨텍스트 API>

1. React.createContext
- 컨텍스트를 생성하기 위한 함수
- 파라메타에는 기본값 삽입
- 하위 컴포넌트는 가장 가까운 상위 레벨의 Provider부터 컨텍스트를 받게 되지만, 
- 만일 Provider를 찾을 수 없다면 위에서 설장한 기본값을 사용하게 된다

2. Context.Provider
- Context.Provider 컴포넌트르 하위 컴포넌트를 감싸주면 모든 하위 컴포넌트들이 해당 컨텍스트에 접근 가능
- 하위 컴포넌트를 consumer 컴포넌트라 부름

3. Class.contextType
- Provider 하위에 있는 클래스 컴포넌트에서 컨텍스트의 데이터에 접근하기 위해 사용
- Class 컴포넌트는 더 이상 사용하지 않으므로 참고

4. Context.Consumer
- 함수형 컴포넌트에서 Context.Consumer를 사용하여 컨텍스트를 구독
- 컴포넌트의 자식으로 함수가 올 수 있는데 이것을 function as a child 라고 함

5. Context.displayName
- 컨텍스트 객체는 displayName이라는 문자열 속성을 갖는다

<컨텍스트를 사용하기 전에 고려할 점>
- 컨텍스트는 다른 레벨의 많은 컴포넌트가 특정 데이터를 필요로 하는경우에 사용
- 컨텍스트를 사용하는 것이 무조건 좋은 것X
- 컴포넌트와 컨텍스트가 연동되면 재사용성이 떨어지기 때문(props를 통해 데이터를 전달하는 컴포넌트 합성 방법이 더 적합)

- 데이터가 많아질수록 상위 컴포넌트는 복잡
- 어떠한 경우에는 하나의 데이터에 다양한 레벨에 있는 중첩딘 컴포넌트의 접근이 필요(이러한 경우 컨텍스트가 유리)

예제처럼 props를 통해 데이터를 전달하는 기존 방식은 컴포넌트가 깊어질수록 복잡
반복적인 코드를 계속해서 작성해야 하기 때문에 비효율적이고 가독성이 떨어짐
컨텍스트를 사용하면 이러한 문제점을 깔끔하게 개선 가능

React.createContext()함수를 사용 -> ThemeContext라는 이름의 컨텍스트를 생성

컨텍스트를 사용하려면 컴포넌트의 상위 컴포넌트에서 Provider로 감싸주어야 함

14.1 컨텍스트란 무엇인가?
- 기존의 일반적인 리액트에서는 데이터가 컴포넌트의 props를 통해 부모에서 자식을 단방향 전달
- 컨텍스트는 리액트 컴포넌트들 사이에서 데이터를 기존의 props를 통해 전달하는 방식대신 '컴포넌트 트리를 통해 곧바로 컴포넌트에 전달하는 새로운 방식'을 제공
- 컨텍스트를 사용하면 일일이 props로 전달할 필요 없이 데이터를 필요로 하는 컴포넌트에 바로 전달 가능

합성vs.상속
합성과 대비되는 개념으로 상속(Inheritance)
자식 클래스는 부모 클래스가 가진 변수나 함수 등의 속성을 모두 갖게 되는 개념
리액트에서는 상속보다는 합성을 통해 새로운 컴포넌트를 생성

합성(Composition)은 '여러 개의 컴포넌트를 합쳐서 새로운 컴포넌트를 만드는 것'
조합 방법에 따라 합성의 사용 기법은 다음과 같이 나눌 수 있음
1. Containment
특정 컴포넌트를가 하위 컴포넌트를 포함하는 형태의 합성 방법
컴포넌트에 따라서는 어떤 자식 엘리먼트가 들어올 지 미리 예상할 수 없는 경우 있음
범용적인 '박스'역할을 하는 Sidebar 혹은 Dialog와 같은 컴포넌트에서 자주 볼 수 있음

2. Specialization
웰컴다이얼로그는 다이얼로그의 특별케이스
범용적인 개념을 구별이 되게 구체화하는 것을 특수화라고 함
객체지향 언어에서는 상속을 사용하여 특수화 구현
리액트에서는 합성을 사용하여 특수화를 구현
다음 예와 같이 특수화는 범용적으로 쓸 수 있는 컴포넌트를 만들어 놓고 특수한 목적으로 사용

3. Containment와 Specialization을 같이 사용하기


## 5/11 11주차
### jsx 작성
#### Calculator.jsx
```
import React, { useState} from "react";
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props) {
    if(props.celsius >= 100) {
        return <p>  물이 끓습니다. </p>
    }

    return <p>물이 끓지 않습니다.</p>
}

function toCelsius(fahrenheit) {
    return((fahrenheit - 32) * 5) / 9 ;
}

function toFahrenheit(celsius) {
    return (celsius * 9 ) / 5 + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if(Number.isNaN(input)) {
        return ""
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function Calculator(props) {
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    };

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    };

    const celsius = 
        scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = 
        scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;    

        return (
            <div>
                    <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={handleCelsiusChange}
                    />
                    <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={handleFahrenheitChange}
                    />
                    <BoilingVerdict celsius={parseFloat(celsius)}/>
            </div>
        );
}

export default Calculator;
```
#### TemperatureInput.jsx
```
const scaleNames = {
    c: "섭씨",
    f: "화씨",
};

function TemperatureInput(props) {
    const handleChange = (event) => {
        props.onTemperatureChange(event.target.value)
    };

return (
    <fieldset>
        <legend>
            온도를 입력해주세요.(단위: {scaleNames[props.scale]});
        </legend>
        <input value={props.Temperature} onChange={handleChange}/>
    </fieldset>

    );
}

export default TemperatureInput;
```


## 5/4 10주차

### 리스트와 키란 무엇인가?
- 리스크는 JS의 변수나 객체를 하나의 변수로 묶어 놓은 배열과 같은 것
- 키는 각 객체나 아이템을 구분할 수 있는 고유한 값을 의미
- 리액트에서는 배열과 키를 사용하는 반복되는 다수의 엘리먼트를 쉽게 렌더링 할 수 있음

### 여러 개의 컴포넌트 렌더링 하기
여러개의 같은 컴포넌트를 화면에 반복적으로 나타내야 할 경우, 배열에 들어있는 엘리먼트를 map()함수를 이용하여 렌더링 합니다.

const doubled = numbers.map((number) => number * 2);
= numbers 배열에 들어있는 각각의 요소를 map()을 이용하여 하나씩 추출, 2를 곱한 후 doubled이라는 배열에 다시 넣는 코드

예제 
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => 
<li>{number}</li>
);
= 이 코드는 numbers에 2를 곱하는 대신에 <li>태그를 결합하여 리턴하고 있음. 리턴된 listItems는 <ul>태그와 결합하여 렌더링 된다.

### 기본적인 리스트 컴포넌트
앞서 작성한 코드를 별도의 컴포넌트로 분리, 이 컴포넌트는 props로 받은 숫자를 numbers로 받아 리스트로 렌더링해 줍니다.

```
function NumberList(props) {
    const{numbers} = props;

    const listItems = numbers.map((number) =>
        <li>{number}</li>
    );

    return (
        <ul>{listItems}</ul>
    );
}
```

```
const numbers = [ 1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList numbers={numbers}/>,
    document.getElementById('root')
);
```

= 본 코드 사용시 키가 없다고 나온다.

### 리스트의 키
- 리스트에서의 키는 리스트에서 아이템을 구별하기 위한 고유한 문자열이다.
- 이 키는 리스트에서 어떤 아이템이 변경, 추가 또는 제거되었는지 구분하기 위해 사용함
- 키는 같은 엘리먼트 사이에서만 고유한 값이면 됨

### 제어 컴포넌트
- 제어 컴포넌트는 사용자가 입력한 값에 접근하고 제어할 수 있도록 해주는 컴포넌트이이다.

### textarea 태그 / select 태그
- HTML 에서 <textarea> 의 children으로 텍스트가 들어가는 형태이다.
- 리액트에서는 state를 통해 태그의 value라는 attribute를 변경하여 텍스트를 표시한다.
- select 태그도 taxtarea와 동일하다

### File input 태그
- File input 태그는 그 값이 일기 전용이기 때문에 리액트에서는 비에저 컴포넌트 된다.
```
<input type="file />
```
### 여러 개의 입력 다루기
- 하나의 컴포넌트에서 여러개의 입력을 다루기 위해서는 여러 개의 state를 선언
```
const [haveBreakfast, setHaveBreakfast] = useState(true);
const [numberOfGuest, setNumberOfGuest] = useState(2);

const handleSubmit = (event) => {
    alert(`아침 식사여부: ${haveBreakfast}, 방문객 수: ${numberOfGuest}`);
}
```
### Input Null Value
- 제어 컴포넌트에 value prop을 정해진 값으로 넣으면 코드를 수정하지 않는 한 입력값 변경 불가능
- value prop은 넣되 자유롭게 입력할 수 있도록 만들고 싶으면 값이 undefined 또는 null을 넣는다
```
setTimeout(function(){
        ReactDOM.render(<input value={null} />,rootNode);
    }, 1000);

```

### Shared State
- shared state는 공유된 state를 의미
- 어떤 컴포넌트의 state에 있는 데이터를 여러 개의 하위 컴포넌트에서 공통적으로 사용하는 경우
- 하위 컴포넌트가 공통된 부모 컴포넌트의 state를 공유하여 사용하는 것을 shared state라고 한다.

### Calculator 컴포넌트 변경하기
- 상위 컴포넌트인 Calculator에서 온도 값가 단위를 각각 state를 가지고 있음
- 두 개의 하위 컴포넌트는 섭씨와 화씨로 변환된 온도 값을 업데이트하기 위한 props로 가지고 있음
- 이처럼 공통된 상위 컴포넌트로 올려서 공유하는 방법을 사용하면 더욱 간결하고 효율적

## 4/27 9주차
### Chapter10. 리스트와 키
### 1 여러 개의 컴포넌트 렌더링하기
배열에 들어있는 각 변수에 어떤 처리를 한 뒤 리턴하는 것

### 2 리스트와 키란 무엇인가?
리스트를 위해 사용하는 자료구조가 바로 배열

배열은 자바스크립트의 변수나 객체를 하나의 변수로 묶어놓은 것
아래는 자바스크립트의 배열을 보여주는 것

const number = [1,2,3,4,5];

키는 모두 각자 고유하다는 것
키는 각 객체나 아이템을 구분할 수 있는 고유한 값을 의미

### 3 컴포넌트 렌더링 막기
컴포넌트를 렌더링하고 싶지 않을 때에는 null을 리턴
function WarningBanner(props){
    if(!props.warning){
        return null;
    }
    return(
        <div>경고!</div>
    );
}
### 4 인라인 조건
필요한 곳에 조건문을 직접 넣어 사용하는 방법

- 인라인 if
if문을 직접 사용하지 않고, 동일한 효과를 내기 위해 && 논리 연산자 사용
&& 는 and 연자로 모든 조건이 참일 때 참
첫 조건이 거짓이면 두번째 조건은 판단할 필요X
단, 결과 값은 그대로 리턴

- 인라인 if-Else
삼항 연산자를 사용 (조건문 ? 참일경우 : 거짓일경우)
문자열이나 엘리먼트를 넣어서 사용 가능

### 5 엘리먼트 변수
렌더링해야 될 컴포넌트를 변수처럼 사용하는 방법이 엘리먼트 변수

### 6 조건부 렌더링이란?
functing Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn){
        return <UserGreeting/>;
    }
    return <UserGreeting/>;
}
- props로 전달 받은 isLoggedIn이 true면 <UserGreeting/>을,   
  false면 <GuestGreeting/>을 return   
- 이와 같은 렌더링을 조건부 렌더링

### 7  Arguments 전달하기
함수를 정의할 때는 파라미터(Parameter) 혹은 매개변수
함수를 사용할 때는 아귀먼트(Argument) 혹은 인자
이벤트 핸들러에 매개변수를 전달해야 하는 경우 많음

### 8 이벤트 핸들러 추가 방법
- 버튼을 클릭하면 handleCick() 함수 호출하도록 되어 있음   
- bind를 사용하지 않으면 this.handleCick은 글로벌 스코프에서 호출되어, undefined로 사용 못 함   
- bind를 사용하지 않으려면 화살표함수를 사용해도 됨
- 하지만 클래스 컴포넌트는 이제 거의 사용하지 않음
함수형에서 이벤트 핸들러를 정화하는 방법은 2가지

(1) 함수 안에 함수로 정의

(2) arrow function을 사용하여 정의

함수형에서는 tHis를 사용하지 않고 onClick에서 바로 HandleClick을 넘김

### 9 이벤트 처리하기

(1) DOM에서 클릭 이벤트를 처리

(2) React에서 클릭이벤트 처리
둘의 차이점은 1. 이벤트 이름이 onClick에서 onClick으로 변경

전달하려는 함수는 함수열에서 함수 그대로 전달

이벤트가 발생 했을 때 해당 이벤트를 처리하는 함수를 "이벤트 핸들러" 라고 함

이벤트가 발생하는 것을 계속 듣고 있다는 의미로 "이벤트 리스너" 라고도 함

<<<<<<< HEAD
## 4/20 8주차 중간고사

=======
>>>>>>> 6294043eb4dffff6e6c74f75a287a6b6ce087a1a
## 4/13 7주차
#### 1. 종류
 (1) useCallback
- useMemo()와 유사역할
- 차이점은 값이 아닌 함수 반환
- 의존성 배열을 파라미터로 받는다
- 파라미터로 받은 함수를 콜백이라 부른다

 (2) useRef
- useFef() 훅은 레퍼런스를 사용하기 위한 훅이다
- 레퍼런스란 특정 컴포넌트에 접근할 수 있는 객체를 의미
- useRef() 훅은 바로 이 레처런스 객체를 반환
- 레퍼런스 객체에는 .current라는 속성이 있는데 이것은 현재 참조중인 엘리먼트를 의미

#### 2. 훅의 규칙
 (1) 무조건 최상의 레벨에서만 호출해야 한다.(최상위 = 컴포넌트의 최상위 레베을 의미)
- 따라서 반복문이나 조건문 또는 중첩된 함수들 안에서 훅을 포출하면 안됨
- 이 규칙에 따라서 훅은 컴포넌트가 렌더링 될 때마다 같은 순서로 호출되어야 한다.

 (2) 리액트 함수형 컴포넌트에서만 훅을 호출해야 한다는 것
 - 따라서 일반 자바스크립트 함수에서 훅을 호출하면 안됨
 - 혹은 리액트 함수 컴포넌트 훅은 직접 만든 커스텀 훅에서만 호출할 수 있음

 #### 3. 나만의 훅 만들기
 - 필요하다면 직접 훅을 제작 할 수 있다. 이것을 커스텀 훅이라고함 



## 4/6 6주차
#### 1. State
(1) State란?
- 리액트 컴포넌트의 상태를 의미
- 상태의 의미는 정상 비정상을 말하는 것이 아닌 컴포넌트의 데이터를 의미(정확히는 컴포넌트의 변경 가능한 데이터를 의미)
- State가 변하면 다시 렌더링 되기 때문에 렌더링과 관련된 값만
state에 포함시켜야함

(2) 특징
- 리액트만의 특별한 형태가 아닌 다만 JS 객체일 뿐이다.
- state는 변경이 가능하다고는 하지만 직접 수정해서는 안되기에 불가능하다고 생각하는 것이 좋음(만약 변경을 원한다면 setstate()함수 사용이 필수)

#### 2. component VS. element VS. instance
(0) 비유
- 지료 : element 
- 빵 틀 : component 
- 재료를 빵 틀에 넣고 만든 빵 : instance

#### 3. 생명주기에 대해 알아보기
- 생명주기 = 컴포넌트의 생성 시점, 사용 시점, 종료 시점을 나타내는 것
- constructor가 실행 되면서 컴포넌트가 생성됨
- 생성 직후 conponentDidMount()함수가 호출됨
- 컴포넌트가 소멸하기 전까지 여러 번 랜더링 할 것
- 랜더링은 props, setState(), forceUpdate()에 의해 상태가 변경되면 이루어짐. 그리고 랜더링이 끝나면 conponentDidUpdate()함수가 호출됨.
- 마지막으로 컴포넌트가 언마운트 되면 conponentWillUnmount() 함수가 호출됨


## 3/30 5주차
#### 1.엘리먼트 렌더링 하기

###### <div id = "root"></div?>

div태그로 단순하지만 리액트에 필수로 들어가는 중요 코드임
이 div 태그 안에 리액트 엘리먼트가 렌더링 되며, 이 것을 root DOM 이라고 한다.

<pre>
<code>
function tick() {
    const element = (
        <div>
        <h1> 안녕, 리액트!</h1>
        <h2>현재 시간 : {new Date().toLocaleTimeString()}</h2>
        </div>
    );

    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
</code>
</pre>


setInterval() 함수 = 위에 정의한 tick()를 1초에 한번씩 호출시켜줌
즉, 1초에 한번씩 element를 새로 만들고 그서을 교체하는 것


#### 2.컴포넌트


컴포넌트 구조라는 것은 작은 컴포넌트가 모여 큰 컴포넌트를 구성하고,
다시 이러 컴포넌트들이 모여서 전체 페이지를 구성한다는 것을 의미함


###### <컴포넌트의 특징>
- 재사용이 가능 : 따라서 전체 코드의 양을 줄일 수 있어 개발 시간과 유지 보수 비용도 절약 가능
- 컴포넌트는 JS 함수와 입력과 함수가 있다는 점에서 상당히 유사
- 다만 입력과 출력은 입력은 Props가 담당, 출력은 리액트 앨리먼트의 형태로 출력
- 앨리먼트를 필요한 만큼 만들어 사용한다는 정메서 객체 지향과 유사

##### <컴포넌트 만들기>
- 함수 컴포넌트과 클래스 컴포넌트로 나누어진다.
- 리액트 초기버전을 사용할 때는 클래스형을 사용하였으나
Hook이라는 개념이 나오면서 최근에는 함수형을 주로 사용하고있다.
- 허나 과거에 작성된 코드나 문서들을 분석할 때는 클랙스형에 대해
알고있어야 하기 때문에 클래스형 컴포넌트와 컴포넌트의 생명주기에 관해서도 
알아두어야 한다. 

##### <컴포넌트 이름짓기>
- 이름은 항상 대문자로
- 리액트에서 소문자로 시작하는 컴포넌트를 DOM 태그로 인식하기 때문. html tag
- 컴포넌트 파일 이름과 컴포넌트 이름은 같게 합니다.

##### <컴포넌트 추출>
- 복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 나눌 수도 있음
- 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는 것
- 실무에서는 처음부터 1개의 컴포넌트에 하나만 만드는 것을 추천


###### <Props의 특징>
- 읽기 전용으로 변경 불가하다
- 속성이 다른 앨리먼트를 생성하기 위해서는 새로운 props를 컴포넌트에 전달하면 된다.

###### <Pure 함수 VS InPure 함수>
- Pure 함수는 인수로 받은 정보가 함수 내부에서도 변하지 않지만
Inpure 함수는 변화한다.

## 3/23 4주차
#### 1. 레포지터리 재생성 및 깃 연동

1. 기존 read.me에서 내용 복사 및 레포지터리 삭제
2. npx create-reat-app 23-react1 새로운 react 파일 생성
3. read.me에 들어있던 내용 기존 read.me로 교체
4. 기존과 똑같은 이름으로 새로운 레포지터리 생성
5. C:cjm 경로로 새롭게 폴더 생성 : git 레포지터리 연결을 수월하게 하기 위해서
6. 경로를 새로운 레포지터리로 연결 후 다시 기존창으로 돌아와서 커밋하기
- 새로운 레포지터리로 가겠냐고 안내가 뜬다.
7. 연동하여 메세지에 메모 남기고 커밋 - brush 하기

#### 2. JSX
JSX는 객체를 포현한다.
Babel은 JSX를 React.createElement() 호출로 컴파일한다.

JSX는 내부적으로 XML / HTML 코드를 자바스크립트로 변환한다.
- 만일 JS 작업할 경우 직접 createElement 함수를 사용해야함
- 결국 JSX는 가독성을 높여주는 역할을 한다.

<장점>

(1) 코드가 간결해진다.
(2) 가독성이 향상 됩니다.
(3)Injection Attack이라 불리는 해킹 방법을 방어함으로써 보안에 강합니다.


## 3/16 3주차
#### 1. node.js 설치
<설치 방법>
(1) https://nodejs.org 에 들어가서 LTS 버전 설치
(2) cmd에 node -v 와 npm -v 명령어를 이용하여 버전확인 및 정상 설치 여부 확인
#### 2. React란 무엇인가
<정의>
user interface를 만들기 위한 JS 라이브러리
- 복잡한 사이트를 쉽고 빠르게 제작 및 관리하게 해주기 위해 만들어졌다.

<장점>
(1) 빠른 업데이트와 렌더링 속도ㅎ
(2) 컴포넌트 기반 구조
(3) 재사용성
(4) 활발한 지식 공유 & 커뮤니티
(5) 동기식과 비동기식 등

<단점>
(1) 방대한 학습량
(2) 높은 상태의 관리 복잡도
