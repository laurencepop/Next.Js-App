import { Metadata } from "next"

//FIXME re-check all keys & go through those links:
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
// https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots

export const data: Metadata = {
    title: {
        default: "MyDomainName",
        template: "%s | MyDomainName",
    },
    keywords: "React.js Next.js TypeScript",
    description: "Next.js React.js TypeScript Tailwind",
    alternates: {
        canonical: "https://nextjs.org",
        languages: {
            "en-US": "https://nextjs.org/en-US",
            "de-DE": "https://nextjs.org/de-DE",
        },
        media: {
            "only screen and (max-width: 600px)": "https://nextjs.org/mobile",
        },
        types: {
            "application/rss+xml": "https://nextjs.org/rss",
        },
    },
    metadataBase: new URL("https://acme.com"),
    openGraph: {
        type: "website",
        url: "https://example.com",
        title: "My Website",
        description: "My Website Description",
        siteName: "My Website",
        images: [
            {
                url: "https://nextjs.org/og.png",
                width: 800,
                height: 600,
            },
            {
                url: "https://nextjs.org/og-alt.png",
                width: 1800,
                height: 1600,
                alt: "My custom alt",
            },
        ],
        locale: "en-US",
    },
    robots: {
        index: true,
        follow: true,
        noarchive: true,
        nosnippet: true,
        noimageindex: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    referrer: "origin", // 'origin-when-cross-origin'
    authors: [
        { name: "Next.js Team" },
        { name: "Josh", url: "https://nextjs.org" },
    ],
    generator: "Next.js",
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#fff" },
        { media: "(prefers-color-scheme: dark)", color: "#222" },
    ],
    colorScheme: "dark",
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 1,
    },
    verification: {
        google: "google",
        yahoo: "yahoo",
        other: {
            me: ["my-email", "my-link"],
        },
    },
    creator: "Next.js Team",
    publisher: "Vercel",
    itunes: {
        appId: "myAppStoreID",
        appArgument: "myAppArgument",
    },
    assets: ["https://nextjs.org/assets"],
    bookmarks: ["https://nextjs.org/13"],
    category: "technology",
    appleWebApp: {
        title: "Apple Web App",
        statusBarStyle: "black-translucent",
        startupImage: [
            "/assets/startup/apple-touch-startup-image-768x1004.png",
            {
                url: "/assets/startup/apple-touch-startup-image-1536x2008.png",
                media: "(device-width: 768px) and (device-height: 1024px)",
            },
        ],
    },
    icons: {
        icon: "/images/icon32.png",
        shortcut: "/images/i180.png",
        apple: "https://user-images.githubusercontent.com/121040484/229376134-c8d369c1-0c48-4f98-85d3-a2d65a95ff54.png",
        other: {
            rel: "apple-touch-icon-precomposed",
            url: "https://user-images.githubusercontent.com/121040484/229376134-c8d369c1-0c48-4f98-85d3-a2d65a95ff54.png",
        },
    },
    manifest: "/manifest.json",
    applicationName: "Next.js",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    twitter: {
        title: "Next.js",
        description: "The React Framework for the Web",
        creator: "@nextjs",
        siteId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        creatorId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        images: {
            url: "https://user-images.githubusercontent.com/121040484/229376134-c8d369c1-0c48-4f98-85d3-a2d65a95ff54.png",
            alt: "Next.js Logo",
        },
    },
    appLinks: {
        ios: {
            url: "https://nextjs.org/ios",
            app_store_id: "app_store_id",
        },
        android: {
            package: "com.example.android/package",
            app_name: "app_name_android",
        },
        web: {
            url: "https://nextjs.org/web",
            should_fallback: true,
        },
    },
    archives: ["https://nextjs.org/13"],
}
