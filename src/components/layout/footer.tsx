import Link from "next/link";
import { SITE_CONFIG, SOCIAL_LINKS, NAV_LINKS, SERVICES } from "@/lib/constants";
import { SocialLinks } from "@/components/shared/social-links";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
                A
              </div>
              <span className="font-semibold text-foreground">
                A. Smith Media
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {SITE_CONFIG.description}
            </p>
            <SocialLinks />
          </div>

          {/* Services */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/[^\d+]/g, "")}`}
                  className="hover:text-primary transition-colors"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>{SITE_CONFIG.address}</li>
              <li className="text-xs">{SITE_CONFIG.hours}</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} A. Smith Media. All rights
            reserved.
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Frisco, Texas
          </p>
        </div>
      </div>
    </footer>
  );
}
