import { Task } from '../types/public-types';
import staticData from '../data/staticData.js';


export function initTasks(): Task[] {
  const tasks = staticData.map((task: Task) => ({ ...task })); // Faire une copie des tâches
  const projectIds = [...new Set(tasks.filter((t: Task) => t.type === 'project').map((t: Task) => t.id))];

  projectIds.forEach((projectId) => {
    // Filtrer les tâches enfants associées à ce projet
    const childTasks = tasks.filter((t: Task) => t.project === projectId);

    if (childTasks.length > 0) {
      const totalProgress = childTasks.reduce((acc: number, task: Task) => acc + parseFloat(task.progress), 0);
      const averageProgress = totalProgress / childTasks.length;

      // Trouver la plus petite date de début parmi les tâches enfants
      const earliestStartDate = childTasks.reduce((earliest: Date, task: Task) => {
        const taskStartDate = new Date(task.start);
        return taskStartDate < earliest ? taskStartDate : earliest;
      }, new Date(childTasks[0].start));

      // Trouver la plus grande date de fin parmi les tâches enfants
      const latestEndDate = childTasks.reduce((latest: Date, task: Task) => {
        const taskEndDate = new Date(task.end);
        return taskEndDate > latest ? taskEndDate : latest;
      }, new Date(childTasks[0].end));

      // Mettre à jour les dates et le progrès du projet parent
      const project = tasks.find((t: { id: string; }) => t.id === projectId);
      if (project) {
        project.start = earliestStartDate; 
        project.end = latestEndDate;       
        project.progress = averageProgress.toFixed(2); 
      }
    }
  });

  return tasks;
}

// Fonction pour obtenir les dates de début et de fin d'un projet
export function getStartEndDateForProject(tasks: Task[], projectId: string): [Date, Date] {
  const projectTasks = tasks.filter((t) => t.project === projectId);

  if (projectTasks.length === 0) {
    throw new Error(`No tasks found for project with ID: ${projectId}`);
  }

  let start = new Date(projectTasks[0]?.start);
  let end = new Date(projectTasks[0].end);

  for (let i = 0; i < projectTasks.length; i++) {
    const task = projectTasks[i];
    const taskStart = new Date(task.start);
    const taskEnd = new Date(task.end);
    if (start.getTime() > taskStart.getTime()) {
      start = taskStart;
    }
    if (end.getTime() < taskEnd.getTime()) {
      end = taskEnd;
    }
  }

  return [start, end];
}
