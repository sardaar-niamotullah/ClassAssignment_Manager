import SectionHeading from "@/components/section-heading";
import { mockUsers } from "@/lib/mock-data";
import NewUserTile from "@/features/users/components/NewUserTile";

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <SectionHeading
        title="All users"
        description="Assign a role, promote to teacher or student, or remove accounts from the system."
      />
      <div className="space-y-3">
        {mockUsers.map((user) => (
          <NewUserTile key={user.id} id={user.id} name={user.name} email={user.email} />
        ))}
      </div>
    </div>
  );
}
