const toggleLangBtn = document.getElementById('toggle-lang'),
  title = document.getElementById('title'),
  greetingText = document.getElementById('greeting__text'),
  previewText = document.getElementById('preview-text'),
  aboutMeText = document.getElementById('aboutMeText');

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
  },
  ko: {
    title: { text: "나건일's Portfolio", domEl: title },
    greetingText: { text: `안녕하세요 나건일 입니다`, domEl: greetingText },
    previewText: {
      text: '항상 성장하는\n웹 프론트엔드 개발자입니다.',
      domEl: previewText,
    },
    aboutMeText: {
      text: `저는 가천대학교 전자공학과를 졸업했습니다.\n
        같이 일하고 싶은 똑똑한 개발자가 되기 위하여 배우고 노력하고 있습니다.\n`,
      domEl: aboutMeText,
    },
  },
};

const changeLanguage = () => {
  if (document.documentElement.lang === 'ko') {
    for (let item in placeholders.ko) {
      placeholders.ko[item].domEl.classList.toggle('ko');
      placeholders.ko[item].domEl.innerText = placeholders.ko[item].text;
    }
    renderedToKor = true;
  } else {
    if (renderedToKor) {
      for (let item in placeholders.en) {
        placeholders.en[item].domEl.classList.toggle('ko');
        placeholders.en[item].domEl.innerText = placeholders.en[item].text;
      }
      renderedToKor = false;
    }
  }
};

// 브라우저 설정이 한국어일 경우 html lang 'ko'로 변경
if (navigator.language === 'ko-KR') {
  document.documentElement.lang = navigator.language.slice(0, 2);
  changeLanguage();
}

toggleLangBtn.addEventListener('click', () => {
  toggleLangBtn.classList.toggle('ko');
  if (document.documentElement.lang === 'ko') {
    document.documentElement.lang = 'en';
    toggleLangBtn.innerText = '한국어로';
  } else {
    document.documentElement.lang = 'ko';
    toggleLangBtn.innerText = 'ENG';
  }
  changeLanguage();
});
