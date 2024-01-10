// Teacher interface with specified attributes and dynamic property
interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Allow any additional attribute
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

// Example usage
const teacher3: Teacher = createTeacher({
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
});

console.log(teacher3);
