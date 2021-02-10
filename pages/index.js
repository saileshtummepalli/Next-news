import Head from "next/head";
import Navbar from "../src/components/Navbar/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-4 px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          News
        </h2>  
        <div className="flex flex-wrap items-center justify-center m-auto mt-3">
          <div className="w-full md:w-1/3 px-2 mb-4 ">
            <div className="from-yellow-600  to-white bg-gradient-to-r rounded shadow py-2 border-solid">
              <p className="text-gray-800 text-base px-6 mb-5 text-center font-bold">
                India
              </p>
              <Link href="/news/in/1">
                <button className="bg-blue-500 w-full  md:w-1/3 px-2 mb-4 font-bold rounded py-4 m-3.5 my-3.5 shadow-lg  uppercase ml-40 text-white">
                  View More
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="from-blue-600  to-white bg-gradient-to-r rounded shadow py-2">
              <p className="text-gray-800 text-base px-6 mb-5 text-center font-bold">
                US
              </p>
              <Link href="/news/us/1">
                <button className="bg-white  w-full  md:w-1/3 px-2 mb-4 font-bold rounded py-4 m-3.5 my-3.5 shadow-lg  uppercase ml-40 text-gray">
                  View More
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full  md:w-1/3 px-2 mb-4">
            <div className="from-red-600  to-white bg-gradient-to-r rounded shadow py-2">
              <p className="text-gray-800 text-base px-6 mb-5 text-center font-bold">
                Cananda
              </p>
              <Link href="/news/ca/1">
                <button className="bg-black  w-full  md:w-1/3 px-2 mb-4 font-bold rounded py-4 mx-9 my-3.5 shadow-lg ml-40 uppercase text-white">
                  View More
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full  md:w-1/3 px-2 mb-4">
            <div className="bg-white rounded shadow py-2">
              <p className="text-gray-800 text-base px-6 mb-5 text-center font-bold">
              Other
              </p>
              <Link href="/everything">
                <button className="bg-blue-500  w-full  md:w-1/3 px-2 mb-4 font-bold rounded py-4 mx-9 my-3.5 shadow-lg ml-40 uppercase text-white">
                  View More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
