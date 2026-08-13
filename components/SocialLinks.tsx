import { profile } from "@/data/profile";

export default function SocialLinks() {
  return (
    <ul className="my-10 flex flex-wrap items-center gap-x-5 gap-y-4">
      {profile.socials.map(({ name, url, icon: Icon }) => (
        <li key={name}>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center border-b border-border"
          >
            <Icon
              className="size-5 shrink-0 text-icon duration-300 group-hover:text-text"
              aria-hidden
            />
            &nbsp;{name}
          </a>
        </li>
      ))}
    </ul>
  );
}
