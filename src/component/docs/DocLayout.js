import LandingPageHeader from "component/LandingPageHeader";
import LandingPageFooter from "component/LandingPageFooter";
import DocSidebar from "component/docs/DocSidebar";
import DocPrevNext from "component/docs/DocPrevNext";

export default function DocLayout({ children }) {
  return (
    <div className="dark">
      <LandingPageHeader />
      <div className="flex justify-center max-w-6xl mx-auto bg-0">
        <div className="hidden md:block sticky w-72 px-2 py-8 mr-8 h-[calc(100vh_-_4rem)] top-16 text-sm flex-shrink-0">
          <DocSidebar />
        </div>
        <article className="flex-1 px-4 py-8 overflow-scroll prose max-w-none bg-0 dark:prose-invert prose-h1:text-1-on-1 prose-h2:text-1-on-1 prose-h2:text-3xl prose-hr:border-bg-1">
          {children}
          <DocPrevNext />
        </article>
      </div>
      <LandingPageFooter />
    </div>
  );
}
