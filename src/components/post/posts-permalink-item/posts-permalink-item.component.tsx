import { IPostsPermalinkItem } from "./posts-permalink-item.type";
import { cn } from "@/utils/cn";
import "./posts-permalink-item.scss";

export function PostsPermalinkItem(props: IPostsPermalinkItem.Props) {
  const { postType } = props;

  return (
    <>
      <tr
        className={cn(
          "other/post-tr-item relative",
          "w-full tt-body-page:block"
        )}
      >
        <td className={cn("relative", "w-full tt-body-page:block")}>
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

            {/* description */}
            <div
              className="w-full block relative mt-2"
              data-title="article-description"
            >
              [##_article_rep_desc_##]
            </div>
          </div>
        </td>
      </tr>
    </>
  );
}
