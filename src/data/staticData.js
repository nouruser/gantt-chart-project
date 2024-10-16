const staticData = [
  {
    start: new Date(2024, 9, 1),
    end: new Date(2024, 9, 15),
    name: "Project 1",
    id: "ProjectSample",
    type: "project",
    progress: "0", // On va calculer cela automatiquement
    hideChildren: false
  },
  {
    start: new Date(2024, 9, 1),
    end: new Date(2024, 9, 2, 12, 28),
    name: "Idea",
    id: "Task 0",
    progress: "50",
    type: "task",
    project: "ProjectSample"
  },
  {
    start: new Date(2024, 9, 2),
    end: new Date(2024, 9, 4),
    name: "Research",
    id: "Task 1",
    progress: "20",
    type: "task",
    project: "ProjectSample"
  },
  {
    start: new Date(2024, 9, 4),
    end: new Date(2024, 9, 8),
    name: "Discussion with team",
    id: "Task 2",
    progress: "32",
    type: "task",
    project: "ProjectSample"
  },
  {
    start: new Date(2024, 9, 4),
    end: new Date(2024, 9, 12),
    name: "Discussion with client",
    id: "Task 8",
    progress: "52",
    type: "task",
    project: "ProjectSample"
  },
  {
    start: new Date(2024, 9, 1),
    end: new Date(2024, 9, 8),
    name: "Another Project",
    id: "ProjectSample2",
    type: "project",
    progress: "0", // Calcul automatique
    hideChildren: false
  },
  {
    start: new Date(2024, 9, 1),
    end: new Date(2024, 9, 3),
    name: "Design Phase",
    id: "Task 3",
    progress: "60",
    type: "task",
    project: "ProjectSample2"
  },
  {
    start: new Date(2024, 9, 3),
    end: new Date(2024, 9, 5),
    name: "Implementation",
    id: "Task 4",
    progress: "30",
    type: "task",
    project: "ProjectSample2"
  },
  {
    start: new Date(2024, 9, 5),
    end: new Date(2024, 9, 8),
    name: "Testing",
    id: "Task 5",
    progress: "20",
    type: "task",
    project: "ProjectSample2"
  },
  {
    start: new Date(2024, 9, 5),
    end: new Date(2024, 9, 8),
    name: "Testing and deploying",
    id: "Task 7",
    progress: "20",
    type: "task",
    project: "ProjectSample2"
  }
];

export default staticData;
