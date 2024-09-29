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
      <li className="w-full flex relative"></li>
    </>
  );
}
