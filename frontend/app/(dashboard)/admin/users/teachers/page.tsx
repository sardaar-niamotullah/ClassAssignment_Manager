const teachers = [
  {
    id: 1,
    name: "Alex Johnson",
    email: "alex@gmail.com",
  },
];

export default function TeachersPage() {
  return (
    <div className="space-y-4">
      {teachers.map((teacher) => (
        <div
          key={teacher.id}
          className="rounded-lg border p-4"
        >
          <h3 className="font-semibold">
            {teacher.name}
          </h3>

          <p>{teacher.email}</p>
        </div>
      ))}
    </div>
  );
}