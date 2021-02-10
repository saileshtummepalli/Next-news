import React ,{useState}from 'react'
import { useRouter } from "next/router";
import Link from "next/link"
function Navbar() {
  
  const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
     <nav>
  <div className="container mx-auto px-6 py-2 flex justify-between items-center border-black border-solid">
    <a className="font-bold text-2xl lg:text-4xl" href="/">
     Next News
    </a>
    <div className="sm:hidden">
          <button
            type="button"
            className="text-blue-500 block hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-opacity-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="fill-current h-6 w-6"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
  </div>
</nav>
        </>
    )
}

export default Navbar
