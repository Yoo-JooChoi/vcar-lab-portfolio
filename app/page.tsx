import { LanguageSwitch } from "./components/LanguageSwitch";
import { projectsKo } from "./projects-data";

const members = [
  ["최유주", "Lab Director / Professor", "Computer Graphics · Image Analysis · Human-Computer Interaction"],
  ["김유민", "M.S. Student", "Augmented Reality · 3D Gaussian Splatting"],
  ["최유빈", "M.S. Student", "3D Gaussian Splatting · Digital Human"],
];

const internationalPublications = [
  ["2025", "Yoo-Joo Choi, Ku-Jin Kim, “Visualization and Analysis for Mesh Surface Curvature Based on Interpolation”", "KSII Transactions on Internet and Information Systems, 19(3)"],
  ["2025", "Nak-Jun Sung et al., “Real-Time Physics Simulation Method for XR Application”", "Computers, 14(1)"],
  ["2024", "Udeok Seo et al., “Cylindrical depth image based customized helical bone plate design”", "Medical Engineering and Physics, 129"],
  ["2022", "Do-keyong Lee et al., “Volumetric Object Modeling using Internal Shape Preserving Constraint in Unity 3D”", "Intelligent Automation & Soft Computing, 32(3)"],
  ["2022", "Lyudmila Khan et al., “Cutting Simulation in Unity 3D using Position based Dynamics”", "Electronics, 11"],
  ["2018", "Nak-Jun Sung et al., “Optimization of Material Properties for Coherent Behavior across Multi-resolution Cloth Models”", "KSII Transactions on Internet and Information Systems, 12(8)"],
  ["2018", "Young-Hwan Choi et al., “Parallel Cloth Simulation with GPGPU”", "Multimedia Tools and Applications"],
  ["2017", "Soo Kyun Kim et al., “Augmented-Reality Survey: from Concept to Application”", "KSII Transactions on Internet and Information Systems, 11(2)"],
  ["2014", "Yoo-Joo Choi, Yong-Goo Kim, “Target Model Construction Algorithm for Robust Real-Time Mean-Shift Tracking”", "Sensors, 14(11)"],
  ["2010", "Yu-Bu Lee et al., “Boundary Detection in Carotid Ultrasound Images using Dynamic Programming”", "Computers in Biology and Medicine, 40(8)"],
  ["2006", "Yoo-Joo Choi et al., “Rapid Pairwise Intersection Tests using Programmable GPUs”", "The Visual Computer, 22(2)"],
];

const domesticPublications = [
  ["2025", "하종수, 권영수, 김진아, 최유주, “Image Quality Enhancement for Arbitrary Viewpoint Synthesis based on Accurate Inter-Camera Point Matching”", "한국컴퓨터정보학회논문지, 30(5)"],
  ["2020", "고유진, 김태원, 김용구, 최유주, “제스처 인식 기반의 인터랙티브 미디어 콘텐츠 제작 프레임워크 구현”", "방송공학회논문지, 25(4)"],
  ["2018", "김민상, 송윤, 최유주, 홍민, “Real-Time Collision Response Between Cloth and Sphere Object in Unity”", "Journal of Internet Computing and Services, 19(6)"],
  ["2018", "김상준, 배윤민, 최유주, “3D 지도와 결합된 실시간 증강현실 건물 안내 시스템의 설계 및 구현”", "한국컴퓨터그래픽스학회 논문지, 24(4)"],
  ["2018", "김상준, 홍민, 최유주, “모바일 게임을 위한 증강현실 기반 직관적 변형 직물객체 조작”", "KIPS Transactions on Software and Data Engineering, 7(4)"],
  ["2017", "최영환, 홍민, 이승현, 최유주, “워크 그룹 구성 변화에 따른 GPU 기반 천 시뮬레이션 성능 분석”", "한국인터넷정보학회 논문지, 18(3)"],
  ["2016", "박소라, 최유주, 전지윤, “모바일 AR 기반 카오스의 시각적 표현에 관한 연구”", "한국기초조형학회 논문지, 17(5)"],
  ["2015", "전지은, 전지윤, 최유주, “모바일 AR 기반 낱말카드 교육 콘텐츠 설계 및 구현”", "한국콘텐츠학회 논문지, 15(6)"],
];

