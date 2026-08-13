import { Button } from "@/components/ui/button";

import ClassCard from "@/features/classes/components/ClassCard";

const classes = [
  {
    id: 1,
    name: "Class Six",
    teachers: [
      "Ratul",
      "Tim",
      "Bokul",
    ],
    studentCount: 4,
    assignmentCount: 2,
  },
  {
    id: 2,
    name: "Class Seven",
    teachers: [
      "Sakib",
      "Nahid",
    ],
    studentCount: 12,
    assignmentCount: 5,
  },
];

export default function ClassesPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          Classes
        </h1>

        <Button>
          Create New Class
        </Button>
      </div>

      {classes.map((classItem) => (
        <ClassCard
          key={classItem.id}
          id={classItem.id}
          name={classItem.name}
          teachers={classItem.teachers}
          studentCount={classItem.studentCount}
          assignmentCount={
            classItem.assignmentCount
          }
        />
      ))}
    </div>
  );
}