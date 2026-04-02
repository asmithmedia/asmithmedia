import { SOCIAL_LINKS } from "@/lib/constants";

const socialIcons: Record<string, { label: string; path: string }> = {
  facebook: {
    label: "Facebook",
    path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  },
  twitter: {
    label: "X (Twitter)",
    path: "M4 4l6.5 8L4 20h2l5.5-6.5L16 20h4l-7-8.5L19.5 4H18l-5 5.5L9 4H4z",
  },
  linkedin: {
    label: "LinkedIn",
    path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z",
  },
};

export function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {Object.entries(SOCIAL_LINKS).map(([platform, url]) => {
        const icon = socialIcons[platform];
        if (!icon) return null;
        return (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
            aria-label={icon.label}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d={icon.path} />
            </svg>
          </a>
        );
      })}
    </div>
  );
}
