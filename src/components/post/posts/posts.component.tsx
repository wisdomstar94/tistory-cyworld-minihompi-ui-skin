import { cn } from "@/utils/cn";
import { PostsIndexItem } from "../posts-index-item/posts-index-item.component";
import { PostsPermalinkItem } from "../posts-permalink-item/posts-permalink-item.component";

export function Posts() {
  return (
    <>
      <ul
        data-title="article-list"
        className={cn(
          "w-full flex-wrap gap-1 relative",
          "hidden tt-body-category:flex tt-body-page:flex"
          //
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
      </ul>
    </>
  );
}
