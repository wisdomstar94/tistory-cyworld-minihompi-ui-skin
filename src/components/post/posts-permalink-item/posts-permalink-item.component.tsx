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
            <div className="w-full flex relative gap-2 items-start border-b border-b-tcu-color-3/30 pb-1">
              <div className="min-w-0 text-lg font-bold">
                [##_article_rep_title_##]
              </div>
              <button
                className="text-xs border border-tcu-color-3/20 text-tcu-color-3/60 rounded-md p-0.5 cursor-pointer inline-flex flex-shrink-0 flex-grow-0 hover:bg-tcu-color-3/5 mt-1"
                tt-onclick="onClickPostUrlCopyButton()"
              >
                주소복사
              </button>
            </div>

            {/* extra info row */}
            <div className="w-full flex relative gap-2 border-b border-b-tcu-color-3/30 border-dashed pb-0.5">
              <div className="flex flex-1 items-start relative text-sm text-tcu-color-1">
                [##_article_rep_author_##]
              </div>
              <div className="flex flex-1 items-start relative text-xs justify-end text-tcu-color-3/60">
                [##_article_rep_date_##]
              </div>
            </div>

            {postType !== "protected" && (
              <>
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
              </>
            )}

            {postType === "protected" && (
              <>
                <div className={cn("w-full flex flex-col gap-2 relative")}>
                  <div className="text-sm text-tcu-color-3/70">
                    보호되어 있는 글입니다. 비밀번호를 입력해주세요.
                  </div>
                  <div className={cn("inline-flex flex-wrap gap-2")}>
                    <label htmlFor="[##_article_password_##]">
                      비밀번호:&nbsp;
                    </label>
                    <input
                      type="password"
                      maxLength={16}
                      id="[##_article_password_##]"
                      name="[##_article_password_##]"
                      tt-value=""
                      tt-onkeydown="if (event.keyCode == 13)[##_article_dissolve_##]"
                      className="border border-tcu-color-3/80 p-1"
                    />
                    <button
                      type="button"
                      className="submit bg-tcu-color-8 text-sm text-tcu-color-3/80 cursor-pointer px-2"
                      tt-value="submit"
                      tt-onclick="[##_article_dissolve_##]"
                    >
                      확인
                    </button>
                  </div>
                </div>
              </>
            )}
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
