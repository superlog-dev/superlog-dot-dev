import { useEffect, useState } from "react";

import axios from "axios";
import packageVersion from "./packageVersion";

const useLatestGithubReleaseInfo = () => {
  const [info, setInfo] = useState({ version: packageVersion });
  useEffect(() => {
    (async () => {
      axios.get("https://api.github.com/repos/superlog-dev/superlog-desktop/releases/latest").then((response) => {
        const tag = response.data?.tag_name ?? "";
        if (tag === "") {
          return;
        }
        const version = tag[0] === "v" ? tag.substr(1) : tag;
        setInfo({
          tag,
          version,
          publishedAt: response.data?.published_at,
          releaseMessage: response.data?.body,
        });
      });
    })();
  }, []);

  return info;
};

export default useLatestGithubReleaseInfo;
