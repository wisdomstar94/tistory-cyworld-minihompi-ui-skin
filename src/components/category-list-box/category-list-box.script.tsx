import {
  getCategoryPathnameInfo,
  getCurrentCategoryUrlMatchedMenuElement,
} from "../common/functions";

function checkCategoryPageUrl() {
  const { isCategoryPath } = getCategoryPathnameInfo();

  if (!isCategoryPath) return;

  const targetCategoryMenuElement = getCurrentCategoryUrlMatchedMenuElement();
  targetCategoryMenuElement?.classList.add("my-active");
}

(window as any).checkCategoryPageUrl = checkCategoryPageUrl;
