import Link from "next/link";

type LanguageSwitchProps = {
  locale: "ko" | "en";
  koreanPath: string;
  englishPath: string;
};

export function LanguageSwitch({ locale, koreanPath, englishPath }: LanguageSwitchProps) {
  return (
    <span className="language-switch" aria-label="Language selection">
      {locale === "ko" ? <span aria-current="page">KR</span> : <Link href={koreanPath}>KR</Link>}
      <i aria-hidden="true">/</i>
      {locale === "en" ? <span aria-current="page">EN</span> : <Link href={englishPath}>EN</Link>}
    </span>
  );
}
