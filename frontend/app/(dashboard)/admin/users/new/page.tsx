import NewUserTile from "@/features/users/components/NewUserTile";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@gmail.com",
  },
  {
    id: 3,
    name: "Alex Johnson",
    email: "alex@gmail.com",
  },
];

export default function NewUsersPage() {
  return (
    <div className="space-y-3">
      {users.map((user) => (
        <NewUserTile
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
        />
      ))}
    </div>
  );
}
