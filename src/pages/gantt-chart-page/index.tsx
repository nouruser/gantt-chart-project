import React, { useState } from "react";
import { ViewMode, Gantt } from "gantt-task-react";
import { getStartEndDateForProject, initTasks } from "../../helpers/helper";
import { ViewSwitcher } from "../../components/view-switcher";
import { Task } from "../../types/public-types";

const GanttChartPage: React.FC = () => {
  const [view, setView] = useState(ViewMode.Day);
  const [tasks, setTasks] = useState<Task[]>(initTasks()); 
  const [isChecked, setIsChecked] = useState(true);

  let columnWidth = 50;
  if (view === ViewMode.Month) {
    columnWidth = 300;
  } else if (view === ViewMode.Week) {
    columnWidth = 250;
  }

  const handleTaskChange = (task: Task) => { 
    console.log("On date change Id:" + task.id +" Name:" + task.name +" Type:" + task.type +" Progress:" + task.progress +" Start Date:" + task.start +" End Date:" + task.end);
    let newTasks = tasks.map((t) => (t.id === task.id ? task : t));
    if (task.project) {
      const [start, end] = getStartEndDateForProject(newTasks, task.project);
      const project = newTasks.find((t) => t.id === task.project);
      if (project && (project.start.getTime() !== start.getTime() || project.end.getTime() !== end.getTime())) {
        const changedProject = { ...project, start, end };
        newTasks = newTasks.map((t) => (t.id === task.project ? changedProject : t));
      }
    }
    setTasks(newTasks);
  };

  const handleTaskDelete = (task: Task) => { 
    const conf = window.confirm("Are you sure about " + task.name + " ?");
    if (conf) {
      setTasks(tasks.filter((t) => t.id !== task.id));
    }
    return conf;
  };

  const handleProgressChange = async (task: Task) => { 
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    console.log("On progress change Id:" + task.id);
  };

  const handleDblClick = (task: Task) => { 
    alert("On Double Click event Id:" + task.id);
  };

  const handleSelect = (task: Task, isSelected: boolean) => { 
    console.log(task.name + " has " + (isSelected ? "selected" : "unselected"));
  };

  const handleExpanderClick = (task: Task) => { 
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    console.log("On expander click Id:" + task.id);
  };

  return (
    <div>
      <ViewSwitcher
        onViewModeChange={(viewMode) => setView(viewMode)}
        onViewListChange={setIsChecked}
        isChecked={isChecked}
      />
      <Gantt
        tasks={tasks}
        onExpanderClick={handleExpanderClick}
        onDateChange={handleTaskChange}
        onDelete={handleTaskDelete}
        onProgressChange={handleProgressChange}
        onDoubleClick={handleDblClick}
        onSelect={handleSelect}
        listCellWidth={isChecked ? "125px" : ""}
        columnWidth={columnWidth}
        barBackgroundColor="blue"
        rowHeight={40}
      />
    </div>
  );
};

export default GanttChartPage;
