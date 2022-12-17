import Head from "next/head"
import Image from "next/image"

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
      <div
        style={{
          background: "url('/background.gif') no-repeat center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed"
        }}
        className="min-h-screen bg-black"
      >
        <header>
          <nav className="flex flex-col md:flex-row items-center justify-center md:justify-between overflow-hidden max-h-[120px] w-full max-w-4xl lg:max-w-6xl mx-auto">
            <div className="w-48 h-48 relative">
              <Image src="/logo.png" fill alt="logo" />
            </div>
            <div className="flex items-center justify-end gap-2 mb-4">
              <a
                href="https://youtube.com/@fedupstuff"
                title="fed up stuff youtube"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-centter justify-center gap-1 text-black hover:text-secondary text-lg font-bold py-2 px-4"
              >
                youtube
              </a>
              <a
                href="fuckedup.shop"
                title="fucked up shop"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-centter justify-center gap-1 text-black hover:text-secondary text-lg font-bold py-2 px-4"
              >
                shop
              </a>
            </div>
          </nav>
        </header>
        {children}
      </div>
    </>
  )
}
