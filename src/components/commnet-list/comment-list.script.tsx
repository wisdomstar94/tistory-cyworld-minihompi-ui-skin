import { subscribeElement } from "@wisdomstar94/vanilla-js-util";
import copy from "copy-to-clipboard";

window.addEventListener("load", () => {
  const commentListDiv = document.querySelector<HTMLElement>(
    `#tt-body-page [data-tistory-react-app="Namecard"]`
  );
  if (commentListDiv === null) {
    return;
  }

  const observer = subscribeElement({
    target: commentListDiv,
    options: {
      subtree: true,
      childList: true,
    },
    callback: (mutations) => {
      const hash = location.hash;
      if (hash.trim() !== "") {
        setTimeout(() => {
          const comment = document.querySelector<HTMLElement>(hash);
          if (comment !== null) {
            comment.scrollIntoView();
          }
          observer.disconnect();
        }, 400);
      }
    },
  });
});

function commentLinkCopyButtonClick(element: HTMLElement) {
  const dataLink = element.getAttribute("data-link");
  copy(`${location.host}${dataLink}`);
  alert("링크가 복사되었습니다.");
}

(window as any).commentLinkCopyButtonClick = commentLinkCopyButtonClick;
