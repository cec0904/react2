# 11월 13일

## Context API 개요

1. Context는 UX구축에 많이 사용되는 React의 기능입니다.

2. React는 16.3 버전부터 정식적으로 context.api를 지원하고 있습니다.

3. 일반적으로 props는 부모에서 자식으로 전달되는 단방향 통신을 합니다.

4. Context API는 특정 component가 props를 사용하지 않고, 하위 component를 포함한 모든 component에 데이터를 공유할 수 있는 기능을 제공합니다.

5. 즉 '전역'으로 데이터를 사용할 수 있도록 해줍니다.

6. 예를 들어 사용자의 로그인 상태나, 쇼핑카트의 물품 수량 등을 표시할 때 사용됩니다.

7. Context API는 createContext, Provider, useContext 개념만 알면 적용이 가능합니다.

8. 간혹 Consumer를 useContext 대신 사용하는 경우가 있지만, function형 component에서는 많이 사용하지 않습니다.

9. 두가지의 차이

|특징|Consumer|useContext|
|------|---|---|
|사용|클래스형, 함수형 컴포넌트 모두 사용 가능|함수형 컴포넌트에서 주로 사용|
|문법|JSX내에서 명시적으로 작성|H???으로 간결하게 사용|
|장점|클래스형 컴포넌트와의 호환성|간결하고 직관적인 코드 작성, 함수형 컴포넌트와의 자연스로운 통합|
|단점|JSX내에 추가적인 요소가 필요, 코드가 다소 복잡해 보일 수 있음|클래스형 컴포넌트에서는 사용할 수 없음|

```
사용 Consumer - 클래스형, 함수형 컴포넌트 모두 사용 가능 useContext - 함수형 컴포넌트에서 주로 사용
문법 Consumer - JSX내에서 명시적으로 작성 useContext - H???으로 간결하게 사용
장점 Consumer - 클래스형 컴포넌트와의 호환성 useContext - 간결하고 직관적인 코드 작성, 함수형 컴포넌트와의 자연스로운 통합
단점 Consumer - JSX내에 추가적인 요소가 필요, 코드가 다소 복잡해 보일 수 있음 useContext - 클래스형 컴포넌트에서는 사용할 수 없음
```

# 10월 30일

## 

1. 클래스들은 컴포넌트 스코프를 가집니다.

2. 생성된 HTML 페이지 소스를 보면 class이름이 바뀌어 있는 것을 확인할 수 있습니다.

3. Styled JSX때와 마찬가지로 이런 고유한 이름 때문에 다른 파일이라면 같은 class명을 사용해도 충돌이 일어나지 않습니다.

4. 만일 전역 CSS를 선언하고 싶다면 styles/globals.css 를 만들고 사용합니다.

5. 파일명은 반드시 globals가 아니어도 되지만 암묵적 합의는 가능하면 지키는 것이 좋습니다.

```
html,
body {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
}
```

6. 이제 _app.js에 import 해주면 모든 컴포넌트에 적용됩니다.

7. 또 한가지 방법은 class로 선언된 요소에 :global 키워드를 추가해 줍니다. .button :global()

## SASS

1. Next에서 기본으로 지원하는 건 처리기 입니다.

2. 단, 패키지 설치가 필요합니다. $ npm install sass

3. SASS 및 SCSS(Sassy CSS) 문법으로 CSS Module을 만들고 사용할 수 있습니다.



# 10월 25일

## 클라이언트에서 REST API 사용하기

1. getServerSideProps 나 getStaticProps 함수 내에서 REST API를 호출하면 서버가 데이터를 가져오지만,

2. 그 외의 컴포넌트 내에서 데이터를 불러오는 작업은 클라이언트가 실행합니다.

3. 클라이언트는 주로 두 가지 시점에 데이터를 불러옵니다.

4. 클라이언트는 주로 두 가지 시점에 데이터를 불러옵니다.
    1) 컴포넌트가 마운트 된 후 
    2) 특정 이벤트가 발행한 후

5. Next라고 해서 React와 다른 특별한 방법을 사용해야 할 필요는 없습니다.

6. 브라우저의 내장 fetch API 혹은 Axios와 같은 외부 라이브러리를 사용해서 HTTP 요청을 보냅니다.

### 첫번째 :

1. 교차 출처 리소스 공유(CORS-Cross Origin Resource Sharing)는 브라우저에서 제공하는 보안 기능으로, 서로 다른 도메인에 API 요청을 보낼 때 발생할 수 있는 여러가지 보안 위험을 제어합니다. => 서버에서 데이터를 불러오는 경우 이런 문제는 발생하지 않습니다.

