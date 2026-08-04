import { LanguageSwitch } from "../../components/LanguageSwitch";

const education = [
  ["1989", "B.S. in Computer Science, Ewha Womans University"],
  ["1991", "M.S. in Computer Science, Ewha Womans University"],
  ["2005", "Ph.D. in Computer Science, Ewha Womans University"],
];

const careers = [
  ["2010.03 – Present", "Professor, Department of AI Software Engineering, Seoul Media Institute of Technology", "Former Director of Industry-Academic Cooperation, Lifelong Education, Academic Affairs, International Exchange, and International Language Center"],
  ["2005.09 – 2010.02", "Assistant Professor, Department of Computer Application Technology, Seoul University of Venture & Information", ""],
  ["2005.03 – 2006.03", "Principal Researcher, Graphics Research Institute", ""],
  ["2002.01 – 2002.03", "Visiting Researcher, University of Colorado Denver, USA", ""],
  ["2000.01 – 2000.02", "Visiting Researcher, Fraunhofer Institute, Darmstadt, Germany", ""],
  ["1994.05 – 1999.10", "Senior Researcher, POSDATA Research Institute", ""],
  ["1991.01 – 1993.06", "Senior Researcher, Korea Computer Inc. Research Institute", ""],
];

const activities = [
  ["2018 – 2023", "Vice President, Korea Information Processing Society"],
  ["2015 – 2022", "Director, Korean Society of Broadcast Engineers"],
  ["2010 – Present", "Director and Vice President, Korea Computer Graphics Society"],
  ["2016 – Present", "Director, HCI Korea"],
  ["2015 – 2017", "Director, Korea Information Processing Society"],
  ["2017 – 2022", "Area Editor, KSII Transactions on Internet and Information Systems: TIIS"],
  ["2016 – 2022", "Associate Editor, Journal of Computing and Services"],
  ["2016 – 2022", "Associate Editor-in-Chief, Journal of Korea Computer Graphics Society"],
  ["2016 – 2017", "Associate Editor, Journal of Information Processing Systems"],
];

const awards = [
  ["2019", "Excellence Award, Creative Award Division, HCI Korea Conference"],
  ["2018", "Korea Culture Education Award, Korea Culture Education Association"],
  ["2018", "Excellent Paper Award, Korea Information Processing Society Fall Conference"],
  ["2017", "Excellent Paper Award, Korea Information Processing Society Fall Conference"],
  ["2017", "Excellence Award, Creative Award Division, HCI Korea Conference"],
  ["2016", "Excellence Award, Creative Award Division, HCI Korea Conference"],
  ["2011", "Excellent Paper Award, Korea Knowledge Information Technology Society Fall Conference"],
  ["2007", "Excellent Paper Award, Korea Internet Information Society Spring Conference"],
  ["2006.07", "Best Poster Award, Geometric Modeling and Processing (GMP 2006)"],
];

function RecordList({ items }: { items: string[][] }) {
  return <div className="record-list">{items.map(([date, title, note]) => <article key={`${date}-${title}`}><time>{date}</time><div><h3>{title}</h3>{note && <p>{note}</p>}</div></article>)}</div>;
}

export default function EnglishProfessorPage() {
  return <main className="professor-page">
    <nav className="nav" aria-label="Primary navigation"><a className="wordmark" href="/en/">VCAR<br />LAB.</a><div className="nav-links"><a href="/en/#about">About</a><a href="/en/#members">Members</a><a href="/en/#contact">Contact</a><LanguageSwitch locale="en" koreanPath="/professor/" englishPath="/en/professor/" /></div></nav>
    <header className="professor-hero"><p className="eyebrow">Professor / 01</p><p className="professor-kicker">Visual Computing &amp; Augmented Reality Lab.</p><h1>Yoo-Joo<br /><em>Choi</em></h1><div className="professor-meta"><p>Professor<br />Department of AI Software Engineering<br />Seoul Media Institute of Technology</p><p><a href="mailto:yjchoi@smit.ac.kr">yjchoi@smit.ac.kr</a><br />02-6953-3154</p></div></header>
    <section className="profile-section profile-overview"><p className="section-label">01 / Profile</p><div><h2>Designing experiences<br /><em>of reality with graphics and AI.</em></h2><div className="specialties"><p className="section-label">Research specialties</p><p>Computer Graphics · Image Analysis · Human-Computer Interaction · Smart Surveillance System · Augmented Reality · Dynamic Projection Mapping · AI-based Gesture Analysis · AI-based 3D Reconstruction</p><p className="section-label">Teaching specialties</p><p>Natural Language Processing · Generative AI · Data Analysis and Visualization · XR · Programming Fundamentals · Deep Learning Fundamentals</p></div></div></section>
    <section className="profile-section"><p className="section-label">02 / Education</p><div><h2>Education</h2><RecordList items={education} /><p className="thesis-note"><b>Doctoral dissertation</b><br />Adaptive Deformable Modeling and Collision Detection for Real-time Interaction</p></div></section>
    <section className="profile-section"><p className="section-label">03 / Career</p><div><h2>Career</h2><RecordList items={careers} /></div></section>
    <section className="profile-section"><p className="section-label">04 / Activities</p><div><h2>Academic &amp;<br /><em>professional activities</em></h2><RecordList items={activities} /></div></section>
    <section className="profile-section awards-section"><p className="section-label">05 / Awards</p><div><h2>Awards</h2><RecordList items={awards} /></div></section>
    <footer><span>© 2026 VCAR LAB.</span><span>All scenes reserved.</span></footer>
  </main>;
}
