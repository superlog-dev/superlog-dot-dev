import { Popover, Transition } from "@headlessui/react";

import { DownloadIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
import useLatestGithubReleaseInfo from "utils/useLatestGithubReleaseInfo";

export default function Example() {
  const { version } = useLatestGithubReleaseInfo();
  return (
    <div>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button className="px-8 py-4 btn btn-hero">
              <span>Download Superlog for Mac</span>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <div className="flex flex-col gap-8 text-left bg-2 p-7 text-1-on-1">
                    <a
                      href={`https://github.com/superlog-dev/superlog-desktop/releases/download/v${version}/Superlog-${version}.dmg`}
                      className="flex items-center px-4 py-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-3 hover:text-gray-90"
                    >
                      <div className="flex items-center justify-center w-5 h-5">
                        <DownloadIcon aria-hidden="true" />
                      </div>
                      <div className="ml-4">Mac with Intel chip</div>
                    </a>
                    <a
                      href={`https://github.com/superlog-dev/superlog-desktop/releases/download/v${version}/Superlog-${version}-arm64.dmg`}
                      className="flex items-center px-4 py-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-3 hover:text-gray-90"
                    >
                      <div className="flex items-center justify-center w-5 h-5">
                        <DownloadIcon aria-hidden="true" />
                      </div>
                      <div className="ml-4">Mac with M1 or M2 chip</div>
                    </a>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}

function IconOne() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconThree() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  );
}
