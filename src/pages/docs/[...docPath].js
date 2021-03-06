import DocLayout from "component/docs/DocLayout";
import Head from "next/head";
import Step0 from "docs/step0.mdx";
import Step1 from "docs/step1-before.mdx";
import Step2 from "docs/step2-after.mdx";
import Step3 from "docs/step3-create-pr.mdx";
import Step4 from "docs/step4-iterate.mdx";
import Step5 from "docs/step5-shipit.mdx";
import _ from "lodash";
import docs from "component/docs/utils/docs";

function DocContent({ doc }) {
  switch (doc.id) {
    case "s0":
      return <Step0 />;
    case "s1":
      return <Step1 />;
    case "s2":
      return <Step2 />;
    case "s3":
      return <Step3 />;
    case "s4":
      return <Step4 />;
    case "s5":
      return <Step5 />;
    default:
      return <></>;
  }
}

export default function Doc({ docPath }) {
  const doc = _.find(docs, (doc) => doc.path.join("/") === docPath.join("/"));

  return (
    <DocLayout>
      <Head>
        <title>{doc.title} | Superlog</title>
        <meta name="description" content={doc.title} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://superlog.dev/" />
        <meta property="og:title" content="Superlog Docs" />
        <meta property="og:image" content="/preview.png" />
        <meta property="og:description" content={doc.title} />
      </Head>
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
