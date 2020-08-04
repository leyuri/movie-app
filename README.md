# movie-app

express js는 node.js 를 쉽게 이용하게 해주는 프레임 워크이다 / index.js 백엔드 시작점

#### 몽고 디비 연결

User.js 추가

몽고디비 모델 & 스키마



#### SSH연결

1. ssh key를 만든다
2. ssh agent를 background에 킨다
3. ssh private key를 ssh-agent에 넣는다
4. 생선된 ssh public key를 3rd party (깃헙 등에) 준다



#### BodyParser & PostMan & 회원 가입 기능

Body-parser dependency -> npm install body-parser --save



client에서 request를 줘야 하는데 현재 클라이언트가 없으니 postman을 이용해서 request를 보낸다.

다운로드 post man -> 다운로드 post man

register route 만들기

먼저 node sever 실행

post man으로 register route에 request보내기



#### nodemon

소스 변경할 때 감지해서 자동으로 서버를 재 시작해주는 tool

 npm install nodemon --save -dev

 -dev: 로컬 개발 모드에서, 로컬에서 할때만 사용하겠다느 의미



#### 비밀정보관리

환경변수 process.env.NODE_ENV

local환경

deploy환경



#### Bcrypt로 비밀번호 암호화 하기

npm install bcrypt --save



1. register route  로 가기
2. 유저정보들을 데이터베이스에 저장하기 전 암호화 할 타이밍
3. salt를 이용해서 비밀번호를 암호화 해야 함( salt를 먼저 생성해야 함. saltRouds = 10  , 10자리로 암호화 함!)



#### 로그인 기능 만들기

##### login route만들기

1. 데이터베이스에서 요청한 이메일 찾기 -> User.findOne()
2. 데이터베이스에서 요청한 이메일이 있다면 비밀번호가 같은지 확인 -> bcrypt를 이용하여 plain password와 암호화(Hashed) 패스워드가 같은지 확인
3. 비밀번호까지 같다면 Token을 생성 -> 토큰 생성을 위해서 JSONWEBTOKEN 라이브러리를 다운로드 
   - npm install jsonwebtoken --save



#### Auth 기능 만들기

auth route 만들기 

1. 페이지 이동때마다 로그인 되어있는지 안되어있는지, 관리자 유저인지 등을 체크
2. 글을 쓸 때나 지울 때 권한이 있는지 체크



Server

Client의 cookie의 token이 인코드 되어있다. 이것을 디코드를 하면 유저아이디가 나온다. 

유저아이디를 가진 유저 데이터베이스에 그 토큰이 있다면 맞다면 인증이 된 것이다. 다르면 글쓰기를 할 수 없음.



#### 로그아웃 기능 만들기

로그아웃 Route  만들기

로구아웃 하려는 유저를 데이터 베이스에서 찾아서

그 유저의 토큰을 지워준다. 



#### 리액트란?

1. Library, Made by Facebook, Released in 2013
2. Components modules과 비슷하게 컴포넌트로 이루어져서 resuable이 뛰어남
3. virtual dom



real dom이란? 만약 10개의 리스트가 있다. 그 중 한가지의 리스트만 Update되었다. 이때 realdom은 전체 리스트를 다시 Reload해야 한다. 이것은 매우 super expensive한 작업임! 하지만 virtual dom은 그 바뀐 한가지 아이템만 Dom에서 바꿔준다.



1. Jsx를 렌더링 한다. 그러면 virtual dom이 update된다. 

2. virtual dom이 이전 virtual dom에서 찍어둔 snapshot과 비교를 해서 바뀐 부분을 찾는다.

   이 과정을 diffing이라고 부름

3. 그 바뀐 부분을 real dom에서 바꿔준다. 



#### Create-React-App

원래 리액트 앱을 처음 실행하기 위해서는 webpack이나 babel같은 것을 설정하기 위해서 엄청나게 많은 시간이 걸렸다. 하지만 이제는 Create-React-App command로 바로 시작할 수 있다. 

babel : 최신 자바스크립트 문법을 지원하지 않는 브라우저들을 위해 최신 자바스크립트 문법을 구형 브라우저에서도 돌 수 있게 변환시켜줌

