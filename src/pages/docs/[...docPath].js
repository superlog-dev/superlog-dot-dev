import DocLayout from "component/docs/DocLayout";
import docs from "component/docs/utils/docs";
import _ from "lodash";
import Step1 from "docs/step1-before.mdx";
import Step2 from "docs/step2-commit.mdx";
import Step3 from "docs/step3-prepare.mdx";
import Step4 from "docs/step4-amend.mdx";

function DocContent({ doc }) {
  switch (doc.id) {
    case "s1":
      return <Step1 />;
    case "s2":
      return <Step2 />;
    case "s3":
      return <Step3 />;
    case "s4":
      return <Step4 />;
    default:
      return <></>;
  }
}

export default function Doc({ docPath }) {
  const doc = _.find(docs, (doc) => doc.path.join("/") === docPath.join("/"));

  return (
    <DocLayout>
      <DocContent doc={doc} />
    </DocLayout>
  );
}

export async function getStaticPaths() {
  const paths = docs.map((doc) => {
    return {
      params: { docPath: doc.path },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      ...params,
    },
  };
}
