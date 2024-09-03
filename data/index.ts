export const heroPhotos = [
  {
    id: 1,
    img: "media/pics/2-transparent.png",
    imgAlt: "Rob in a suit",
    imgClassName: "self-end pt-3 lg:pt-0",
  },
  {
    id: 2,
    img: "media/pics/3-transparent.png",
    imgAlt: "Rob in a sweater",
    imgClassName:
      "transform scale-[1.30] translate-y-[10%] lg:translate-y-[30%]",
  },
  {
    id: 3,
    img: "media/pics/7-transparent.png",
    imgAlt: "Rob in a jacket",
    imgClassName:
      "transform scale-[1.25] translate-y-[10%] lg:translate-y-[25%]",
  },
];

export const projects = [
  {
    id: 1,
    title: "frogCoin",
    description: {
      eng: "frogCoin was my first attempt at using pure HTML and CSS to create a site with the typical sections. I had challenged myself to try to make it somewhat of a treat to view despite my limited skillset at the time.",
      kor: "frogCoin은 순수 HTML과 CSS를 사용하여 부분적으로 나뉜 사이트를 만드는 첫 번째 도전이였습니다. 해당 작업을 만들 시 경험이 많지 않아 제한된 기술을 이용하여 작업하였음에도 불구하고 재밌는 요소를 넣어서 만들기 위한 즐거운운 도전이었습니다.",
    },
    skills: {
      eng: [
        "Responsive design basics",
        "Mobile-First development",
        "CSS animation",
      ],
      kor: ["반응형 디자인 기초", "모바일 중심 개발", "CSS 애니메이션"],
    },
    img: "/media/projects/frogCoin.png",
    iconLists: ["HTML5.svg", "CSS3.svg"],
    gitLink: "https://github.com/r0bVious/frogCoin",
    demoLink: "https://r0bvious.github.io/frogCoin/",
    date: "2023-11-25",
  },
  {
    id: 2,
    title: "Tic-Tac-Toe",
    description: {
      eng: 'Tic-Tac-Toe is a classic mini-project. This was an in-class exercise that had "bonus" objectives including a turn tracker and conditional visual feedback.',
      kor: '틱택토(Tic-Tac-Toe)는 전형적인 미니 프로젝트입니다. "보너스" 목표를 가진 턴 트래커와 조건부 시각 피드백을 포함한 수업 중 연습한 작업물 입니다.',
    },
    skills: {
      eng: [
        "Functional programming",
        "Developmental agility",
        "Basic game logic",
      ],
      kor: ["함수형 프로그래밍", "개발 민첩성", "게임 로직"],
    },
    img: "/media/projects/tictactoe.png",
    iconLists: ["HTML5.svg", "CSS3.svg", "Javascript.svg"],
    gitLink: "https://github.com/r0bVious/Tic-Tac-Toe",
    demoLink: "https://r0bvious.github.io/Tic-Tac-Toe/",
    date: "2023-12-01",
  },
  {
    id: 3,
    title: "FlagMatch",
    description: {
      eng: "FlagMatch was my first time writing code for and interfacing with an API. I had a lot of fun working through the logic of making a little game from such a resource.",
      kor: "<FlagMatch>는 처음으로 API를 위한 코드를 만들었고 그것을 인터페이스화 하는 작업이었습니다. 저는 이런 작은 리소스를 통해 게임을 만드는 논리를 배울 수 있었고 매우 즐거운 작업을 할 수 있었습니다.",
    },
    skills: {
      eng: ["Data fetching", "Data curation and routing", "More game logic"],
      kor: ["데이터 fetch", "데이터 처리 및 라우팅", "게임 로직"],
    },
    img: "/media/projects/FlagMatch.png",
    iconLists: ["HTML5.svg", "CSS3.svg", "Javascript.svg", "PHP.svg"],
    gitLink: "https://github.com/r0bVious/FlagMatch",
    demoLink: "https://r0bvious.github.io/FlagMatch/",
    date: "2023-12-06",
  },
  {
    id: 4,
    title: "Seoul Nights: Hongdae",
    description: {
      eng: "Seoul Nights: Hongdae is a game about going out for a wild night in Hongdae. Choose your route through randomly generated paths featuring narrative and combat elements! Completed as a full-stack, group project.",
      kor: "<Seoul Nights: 홍대>는 다양한 홍대의 밤거리가 배경인 게임입니다. 무작위 스토리 전개와 각종 전투 요소들로 홍대의 밤거리를 게임화 하였습니다. 해당 작업은 풀스택,그룹 프로젝트를 통해 완성 되었습니다.",
    },
    skills: {
      eng: [
        "Team development",
        "Developmental agility",
        "Code refactoring",
        "Code integration",
        "Data structures",
      ],
      kor: [
        "팀 개발",
        "상황 적응력",
        "코드 리팩토링",
        "코드 통합",
        "데이터 구조",
      ],
    },
    img: "/media/projects/SeoulNights.gif",
    iconLists: ["HTML5.svg", "CSS3.svg", "Javascript.svg", "PHP.svg"],
    gitLink: "https://github.com/ironllama/seoulnights",
    demoLink: "https://robertjspano.com/seoulnights",
    date: "2024-01-24",
  },
  {
    id: 5,
    title: "Workplace Infoportal",
    description: {
      eng: "This is a full-stack MERN app that allows admins to add, edit, and remove articles and users. Users have instant access to actionable info about their workplace. This app features a secure login, data validation, and a RTE with image upload functionality.",
      kor: "이것은 관리자(서버관리자)가 문서나 사용자를 추가, 편집, 제거할 수 있는 풀스택 MERN 앱입니다. 사용자는 워크플레이스에 대한 실행 가능한 정보에 즉시 접근할 수 있습니다. 이 앱은 안전로그인, 데이터 검증 및 이미지 업로드 기능이 있는 RTE(Rich Text Editor)를 제공합니다.",
    },
    skills: {
      eng: [
        "MVC",
        "Password Hashing",
        "Front-to-Back Security Redundancies",
        "Deployment",
        "Strict Variable Typing",
      ],
      kor: [
        "MVC",
        "비밀번호 해싱",
        "프런트-투-백 보안 중복성",
        "배포-디폴로이먼트",
        "엄격한 변수 타이핑",
      ],
    },
    img: "/media/projects/WorkplaceWebapp.png",
    iconLists: [
      "MongoDB.svg",
      "React.svg",
      "Nodejs.svg",
      "Typescript.svg",
      "ChakraUI.svg",
    ],
    gitLink: "https://github.com/r0bVious/workplace-sop-reference",
    demoLink: "https://workplace-info-portal-fe.onrender.com/",
    date: "2024-06-09",
  },
  {
    id: 6,
    title: "Portfolio v2",
    description: {
      eng: "This site! After learning a lot of new skills, recreating my portfolio site seemed necessary. Using a completely new toolset and approach, this site came to life.",
      kor: "많은 새로운 기술을 배운 후에 포트폴리오 사이트를 다시 만드는 것이 필요해 보였습니다. 그 전까진 사용하지 않았던 프레임워크로 접근방식을 사용하여 이 사이트는 더 활기를 띄게 되었습니다.",
    },
    skills: {
      eng: [
        "Component Abstraction",
        "Content Data Organization",
        "Design Scalability",
      ],
      kor: ["컴포넌트 추상화", "콘텐츠 데이터 조직", "효율적인 업무설계 능력"],
    },
    img: "/media/projects/portfolio.png",
    iconLists: ["Typescript.svg", "Nextjs.svg", "TailwindCSS.svg"],
    gitLink: "https://github.com/r0bVious/portfolio-v2",
    demoLink: "https://robertjspano.com/",
    date: "2024-07-15",
  },
];

export const email = "robert.spano@gmail.com";

export const socialMedia = [
  {
    id: 1,
    url: "https://github.com/r0bVious/",
  },
  {
    id: 2,
    url: "https://www.linkedin.com/in/robertjspano/",
  },
  {
    id: 3,
    url: "https://www.instagram.com/r0bvious/",
  },
];
