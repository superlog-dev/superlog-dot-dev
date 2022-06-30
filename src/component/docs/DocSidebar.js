import docs from "component/docs/utils/docs";
import DocSidebarFirstLevel from "component/docs/DocSidebarFirstLevel";
import _ from "lodash";

export default function DocSidebar() {
  const collections = _.groupBy(docs, (doc) => doc.path[0]);
  return (
    <>
      {_.keys(collections).map((collection) => (
        <DocSidebarFirstLevel docs={collections[collection]} key={collection} />
      ))}
    </>
  );
}
