// import PrimaryDownloadButton from "landing-page/PrimaryDownloadButton";
import Link from "next/link";
export default function LandingPageHeader({ enableDownload }) {
  return (
    <div className="z-20 sticky w-screen bg-0 top-0 backdrop-blur bg-opacity-80 border-bg-1 border-b">
      <nav className="flex mx-auto items-center h-16 max-w-5xl px-4">
        <div className="w-full flex items-center">
          <Link href="/" passHref>
            <a className="text-gray-85 font-bold text-xl">Superlog</a>
          </Link>
        </div>
        <div className="flex space-x-6">
          <a href="https://medium.com/smallpr" className="text-2-on-1 hover:text-gray-80">
            Blog
          </a>

          <Link href="/docs/essentials" passHref className="text-2-on-1 hover:text-gray-80 whitespace-nowrap">
            <a className="text-2-on-1 hover:text-gray-80 whitespace-nowrap">Getting Started</a>
          </Link>
          <a
            className="text-gray-85 group flex items-center space-x-2 transition-all duration-300"
            href="https://join.slack.com/t/smallpr/shared_invite/zt-17hdr0wlv-PJ16YUw6Tz_o6ZYLcrIv~A"
            target="_blank"
            rel="noreferrer"
          >
            {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 60 60"
                preserveAspectRatio="xMidYMid meet"
                alt="Slack"
              >
                <title>Slack</title>
                <path
                  d="M22,12 a6,6 0 1 1 6,-6 v6z M22,16 a6,6 0 0 1 0,12 h-16 a6,6 0 1 1 0,-12"
                  className={`fill-gray-70 group-hover:fill-[#36C5F0]`}
                />
                <path
                  d="M48,22 a6,6 0 1 1 6,6 h-6z M32,6 a6,6 0 1 1 12,0v16a6,6 0 0 1 -12,0z"
                  className={`fill-gray-70 group-hover:fill-[#2EB67D]`}
                  fill="#2EB67D"
                />
                <path
                  d="M38,48 a6,6 0 1 1 -6,6 v-6z M54,32 a6,6 0 0 1 0,12 h-16 a6,6 0 1 1 0,-12"
                  className={`fill-gray-70 group-hover:fill-[#ECB22E]`}
                  fill="#ECB22E"
                />
                <path
                  d="M12,38 a6,6 0 1 1 -6,-6 h6z M16,38 a6,6 0 1 1 12,0v16a6,6 0 0 1 -12,0z"
                  className={`fill-gray-70 group-hover:fill-[#E01E5A]`}
                  fill="#E01E5A"
                />
              </svg> */}
            <span className="text-2-on-1 whitespace-nowrap group-hover:text-gray-80">Community</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
