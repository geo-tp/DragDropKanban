import { CustomButton } from "../../components/CustomButton";
import { CustomSelector } from "../../components/CustomSelector";
import { KanbanTitle } from "../../components/KanbanTitle";

export const MenuContainer = () => {
  return (
    <div className="menu-container">
      <div className="menu-container__left">
        <CustomSelector options={[]} />
        <KanbanTitle />
        <CustomButton icon="star" text="" />
      </div>
      <div className="menu-container-right">
        <CustomButton icon="ellipsis" text="Options" />
        <CustomButton icon="share" text="Partager" />
      </div>
    </div>
  );
};
