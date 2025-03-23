import { cn } from "@/utils/cn";
import { IPostsIndexItem } from "./posts-index-item.type";
import { MdImageNotSupported, MdLock } from "react-icons/md";
import "./posts-index.scss";

export function PostsIndexItem(props: IPostsIndexItem.Props) {
  const { postType } = props;

  const replacer_prefix = (function () {
    switch (postType) {
      case "normal":
        return "article";
      case "protected":
        return "article";
      case "notice":
        return "notice";
    }
  })();

  return (
    <>
      <tr
        className={cn(
          "w-full relative other/post-tr-item",
          "tt-body-page:block",
          "tt-body-category:board-posts-display-type-gallery:flex tt-body-category:board-posts-display-type-gallery:flex-col gap-0"
        )}
      >
        <td
          className={cn(
            "hidden tt-body-category:board-posts-display-type-gallery:block aspect-square relative"
          )}
        >
          <a
            className={cn("w-full h-full relative cursor-pointer")}
            href={`[##_article_rep_link_##]`}
          >
            <s_article_rep_thumbnail>
              <img
                className={cn(
                  "other/article-post-thumnail-img",
                  "w-full h-full object-cover object-center block relative"
                )}
                src="[##_article_rep_thumbnail_url_##]"
              />
            </s_article_rep_thumbnail>
            <div
              className={cn(
                "other-exist-[article-post-thumnail-img]:hidden",
                "w-full h-full flex items-center justify-center relative",
                "bg-tcu-color-8"
              )}
            >
              <MdImageNotSupported
                className={cn("text-tcu-color-3/50 w-7 h-7")}
              />
            </div>
          </a>
        </td>
        <td
          className={cn(
            "px-2 py-0.5",

            "tt-body-category:board-posts-display-type-gallery:px-0",
            "tt-body-category:board-posts-display-type-gallery:flex"
          )}
        >
          <a
            href={`[##_article_rep_link_##]`}
            className={cn(
              "hover:underline flow-root max-w-[160px] whitespace-nowrap overflow-hidden overflow-ellipsis",

              "tt-body-category:board-posts-display-type-gallery:text-sm",
              "tt-body-category:board-posts-display-type-gallery:font-bold",
              "tt-body-category:board-posts-display-type-gallery:break-all",
              "tt-body-category:board-posts-display-type-gallery:max-w-full",
              "tt-body-category:board-posts-display-type-gallery:whitespace-pre-line",
              "tt-body-category:board-posts-display-type-gallery:overflow-visible"
            )}
          >
            {postType === "protected" && (
              <>
                <MdLock className="inline w-4 h-4 text-tcu-color-3/75" />
                &nbsp;
              </>
            )}
            <span className="inline">{`[##_${replacer_prefix}_rep_title_##]`}</span>
          </a>
        </td>
        <td
          className={cn(
            "px-2 py-0.5 text-tcu-color-1",

            "tt-body-category:board-posts-display-type-gallery:px-0",
            "tt-body-category:board-posts-display-type-gallery:flex"
          )}
        >{`[##_${replacer_prefix}_rep_author_##]`}</td>
        {/* <td className="px-2 py-0.5 tabular-nums">{`[##_article_rep_date_##]`}</td> */}
        <td
          className={cn(
            "px-2 py-0.5 tabular-nums",

            "tt-body-category:board-posts-display-type-gallery:px-0",
            "tt-body-category:board-posts-display-type-gallery:flex"
          )}
        >
          [##_article_rep_date_year_##]-[##_article_rep_date_month_##]-[##_article_rep_date_day_##]{" "}
          [##_article_rep_date_hour_##]:[##_article_rep_date_minute_##]
        </td>
        <td
          className={cn(
            "px-2 py-0.5",

            "tt-body-category:board-posts-display-type-gallery:px-0",
            "tt-body-category:board-posts-display-type-gallery:flex gap-2"
          )}
        >
          <span className="hidden tt-body-category:board-posts-display-type-gallery:block">
            댓글:
          </span>
          <span>
            <s_rp_count>{`[##_article_rep_rp_cnt_##]`}</s_rp_count>
          </span>
        </td>
      </tr>
    </>
  );
}
