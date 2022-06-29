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
    <div className="flex gap-4 mt-12 mb-24">
      {prevDoc && (
        <Link href={"/docs/" + prevDoc?.path?.join("/")} passHref prefetch scroll>
          <div className="border border-slate-300 rounded-lg p-4 flex-1 cursor-pointer">
            <div className="text-slate-600 pb-1">Previous</div>
            <div className="font-semibold text-lg text-blue-45">{"« " + prevDoc?.title}</div>
          </div>
        </Link>
      )}
      {nextDoc && (
        <Link href={"/docs/" + nextDoc?.path?.join("/")} passHref prefetch scroll>
          <div className="border border-slate-300 rounded-lg p-4 flex-1 text-right cursor-pointer">
            <div className="text-slate-600 pb-1">Next</div>
            <div className="font-semibold text-lg text-blue-45">{nextDoc?.title + " »"}</div>
          </div>
        </Link>
      )}
    </div>
  );
}
