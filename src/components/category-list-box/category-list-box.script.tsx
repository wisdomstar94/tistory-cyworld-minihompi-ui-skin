import {
  getCategoryPathnameInfo,
  getCurrentCategoryUrlMatchedMenuElement,
  getPathname,
} from "../common/functions";

function checkCategoryPageUrl() {
  const { isCategoryPath } = getCategoryPathnameInfo();
  const pathname = getPathname();

  if (isCategoryPath) {
    const targetCategoryMenuElement = getCurrentCategoryUrlMatchedMenuElement();
    targetCategoryMenuElement?.classList.add("my-active");
  }

  if (pathname === "/notice") {
    document
      .querySelector<HTMLElement>("#category-list-notice-menu")
      ?.classList.add("my-active");
  }
}

(window as any).checkCategoryPageUrl = checkCategoryPageUrl;
