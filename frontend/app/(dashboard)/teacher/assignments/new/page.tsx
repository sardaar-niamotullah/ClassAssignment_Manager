import AssignmentForm from "@/features/assignments/components/AssignmentForm";
import SectionHeading from "@/components/section-heading";

export default function NewAssignmentPage() {
  return (
    <div className="space-y-6">
      <SectionHeading
        title="Create assignment"
        description="Fill in the assignment name, class, marks, and deadline."
      />
      <AssignmentForm />
    </div>
  );
}
