# 핵심 기능

- 강의자료 기반 문제 및 풀이 생성 → 플래시카드
    - 애매하게 푼 문제들 다시 풀 수 있게  (문제 풀 때) 체크할 수 있도록
- 요약 → 블로그 형식처럼 (영어)!
    - 사용자가  Ai가 정리한 내용 수정 가능하도록
- 성취도 → 푼 문제들 기반으로

- 논문 → 피피티로 요약
- 논문 → 퀴즈
- 논문 → 카테고리 별로 조회수 순으로 정렬해서 이 카테고리의 TOP논문/ 최신 논문 보여주기

<iframe width="600" height="336" src="https://www.erdcloud.com/p/w6aEvHCSrxpg5ppDp" frameborder="0" allowfullscreen></iframe>

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/dfa28d76-5333-40b3-9780-fbbeab3c8ca0/683f4971-3e85-471c-882e-cfc12d14d9d4/Untitled.png)

## User Interface

1. 로그인
- 이메일/ 비밀번호

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/dfa28d76-5333-40b3-9780-fbbeab3c8ca0/72903e88-873b-4ffe-a9f2-50474346effe/Untitled.png)

1. 과목별로 catergorize
- 원하는 과목 추가하는 형식

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/dfa28d76-5333-40b3-9780-fbbeab3c8ca0/ec180eb9-3bb2-4ef1-9472-61b35008d322/Untitled.png)

1. 챕터 categorize
- 원하는 과목에 들어가면 add버튼을 통해 요약본의 제목 설정 및 pdf를 등록
- 추가 화면은 modal로 뜨도록 구현

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/dfa28d76-5333-40b3-9780-fbbeab3c8ca0/96b63001-410c-490c-81d4-020dd3a74b49/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/dfa28d76-5333-40b3-9780-fbbeab3c8ca0/195cde9a-0e9f-4d88-b85f-fd50dac5a22d/Untitled.png)

1. 요약
- 해당 챕터를 클릭하면 해당 내용 요약이 정리되어 있음
- 문제에서 틀린 부분 관련 내용을 빨간 테두리로 표시

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/dfa28d76-5333-40b3-9780-fbbeab3c8ca0/c6caf2be-5b93-4aea-b9ea-1d9d8f8a5ceb/Untitled.png)

1. 퀴즈
- 요약 페이지의 quiz 버튼을 누르면 해당 챕터 퀴즈가 나옴
- 퀴즈는 페이지당 한문제씩
- 퀴즈를 다 풀면 정답률이 (막대 게이지 형태로) 업데이트됨

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/dfa28d76-5333-40b3-9780-fbbeab3c8ca0/84794241-bcff-499d-a443-15a1999f2049/Untitled.png)

1. 데일리 퀴즈
- 원하는 과목에 들어가면 daily quiz 버튼이 존재
- 버튼을 누르면 챕터와는 상관없이 해당 과목에 한정해 문제가 랜덤하게 5개씩 나옴
- 문제는 퀴즈와 같은 형식으로 페이지당 한개씩에 막대 게이지로 표현

## 추가 기능

- hyperlink
- wordcloud
- Image출력
