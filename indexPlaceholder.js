const title = document.getElementById('title'),
  greetingText = document.getElementById('greeting__text');

const placeholders = {
  en: {
    title: 'Gunil Na',
    heading: `Hi, I'm Gunil Na`,
  },
  ko: {
    title: "나건일's Portfolio",
    heading: `안녕하세요 나건일 입니다`,
  },
};

// 브라우저 설정이 한국어일 경우 html lang 'ko'로 변경
if (navigator.language === 'ko-KR') {
  document.documentElement.lang = navigator.language.slice(0, 2);
  greetingText.classList.add('ko');
  title.innerText = placeholders.ko.title;
  greetingText.innerText = placeholders.ko.heading;
}
