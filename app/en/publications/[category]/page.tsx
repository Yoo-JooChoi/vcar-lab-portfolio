import Link from "next/link";
import { LanguageSwitch } from "../../../components/LanguageSwitch";
import { publicationCategories, type PublicationCategory } from "../../../publications/data";

const labels: Record<PublicationCategory, string> = {
  international: "International Journals",
  domestic: "Domestic Journals",
  books: "Books & Chapters",
  patents: "Patents",
  software: "Software Registrations",
};

export function generateStaticParams() {
  return Object.keys(publicationCategories).map((category) => ({ category }));
}

export default async function EnglishPublicationCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const activeCategory = category in publicationCategories ? (category as PublicationCategory) : "international";
  const item = publicationCategories[activeCategory];

  return <main className="archive-page">
    <nav className="nav"><Link className="wordmark" href="/en/">VCAR<br />LAB.</Link><div className="nav-links"><Link href="/en/">← Back to Lab</Link><LanguageSwitch locale="en" koreanPath={`/publications/${activeCategory}/`} englishPath={`/en/publications/${activeCategory}/`} /></div></nav>
    <section className="archive-header"><p className="section-label">Publications / {labels[activeCategory]}</p><h1>{labels[activeCategory]}</h1><p>Browse all {item.items.length} records in this category.</p></section>
    <nav className="archive-tabs" aria-label="Publication category">{Object.entries(publicationCategories).map(([key]) => <Link className={key === activeCategory ? "active" : ""} href={`/en/publications/${key}/`} key={key}>{labels[key as PublicationCategory]}</Link>)}</nav>
    <section className="text-archive">{item.items.map((entry, index) => <article key={`${activeCategory}-${index}`}><span>{String(index + 1).padStart(2, "0")}</span><p>{entry}</p></article>)}</section>
  </main>;
}
