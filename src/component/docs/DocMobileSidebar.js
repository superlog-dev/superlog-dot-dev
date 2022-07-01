/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import DocSidebar from "component/docs/DocSidebar";
import { XIcon } from "@heroicons/react/outline";

export default function Example({ open, setOpen }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-20 w-screen h-screen dark" onClose={setOpen}>
        {/* Backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="w-full h-full bg-black/80 ">123</div>
        </Transition.Child>

        {/* Sidebar */}
        <Transition.Child
          as={Fragment}
          enter="transform transition ease-in-out duration-200"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-200"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <Dialog.Panel className="absolute top-0 flex flex-col h-screen bg-0 w-[300px]">
            <div className="flex items-center w-full h-16 px-4 bg-0 border-bg-1">
              <XIcon className="block w-6 h-6 mr-2 text-1-on-1" onClick={() => setOpen(false)} />
              <Dialog.Title className="text-xl font-bold text-1-on-1 ">Docs</Dialog.Title>
            </div>
            <div className="flex-1 overflow-scroll">
              <div className="px-4 pt-2">
                <DocSidebar
                  onNavigate={() => {
                    console.log("hihi");
                    setOpen(false);
                  }}
                />
              </div>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
}
