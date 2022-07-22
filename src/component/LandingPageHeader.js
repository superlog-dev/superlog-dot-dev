// import PrimaryDownloadButton from "landing-page/PrimaryDownloadButton";
import { useRouter } from "next/router";
import Link from "next/link";
import DocMobileSidebar from "component/docs/DocMobileSidebar";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Fragment, useState } from "react";
import useLogger from "utils/useLogger";

export default function LandingPageHeader({ enableDownload }) {
  const router = useRouter();
  const [openSidebar, setOpenSidebar] = useState(false);
  const isDoc = router.pathname.startsWith("/docs");
  const { logEvent } = useLogger();

  return (
    <div className="sticky top-0 z-20 w-screen border-b bg-0 backdrop-blur bg-opacity-80 border-bg-1">
      <DocMobileSidebar open={openSidebar} setOpen={setOpenSidebar} />
      <nav className="flex items-center h-16 max-w-6xl px-4 mx-auto">
        <div className="flex items-center w-full">
          {isDoc && (
            <div className="block md:hidden">
              {openSidebar ? (
                <XIcon
                  className="block w-6 h-6 mr-2 text-1-on-1"
                  aria-hidden="true"
                  onClick={() => setOpenSidebar(false)}
                />
              ) : (
                <MenuIcon
                  className="block w-6 h-6 mr-2 text-1-on-1"
                  aria-hidden="true"
                  onClick={() => setOpenSidebar(true)}
                />
              )}
            </div>
          )}
          <Link href="/" passHref>
            <a className="text-xl font-bold text-1-on-1">Superlog</a>
          </Link>
        </div>
        <div className="flex space-x-6">
          <Link href="/docs/essentials" passHref>
            <a
              className={`text-2-on-1 hover:text-gray-80 whitespace-nowrap ${
                router.pathname.startsWith("/docs") ? "hidden sm:block" : ""
              }`}
              onClick={() => {
                logEvent("header_tutorial_clicked");
              }}
            >
              Tutorial
            </a>
          </Link>
          <a
            href="https://medium.com/smallpr"
            className="text-2-on-1 hover:text-gray-80"
            target="_blank"
            onClick={() => {
              logEvent("header_blog_clicked");
            }}
            rel="noreferrer"
          >
            Blog
          </a>
          <a
            className="flex items-center space-x-2 transition-all duration-300 text-gray-85 group"
            href="https://join.slack.com/t/superlog-community/shared_invite/zt-17hdr0wlv-PJ16YUw6Tz_o6ZYLcrIv~A"
            target="_blank"
            rel="noreferrer"
            onClick={() => {
              logEvent("header_community_clicked");
            }}
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
