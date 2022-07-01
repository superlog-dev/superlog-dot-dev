import { useRouter } from "next/router";
import Link from "next/link";
import _ from "lodash";
import isDocActive from "component/docs/utils/isDocActive";

export default function DocSidebarFirstLevel({ docs, onNavigate }) {
  const router = useRouter();
  return (
    <>
      <Link
        href={"/docs/" + docs[0].path.join("/")}
        passHref
        onClick={() => {
          onNavigate && onNavigate();
          console.log("nav");
        }}
      >
        <div
          className={`doc-sidebar-item doc-sidebar-item-1 ${
            isDocActive({ doc: docs[0], docPath: router.query.docPath }) ? "doc-sidebar-item-active" : ""
          }`}
        >
          {docs[0].title}
        </div>
      </Link>
      <>
        {_.drop(docs).map((doc) => {
          return (
            <Link
              href={"/docs/" + doc.path.join("/")}
              key={doc.title}
              passHref
              onClick={() => {
                onNavigate && onNavigate();
                console.log("nav");
              }}
            >
              <div
                className={`doc-sidebar-item doc-sidebar-item-2 ${
                  isDocActive({ doc, docPath: router.query.docPath }) ? "doc-sidebar-item-active" : ""
                }`}
              >
                {" "}
                {doc.title}
              </div>
            </Link>
          );
        })}
      </>
    </>
  );
}
