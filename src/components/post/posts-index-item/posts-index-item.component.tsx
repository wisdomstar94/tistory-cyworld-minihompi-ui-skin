import { cn } from "@/utils/cn";
import { IPostsIndexItem } from "./posts-index-item.type";
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
      <tr className="w-full relative">
        <td>
          <a href={`[##_${replacer_prefix}_rep_link_##]`}>
            {`[##_${replacer_prefix}_rep_title_##]`}
          </a>
        </td>
        <td>{`[##_${replacer_prefix}_rep_author_##]`}</td>
        <td>{`[##_article_rep_date_##]`}</td>
        <td>
          <span>
            <s_rp_count>{`[##_article_rep_rp_cnt_##]`}</s_rp_count>
          </span>
        </td>
        <td></td>
      </tr>
    </>
  );
}
