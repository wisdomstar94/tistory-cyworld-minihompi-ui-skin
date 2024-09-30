import { cn } from "@/utils/cn";
import { PostsIndexItem } from "../posts-index-item/posts-index-item.component";
import { PostsPermalinkItem } from "../posts-permalink-item/posts-permalink-item.component";

export function Posts() {
  return (
    <>
      <table
        data-title="article-list"
        className={cn(
          "w-full relative text-xs",
          "hidden tt-body-category:table tt-body-page:table"
          //
        )}
      >
        <thead
          className={cn(
            "border-t border-t-color-3/30 border-b border-b-color-3/15",
            "hidden tt-body-category:table-header-group"
          )}
        >
          <tr>
            <th className="text-left px-2 py-1">제목</th>
            <th className="text-left px-2 py-1 w-[80px]">작성자</th>
            <th className="text-left px-2 py-1 w-[130px]">작성일</th>
            <th className="text-left px-2 py-1 w-[60px]">댓글수</th>
          </tr>
        </thead>
        <tbody className="before:w-full before:h-[3px] before:block border-b border-b-color-3/15 after:h-[3px] after:block">
          <s_article_rep>
            <s_index_article_rep>
              <PostsIndexItem postType="normal" />
            </s_index_article_rep>
            <s_permalink_article_rep>
              <PostsPermalinkItem postType="normal" />
            </s_permalink_article_rep>
          </s_article_rep>

          <s_notice_rep>
            <s_index_article_rep>
              <PostsIndexItem postType="notice" />
            </s_index_article_rep>
            <s_permalink_article_rep>
              <PostsPermalinkItem postType="notice" />
            </s_permalink_article_rep>
          </s_notice_rep>

          <s_article_protected>
            <s_index_article_rep>
              <PostsIndexItem postType="protected" />
            </s_index_article_rep>
            <s_permalink_article_rep>
              <PostsPermalinkItem postType="protected" />
            </s_permalink_article_rep>
          </s_article_protected>
        </tbody>
      </table>
    </>
  );
}
