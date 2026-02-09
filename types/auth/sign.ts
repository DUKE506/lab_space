interface SignUpRequestDto {
  name: string;
  email: string;
  password: string;
  phone: string;
  university: string;
  department: string;
  userType: "STUDENT" | "PROFESSOR";
}
