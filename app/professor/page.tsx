import { LanguageSwitch } from "../components/LanguageSwitch";

const education = [
  ["1989", "이화여자대학교 전자계산학과 이학사 졸업"],
  ["1991", "이화여자대학교 일반대학원 전자계산학과 이학석사 졸업"],
  ["2005", "이화여자대학교 과학기술대학원 컴퓨터학과 공학박사 졸업"],
];

const careers = [
  ["2010.03 - 현재", "서울미디어대학원대학교 인공지능응용소프트웨어학과 교수", "산학협력단장, 평생교육원장, 교학처장, 국제교류센터장, 국제어학원장 역임"],
  ["2005.09 - 2010.02", "서울벤처정보대학원대학교 컴퓨터응용기술학과 조교수", ""],
  ["2005.03 - 2006.03", "(재)그래픽스연구원 책임연구원", ""],
  ["2002.01 - 2002.03", "University of Colorado, Denver, USA, Visiting Researcher", ""],
  ["2000.01 - 2000.02", "Fraunhofer Institute, Darmstadt, Germany, Visiting Researcher", ""],
  ["1994.05 - 1999.10", "포스데이타주식회사 기술연구소 주임연구원", ""],
  ["1991.01 - 1993.06", "한국컴퓨터주식회사 기술연구소 주임연구원", ""],
];

const activities = [
  ["2018 - 2023", "한국정보처리학회 부회장"],
  ["2015 - 2022", "한국방송미디어공학회 이사"],
  ["2010 - 현재", "한국컴퓨터그래픽스학회 이사, 부회장"],
  ["2016 - 현재", "한국 HCI 학회 이사"],
  ["2015 - 2017", "한국정보처리학회 이사"],
  ["2017 - 2022", "Area Editor, KSII Transactions on Internet and Information Systems: TIIS"],
  ["2016 - 2022", "Associate Editor, Journal of Computing and Services"],
  ["2016 - 2022", "부편집위원장, 한국컴퓨터그래픽스학회 논문지"],
  ["2016 - 2017", "Associate Editor, Journal of Information Processing Systems"],
];

const awards = [
  ["2019", "2019 한국 HCI 학술대회 Creative Award 부문 우수상"],
  ["2018", "2018 대한민국문화교육대상, 문화체육관광부장관 허가 제2006-39호, 사단법인 한국문화교육협회"],
  ["2018", "2018 한국정보처리학회 추계학술대회 우수논문상"],
  ["2017", "2017 한국정보처리학회 추계학술발표대회 우수논문상"],
  ["2017", "2017 한국 HCI 학술대회 Creative Award 부문 우수상"],
  ["2016", "2016 한국 HCI 학술대회 Creative Award 부문 우수상"],
  ["2011", "2011 한국지식정보기술학회 추계학술발표대회 우수논문상"],
  ["2007", "2007 인터넷정보학회 춘계학술발표대회 우수논문상"],
  ["2006.07", "Geometric Modeling and Processing (GMP2006) Best Poster Award"],
];

function RecordList({ items }: { items: string[][] }) {
  return <div className="record-list">{items.map(([date, title, note]) => <article key={`${date}-${title}`}><time>{date}</time><div><h3>{title}</h3>{note && <p>{note}</p>}</div></article>)}</div>;
}

export default function ProfessorPage() {
  return <main className="professor-page">
    <nav className="nav" aria-label="주요 탐색"><a className="wordmark" href="/">VCAR<br />LAB.</a><div className="nav-links"><a href="/#about">About</a><a href="/#members">Members</a><a href="/#contact">Contact</a><LanguageSwitch locale="ko" koreanPath="/professor/" englishPath="/en/professor/" /></div></nav>
    <header className="professor-hero"><p className="eyebrow">Professor / 01</p><p className="professor-kicker">Visual Computing &amp; Augmented Reality Lab.</p><h1>최유주<br /><em>Yoo-Joo Choi</em></h1><div className="professor-meta"><p>Professor<br />서울미디어대학원대학교 인공지능응용소프트웨어학과</p><p><a href="mailto:yjchoi@smit.ac.kr">yjchoi@smit.ac.kr</a><br />02-6953-3154</p></div></header>

    <section className="profile-section profile-overview"><p className="section-label">01 / Profile</p><div><h2>그래픽스와 AI로<br /><em>현실의 경험을 설계합니다.</em></h2><div className="specialties"><p className="section-label">Research specialties</p><p>Computer Graphics · Image Analysis · Human-Computer Interaction · Smart Surveillance System · Augmented Reality · Dynamic Projection Mapping · AI-based Gesture Analysis · AI-based 3D Reconstruction</p><p className="section-label">Teaching specialties</p><p>Natural Language Processing · Generative AI · Data Analysis and Visualization · XR · Programming Fundamentals · Deep Learning Fundamentals</p></div></div></section>

    <section className="profile-section"><p className="section-label">02 / Education</p><div><h2>학력</h2><RecordList items={education} /><p className="thesis-note"><b>박사학위 논문</b><br />실시간 인터랙션 지원을 위한 적응적 변형 모델링 및 충돌감지<br /><i>Adaptive Deformable Modeling and Collision Detection for Real-time Interaction</i></p></div></section>

    <section className="profile-section"><p className="section-label">03 / Career</p><div><h2>주요 경력</h2><RecordList items={careers} /></div></section>

    <section className="profile-section"><p className="section-label">04 / Activities</p><div><h2>학회 및<br /><em>사회 활동</em></h2><RecordList items={activities} /></div></section>

    <section className="profile-section awards-section"><p className="section-label">05 / Awards</p><div><h2>수상 이력</h2><RecordList items={awards} /></div></section>

    <footer><span>© 2026 VCAR LAB.</span><span>All scenes reserved.</span></footer>
  </main>;
}
