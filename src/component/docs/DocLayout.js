import LandingPageHeader from "component/LandingPageHeader";
import DocSidebar from "component/docs/DocSidebar";

export default function DocLayout({ children }) {
  return (
    <div className="">
      <LandingPageHeader />
      <div className="bg-white flex h-[calc(100vh_-_4rem)] w-screen">
        <DocSidebar />
        <div className="flex flex-col flex-1 overflow-scroll px-12 py-8 ">
          {/* <div>
            <DocBreadCrumbs />
          </div> */}
          <div className="text-black bg-white prose ">{children}</div>
        </div>
      </div>
    </div>
  );
}
