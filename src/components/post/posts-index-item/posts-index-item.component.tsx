import { cn } from "@/utils/cn";
import { IPostsIndexItem } from "./posts-index-item.type";
import { MdLock } from "react-icons/md";
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
          "tt-body-page:block"
        )}
      >
        <td className="px-2 py-0.5">
          <a
            href={`[##_article_rep_link_##]`}
            className="hover:underline flow-root max-w-[160px] whitespace-nowrap overflow-hidden overflow-ellipsis"
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
        <td className="px-2 py-0.5 text-tcu-color-1">{`[##_${replacer_prefix}_rep_author_##]`}</td>
        {/* <td className="px-2 py-0.5 tabular-nums">{`[##_article_rep_date_##]`}</td> */}
        <td className="px-2 py-0.5 tabular-nums">
          [##_article_rep_date_year_##]-[##_article_rep_date_month_##]-[##_article_rep_date_day_##]{" "}
          [##_article_rep_date_hour_##]:[##_article_rep_date_minute_##]
        </td>
        <td className="px-2 py-0.5">
          <span>
            <s_rp_count>{`[##_article_rep_rp_cnt_##]`}</s_rp_count>
          </span>
        </td>
      </tr>
    </>
  );
}
