const toggleLangBtn = document.getElementById('post-toggle-lang'),
  NwText = document.getElementById('nwitter-description'),
  NatText = document.getElementById('natour-description'),
  CrwnText = document.getElementById('crwn-description'),
  postLink = document.getElementById('postLink');

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
