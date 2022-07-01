import { InformationCircleIcon, LightBulbIcon, SparklesIcon } from "@heroicons/react/outline";

export function H1({ children }) {
  return <h1 className="text-6xl">{children}</h1>;
}

export function H2({ children }) {
  return <h1 className="text-4xl">{children}</h1>;
}

export function H3({ children }) {
  return <h1 className="text-3xl">{children}</h1>;
}

export function Video({ src }) {
  return (
    <video playsInline loop muted controls className="rounded-md shadow-xl">
      <source src={src} type="video/mp4" />
    </video>
  );
}

function getNoticeColor({ type }) {
  switch (type) {
    case "error":
      return "border-red-35";
    case "info":
      return "border-blue-55";
    case "tips":
    case "success":
    case "tldr":
      return "border-green-35";
    case "warning":
      return "border-yellow-55";
    default:
      return "border-blue-35";
  }
}

function NoticeIcon({ type }) {
  switch (type) {
    case "tips":
    case "success":
    case "tldr":
      return <LightBulbIcon className="flex-shrink-0 w-6 h-6 mr-3 text-green-45" aria-hidden="true" />;
    default:
      return <InformationCircleIcon className="flex-shrink-0 w-6 h-6 mr-3 text-blue-45" aria-hidden="true" />;
  }
}

export function Notice({ children, title, type }) {
  return (
    <div
      className={`rounded-md bg-1 px-4 mt-8 pt-6 pb-2 border-l-[6px] ${getNoticeColor({
        type,
      })}`}
    >
      <div className="flex items-center align-middle">
        <NoticeIcon type={type} />
        <b>{title}</b>
      </div>
      <div className="pl-2">{children}</div>
    </div>
  );
}
