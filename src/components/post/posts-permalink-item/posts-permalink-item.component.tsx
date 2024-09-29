import { IPostsPermalinkItem } from "./posts-permalink-item.type";
import { cn } from "@/utils/cn";
import "./posts-permalink-item.scss";

export function PostsPermalinkItem(props: IPostsPermalinkItem.Props) {
  const { postType } = props;

  const prefix = (function () {
    // if (postType === "notice") {
    //   return "article";
    // }
    return "article";
  })();

  return (
    <>
      <li></li>
    </>
  );
}
