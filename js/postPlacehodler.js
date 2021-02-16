const toggleLangBtn = document.getElementById('post-toggle-lang'),
  NwText = document.getElementById('nwitter-desc'),
  NatText = document.getElementById('natour-desc'),
  CrwnText = document.getElementById('crwn-desc'),
  TrilloText = document.getElementById('trillo-desc'),
  MmtText = document.getElementById('momentum-desc'),
  ReactMovieText = document.getElementById('react-movie-desc'),
  BreakOutText = document.getElementById('breakout-desc'),
  VPText = document.getElementById('vp-desc'),
  FVText = document.getElementById('fv-desc'),
  ExRText = document.getElementById('exr-desc'),
  LSText = document.getElementById('ls-desc'),
  MealFndrText = document.getElementById('meal-fndr-desc'),
  InfScrlText = document.getElementById('inf-scrl-desc'),
  HMText = document.getElementById('hm-desc'),
  TRText = document.getElementById('tr-desc');

let renderedToKor = false;

const placeholders = {
  en: {
    NwText: {
      text:
        'Mini Twitter clone using React and Firebase. Login functionality, OAuth using Google&Github, Realtime update on posting. Saving Posts and Pictures on Firebase db',
      domEl: NwText,
    },
    NatText: {
      text: `Tour Landing page using CSS preprocessor SCSS.`,
      domEl: NatText,
    },
    CrwnText: {
      text: `Single Page App using React, state management with Redux and Redux-saga. Styled with styled-components. Added payment using stripe API and deployed with Heroku.`,
      domEl: CrwnText,
    },
    TrilloText: {
      text: `Frontend design of booking web app using CSS preprocessor SCSS.`,
      domEl: TrilloText,
    },
    MmtText: {
      text: `Acessing Geolocation using javascript and getting weather from API, saving to-do-list and username in localstorage. `,
      domEl: MmtText,
    },
    ReactMovieText: {
      text: `Movie App built with React`,
      domEl: ReactMovieText,
    },
    BreakOutText: {
      text: `Breakout game with html canvas api and vanilla javascript.`,
      domEl: BreakOutText,
    },
    VPText: {
      text: `Built custom video player with vanilla javascript.`,
      domEl: VPText,
    },
    FVText: {
      text: `Form validation with vanilla javascript.`,
      domEl: FVText,
    },
    ExRText: {
      text: `Exchange Rate Calculator using fetch api`,
      domEl: ExRText,
    },
    LSText: {
      text: `Lyrics Search App using Fetch api and Lyrics.ovh api. Handled pagination.`,
      domEl: LSText,
    },
    MealFndrText: {
      text: `Meal Finder app using fetch api and Meal DB api.`,
      domEl: MealFndrText,
    },
    InfScrlText: {
      text: `Infinite scroll posts like facebook, using vanilla javascript and fetch api and hacker news api.`,
      domEl: InfScrlText,
    },
    HMText: {
      text: `Simple Hangman game using vanilla javascript.`,
      domEl: HMText,
    },
    TRText: {
      text: `Speech Text Reader using Javascript and speechSynthesis.`,
      domEl: TRText,
    },
  },
  ko: {
    NwText: {
      text: `React와 Firebase를 이용한 트위터 기능 클론 코딩. 구글, 깃허브 OAuth와 로그인 기능을 Firebase를 이용해 도입했고, 글과 사진을 Firebase의 db에 저장하였습니다.`,
      domEl: NwText,
    },
    NatText: {
      text: `CSS와 HTML을 이용한 가상의 투어 랜딩페이지. SCSS를 이용하여 CSS를 작성했습니다.`,
      domEl: NatText,
    },
    CrwnText: {
      text: `React를 이용한 SPA. Redux와 Redux-saga를 이용해서 상태관리를 하였고, styled-components를 이용해서 css를 작성하였습니다. Stripe API를 이용해서 결제를 도입하고 Heroku에 배포했습니다.`,
      domEl: CrwnText,
    },
    TrilloText: {
      text: `가상의 투어 페이지를 HTML과 SCSS를 이용해 퍼블리싱을 한 웹사이트 입니다.`,
      domEl: TrilloText,
    },
    MmtText: {
      text: `사용자의 위치를 확인하고, 그 지역의 날씨 데이터를 API로부터 가져와 온도를 표시합니다. 시간을 표시하며 이름과 할일을 localstorage에 저장할 수 있습니다.`,
      domEl: MmtText,
    },
    ReactMovieText: {
      text: `리액트를 이용한 영화 정보 웹앱 입니다. API로부터 받아온 정보를 이용하여 화면에 영화 제목, 포스터, 장르와 줄거리를 표시해 줍니다.`,
      domEl: ReactMovieText,
    },
    BreakOutText: {
      text: `바닐라 자바스크립트와 Canvas API를 이용해 벽돌깨기 게임을 만들었습니다. 화살표로 발판을 움직일 수 있고, 부순 벽돌의 수를 점수로 확인할 수 있으며, 공을 놓지면 게임오버 화면이 표시됩니다.`,
      domEl: BreakOutText,
    },
    VPText: {
      text: `CSS와 바닐라 자바스크립트를 이용한 동영상 플레이어입니다.`,
      domEl: VPText,
    },
    FVText: {
      text: `바닐라 자바스크립트를 이용한 폼 검증입니다. 조건에 만족하지 않는 부분이 있으면 빨간색, 만족하는 부분은 초록색 테두리가 생겨납니다.`,
      domEl: FVText,
    },
    ExRText: {
      text: `API로부터 환율 정보를 가져오는 환율 계산기 입니다. 위쪽 통화의 숫자를 변경하면, 아랫쪽 통화로 얼마인지 확인 할 수 있습니다. Swap 버튼을 사용해 위와 아래의 통화를 바꿀 수 있습니다.`,
      domEl: ExRText,
    },
    LSText: {
      text: `Lyrics.ovh API로부터 가사를 가져오는 가사찾기 앱 입니다. 검색 결과가 15개가 넘어갈 경우 여러개의 페이지가 생기도록 페이지네이션 합니다.`,
      domEl: LSText,
    },
    MealFndrText: {
      text: `MealDB API로부터 음식 정보를 검색해서 가져와 화면에 표시합니다. 검색을 한 뒤 음식 사진을 클릭하면, 그 아래에 요리법과 재료가 표시됩니다.`,
      domEl: MealFndrText,
    },
    InfScrlText: {
      text: `페이스북처럼 무한 스크롤 기능을 바닐라 자바스크립트로 구현했습니다. 가져오는 정보는 Hacker News API를 이용해 hacker news의 글을 가져옵니다. 인기순과 최신순으로 설정 할 수 있습니다.`,
      domEl: InfScrlText,
    },
    HMText: {
      text: `바닐라 자바스크립트를 이용한 간단한 행맨 게임입니다. 틀리면 그림이 하나씩 그려지고 사람이 완성되면 게임오버 화면이 표시됩니다. 이미 입력한 글자를 다시 입력하면 알려줍니다. 틀린 알파벳을 화면에 표시해줍니다.`,
      domEl: HMText,
    },
    TRText: {
      text: `SpeechSynthesis API를 이용해 글씨를 읽어줍니다. 그림을 클릭해서 사용할 수도 있고, 직접 글을 입력할 수도 있습니다. 목소리(언어)도 변경 할 수 있습니다.`,
      domEl: TRText,
    },
  },
};

