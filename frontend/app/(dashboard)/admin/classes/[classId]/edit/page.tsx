import ClassForm from "@/features/classes/components/ClassForm";

type Props = {
  params: Promise<{
    classId: string;
  }>;
};

export default async function EditClassPage({
  params,
}: Props) {
  const { classId } = await params;

  const mockClass = {
    name: "Class Six",

    teachers: [
      "Ratul",
      "Tim",
    ],

    students: [
      "Student One",
      "Student Two",
      "Student Three",
    ],
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">
        Edit Class #{classId}
      </h1>

      <ClassForm
        isEdit
        initialValues={mockClass}
      />
    </div>
  );
}