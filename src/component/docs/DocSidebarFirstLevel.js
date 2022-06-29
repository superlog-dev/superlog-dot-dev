import { useRouter } from "next/router";
import Link from "next/link";
import _ from "lodash";
import isDocActive from "component/docs/utils/isDocActive";

export default function DocSidebarFirstLevel({ docs }) {
  const router = useRouter();
  return (
    <div>
      <div className="doc-sidebar-item doc-sidebar-item-1">{docs[0].title}</div>
      <div>
        {_.drop(docs).map((doc) => {
          return (
            <Link href={"/docs/" + doc.path.join("/")} key={doc.title} passHref>
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
      </div>
    </div>
  );
}
