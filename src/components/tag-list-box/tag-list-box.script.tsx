import { getPathname } from "../common/functions";

function checkTags() {
  const pathname = getPathname();
  if (!pathname.startsWith("/tag/")) {
    return;
  }

  const tagSplit = pathname.split("tag/");
  const tagName = tagSplit[1].trim();

  const tagList = document.querySelectorAll<HTMLElement>(`tag-list > a`);
  tagList.forEach((item) => {
    if (item.textContent?.trim() === tagName) {
      item.classList.add("my-active");
    }
  });

  const selectedTagTextArea = document.querySelector<HTMLElement>(
    `#selected-tag-text-area`
  );
  if (selectedTagTextArea !== null) {
    selectedTagTextArea.textContent = `#${tagName}`;
  }
}

(window as any).checkTags = checkTags;
