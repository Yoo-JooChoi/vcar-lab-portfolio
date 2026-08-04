import Link from "next/link";
import { LanguageSwitch } from "../../components/LanguageSwitch";

const categories = [
  ["international", "International Journals"],
  ["domestic", "Domestic Journals"],
  ["books", "Books & Chapters"],
  ["patents", "Patents"],
  ["software", "Software Registrations"],
];

export default function EnglishPublications() {
  return <main className="archive-page">
    <nav className="nav"><Link className="wordmark" href="/en/">VCAR<br />LAB.</Link><div className="nav-links"><Link href="/en/">← Back to Lab</Link><LanguageSwitch locale="en" koreanPath="/publications/" englishPath="/en/publications/" /></div></nav>
    <section className="archive-header"><p className="section-label">04 / Publications</p><h1>Research<br /><em>Archive.</em></h1><p>Select a category to browse its complete list on a dedicated scrolling page.</p></section>
    <section className="archive-categories">{categories.map(([slug, label], index) => <Link href={`/en/publications/${slug}/`} key={slug}><span>{String(index + 1).padStart(2, "0")}</span><div><h2>{label}</h2><p>Research archive</p></div><b>↗</b></Link>)}</section>
  </main>;
}
