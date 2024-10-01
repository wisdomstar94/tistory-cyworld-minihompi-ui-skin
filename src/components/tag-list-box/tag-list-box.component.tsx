import { cn } from "@/utils/cn";
import { Script } from "../script/script.component";

export function TagListBox() {
  return (
    <>
      <s_tag>
        <div id="tag-list">
          <s_tag_rep>
            <a href="[##_tag_link_##]">[##_tag_name_##]</a>
          </s_tag_rep>
        </div>
      </s_tag>
      <div
        id="selected-tag-text-area"
        className={cn(
          "w-full block font-extrabold text-sm",
          "hidden tt-body-tag-index:flex"
        )}
      ></div>
      <Script
        html={`
            checkTags();
          `}
      />
    </>
  );
}
