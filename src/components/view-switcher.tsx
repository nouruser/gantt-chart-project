import "gantt-task-react/dist/index.css";
import { ViewMode } from "gantt-task-react";

interface ViewSwitcherProps {
  onViewModeChange: (viewMode: ViewMode) => void; 
  onViewListChange: (isChecked: boolean) => void; 
  isChecked: boolean; 
}

export function ViewSwitcher({
  onViewModeChange,
  onViewListChange,
  isChecked
}: ViewSwitcherProps) {
  return (
    <div className="ViewContainer mb-" >
      <button className="Button" onClick={() => onViewModeChange(ViewMode.Day)}>  Day </button>
      <button className="Button" onClick={() => onViewModeChange(ViewMode.Week)} > Week </button>
      <button
        className="Button"
        onClick={() => onViewModeChange(ViewMode.Month)}
      >
        Month
      </button>

      <div className="Switch">
        <label className="Switch_Toggle">
          <input
            type="checkbox"
            checked={isChecked} // Utilisez checked au lieu de defaultChecked
            onChange={() => onViewListChange(!isChecked)} // Utilisez onChange
          />
          <span className="Slider" />
        </label>
        Show Task List
      </div>
    </div>
  );
}