const lectures = [
  ["인간과 컴퓨터 상호작용", "인터랙티브 콘텐츠 설계 이론, 이미지·2D·3D 시각화, 제스처 인터랙션 기반 콘텐츠 제작 실습"],
  ["3D 입체 영상 기술", "차세대 방송미디어와 몰입형 3D 콘텐츠의 원리, 기획 및 제작 기법"],
  ["디지털비주얼론", "컴퓨터 그래픽스 파이프라인과 그래픽 응용 이론, 그래픽스 라이브러리·도구 실습"],
  ["AR/VR 콘텐츠 제작 기술", "AR/VR 요소 기술·표준화 동향과 콘텐츠 저작 워크플로우 실습"],
  ["딥러닝 프로그래밍", "PyTorch로 Transformer, ViT, CLIP, Diffusion 모델을 구현하고 학습·추론까지 경험하는 멀티모달·생성 AI 프로젝트 실습"],
  ["인공지능과 그래픽스를 위한 기초수학", "AI와 컴퓨터 그래픽스 알고리즘에 필요한 수학 개념 및 Python 실습"],
  ["인공지능 기반 XR 기술 혁신", "XR·AI의 시장·정책 동향과 AI 융합 XR 기술의 특성 및 발전 가능성"],
  ["Python Basics", "인공지능·딥러닝 전공을 위한 Python 문법과 프로젝트 기반 실습 · 영어 강의"],
  ["비즈니스 데이터 처리와 시각화 기초", "Pandas, Matplotlib, Seaborn, Numpy, Scikit-learn을 활용한 실제 데이터 분석"],
  ["자연어 처리 기술의 이해 및 응용", "언어 특성, 전처리, 데이터 구성과 자연어처리 기반 AI 서비스 기획·개발"],
  ["생성형 AI 기술의 이해와 응용", "Transformer, GAN, Diffusion Model의 원리와 응용, 윤리 및 글로벌 AI 정책"],
];

export default function Home() {
  return <main>
    <nav className="nav" aria-label="주요 탐색"><a className="wordmark" href="#top">VCAR<br />LAB.</a><div className="nav-links"><a href="#about">About</a><a href="#projects">Projects</a><a href="#contact">Contact</a><LanguageSwitch locale="ko" koreanPath="/" englishPath="/en/" /></div></nav>
    <section className="hero" id="top"><p className="eyebrow">Seoul, Korea · Est. 2021</p><h1>Visual Computing<br /><em>&amp; Augmented Reality</em></h1><div className="hero-bottom"><p>기술과 감각 사이,<br />새로운 현실의 장면을 만듭니다.</p><span>Scroll to enter ↓</span></div></section>
    <section id="about" className="section about"><p className="section-label">01 / About</p><div className="section-content"><h2>시각 기술로<br />현실을 확장합니다.</h2><div className="body-copy"><p>비주얼 컴퓨팅 및 증강현실 연구실(Visual Computing &amp; Augmented Reality Lab.)에서는 컴퓨터 그래픽스 및 영상처리 기술을 기반으로 3차원 입체 가시화, 동작분석, HCI, AR 및 다양한 정보 가시화 기법에 관한 연구를 수행하고 있습니다.</p><p>또한 실제 환경에 가상의 사물이나 정보를 정합하여 보여주는 증강현실을 위한 기반 기술을 연구하고, 이를 활용한 다양한 응용 시스템을 개발하고 있습니다.</p></div></div></section>
    <section id="members" className="section members"><p className="section-label">02 / Members</p><div><div className="member-grid">{members.map(([name, role, text], i) => <article className="member" key={name}><div className="portrait"><span>{String(i + 1).padStart(2, "0")}</span></div><h3>{name}</h3><p className="role">{role}</p><p>{text}</p></article>)}</div><a className="professor-link" href="/professor"><span>Professor / 01</span><strong>최유주 교수</strong><em>Profile</em><b>↗</b></a></div></section>
    <section id="projects" className="section projects"><p className="section-label">03 / Projects</p><div><p className="scroll-note">전체 프로젝트 29건 · 세로로 스크롤해 확인하세요</p><div className="project-scroll"><div className="project-list">{projectsKo.map(([number, title, text, year]) => <article className="project" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><time>{year}</time></article>)}</div></div></div></section>
    <section id="publications" className="section compact-section"><p className="section-label">04 / Publications</p><div><h2>연구의 기록을<br /><em>모았습니다.</em></h2><p className="body-copy publication-intro">국제저널, 국내저널, 저술, 특허등록, 프로그램 등록을 각각의 페이지에서 전체 목록으로 확인할 수 있습니다.</p><a className="archive-link" href="/publications">Publications Archive <span>↗</span></a></div></section>
    <section id="lectures" className="section compact-section lectures"><p className="section-label">05 / Lectures</p><div><h2>배움은<br /><em>함께 바라보는 일.</em></h2><p className="scroll-note">전체 강의 목록 · 세로로 스크롤해 확인하세요</p><div className="lecture-scroll">{lectures.map(([title, description], index) => <article className="lecture-item" key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></div></section>
    <section id="contact" className="contact"><p className="section-label">06 / Contact</p><h2>Let&apos;s make<br />the <em>unseen</em> visible.</h2><a className="contact-link" href="mailto:yjchoi@smit.ac.kr">yjchoi@smit.ac.kr <span>↗</span></a><div className="contact-info"><p>Seoul Media Institute of Technology<br />서울미디어대학원대학교</p><p>Visual Computing &amp; Augmented Reality Lab.</p></div></section>
    <footer><span>© 2026 VCAR LAB.</span><span>All scenes reserved.</span></footer>
  </main>;
}
