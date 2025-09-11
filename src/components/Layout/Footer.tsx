import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const footerLinks = {
  company: [
    { key: "footer.about", href: "/about" },
    { key: "footer.blog", href: "/blog" },
    { key: "footer.careers", href: "/careers" },
  ],
  support: [
    { key: "footer.help", href: "/help" },
    { key: "nav.contact", href: "/contact" },
    { key: "footer.status", href: "/status" },
  ],
  legal: [
    { key: "footer.privacy", href: "/privacy" },
    { key: "footer.terms", href: "/terms" },
    { key: "footer.cookies", href: "/cookies" },
  ],
};

export const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-surface-50 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand section */}
          <div className="space-y-8">
            <div className="flex items-center">
              <span className="text-3xl font-bold gradient-text">AmplifAI</span>
            </div>
            <p className="text-sm leading-6 text-muted-foreground max-w-sm">
              {t('footer.tagline')}
            </p>
            <div className="flex space-x-6">
              {/* Add social media icons here if needed */}
            </div>
          </div>

          {/* Links sections */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">
                  {t('footer.company')}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks.company.map((item) => (
                    <li key={item.key}>
                      <Link
                        to={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {t(item.key as any)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">
                  {t('footer.support')}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks.support.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {t(item.key as any)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">
                  {t('footer.legal')}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {t(item.key as any)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 border-t border-border pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <p className="text-xs leading-5 text-muted-foreground">
              &copy; 2024 AmplifAI. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0">
              <p className="text-xs leading-5 text-muted-foreground">
                {t('footer.madeWithLove')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};