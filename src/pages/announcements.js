import Link from "next/link";
import Head from "next/head";

export default function announcements()
{
  return(

      <>
          <Head>
              <title>Handi Connect | Announcements</title>
              <meta name="description" content="Generated by create next app" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />

              <link rel="apple-touch-icon" sizes="180x180" href="/Assets/Favicon/apple-touch-icon.png"/>
              <link rel="icon" type="image/png" sizes="32x32" href="/Assets/Favicon/favicon-32x32.png"/>
              <link rel="icon" type="image/png" sizes="16x16" href="/Assets/Favicon/favicon-16x16.png"/>
              <link rel="manifest" href="/Assets/Favicon/site.webmanifest"/>



          </Head>

          <div className={"bg-zinc-100 min-h-screen"}>



              {/* Header */}
              <div className={"bg-white sticky z-40 top-0 left-0 right-0 flex flex-row px-5 py-4 drop-shadow-xl"}>


                  <Link href={"/"} className={"cursor-pointer bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 transition-all ease-linear text-white px-5 py-2 text-lg font-semibold rounded-3xl flex flex-row space-x-4"} >
                      <p className={"h-fit my-auto"}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                               stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"/>
                          </svg>

                      </p>
                      <p>Back</p>
                  </Link>



                  <div className={"w-full text-center"}>

                      <p className={"text-4xl font-bold underline text-orange-400"}>
                          Announcements
                      </p>

                  </div>



              </div>



              {/* Content */}
              <div className={"p-14 space-y-14"}>


                  <div className={"bg-white rounded-3xl drop-shadow-xl p-5"}>
                      Content - 1
                  </div>

                  <div className={"bg-white rounded-3xl drop-shadow-xl p-5"}>
                      Content - 2
                  </div>

                  <div className={"bg-white rounded-3xl drop-shadow-xl p-5"}>
                      Content - 3
                  </div>

                  <div className={"bg-white rounded-3xl drop-shadow-xl p-5"}>
                      Content - 4
                  </div>

                  <div className={"bg-white rounded-3xl drop-shadow-2xl p-5"}>
                      Content - 5
                  </div>

                  <div className={"bg-white rounded-3xl drop-shadow-2xl p-5"}>
                      Content - 6
                  </div>

                  <div className={"bg-white rounded-3xl drop-shadow-2xl p-5"}>
                      Content - 7
                  </div>

                  <div className={"bg-white rounded-3xl drop-shadow-2xl p-5"}>
                      Content - 8
                  </div>

                  <div className={"bg-white rounded-3xl drop-shadow-2xl p-5"}>
                      Content - 9
                  </div>

                  <div className={"bg-white rounded-3xl drop-shadow-2xl p-5"}>
                      Content - 10
                  </div>









              </div>




          </div>
      </>

  );
}