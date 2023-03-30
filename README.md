# 202130432 최지민

## 3/30 5주차
##### 1.엘리먼트 렌더링 하기

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


##### 2.컴포넌트


컴포넌트 구조라는 것은 작은 컴포넌트가 모여 큰 컴포넌트를 구성하고,
다시 이러 컴포넌트들이 모여서 전체 페이지를 구성한다는 것을 의미함


###### <컴포넌트의 특징>
- 재사용이 가능 : 따라서 전체 코드의 양을 줄일 수 있어 개발 시간과 유지 보수 비용도 절약 가능
- 컴포넌트는 JS 함수와 입력과 함수가 있다는 점에서 상당히 유사
- 다만 입력과 출력은 입력은 Props가 담당, 출력은 리액트 앨리먼트의 형태로 출력
- 앨리먼트를 필요한 만큼 만들어 사용한다는 정메서 객체 지향과 유사


###### <Props의 특징>
- 읽기 전용으로 변경 불가하다
- 속성이 다른 앨리먼트를 생성하기 위해서는 새로운 props를 컴포넌트에 전달하면 된다.

###### <Pure 함수 VS InPure 함수>
- Pure 함수는 인수로 받은 정보가 함수 내부에서도 변하지 않지만
Inpure 함수는 변화한다.

## 3/23 4주차
##### 1. 레포지터리 재생성 및 깃 연동

1. 기존 read.me에서 내용 복사 및 레포지터리 삭제
2. npx create-reat-app 23-react1 새로운 react 파일 생성
3. read.me에 들어있던 내용 기존 read.me로 교체
4. 기존과 똑같은 이름으로 새로운 레포지터리 생성
5. C:cjm 경로로 새롭게 폴더 생성 : git 레포지터리 연결을 수월하게 하기 위해서
6. 경로를 새로운 레포지터리로 연결 후 다시 기존창으로 돌아와서 커밋하기
- 새로운 레포지터리로 가겠냐고 안내가 뜬다.
7. 연동하여 메세지에 메모 남기고 커밋 - brush 하기

##### 2. JSX
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
##### 1. node.js 설치
<설치 방법>
(1) https://nodejs.org 에 들어가서 LTS 버전 설치
(2) cmd에 node -v 와 npm -v 명령어를 이용하여 버전확인 및 정상 설치 여부 확인
##### 2. React란 무엇인가
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
