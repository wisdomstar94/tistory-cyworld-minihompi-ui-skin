import { IPostsPermalinkItem } from "./posts-permalink-item.type";
import { cn } from "@/utils/cn";
import "./posts-permalink-item.scss";
import { Script } from "@/components/script/script.component";
import { CommentList } from "@/components/commnet-list/commnet-list.component";
import { CommentInputForm } from "@/components/commnet-input-form/comment-input-form.component";

export function PostsPermalinkItem(props: IPostsPermalinkItem.Props) {
  const { postType } = props;

  return (
    <>
      <tr
        className={cn(
          "other/post-tr-item relative",
          "w-full tt-body-page:block tt-body-notice-page:block"
        )}
      >
        <td
          className={cn(
            "relative",
            "w-full tt-body-page:block tt-body-notice-page:block"
          )}
        >
          <div className="w-full flex flex-wrap gap-1 relative">
            {/* title row */}
            <div className="w-full flex relative gap-2 items-start border-b border-b-color-3/30 pb-1">
              <div className="min-w-0 text-lg font-bold">
                [##_article_rep_title_##]
              </div>
              <button
                className="text-xs border border-color-3/20 text-color-3/60 rounded-md p-0.5 cursor-pointer inline-flex flex-shrink-0 flex-grow-0 hover:bg-color-3/5 mt-1"
                tt-onclick="onClickPostUrlCopyButton()"
              >
                주소복사
              </button>
            </div>

            {/* extra info row */}
            <div className="w-full flex relative gap-2 border-b border-b-color-3/30 border-dashed pb-0.5">
              <div className="flex flex-1 items-start relative text-sm text-color-1">
                [##_article_rep_author_##]
              </div>
              <div className="flex flex-1 items-start relative text-xs justify-end text-color-3/60">
                [##_article_rep_date_##]
              </div>
            </div>

            {/* tag row */}
            <s_tag_label>
              <div id="tag-list">[##_tag_label_rep_##]</div>
            </s_tag_label>

            {/* description */}
            <div
              className="w-full block relative mt-2"
              id="article-description"
            >
              [##_article_rep_desc_##]
            </div>

            {/* category name */}
            <div className="hidden" data-title="article-category-name">
              [##_article_rep_category_##]
            </div>

            {/* comment */}
            <s_rp>
              <div
                className="w-full mt-4 relative flex flex-wrap gap-6"
                data-title="comment-container"
              >
                <CommentList />
                <s_rp_input_form>
                  <CommentInputForm />
                </s_rp_input_form>
              </div>
            </s_rp>
          </div>
        </td>
      </tr>
      <Script
        html={`
          checkArticlePermalinkCategoryName();
        `}
      />
    </>
  );
}
