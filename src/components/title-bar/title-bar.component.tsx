import { ITitleBar } from "./title-bar.type";
import "./title-bar.scss";

export function TitleBar(props: ITitleBar.Props) {
  const { children } = props;
  return (
    <>
      <div className="w-full relative flex flex-wrap">
        <div
          data-title="custom-title-bar-text-area"
          className="w-full border-b border-b-tcu-color-3/10 flex items-center relative gap-2 text-xs text-tcu-color-3/70"
        >
          {children}
        </div>
      </div>
    </>
  );
}
