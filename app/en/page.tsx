import { LanguageSwitch } from "../components/LanguageSwitch";
import { projectsEn } from "../projects-data";

const members = [
  ["Yoo-Joo Choi", "Lab Director / Professor", "Computer Graphics · Image Analysis · Human-Computer Interaction"],
  ["Yu-Min Kim", "M.S. Student", "Augmented Reality · 3D Gaussian Splatting"],
  ["Yu-Bin Kim", "M.S. Student", "3D Gaussian Splatting · Digital Human"],
];

const lectures = [
  ["Human-Computer Interaction", "Interactive-content design theory, image / 2D / 3D visualization, and gesture-interaction production practice."],
  ["3D Stereoscopic Imaging", "Principles, planning, and production methods for next-generation broadcast media and immersive 3D content."],
  ["Digital Visual Theory", "Computer-graphics pipeline and applications, with graphics-library and tool practice."],
  ["AR/VR Content Production", "AR/VR technologies, standardization trends, and hands-on content-authoring workflows."],
  ["Deep Learning Programming", "A project course implementing Transformer, ViT, CLIP, and Diffusion models in PyTorch, from training to inference."],
  ["Mathematics for AI and Graphics", "Mathematical concepts and Python practice for AI and computer-graphics algorithms."],
  ["AI-based XR Technology Innovation", "XR and AI market and policy trends, convergence technologies, and their future potential."],
  ["Python Basics", "Python syntax and project-based practice for AI and deep-learning majors."],
  ["Business Data Processing and Visualization", "Practical data analysis with Pandas, Matplotlib, Seaborn, NumPy, and Scikit-learn."],
  ["Understanding and Applying NLP", "Language characteristics, preprocessing, data construction, and planning AI services with NLP."],
  ["Understanding and Applying Generative AI", "Principles and applications of Transformer, GAN, and Diffusion models, including ethics and global AI policy."],
];

export default function EnglishHome() {
  return <main>
    <nav className="nav" aria-label="Primary navigation"><a className="wordmark" href="#top">VCAR<br />LAB.</a><div className="nav-links"><a href="#about">About</a><a href="#projects">Projects</a><a href="#contact">Contact</a><LanguageSwitch locale="en" koreanPath="/" englishPath="/en/" /></div></nav>
    <section className="hero" id="top"><p className="eyebrow">Seoul, Korea · Est. 2021</p><h1>Visual Computing<br /><em>&amp; Augmented Reality</em></h1><div className="hero-bottom"><p>Between technology and perception,<br />we create new scenes of reality.</p><span>Scroll to enter ↓</span></div></section>
    <section id="about" className="section about"><p className="section-label">01 / About</p><div className="section-content"><h2>Expanding reality<br />through visual technology.</h2><div className="body-copy"><p>The Visual Computing &amp; Augmented Reality Lab. investigates 3D stereoscopic visualization, motion analysis, HCI and information-visualization techniques grounded in computer graphics and image processing.</p><p>We also study core technologies for augmented reality, which seamlessly aligns virtual objects and information with the physical world, and develop application systems that bring those technologies into use.</p></div></div></section>
    <section id="members" className="section members"><p className="section-label">02 / Members</p><div><div className="member-grid">{members.map(([name, role, text], i) => <article className="member" key={name}><div className="portrait"><span>{String(i + 1).padStart(2, "0")}</span></div><h3>{name}</h3><p className="role">{role}</p><p>{text}</p></article>)}</div><a className="professor-link" href="/en/professor/"><span>Professor / 01</span><strong>Yoo-Joo Choi</strong><em>Profile</em><b>↗</b></a></div></section>
    <section id="projects" className="section projects"><p className="section-label">03 / Projects</p><div><p className="scroll-note">All 29 projects · scroll vertically to explore</p><div className="project-scroll"><div className="project-list">{projectsEn.map(([number, title, text, year]) => <article className="project" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><time>{year}</time></article>)}</div></div></div></section>
    <section id="publications" className="section compact-section"><p className="section-label">04 / Publications</p><div><h2>A record of research,<br /><em>collected.</em></h2><p className="body-copy publication-intro">Browse complete lists of international and domestic journals, books, patents, and software registrations in dedicated archive pages.</p><a className="archive-link" href="/en/publications/">Publications Archive <span>↗</span></a></div></section>
    <section id="lectures" className="section compact-section lectures"><p className="section-label">05 / Lectures</p><div><h2>Learning means<br /><em>looking together.</em></h2><p className="scroll-note">Complete course list · scroll vertically to explore</p><div className="lecture-scroll">{lectures.map(([title, description], index) => <article className="lecture-item" key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></div></section>
    <section id="contact" className="contact"><p className="section-label">06 / Contact</p><h2>Let&apos;s make<br />the <em>unseen</em> visible.</h2><a className="contact-link" href="mailto:yjchoi@smit.ac.kr">yjchoi@smit.ac.kr <span>↗</span></a><div className="contact-info"><p>Seoul Media Institute of Technology<br />Seoul, Korea</p><p>Visual Computing &amp; Augmented Reality Lab.</p></div></section>
    <footer><span>© 2026 VCAR LAB.</span><span>All scenes reserved.</span></footer>
  </main>;
}
