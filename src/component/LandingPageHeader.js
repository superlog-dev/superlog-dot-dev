import PrimaryDownloadButton from "landing-page/PrimaryDownloadButton";
import amplitude from "amplitude-js";

export default function LandingPageHeader({ enableDownload }) {
  return (
    <header className="header-area">
      <div className="navbar-area">
        <div className="max-w-screen-lg m-auto px-4">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand relative -left-2" href="/">
              <img src="assets/images/logo.svg" alt="Logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="toggler-icon"></span>
              <span className="toggler-icon"></span>
              <span className="toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
              <ul id="nav" className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a
                    className="page-scroll"
                    href="https://discord.gg/KAkXjPX8Yn"
                    onClick={() => {
                      amplitude.getInstance().logEvent("header_discord_clicked");
                    }}
                    target="_blank"
                  >
                    Discord
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="page-scroll"
                    href="https://heptaplatforms.notion.site/heptaplatforms/Heptabase-Public-Wiki-4dcb425de51c42c28d2fd57d0dbbdcdd"
                    onClick={() => {
                      amplitude.getInstance().logEvent("header_wiki_clicked");
                    }}
                    target="_blank"
                  >
                    Wiki
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="page-scroll"
                    href="https://twitter.com/Heptabase"
                    onClick={() => {
                      amplitude.getInstance().logEvent("header_twitter_clicked");
                    }}
                    target="_blank"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            {enableDownload ? (
              <div className="hidden lg:block">
                <PrimaryDownloadButton size={"sm"} />
              </div>
            ) : (
              <div className="navbar-btn d-none d-sm-inline-block">
                <a
                  className="main-btn"
                  data-scroll-nav="0"
                  href="https://projectmeta.substack.com/p/coming-soon"
                  rel="nofollow"
                >
                  Join the Waitlist
                </a>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
