import Link from "next/link";

const categories = [["international", "국제저널", "International Journals"], ["domestic", "국내저널", "Domestic Journals"], ["books", "저술", "Books & Chapters"], ["patents", "특허등록", "Patents"], ["software", "프로그램 등록", "Software Registrations"]];

export default function Publications() { return <main className="archive-page"><nav className="nav"><Link className="wordmark" href="/">VCAR<br />LAB.</Link><Link href="/">← Back to Lab</Link></nav><section className="archive-header"><p className="section-label">04 / Publications</p><h1>Research<br /><em>Archive.</em></h1><p>분류를 선택하면 해당 목록을 별도 페이지에서 스크롤로 확인할 수 있습니다.</p></section><section className="archive-categories">{categories.map(([slug, ko, en], index) => <Link href={`/publications/${slug}`} key={slug}><span>{String(index + 1).padStart(2, "0")}</span><div><h2>{ko}</h2><p>{en}</p></div><b>↗</b></Link>)}</section></main>; }
