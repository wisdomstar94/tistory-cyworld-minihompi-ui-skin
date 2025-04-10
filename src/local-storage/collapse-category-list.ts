export const collapseCategoryListKey = "collapseCategoryList";

export type collapseCategoryItem = {
  categoryName: string;
};

export function getCollapseCategoryList() {
  const collapseCategoryList = localStorage.getItem(collapseCategoryListKey);
  if (collapseCategoryList === null) {
    return [];
  }

  return JSON.parse(collapseCategoryList) as collapseCategoryItem[];
}

export function upsertCollapseCategoryList(categoryName: string) {
  const collapseCategoryList = getCollapseCategoryList();
  if (
    collapseCategoryList.find((x) => x.categoryName === categoryName) !==
    undefined
  ) {
    return;
  }
  collapseCategoryList.push({ categoryName });
  localStorage.setItem(
    collapseCategoryListKey,
    JSON.stringify(collapseCategoryList)
  );
}

export function removeCollapseCategoryList(categoryName: string) {
  const collapseCategoryList = getCollapseCategoryList();
  const newCollapseCategoryList = collapseCategoryList.filter(
    (x) => x.categoryName === categoryName
  );
  localStorage.setItem(
    collapseCategoryListKey,
    JSON.stringify(newCollapseCategoryList)
  );
}
