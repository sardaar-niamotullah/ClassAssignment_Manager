import AssignmentForm from "@/features/assignments/components/AssignmentForm";

export default function NewAssignmentPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Create Assignment</h1>

      <AssignmentForm />
    </div>
  );
}
