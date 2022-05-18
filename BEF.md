# 🎬 BEfore Film. BEF(베프) Project 💻



> BEF는 개인의 선호 장르에 따라 영화를 추천합니다.
>
> 또한, 여러 소셜 기능을 제공하여 유저에게 재미요소를 더하는 커뮤니티 서비스이기도 합니다.



### 🗓 프로젝트 기간

> __2022. 05. 20. (금) ~ 2022. 05. 26. (목)__



### 🤼 Contributors

---

- 안선혁

- 김지수



### 📚 Stack

---

- __Programming Language__: Python 3.9.9, JavaScript
- __Back-end__ : Django 3.2+
- __Front-end__ : Vue 2



### 🧱 Structure

---

![스크린샷 2022-05-17 오후 9.52.24](BEF.assets/스크린샷 2022-05-17 오후 9.52.24.jpeg)

- 화면이동 구조는 다음과 같다.

![스크린샷 2022-05-18 오후 12.51.31](BEF.assets/스크린샷 2022-05-18 오후 12.51.31.png)

- 전반적인 View 이동 구조와 View 내부 컴포넌트 사용 여부는 다음과 같이 될 예정이다.



### 📊 Modeling

---

![스크린샷 2022-05-18 오전 12.50.16](BEF.assets/스크린샷 2022-05-18 오전 12.50.16.png)

- 크게 세 부분으로 나눈다면 User, Movie, Community로 나눌 수 있다.
- 그 외에는 모두 종속적으로 존재하는 부가적인 필드이다.



#### 사용 데이터

- __TMDB 상의 popularity순으로 1만개의 영화 정보__를 사용했고, 사용자가 검색했을 때, DB에 없는 영화라면 DB에 계속 추가되도록 했다.



### 📂 Components

___

화면 구성







### 🛣 URL

---

![스크린샷 2022-05-18 오후 12.00.16](BEF.assets/스크린샷 2022-05-18 오후 12.00.16.png)

- 초기 URL은 다음과 같이 설계했다.



## 🛠 개발일지

##### 추천 알고리즘

>  현실적으로, 딥러닝 등을 배우지 않은 상태에서 추천 영화가 매번 바뀌게 하는 방법은 무작위 말고 크게 떠오르는게 없었다. 또한, 데이터에 성별, 나이별 영화 선호도에 대한 정보가 없다. 단순 무작위 방식이 크게 맘에 들지는 않아서, TMDB에서 제공하는 데이터 중 popularity(이하 인기도)와 average_vote(이하 평점)를 이용하는 방법과 사용자가 선호하는 장르 기반의 선택을 활용하고자 했다.



- 여기서 첫 번째 문제는 인기도와 평점의 점수 분포인데, 인기도는 0 ~ 4000의 분포를 가지고 있었고, 평점은 0 ~ 10의 분포를 가지고 있었다(또한, 정규분포도 아니다). 그래서 다음과 같은 방법을 생각했다.



- 각 값들의 분포를 표준화 시키는 특정 인자  ![f](https://wikimedia.org/api/rest_v1/media/math/render/svg/132e57acb643253e7810ee9702d9581f159a1c61)를 구하고, 두 분포를 모두 정규분포(와 유사한) 형태로 변형한 뒤, 각 값들을 표준화 시켜 표준화된 __평점과 인기도의 합을 기준__으로, __사용자가 선호하는 장르와 매칭__하고자 했다. 
  - 해당 인자를 요청시마다 정확하게 구하는게 정확성측면에서 크게 유의미 하다고 생각되지 않아 근삿값을 구하고 그 값을 계속 활용하기로 했다
  - 다만 몇몇 이상치를 제외하기 위해 인기도 기준 원래 값이 2 이하인 영화는 제외했다(인기도가 너무 낮은 영화의 평점 투표수가 너무 적어, 평균 평점이 10으로 있는 경우가 다수 있었다).



- 1회 요청시 반환하는 추천 영화 객체는 20개로 정했다. 
  - 선호 장르가 없을 시에는 전체 영화 중 기준에 맞춰 제공한다.
  - 선호 장르가 있다해도, 선호 장르'만' 추천하는건 정보를 너무 편향적으로 제공하게 된다고 생각해, 중간중간 선호장르가 아니더라도 인기가 있는 영화들을 추천하는 방향으로 정했다.
  - 이미 본 영화, 좋아요 혹은 싫어요 표현을 한 영화에 대해서는 추천하지 않도록 한다.
  - 각 유저 인스턴스들은 모두 하나의 덱을 가지고 있는데, 최근에 추천된 영화들을 이 덱에 삽입하여, 추가로 데이터를 요청했을 때, 이 덱에 있는 영화들은 추천하지 않는다. 덱의 최대 길이는 200으로 제한하며, 더 넘게 추천시 덱에서 앞에 있는 영화를 pop하고 새로 추천한 영화를 뒤에서 push한다.








