export type UserRole = "admin" | "teacher" | "student" | "pending";

export type MockUser = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  className?: string;
};

export const mockUsers: MockUser[] = [
  {
    id: 1,
    name: "Amina Rahman",
    email: "admin@classassign.test",
    password: "Admin123!",
    role: "admin",
  },
  {
    id: 2,
    name: "Tariq Hasan",
    email: "teacher@classassign.test",
    password: "Teacher123!",
    role: "teacher",
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    email: "student@classassign.test",
    password: "Student123!",
    role: "student",
    className: "Class Eleven",
  },
  {
    id: 4,
    name: "New User",
    email: "newuser@classassign.test",
    password: "Newuser123!",
    role: "pending",
  },
];

export const mockClasses = [
  {
    id: 1,
    name: "Class Six",
    teachers: ["Tariq Hasan"],
    students: ["Nusrat Jahan"],
    studentCount: 14,
    assignmentCount: 4,
  },
  {
    id: 2,
    name: "Class Seven",
    teachers: ["Amina Rahman"],
    students: ["New User"],
    studentCount: 11,
    assignmentCount: 6,
  },
];

export const mockAdminAssignments = [
  {
    id: 1,
    name: "Math Homework",
    className: "Class Six",
    createdBy: "Tariq Hasan",
    assignmentNumber: 1,
    submissionDeadline: "20 Aug 2026",
  },
  {
    id: 2,
    name: "English Essay",
    className: "Class Seven",
    createdBy: "Amina Rahman",
    assignmentNumber: 2,
    submissionDeadline: "25 Aug 2026",
  },
];

export const mockTeacherAssignments = [
  {
    id: 1,
    name: "Math Homework",
    totalMarks: 100,
    deadline: "20 Aug 2026",
    className: "Class Six",
    isPublished: true,
    questionPdf: "math-homework.pdf",
  },
  {
    id: 2,
    name: "Geometry Quiz",
    totalMarks: 50,
    deadline: "28 Aug 2026",
    className: "Class Seven",
    isPublished: false,
    questionPdf: "geometry-quiz.pdf",
  },
];

export const mockStudentAssignments = [
  {
    id: 1,
    name: "Math Homework",
    totalMarks: 100,
    deadline: "20 Aug 2026",
    questionPdf: "math-homework.pdf",
  },
  {
    id: 2,
    name: "Science Project",
    totalMarks: 75,
    deadline: "30 Aug 2026",
    questionPdf: "science-project.pdf",
  },
];

export const mockTeacherSubmissions = [
  {
    id: 1,
    assignmentName: "Math Homework",
    className: "Class Six",
    studentId: "2026001",
    studentName: "Nusrat Jahan",
    totalMarks: 100,
    awardedMarks: 85,
    submissionDate: "18 Aug 2026",
    dueDate: "20 Aug 2026",
    questionPdf: "math-homework.pdf",
    answerPdf: "nusrat-answer.pdf",
  },
  {
    id: 2,
    assignmentName: "Geometry Quiz",
    className: "Class Seven",
    studentId: "2026002",
    studentName: "Rahim Uddin",
    totalMarks: 50,
    awardedMarks: undefined,
    submissionDate: "27 Aug 2026",
    dueDate: "28 Aug 2026",
    questionPdf: "geometry-quiz.pdf",
    answerPdf: "rahim-answer.pdf",
  },
];

export const mockStudentSubmissions = [
  {
    id: 1,
    assignmentName: "Math Homework",
    studentId: "2026003",
    totalMarks: 100,
    awardedMarks: 85,
    submissionDate: "18 Aug 2026",
    dueDate: "20 Aug 2026",
    questionPdf: "math-homework.pdf",
    answerPdf: "my-answer.pdf",
  },
];

export const mockStats = {
  admin: [
    { label: "Users", value: "24", detail: "1 new user waiting" },
    { label: "Classes", value: "8", detail: "2 active teachers" },
    { label: "Published assignments", value: "14", detail: "6 graded submissions" },
  ],
  teacher: [
    { label: "My classes", value: "2", detail: "1 draft assignment" },
    { label: "Assignments", value: "9", detail: "3 published" },
    { label: "Submissions", value: "18", detail: "4 awaiting marks" },
  ],
  student: [
    { label: "Open assignments", value: "4", detail: "1 due soon" },
    { label: "Submitted", value: "6", detail: "1 waiting review" },
    { label: "Progress", value: "78%", detail: "Keep going" },
  ],
  pending: [
    { label: "Status", value: "Pending", detail: "Admin will assign a role soon" },
    { label: "Action", value: "Wait", detail: "Check back later" },
    { label: "Login", value: "Allowed", detail: "Use your temporary credentials" },
  ],
} as const;

