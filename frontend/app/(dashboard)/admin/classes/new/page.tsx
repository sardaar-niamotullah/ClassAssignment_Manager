import ClassForm from "@/features/classes/components/ClassForm";
import SectionHeading from "@/components/section-heading";

export default function CreateClassPage() {
  return (
    <div className="space-y-6">
      <SectionHeading
        title="Create class"
        description="Set up a class and assign the teachers and students who belong to it."
      />
      <ClassForm />
    </div>
  );
}
