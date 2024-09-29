import { unwrap } from "@wisdomstar94/vanilla-js-util";
import { getCategoryPathnameInfo, getPathname } from "../common/functions";

function checkCategoryPageUrl() {
  const { isCategoryPath, categoryType, categoryName, subCategoryName } =
    getCategoryPathnameInfo();

  if (!isCategoryPath) return;

  const ul = unwrap(
    document.querySelector<HTMLElement>("ul.tt_category"),
    "ul.tt_category 요소가 없습니다."
  );

  switch (categoryType) {
    case "all":
      {
        const target = unwrap(
          document.querySelector<HTMLElement>(
            '[data-title="category-list-area"]'
          ),
          `[data-title="category-list-area"] 요소가 없습니다.`
        );
        target.classList.add("category-all");
      }
      break;
    case "category":
      {
        const linkItems = unwrap(
          ul.querySelectorAll<HTMLElement>("a.link_item"),
          "a.link_item 요소가 없습니다."
        );
        linkItems.forEach((item) => {
          const html = item.innerHTML.replace("\n", "");
          const htmlSplit = html.split('<span class="').map((x) => x.trim());

          if (htmlSplit[0] === categoryName) {
            item.classList.add("my-active");
          }
        });
      }
      break;
    case "sub-categpry":
      {
        const linkItems = unwrap(
          ul.querySelectorAll<HTMLElement>("a.link_item"),
          "a.link_item 요소가 없습니다."
        );
        linkItems.forEach((item) => {
          const html = item.innerHTML.replace("\n", "");
          const htmlSplit = html.split('<span class="').map((x) => x.trim());
          const parentCategoryName = htmlSplit[0];

          const subLinkItems = unwrap(
            item.parentElement?.querySelectorAll<HTMLElement>(
              "a.link_sub_item"
            ),
            "a.link_sub_item 요소가 없습니다."
          );
          subLinkItems.forEach((item) => {
            const html = item.innerHTML.replace("\n", "");
            const htmlSplit = html.split('<span class="').map((x) => x.trim());
            const childCategoryName = htmlSplit[0];

            if (
              parentCategoryName === categoryName &&
              childCategoryName === subCategoryName
            ) {
              item.classList.add("my-active");
            }
          });
        });
      }
      break;
  }
}

(window as any).checkCategoryPageUrl = checkCategoryPageUrl;
