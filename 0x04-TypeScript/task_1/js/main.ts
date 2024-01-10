// Teacher interface with specified attributes and dynamic property
interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

// Directors interface extending Teacher
interface Directors extends Teacher {
    numberOfReports: number;
}

// Function to create a Teacher object
const createTeacher = (teacherInfo: Teacher): Teacher => {
    const { firstName, lastName, fullTimeEmployee, yearsOfExperience, location, ...rest } = teacherInfo;
    return {
        firstName,
        lastName,
        fullTimeEmployee,
        yearsOfExperience,
        location,
        ...rest,
    };
};

// Function to create a Director object
const createDirector = (directorInfo: Directors): Directors => {
    const { firstName, lastName, fullTimeEmployee, yearsOfExperience, location, numberOfReports, ...rest } = directorInfo;
    return {
        firstName,
        lastName,
        fullTimeEmployee,
        yearsOfExperience,
        location,
        numberOfReports,
        ...rest,
    };
};

// Example usage
const teacher3: Teacher = createTeacher({
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
});

console.log(teacher3);

// Example usage for Directors
const director1: Directors = createDirector({
    firstName: 'John',
    fullTimeEmployee: true,
    lastName: 'Doe',
    location: 'London',
    numberOfReports: 17,
});

console.log(director1);

// Function to print teacher information
const printTeacher = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

// Interface for the printTeacher function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Example usage for printTeacher
const teacherString: string = printTeacher("John", "Doe");
console.log(teacherString);

// Interface for the StudentClass constructor
interface StudentConstructor {
    firstName: string;
    lastName: string;
}

// Interface for the StudentClass class
interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
}

// StudentClass class definition
class StudentClass implements StudentClass {
    private firstName: string;
    private lastName: string;

    constructor({ firstName, lastName }: StudentConstructor) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

// Example usage
const studentInstance = new StudentClass({ firstName: 'John', lastName: 'Doe' });

console.log(studentInstance.workOnHomework()); // Output: Currently working
console.log(studentInstance.displayName());    // Output: John
