import docs from "component/docs/utils/docs";
import DocSidebarFirstLevel from "component/docs/DocSidebarFirstLevel";
import _ from "lodash";

export default function DocSidebar() {
  const collections = _.groupBy(docs, (doc) => doc.path[0]);
  return (
    <div className="w-96 bg-slate-100 px-12 py-8">
      {/* <ul className="prose"> */}
      {_.keys(collections).map((collection) => (
        <DocSidebarFirstLevel docs={collections[collection]} key={collection} />
      ))}
      {/* <li>The Workflow</li>
        <ul>
          <li>1. Before Coding 123</li>
          <li>2. Commit</li>
          <li>3. Prepare for code review</li>
          <li>4. During code review</li>
          <li>5. Ship it!</li>
          <li>6. Cleanup</li>
        </ul>
      </ul> */}
    </div>
  );
}