const changeLanguage = (placeholderObj) => {
  if (document.documentElement.lang === 'ko') {
    for (let item in placeholderObj.ko) {
      placeholderObj.ko[item].domEl.classList.toggle('ko');
      placeholderObj.ko[item].domEl.innerText = placeholderObj.ko[item].text;
    }
    renderedToKor = true;
  } else {
    if (renderedToKor) {
      for (let item in placeholderObj.en) {
        placeholderObj.en[item].domEl.classList.toggle('ko');
        placeholderObj.en[item].domEl.innerText = placeholderObj.en[item].text;
      }
      renderedToKor = false;
    }
  }
};

const toggleLang = () => {
  toggleLangBtn.classList.toggle('ko');
  if (document.documentElement.lang === 'ko') {
    document.documentElement.lang = 'en';
    toggleLangBtn.innerText = '한국어로';
  } else {
    document.documentElement.lang = 'ko';
    toggleLangBtn.innerText = 'ENG';
  }
  changeLanguage(placeholders);
};

// 브라우저 설정이 한국어일 경우 html lang 'ko'로 변경
if (navigator.language === 'ko-KR') {
  document.documentElement.lang = navigator.language.slice(0, 2);
  toggleLangBtn.classList.toggle('ko');
  toggleLangBtn.innerText = 'ENG';
  changeLanguage(placeholders);
}

toggleLangBtn.addEventListener('click', toggleLang);
