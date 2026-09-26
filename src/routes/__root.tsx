import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SmoothScroll } from "../components/common/SmoothScroll";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://mizaantech.co.in/#organization",
      "name": "Mizaan Technologies",
      "alternateName": ["Mizaan Tech", "Mizaan"],
      "url": "https://mizaantech.co.in",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://mizaantech.co.in/#logo",
        "url": "https://mizaantech.co.in/assets/mizaan-trans.png",
        "caption": "Mizaan Technologies Logo"
      },
      "image": "https://mizaantech.co.in/assets/mizaan-hero.jpg",
      "description":
        "Mizaan Technologies is a premium technology solutions provider specializing in AI-driven SaaS platforms, custom software development, and scalable web applications in Vaniyambadi, Tamil Nadu.",
      "telephone": "+917448552778",
      "email": "project@mizaantech.co.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Vaniyambadi",
        "addressLocality": "Vaniyambadi",
        "addressRegion": "Tamil Nadu",
        "postalCode": "635751",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 12.6825,
        "longitude": 78.6186
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:30"
      },
      "sameAs": [
        "https://instagram.com/mizaantech.co.in",
        "https://x.com/mizaantechx",
        "https://linkedin.com"
      ],
      "priceRange": "$$"
    },
    {
      "@type": "WebSite",
      "@id": "https://mizaantech.co.in/#website",
      "url": "https://mizaantech.co.in",
      "name": "Mizaan Technologies",
      "description": "AI & Custom Software Company in Vaniyambadi, Tamil Nadu",
      "publisher": {
        "@id": "https://mizaantech.co.in/#organization"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "ItemList",
      "@id": "https://mizaantech.co.in/#sitelinks",
      "name": "Mizaan Technologies Navigation",
      "itemListElement": [
        {
          "@type": "SiteNavigationElement",
          "position": 1,
          "name": "About Mizaan",
          "description": "Who Mizaan Technologies is: the founder story, our team, and why we build purposeful digital products.",
          "url": "https://mizaantech.co.in/about"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 2,
          "name": "Portfolio & Case Studies",
          "description": "Browse live demos, deployed products, and enterprise architectures built by Mizaan Technologies.",
          "url": "https://mizaantech.co.in/projects"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 3,
          "name": "Services & Capabilities",
          "description": "AI-driven SaaS, custom software, web platforms, mobile apps, and cloud engineering.",
          "url": "https://mizaantech.co.in/services"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 4,
          "name": "Contact & Inquiries",
          "description": "Get in touch with senior software architects for project estimates and technical consultations.",
          "url": "https://mizaantech.co.in/contact"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 5,
          "name": "Privacy Policy",
          "description": "Enterprise confidentiality, intellectual property protection, and security standards.",
          "url": "https://mizaantech.co.in/privacy"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 6,
          "name": "Terms of Service",
          "description": "Client engineering agreements, milestone billing, and post-launch warranty.",
          "url": "https://mizaantech.co.in/terms"
        }
      ]
    }
  ]
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Mizaan Technologies" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "geo.region", content: "IN-TN" },
      { name: "geo.placename", content: "Vaniyambadi" },
      { name: "geo.position", content: "12.6825;78.6186" },
      { name: "ICBM", content: "12.6825, 78.6186" },
      { property: "og:site_name", content: "Mizaan Technologies" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@mizaantechx" },
      { name: "twitter:creator", content: "@mizaantechx" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScroll>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </SmoothScroll>
    </QueryClientProvider>
  );
}
