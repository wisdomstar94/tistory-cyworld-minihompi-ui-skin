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
          "hidden tt-body-category:table tt-body-page:block tt-body-search:table tt-body-notice:table tt-body-notice-page:block"
          //
        )}
      >
        <thead
          className={cn(
            "border-t border-t-color-3/30 border-b border-b-color-3/15",
            "hidden tt-body-category:table-header-group tt-body-search:table-header-group tt-body-notice:table-header-group"
          )}
        >
          <tr>
            <th className="text-left px-2 py-1">제목</th>
            <th className="text-left px-2 py-1 w-[80px]">작성자</th>
            <th className="text-left px-2 py-1 w-[140px]">작성일</th>
            <th className="text-left px-2 py-1 w-[60px]">댓글수</th>
          </tr>
        </thead>
        <tbody
          className={cn(
            "before:w-full before:h-[3px] before:block border-b border-b-color-3/15 after:h-[3px] after:block relative",
            "border-b-0 tt-body-category:border-b tt-body-notice:border-b",
            "tt-body-page:block tt-body-notice-page:block"
          )}
        >
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

          <tr className="other-exist-[post-tr-item]:hidden">
            <td colSpan={4} className="text-xs text-color-3/40 text-center">
              조회된 결과가 없습니다.
            </td>
          </tr>
        </tbody>
      </table>
      <div className="w-full flex justify-end items-center relative">
        <a
          className={cn(
            "px-1 py-0.5 cursor-pointer border border-color-3/30 rounded text-color-3/50 text-xs",
            "hidden tt-body-category:inline-flex tt-body-search:inline-flex"
          )}
          href="/manage/post"
        >
          글쓰기
        </a>
        <a
          className={cn(
            "px-1 py-0.5 cursor-pointer border border-color-3/30 rounded text-color-3/50 text-xs",
            "hidden tt-body-notice:inline-flex"
          )}
          href="/manage/notice"
        >
          공지사항 쓰기
        </a>
      </div>
    </>
  );
}