Webpack: 웹사이트들이 점점 커지면서, 다양한 라이브러리와 프레임워크를 사용하게 됨. 따라서 이런 것을 모아주는 역할. 많은 모듈들을 합하여서 간단하게 만들어준다고 생각하면 된다. 

```
# 현재 디렉토리 위치에 만들어줌
npx create-react-app .
```

원래는 npm install -g create-react-app이렇게 했었다. (global 디렉토리에 다운받음)

하지만 이제는 npx를 이용하여 다운받지 않고 사용이 가능하다.

npm VS npx

npm : 저장소와 같은 역할을 한다. 라이브러리를 담는 역할을 한다 / 빌드를 할때도 사용한다. 

npx이 npm registry에서 create-react-app을 찾아서 (look up) 다운로드 없이 실행시켜준다. 

- disk space를 낭비하지 않을 수 있다.
- 항상 최신 버전을 사용할 수 있다. 





#### Create-React-App 구조 

public 파일 안은 webpack이 관리를 안해준다. 따라서  페이지에 이미지를 넣고 싶다면 src에 넣어야함





#### CRA to Our Boilerplate

_actions -> redux를 위한 폴더들

_reducer -> redux를 위한 폴더들



components/views -> 이 안에는 페이지들을 넣는다. 

components/views/Sections -> 이 안에는 해당 페이지에 관련된 css파일, component를 넣는다. 



App.js -> routing 관련 일을 처리한다.

Config.js -> 환경 변수같은 것을 정한다.

hoc -> Higher order component의 약자

utils -> 여러군데에서 쓰일 수 있는 것들을 넣어서 어디서든 쓸 수 있게 해줌



##### Auth(HOC)

해당 유저가 해당 페이지에 들어갈 자격이 되는지를 알아낸 후에 w 자격이 된다면  admin component에 가게 해주고 아니라면 다른 페이지로 보내버린다. 

ADMIN COMPONENT-> admin유저만 들어올 수 있는 곳

LOGGED IN COMPONENT -> 로그인 된 유저만 들어올 수 있는 곳

등등 여러 컴포넌트를 넣을 수 있다. 

 auth를 넣은 하나의 예일 뿐이다. 



#### React Router Dom



#### Flow & Axios

request를 할때 지금까지 client 부분이 없었기 때문에 postman을 이용함

하지만 이제는 react js부분에서 request를 보내면 되는데 그때 사용할 게 axios이다.

jquery를 사용할때 ajax와 같은 것이라고 보면 된다. 

서버는 :5000 / 클라이언트는 :3000



#### CORS 이슈, Proxy 설정

##### server 

localhost:5000

##### client

localhost:3000

이렇게 두 개의 다른 포트를 가지고 있는 서버는 아무 설정없이 request를 보낼 수 없다. 

why? cors정책 때문에 cross-orgin resource sharing 보안을 위해서

우리는 proxy를 사용할 것이다. 



#### Proxy Server 

111.111.111.111

유저 -> proxy server -> 인터넷

1. 아이피를 proxy server 에서 임의로 바꿔 버릴 수 있다.  그래서 인터넷에서는 접근하는 사람의 IP를 모르게 된다. 
2. 보내는 데이터도 임의로 바꿀 수 있다. 



- 방화벽 기능
- 웹필터 기능
- 캐쉬데이터 , 공유 데이터 제공 기능

##### proxy server 사용하는 이유는?

1. 회사에서 직원들이나 집안에서 아이들 인터넷 사용 제어

2. 캐쉬를 이요해 더 빠른 인터넷 이용 제공

3. 더 나은 보안 제공

4. 이용 제한된 사이트 접근 가능

   

#### Concurrently

프론트, 백 서버 한번에 켜기

 

#### CSS Framwork

1. Material UI
2. React Bootstrap
3. Semantic UI
4. Ant Design -> 사용하기가 굉장히 쉽다, 
5. Materailze



#### Redux

redux is a predictable state container for javascript apps. 상태 관리 라이브러리

what is state? 



##### props

1. shorthand for properties 컴포넌트의 소통 방식

2. props are how components talk to each other.

3. props flow downwards from the parent component 위에서 아래로, 즉 부모에서 자식 컴포넌트로만 보낼 수 있다.

