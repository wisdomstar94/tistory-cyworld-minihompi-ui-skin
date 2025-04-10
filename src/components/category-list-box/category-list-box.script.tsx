import { getTargetElementParentCycle } from "@wisdomstar94/vanilla-js-util";
import {
  getCategoryPathnameInfo,
  getCurrentCategoryUrlMatchedMenuElement,
  getPathname,
} from "../common/functions";
import {
  getCollapseCategoryList,
  removeCollapseCategoryList,
  upsertCollapseCategoryList,
} from "@/local-storage/collapse-category-list";
import { getCategoryNameFromAElement } from "@wisdomstar94/torytis-utils";

function checkCategoryPageUrl() {
  const { isCategoryPath } = getCategoryPathnameInfo();
  const pathname = getPathname();

  if (isCategoryPath) {
    const targetCategoryMenuElement = getCurrentCategoryUrlMatchedMenuElement();
    targetCategoryMenuElement?.classList.add("my-active");
  }

  if (pathname === "/notice" || pathname.startsWith("/notice/")) {
    document
      .querySelector<HTMLElement>("#category-list-notice-menu")
      ?.classList.add("my-active");
  }
}

(window as any).checkCategoryPageUrl = checkCategoryPageUrl;

function initCategoryAItemFolderArea() {
  const aElements = document.querySelectorAll<HTMLAnchorElement>(
    "ul.tt_category a.link_item"
  );

  function onFolderClick(event: MouseEvent | TouchEvent) {
    event.preventDefault();

    const aElement = getTargetElementParentCycle(
      event.target as HTMLAnchorElement,
      (currentElement) => {
        return currentElement.classList.contains("link_item");
      }
    ) as HTMLAnchorElement | null | undefined;

    if (aElement === null || aElement === undefined) return;

    const liElement = aElement?.parentElement;
    if (liElement === undefined || liElement === null) {
      return;
    }

    const renderCategoryName = getCategoryNameFromAElement(aElement);

    if (typeof renderCategoryName !== "string") {
      return;
    }

    const subCategoryUl = liElement.querySelector<HTMLUListElement>(
      "ul.sub_category_list"
    );

    if (subCategoryUl === undefined || subCategoryUl === null) {
      return;
    }

    if (liElement?.classList.contains("sub-category-list-collapse")) {
      // 제거하기
      liElement?.classList.remove("sub-category-list-collapse");
      removeCollapseCategoryList(renderCategoryName);
    } else {
      // 추가하기
      liElement?.classList.add("sub-category-list-collapse");
      upsertCollapseCategoryList(renderCategoryName);
    }
  }

  aElements.forEach((aElement) => {
    const folderElement = document.createElement("span");
    folderElement.classList.add("category-a-folder");
    folderElement.addEventListener("click", onFolderClick);
    folderElement.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis-icon lucide-ellipsis"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
    `;
    aElement.appendChild(folderElement);

    const liElement = aElement?.parentElement;
    const collapseCategoryList = getCollapseCategoryList();
    const renderCategoryName = getCategoryNameFromAElement(aElement);
    if (renderCategoryName === undefined) return;

    if (
      collapseCategoryList.find(
        (x) => x.categoryName === renderCategoryName
      ) !== undefined
    ) {
      liElement?.classList.add("sub-category-list-collapse");
    }
  });
}

(window as any).initCategoryAItemFolderArea = initCategoryAItemFolderArea;
