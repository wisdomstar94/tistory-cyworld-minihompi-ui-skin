import { subscribeElement } from "@wisdomstar94/vanilla-js-util";
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

function checkStyleObserver() {
  const targets = document.querySelectorAll<HTMLElement>(
    `.style-observer-target`
  );

  targets.forEach((target) => {
    revokeHeight(target);
    subscribeElement({
      target,
      options: {
        attributes: true,
        attributeOldValue: true,
      },
      callback: () => {
        revokeHeight(target);
      },
    });
  });
}

function revokeHeight(target: HTMLElement) {
  const height = target.style.height;
  if (height === "auto") {
    target.style.removeProperty("height");
  }
}

(window as any).checkStyleObserver = checkStyleObserver;
