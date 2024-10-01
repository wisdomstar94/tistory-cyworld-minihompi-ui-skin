import { getPathname } from "./components/common/functions";

window.addEventListener("load", () => {
  // ...
});

function checkPage() {
  const pathname = getPathname();

  if (pathname === "/notice") {
    document.body.id = "tt-body-notice";
  } else if (pathname.startsWith("/notice/")) {
    document.body.id = "tt-body-notice-page";
  } else if (pathname.startsWith("/tag/")) {
    document.body.id = "tt-body-tag-index";
  }
}

(window as any).checkPage = checkPage;
