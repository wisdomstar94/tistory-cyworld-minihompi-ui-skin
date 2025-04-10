import { cn } from "@/utils/cn";
import { Script } from "../script/script.component";
import { TitleBar2 } from "../title-bar2/title-bar2.component";
import "./category-list-box.scss";

export function CategoryListBox() {
  return (
    <>
      <div
        className={cn(
          "w-full flex flex-wrap gap-1 relative text-xs",
          "hidden tt-body-category:flex tt-body-page:flex tt-body-search:flex tt-body-notice:flex tt-body-notice-page:flex"
          //
        )}
        data-title="category-list-area"
      >
        <TitleBar2>Board</TitleBar2>
        <div className="w-full" />
        <s_search>
          <div className="w-full flex gap-2 relative items-stretch">
            <input
              type="text"
              placeholder="글 제목, 글 내용 등을 검색"
              className="w-full flex px-2 py-1 text-xs placeholder:text-tcu-color-3/40 box-border border border-tcu-color-3/20"
              name="[##_search_name_##]"
              tt-value="[##_search_text_##]"
              tt-onkeypress="if (event.keyCode == 13) { [##_search_onclick_submit_##] }"
            />
            <button
              className="w-[40px] shrink-0 grow-0 text-xs flex items-center justify-center cursor-pointer bg-tcu-color-3/20"
              tt-onclick="[##_search_onclick_submit_##]"
            >
              검색
            </button>
          </div>
        </s_search>
        <div className="w-full" />
        [##_category_list_##]
        <div className="w-full h-[1px] bg-tcu-color-3/20" />
        <a href="/notice" id="category-list-notice-menu">
          공지사항
        </a>
      </div>
      <Script
        html={`
          checkCategoryPageUrl();
        `}
      />
    </>
  );
}
