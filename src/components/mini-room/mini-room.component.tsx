import { Var } from "@/consts/torytis-variable-object";
import "./mini-room.scss";

export function MiniRoom() {
  return (
    <div className="w-full block aspect-video bg-color-3/5 relative">
      <s_if_var_mini_room_img_url>
        <img
          src={Var["[##_var_mini_room_img_url_##]"]}
          className="w-full h-full object-cover object-center"
        />
      </s_if_var_mini_room_img_url>
      <s_not_var_mini_room_img_url>
        <div className="w-full h-full mini-room-default-img" />
      </s_not_var_mini_room_img_url>
    </div>
  );
}
