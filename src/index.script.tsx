import { getPathname } from "./components/common/functions";

window.addEventListener("load", () => {
  // ...
});

function checkPage() {
  const pathname = getPathname();

  if (pathname === "/notice") {
    document.body.id = "tt-body-notice";
  }
}

(window as any).checkPage = checkPage;
