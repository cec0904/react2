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

# pages 밖에서는 getServerSideProps나 getStaticProps 함수를 사용하지 못하는데, 어떻게 경로 매개변수를 컴포넌트 안에서 사용할 수 있을까요?

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


