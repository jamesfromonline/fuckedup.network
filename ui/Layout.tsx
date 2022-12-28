import dynamic from "next/dynamic"
import Script from "next/script"
import Head from "next/head"
import Image from "next/image"
const NavBar = dynamic(() => import("./NavBar"))

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>fucked up network</title>
        <meta
          name="description"
          content="a network of heavy-hitting social media accounts to help promote your brand"
        />
        <meta property="og:title" content="fucked up network" />
        <meta property="og:url" content="https://fuckedup.network" />
        <meta
          property="og:image"
          content="https://littlebuilds.s3.amazonaws.com/seo-image.jpg"
        />
        <meta
          property="og:description"
          content="a network of heavy-hitting twitter accounts to help promote your brand"
        />
        <meta name="twitter:creator" content="@fuckedupfoods" />
        <meta name="twitter:url" content="https://fuckedup.network" />
        <meta name="twitter:title" content="fucked up network" />
        <meta
          name="twitter:description"
          content="a network of heavy-hitting twitter accounts to help promote your brand"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://littlebuilds.s3.amazonaws.com/seo-image.jpg"
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="https://fuckedup.network" />
      </Head>
      <Script
        id="ga-script-1"
        strategy="lazyOnload"
        src={"https://www.googletagmanager.com/gtag/js?id=G-MFLKFV81P6"}
      />
      <Script id="ga-script-2" strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-MFLKFV81P6')`}
      </Script>
      <div className="min-h-screen bg-black relative">
        <div className="w-full h-full fixed top-0 left-0 z-0">
          <Image src="/background.gif" fill alt="background" />
        </div>
        <NavBar />
        {children}
        <footer className="w-full mx-auto relative z-1">
          <p className="text-sm text-black py-4 text-center">
            &copy; {new Date().getFullYear()} fucked up network
          </p>
        </footer>
      </div>
    </>
  )
}
