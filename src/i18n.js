import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      greeting: "Hi! I'm Olek, aspiring web developer",
      city: "City",
      favTool: "Fav tool",
      codingFor: "Started coding",
      years: "Years old",
      yesrsScience: "years ago",
      skills: "Skills",
      howCalculatedQuestion: "How the progress bar was calculated?",
      howCalculatedAnswer: "The progress bar is based on 10 questions test asked by ChatGPT. It should be used more as a fun fact.",
      firstSkillLabel: "Beginner",
      secondSkillLabel: "Pro",
      projects: "Projects",
      blockchainTitle: "Blockchain",
      rockPaperScissorsTitle: "Rock Paper Scissors",
      productPageTitle: "Product Page",
      newsSiteTitle: "Site with news",
      koenigseggTitle: "Koenigsegg",
      blockchainDescribe: "The project is based on a real book for kids about Blockchain. It was my first responsive project so it might not work as good as I want. Working on it I also tried out scroll-snap techniqe but too much code modification was needed so I left it with only arrows to scroll. The graphics are created by me but please remember that I'm not a graphic designer. It's my first web with dark/light mode.",
      rockPaperScissorsDescribe: "Inspirated by some YouTube tutorial I tried to build some simple web game. I have to admit it was easier than I thought so as The Big Bang Theory fan I added Lizar and Spock to the game. The scoreboard is copied from Premier Leauge 'couse I think it looks great and minimalistic. User can change its and oponent name and colors on the scoreboard.",
      productPageDescribe: "Project from FrontendMentor. Changing product images on different types of devices and still make it responsive took me some time. Also dynamic cart summary information. I add my first mobile menu.",
      newsSiteDescribe: "My project back after almost a year without coding coused by my matura exam. This project is from FrontendMentor and I used it to remind myself all the basics.",
      koenigseggDescribe: "Koenigsegg as a sports car creator needs to have an awesome website. I tried to rebuild it with all the animations. The project is not done for now",
      made: "Made",
      yearsPassed: "years ago",
      contact: "Contact",
      describeYs: "I'm glad you've found this place, but to the point. My goal is to make projects as user friendly as possible. In my carrer goals I want to master my frontend knowlage and after that develop my skills in backend or AI. Right now I started to learn React and in the near future I'm going to know some Bootstrap basic.",
      lightMode: "Light Mode",
      darkMode: "Dark Mode",
      personalInfo: "Personal information",
    },
  },
  pl: {
    translation: {
      greeting: "Hej! Tu Olek, aspirujący web developer",
      city: "Miasto",
      favTool: "Ulubione narzędzie",
      codingFor: "Zacząłem kodować",
      years: "Tyle mam lat",
      yesrsScience: "roku temu",
      skills: "Umiejętności",
      howCalculatedQuestion: "Jak obliczono pasek postępu?",
      howCalculatedAnswer: "Pasek postępu opiera się na teście złożonym z 10 pytań zadanych ChatGPT. Powinien być traktowany bardziej jako ciekawostka.",
      firstSkillLabel: "Początkujący",
      secondSkillLabel: "Pro",
      projects: "Projekty",
      blockchainTitle: "Blockchain",
      rockPaperScissorsTitle: "Kamień Papier Nożyce",
      productPageTitle: "Strona produktu",
      newsSiteTitle: "Strona z newsami",
      koenigseggTitle: "Koenigsegg",
      blockchainDescribe: "Projekt jest oparty na prawdziwej książce dla dzieci o Blockchain. To był mój pierwszy responsywny projekt, więc może nie działać tak dobrze, jak bym chciał. Pracując nad nim, próbowałem również techniki scroll-snap, ale wymagała zbyt wielu modyfikacji kodu, więc zostawiłem go tylko z strzałkami do przewijania. Grafika została stworzona przeze mnie, ale pamiętaj, że nie jestem grafikiem. To moja pierwsza strona z trybem ciemnym/jasnym.",
      rockPaperScissorsDescribe: "Zainspirowany pewnym tutorialem na YouTube, postanowiłem stworzyć prostą grę internetową. Muszę przyznać, że było to łatwiejsze, niż myślałem, więc jako fan Teorii Wielkiego Podrywu dodałem do gry Lizar i Spocka. Tablica wyników jest skopiowana z Premier League, ponieważ uważam, że wygląda świetnie i minimalistycznie. Użytkownik może zmienić swoje imię i imię przeciwnika oraz kolory na tablicy wyników.",
      productPageDescribe: "Projekt z FrontendMentor. Zmiana obrazów produktów na różnych typach urządzeń i nadal utrzymanie responsywności zajęła mi trochę czasu. Również dynamiczne informacje podsumowujące koszyk. Dodałem moje pierwsze mobilne menu.",
      newsSiteDescribe: "Mój projekt powraca po prawie roku bez kodowania spowodowanego moim egzaminem maturalnym. Ten projekt pochodzi z FrontendMentor i użyłem go, aby przypomnieć sobie wszystkie podstawy.",
      made: "Stworzona",
      yearsPassed: "lata temu",
      contact: "Kontakt",
      describeYs: "Cieszę się, że znalazłeś to miejsce, ale do rzeczy. Moim celem jest tworzenie projektów jak najbardziej przyjaznych dla użytkownika. W moich celach kariery chcę opanować moją wiedzę frontendową, a potem rozwijać swoje umiejętności w backendzie lub AI. Obecnie zacząłem uczyć się Reacta i w niedalekiej przyszłości zamierzam poznać podstawy Bootstrapa.",
      lightMode: "Tryb jasny",
      darkMode: "Tryb ciemny",
      personalInfo: "Informacje osobiste",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pl", // Domyślny język
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
