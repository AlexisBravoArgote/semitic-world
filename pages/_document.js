import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <title>Semitic World</title>
                <meta name="description" content="Translate from any language to any Arabic dialect. Powered by AI." />

                {/* Favicon */}
                <link rel="icon" href="/logo.png" type="image/png" />

                {/* Open Graph / Social Preview */}
                <meta property="og:title" content="Semitic World" />
                <meta property="og:description" content="Translate from any language to any Arabic dialect." />
                <meta property="og:image" content="https://semiticworld.com/logo.png" />
                <meta property="og:url" content="https://semiticworld.com" />
                <meta name="twitter:card" content="summary_large_image" />

                {/* ✅ AdSense Site Ownership Verification Script */}
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6200609190867338"
                    crossOrigin="anonymous"
                ></script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

