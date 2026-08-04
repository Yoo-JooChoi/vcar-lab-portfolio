import Link from "next/link";
import { publicationCategories, type PublicationCategory } from "../data";

export function generateStaticParams() {
  return Object.keys(publicationCategories).map((category) => ({ category }));
}

export default async function PublicationCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const activeCategory = category in publicationCategories
    ? (category as PublicationCategory)
    : "international";
  const item = publicationCategories[activeCategory];

  return (
    <main className="archive-page">
      <nav className="nav">
        <Link className="wordmark" href="/">VCAR<br />LAB.</Link>
        <Link href="/">← Back to Lab</Link>
      </nav>

      <section className="archive-header">
        <p className="section-label">Publications / {item.ko}</p>
        <h1>{item.en}</h1>
        <p>{item.ko} 전체 {item.items.length}건을 세로로 스크롤해 살펴보세요.</p>
      </section>

      <nav className="archive-tabs" aria-label="논문 분류">
        {Object.entries(publicationCategories).map(([key, value]) => (
          <Link
            className={key === activeCategory ? "active" : ""}
            href={`/publications/${key}`}
            key={key}
          >
            {value.ko}
          </Link>
        ))}
      </nav>

      <section className="text-archive">
        {item.items.map((entry, index) => (
          <article key={`${activeCategory}-${index}`}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{entry}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
