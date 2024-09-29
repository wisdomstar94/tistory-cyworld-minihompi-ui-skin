import { ITitleBar2 } from "./title-bar2.type";
import "./title-bar2.scss";

export function TitleBar2(props: ITitleBar2.Props) {
  const { children } = props;
  return (
    <>
      <div className="w-full relative flex flex-wrap">
        <div
          data-title="custom-title-bar2-text-area"
          className="w-full border-b border-b-color-3/10 flex items-center relative gap-2 text-xs text-color-1 font-bold box-border"
        >
          {children}
        </div>
      </div>
    </>
  );
}
