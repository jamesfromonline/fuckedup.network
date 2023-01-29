import dynamic from "next/dynamic"
import Script from "next/script"
import Head from "next/head"
import Image from "next/image"
import { useEffect, useState } from "react"
import Loader from "./Loader"
import { useRouter } from "next/router"
const NavBar = dynamic(() => import("./NavBar"))

export default function Layout({ children }: { children: React.ReactNode }) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const router = useRouter()
  const isHome = router.pathname === "/"

  useEffect(() => {
    if (!isHome) setImageLoaded(true)
  }, [isHome])
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
      <div className="bg-[#FDE326] relative min-h-screen flex-auto">
        <div className="w-full h-full fixed top-0 left-0 z-0">
          {isHome && (
            <Image
              unoptimized
              src="/background.gif"
              fill
              onLoadStart={() => setImageLoaded(false)}
              onLoad={() => setImageLoaded(true)}
              alt="background"
              className={`${
                imageLoaded ? "opacity-100" : "opacity-0"
              } transition ease-in-out duration-100`}
            />
          )}
        </div>
        <NavBar show={imageLoaded} />
        {imageLoaded ? null : (
          <div className="w-full h-full fixed top-0 left-0 z-20 bg-primary flex items-center justify-center">
            <Loader />
          </div>
        )}
        {children}
        <footer
          className={`w-full mx-auto relative z-10 ${
            !imageLoaded ? "hidden" : ""
          }`}
        >
          <p className="text-sm text-black py-4 text-center">
            &copy; {new Date().getFullYear()} fucked up network
          </p>
        </footer>
      </div>
    </>
  )
}
