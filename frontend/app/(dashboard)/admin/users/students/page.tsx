const students = [
  {
    id: 1,
    name: "Student One",
    email: "student@gmail.com",
  },
];

export default function StudentsPage() {
  return (
    <div className="space-y-4">
      {students.map((student) => (
        <div key={student.id} className="rounded-lg border p-4">
          <h3 className="font-semibold">{student.name}</h3>

          <p>{student.email}</p>
        </div>
      ))}
    </div>
  );
}
