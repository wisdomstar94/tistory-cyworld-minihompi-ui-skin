import { Script } from "../script/script.component";
import { TitleBar2 } from "../title-bar2/title-bar2.component";
import "./category-list-box.scss";

export function CategoryListBox() {
  return (
    <>
      <div
        className="w-full flex flex-wrap gap-1 relative text-xs"
        data-title="category-list-area"
      >
        <TitleBar2>Board</TitleBar2>
        <div className="w-full" />
        [##_category_list_##]
      </div>
      <Script
        html={`
          checkCategoryPageUrl();
        `}
      />
    </>
  );
}
