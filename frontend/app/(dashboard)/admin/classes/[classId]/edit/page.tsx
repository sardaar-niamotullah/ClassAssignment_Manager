import ClassForm from "@/features/classes/components/ClassForm";
import SectionHeading from "@/components/section-heading";

type Props = {
  params: Promise<{
    classId: string;
  }>;
};

export default async function EditClassPage({ params }: Props) {
  const { classId } = await params;

  const mockClass = {
    name: "Class Six",

    teachers: ["Ratul", "Tim"],

    students: ["Student One", "Student Three"],
  };

  return (
    <div className="space-y-6">
      <SectionHeading
        title={`Edit class #${classId}`}
        description="Update the class name and reassign teachers or students."
      />
      <ClassForm isEdit initialValues={mockClass} />
    </div>
  );
}