4. props are immutable from the child perspective if you want to change that value ? the parent should just change its internal state

   변하지 않음. 바뀔 수 없음. 바뀔려면 부모 컴포넌트에서 값을 변경시켜줘야 함. 

##### state

1. parent component에서 child component로 data를 보내는 게 아닌 그 component안에서 데이터를 전달하려면? state으로, 예를 들어서 검색 창에 글을 입력할 때 글이 변하는 것은 state를 바꾸는 것이다. 

   그냥 컴포넌트 안에서 값을 변경하거나, 데이터 교환 및 전달할 때 사용하는 것이다. 그냥 안에서도 state를 충분히 변하게 할 수 있다. <img width="761" alt="Screen Shot 2020-08-04 at 6 41 48 PM" src="https://user-images.githubusercontent.com/33794732/89279321-31ee1300-d682-11ea-9f8d-1b4e08278b97.png">
   
 


2. state is mutable

3. state이 변하면 rerender이 된다. 



리덕스는 이러한 스테이트를 관리해주는 틀이다!

 

##### Rudex 데이터 Flow(strict unidireactional data flow 한방향으로 흐른다. 계속 반복)

Action -> Reducer -> Store --- subscribe --->React Component --- dispatch(action)----> Action



##### Action

 a plain object describing what happened. 상태를 알려준다. 

객체에 대한 형식이여야 한다. 

##### reducer

a function describing how the application's state changes

원래 3이였던 state를 이 액션 후에 1로 변했다. 이를 설명해주는 것이다. next state을 return한다. 

이전의 state 와 action object를 받은 후에 next state를 return한다.

##### Store

state을 감싸주는 역할을 한다. 이 안에는 많은 메소드들이 있다. 이 메소드를 통해 state를 관리할 수 있다. 



#### Redux UP 

npm install redux react-redux redux-promise redux-thunk --save

##### redux-promise : promise가 왔을 때 대처하는 것을 알려주고

##### redux-thunk: 디스패치한테 어떻게 기능을 바꾸는 것을 알려주고 

미들웨어? 리덕스를 잘 사용할 수 있도록 도와주는 역할을 한다. 

promise, function, 형식으로도 올 수 있다. 그럼 리덕스 스토어를 받지 못한다. 따라서 

<img width="759" alt="Screen Shot 2020-08-04 at 6 44 20 PM" src="https://user-images.githubusercontent.com/33794732/89279628-927d5000-d682-11ea-98df-5c2c9949093c.png">
<img width="718" alt="Screen Shot 2020-08-04 at 6 44 29 PM" src="https://user-images.githubusercontent.com/33794732/89279612-8c876f00-d682-11ea-9314-9ec84a646cf3.png">

리듀서 안에 리듀서들이 여러개 있을 수 있다. 리듀서 안에서 하는 일: 어떻게 스테이트가 변하는 것을 보여주고, 그 마지막 변화된 값을 리턴해주는 것이다. 

root Reducer로 한번에 여러 리듀서들을 합쳐준 것이다. 



####  React Hooks

<img width="718" alt="Screen Shot 2020-08-04 at 6 44 29 PM" src="https://user-images.githubusercontent.com/33794732/89279612-8c876f00-d682-11ea-9314-9ec84a646cf3.png">

 class component는에서는 더 많은 기능을 사용할 수 있다. 근데 더 느려질 수 있음. 코드 긺

functional component는 한정적인 기능. 코드 짧음 -> 마운팅 뭐시기 다 못씀,,ㅜ근데 리액트에서 Hooks을 발표함, 그 이후로 lifecycle에서 사용할 수 있는 기능들을 사용할 수 있도록 하였음!



componentDidMout를 useeffect로 보면 된다.

this.state를 useState로 보면 된다.!!



#### Login Page

원래 boiler plate는 로그인과 회원가입부분 formik & Yup이란 라이브러리 통해서 더 다이나믹하게 만들었음..



#### 인증 체크 (1)

Auth

해당 유저가 해당 페이지에 들어갈 자격이 되는지를 알아 낸 후 w자격이 된다면 admin component에 가게 해주고 아니라면 다른 페이지로 보내버린다. 

HOC



####  The MovieDB API

~~44d6ac37f7a8f90a1dd42aff49669131~~

