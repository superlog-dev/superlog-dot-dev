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
    <video autoPlay playsInline loop muted controls className="rounded-md shadow-xl">
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
      return "border-green-55";
    case "warning":
      return "border-yellow-55";
    default:
      return "border-blue-55";
  }
}

function NoticeIcon({ type }) {
  switch (type) {
    case "tips":
    case "success":
      return <LightBulbIcon className="h-6 w-6 text-green-55 flex-shrink-0 mr-3" aria-hidden="true" />;
    default:
      return <InformationCircleIcon className="h-6 w-6 text-blue-55 flex-shrink-0 mr-3" aria-hidden="true" />;
  }
}

export function Notice({ children, title, type }) {
  return (
    <div className={`rounded-md bg-slate-100 px-4 mt-8 pt-6 pb-2 border-l-[6px] ${getNoticeColor({ type })}`}>
      <div className="flex align-middle items-center">
        <NoticeIcon type={type} />
        <b>{title}</b>
      </div>
      <div className="pl-9">{children}</div>
    </div>
  );
}
