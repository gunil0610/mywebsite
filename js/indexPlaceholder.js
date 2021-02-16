const toggleLangBtn = document.getElementById('toggle-lang'),
  title = document.getElementById('title'),
  greetingText = document.getElementById('greeting__text'),
  previewText = document.getElementById('preview-text'),
  aboutMeText = document.getElementById('aboutMeText'),
  skillsText = document.getElementById('skillsText'),
  postLink = document.getElementById('postLink');

let renderedToKor = false;

const placeholders = {
  en: {
    title: { text: 'Gunil Na', domEl: title },
    greetingText: { text: `Hi, I'm Gunil Na`, domEl: greetingText },
    previewText: {
      text: "I'm searching for a job as a web frontend developer.",
      domEl: previewText,
    },
    aboutMeText: {
      text: `I'm self-taught frontend developer.\n
        I'm fast learner, who love to learn more things and will grow fast with the experience.`,
      domEl: aboutMeText,
    },
    skillsText: {
      text: `Frontend developer aiming to be a fullstack developer in the future:`,
      domEl: skillsText,
    },
    postLink: {
      text: `Check More →`,
      domEl: postLink,
    },
  },
  ko: {
    title: { text: "나건일's Portfolio", domEl: title },
    greetingText: { text: `안녕하세요 나건일 입니다`, domEl: greetingText },
    previewText: {
      text: '항상 성장하는\n웹 프론트엔드 개발자입니다.',
      domEl: previewText,
    },
    aboutMeText: {
      text: `같이 일하고 싶은 똑똑한 개발자가 되기 위하여 배우고 노력하고 있습니다.\n
      새로운 기술을 배우는 것을 좋아하고 문제를 해결하는 것을 좋아합니다.\n`,
      domEl: aboutMeText,
    },
    skillsText: {
      text: `프론트엔드 개발자로서 필요한 기술들과 약간의 백엔드 지식을 알고 있습니다. 항상 최신 기술 트렌드를 알기위해 노력합니다 :`,
      domEl: skillsText,
    },
    postLink: {
      text: `더 보기 →`,
      domEl: postLink,
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
