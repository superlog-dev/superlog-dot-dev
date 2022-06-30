import { useRouter } from "next/router";
import Link from "next/link";
import docs from "component/docs/utils/docs";
import _ from "lodash";

export default function DocPrevNext() {
  const router = useRouter();
  const docPath = router.query.docPath;
  const idx = _.findIndex(docs, (doc) => {
    return doc.path.join("/") === docPath.join("/");
  });
  const prevDoc = idx > 0 ? docs[idx - 1] : null;
  const nextDoc = idx < docs.length - 1 ? docs[idx + 1] : null;

  return (
    <div className="flex flex-col gap-4 mt-12 mb-24 lg:flex-row">
      {prevDoc && (
        <Link href={"/docs/" + prevDoc?.path?.join("/")} passHref>
          <div className="flex-1 p-4 mr-8 border rounded-lg cursor-pointer lg:mr-0 border-bg-2 hover:border-blue-55">
            <div className="pb-1 text-3-on-1">Previous</div>
            <div className="text-lg font-semibold text-link">{"« " + prevDoc?.title}</div>
          </div>
        </Link>
      )}
      {nextDoc && (
        <Link href={"/docs/" + nextDoc?.path?.join("/")} passHref>
          <div className="flex-1 p-4 ml-8 text-right border rounded-lg cursor-pointer lg:ml-0 border-bg-2 hover:border-blue-55">
            <div className="pb-1 text-3-on-1">Next</div>
            <div className="text-lg font-semibold text-link">{nextDoc?.title + " »"}</div>
          </div>
        </Link>
      )}
    </div>
  );
}
