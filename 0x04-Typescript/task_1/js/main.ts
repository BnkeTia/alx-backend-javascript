// Define the Teacher interface with specified and dynamic attributes
interface Teacher {
  firstName: string;
  lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any; // Allow any other dynamic attribute
}

// Implement the Teacher class
class TeacherImpl implements Teacher {
  // Properties that can only be modified during initialization
  constructor(
    public firstName: string,
    public lastName: string,
    public fullTimeEmployee: boolean,
    public location: string,
    public yearsOfExperience?: number,
  ) {}
}
