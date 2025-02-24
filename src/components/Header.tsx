import { SITE_TITLE } from "../consts";

export function Header() {
  return (
    <header>
      <a className="font-bold text-[32px] leading-10" href="/">
        {SITE_TITLE}
      </a>
    </header>
  );
}
