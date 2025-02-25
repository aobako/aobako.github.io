import { SITE_TITLE } from "../consts";

export function Header() {
  return (
    <header>
      <a
        href="/"
        className="font-bold text-[32px] leading-10 text-primary hover:text-primary/50 duration-300"
      >
        {SITE_TITLE}
      </a>
    </header>
  );
}