2. 지금은 로컬에서 실행되기 때문에 CORS문제가 발생하지 않는 것입니다.

3. 원격 서버에서 데이터를 가져오는 경우 CORS 문제가 쉽게 발생합니다.

### 두번째 :

1. 클라이언트에 인증 토큰을 노출한다는 점입니다.

2. Network 탭을 보면 특정 엔드포인트로 보낸 HTTP 요청을 볼 수 있습니다.

3. 이 요청의 헤더를 보면 평문으로된 인증 토큰값을 확인할 수 있습니다.

## REST API - 개요

#### REST(Representational State Transfer)란 자원을 이름으로 구분하여 그 자원의 상태를 통신을 통해 주고 받는 것을 의미합니다.

2. HTTP URL(Uniform Resource Identifier, 통일된 자원 식별자)를 이용해서 자원(Resources)을 명시합니다.

3. HTTP Method(POST, GET, PUT, DELETE, PATCH 등)를 통해 자원에 CRUD를 적용합니다.

#### CRUD란 데이터 처리의 기본적인 기능을 나타냅니다.

1. Create : 데이터 생성(POST)

2. Read : 데이터 조회(GET)

3. Update : 데이터 수정(PUT, PATCH)

4. Delete : 데이터 삭제(DELETE)

#### RESPT API란 REST의 규칙을 적용한 API를 의미합니다.

## Axios 란?

1. Next.js에서 REST API를 다룰 때는 보통 axios와 fatch중 하나를 선택하는 경우가 많습니다.

2. 아래는 두 가지 방법의 특징과 장단점을 비교한 내용입니다.

#### [Axios]

- 간편한 문법 : 기본적으로 JSON 데이터를 자동으로 변환해주므로, res.data로 쉽게 접근할 수 있습니다.

- HTTP 요청 취소 : 요청을 취소할 수 있는 기능이 내장되어 있습니다.

- 요청 및 응답 인터셉터 : 요청이나 응답을 가로채어 수정할 수 있는 기능이 있어, 인증 토큰 추가와 같은 작업이 간편합니다.

- 진보된 오류 처리 : HTTP 오류 코드에 따라 에러를 더 쉽게 처리할 수 있습니다.

- 단접은 추가 패키지를 설치해야 하며, 코드 크기가 약간 증가한다는 것입니다. 그러나 크게 차이 나지는 않습니다.

##### 결론은 복잡한 요청이나 에러 처리가 필요한 경우에는 axios가 더 적합할 수 있습니다.

##### 간단한 요청이나 내장된 기능을 활용하고 싶다면 fetch를 사용하는 것도 좋은 선택입니다.

#### 어떤것을 선택할 지는 프로젝트의 요구 사항과 개발자의 선호도에 따라 다를 수 있습니다.

# 10월 23일

## Image Component

1. 정적 자원은 기본적으로 public 디렉토리에 저장합니다.

2. 정적 자원은 변둘림 이후에도 변하지 않기 때문입니다.

3. 여러 종류의 정적 자원을 사용할 경우 public의 root에 각각 디렉토리를 만들어 사용합니다.

4. Image도 마찬가지로 /public/images 디렉토리를 만들고 사용합니다.

5. 이미지를 불러오는 방법은 직접 불러오는 방법과 import 하는 방법 2가지가 있습니다.

6. 이미지의 경로 /images/(이미지 저장)

## 디렉토리 구조 구성

1. Next.js에서는 특정 파일과 디렉토리가 지정된 위치에 있어야 합니다.
_app.js나 _document.js 파일, pages/와 public/

2. Node_modules/ : Next.js 프로젝트의 의존성 패키지를 설치하는 디렉토리

3. pages/: 애플리케이션의 페이지 파일을 저장하고 라우팅 시스템 관리

4. public/: 컴파일된 CSS 및 자바스크립트 파일, 이미지, 아이콘 등의 정적 자원 관리

5. styles/: 스타일링 포맷(CSS, SASS, LESS 등)과 관계없이 스타일링 모듈 관리

6. pages/ 디렉토리를 src/ 디렉토리 안으로 옮길 수 있습니다.

7. public/과 node_modules/를 제외한 다른 디렉토리는 모두 src/로 옮길 수 있습니다


## 컴포넌트 구성

