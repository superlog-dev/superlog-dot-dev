import docs from "component/docs/utils/docs";

export default function isDocActive({ doc, docPath }) {
  if (docPath.join("/") === doc.path.join("/")) {
    return true;
  }
  return false;
}