1. 컴포넌트는 세 가지로 분류하고 각 컴포넌트와 관련된 스타일 및 테스트 파일을 같은 곳에 두어야 합니다.

2. 코드를 더 효율적으로 구성하기 위해 아토믹 디자인 원칙에 따라 디렉토리를 구성합니다.

3. atoms : 가장 기본적인 컴포넌트 관리 예) button, input, p와 같은 HTML요소를 감싸는 용도로 사용되는 컴포넌트

4. molecules : atom에 속한 컴포넌트 여러개를 조합하여 복잡한 구조로 만든 컴포넌트 관리. 예) input과 label을 합쳐서 만든 새로운 컴포넌트

5. organisms : molecules와 atoms를 섞어서 더 복잡하게 만든 컴포넌트 관리. 예)footer나 carousel 컴포넌트

6. templates : 위의 모든 컴포넌트를 어떻게 배치할지 결정해서 사용자가 접근할 수 있는 페이지


# 10월 4일

## Page Project Layout - _document

1. _app.jsx 는 서버에 요청할 때 가장 먼저 실행되는 컴포넌트입니다.

2. 페이지에 적용할 공통 레이아웃을 선언하는 곳입니다.

```
import "@/styles/glovals.css";

export default function App((Component, pageProps)){
    return <Component (_pageProps)/>;
}
```
3. Global CSS는 이곳에 추가됩니다.

4. props 중 Component는 서버에 요청한 페이지입니다.

5. pageProps는 App.getInitialProps를 이용하여 prefetching된 데이터를 반환합니다.

6. 데이터가 없다면 빈 객체(())를 반환합니다.

7. 단, getStaticProps

## 수정된 예

```
import {Html, Head, Main, NextScript} from 'next/document'

export default function Document(){
    return {
        <Html lang="ko">
        <Head>
        {/*사용자 정의 메타 태그*/}
        <meta name="description" content="커스텀 설명입니다."/>

        {/*외부 스크립트 추가*/}
        <script src="_"></script>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
        </Html>
    }
}
```

## App Project Layout - layout.jsx

1. layout.jsx는 app 디렉토리 아래에 위치합니다.

2. layout.jsx는 Page Project에서 사용하던 _app.jsx와 _document.jsx를 대체합니다.

3. 이 파일은 삭제해도 프로젝트를 실행하면 자동으로 다시 생겨납니다.

4. 프로젝트를 생성할 때 생성된 기본 코드는 다음과 같습니다.

```
export const metadata = {
    title: 'Next.js'
    desxription: 'Generated by Next.js';
}

export default function RootLayout((children)){
    return(
        <html lang='en'>
        <body>(children)</body>
        </html>
    )
}
```

## Link vs a vs router.push

1. Link component를 이용해서 Navibar component를 만들어봅니다.

2. <a> tag는 html 동기식으로 전체가 reload 되기 때문에, 외부 링크를 할 때 사용합니다.

3. 일반적으로 내부 링크 이동시에는 사용하지 않는 것이 좋습니다.

4. router.push는 빌드 후, 이동 할 주소가 html 상에 노출되지 않기 때문에 SEO에 취약합니다.

5. Link 컴포넌트는 빌드 후, a tag로 자동 변환됩니다.

6. a tag의 장점인 SEO 최적화, prefetch 가능, 우 클릭 기능 등을 갖습니다.

7. 내부 페이지로의 이동할 때 이 방식을 사용해야 SPA 방식으로 전체 html중 필요한 부분만 비동기식으로 리렌더링 된다.

따라서 특별한 경우가 아니면 Link 컴포넌트 사용을 권장합니다.

## 정적 자원 제공

1. 정적 자원은 이미지, 폰트, 아이콘, 컴파일한 css, js 등으로 /public 디렉토리 안에 저장합니다.

2. 정적 자원 중 이미지 파일은 SEO에 많은 영향을 미칩니다.

3. 불러오는데 많은 시간이 걸리고, 불러온 후에도 이미지 주변의 레이아웃이 변경되는 등 UX 관점에서 좋지 않은 영향을 줍니다.

4. 이를 누적 레이아웃 이동 (CLS: Cumulative Layout Shift)이라고 합니다.

5. 사용자가 2번째 문단을 읽고 있었다면, 위치가 바뀌어서 읽던 곳을 놓칠 수 있습니다.

6. Image 컴포넌트를 사용해서 이와 같은 CLS문제를 해결합니다.

## 자동 이미지 최적화

1. Next.js 10 부터 Image 컴포넌트를 사용해서 이미지를 자동으로 최적화 할 수 있습니다.

2. 이 기능을 사용하면 이미지를 WebP와 같은 최신 이미지 포맷으로 제공할 수 있습니다.

3. 최신 포맷을 지원하지 않는 브라우저의 경우에는 png나 ipge와 같은 예전 이미지 포맷도 제공합니다.

4. 필요한 경우 이미지 크기를 조정할 수도 있습니다.

5. 특히 클라이언트가 이미지를 요구할 때 최적화 작업을 한다는 장점이 있습니다.

6. 따라서 Unplash나 Pexel과 같은 외부 이미지 서비스로 이미지를 제공할 수 있습니다.

7. 먼저 next.config.js의 images 속성에 다음과 같이 서비스 호스팅명을 추가합니다.

8. 이렇게 설정해 두면 해당 도메인에서 가져오는 이미지는 자동으로 최적화 됩니다.






# 9월 25일

## Next.js 기초와 내장 컴포넌트

```
1. 클라이언트와 서버에서의 라우팅 시스템 작동 방식

2. 페이지 간 이동 최적화

3. Next.js가 정적 자원을 제공하는 방법

4. 자동 이미지 최적화와 새로운 Image 컵포넌트를 사용한 이미지 제공 최적화 기법

5. 컴포넌트에서 HTML 메타데이터를 처리하는 방법

6. _app.js와 _documents.js 파일 내용 및 커스터마이징 방법
```
## 라우팅 시스템

- React의 React Router, Reach Router 등은 클라이언트 라우팅만 구현할 수 있습니다.

- Next는 파일시스템 기반 페이지와 라우팅을 합니다.

- 페이지는 /pages 디렉토리 안의 *.js, *.jsx, *.ts, *.tsx 파일에서 export한 React 컴포넌트입니다.

```
function Homepage(){
    return <div> This is the homepage </div>;
}

export default Homepage;
```

- /pages/posts/ 디렉토리 내에 Index.js만 간단하게 만들면 localhost:3000/posts로 접속이 가능합니다.

- 다만 동적인 라우팅 규칙을 만들려면 [slug].js 파일이 필요합니다.

- [slug].js는 매개 변수로 사용되며 주소창에서 입력하는 값을 모두 받을 수 있습니다.

- 동적 라우팅 규칙을 중첩할 수도 있습니다.

- 접근 경로를  ~/posts/[date]/[slug]와 같이 만들 수 있습니다.

- [date] 디렉토리를 만들고 그 안에 [slug].js 파일을 저장하면 됩니다.

- [date]나 [slug]는 어떤 값이든 가질 수 있습니다.

- 실제 앱에서는 경로 매개변수에 따라 서로 다른 동적 페이지를 렌더링하게 됩니다.

## 페이지에서 경로 매개변수 사용하기

- 경로 매개변수를 사용해서 동적 페이지를 쉽게 만들 수 있습니다.

- page/greet/[name].js 파일을 만들어 보겠습니다.

- 내장 getServerSideProps 함수를 통해 URL에서 동적으로 [name] 변수 값을 가져오는 것입니다.

- greet/Mitch 주소로 가면 "Hello, Mitch!" 라는 문구가 렌더링 됩니다.

```
export async function getServerSideProps({parans}){
    const {name} = parans;
    return{
        props: {
            name,
        },
    };
}

function Greet(props) {
    return(
        <h1> Hello, {props.name} </h1>
    );
}

export default Greet;
```
## 컴포넌트에서 경로 매개변수 사용하기

### pages 밖에서는 getServerSideProps나 getStaticProps 함수를 사용하지 못하는데, 어떻게 경로 매개변수를 컴포넌트 안에서 사용할 수 있을까요?

1. useRouter Hook 을 이용하면 컴포넌트 안에서 경로 매개변수를 사용할 수 있습니다.

2. useRouter는 next/router에서 가져올 수 있습니다.

3. useRouter Hook을 사용해서 query 매개변수를 가져옵니다.

4. 콘솔에 로그를 출력하면 매개변수와 쿼리 문자열들을 어떻게 전달하는지 알 수 있습니다.

5. greet/Mitch?foo=true 로 접속하여 log를 확인해 봅니다.

```
import {useRouter} from "next/router";

function Greet(){
    const {query} = useRouter()
    console.log(query)
    return <h1>Hello {query.name}</h1>
}
export default Greet;
```






# 9월 4일


