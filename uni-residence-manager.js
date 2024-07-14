// University-Residence-Management-System using javascript object oriented programming paradigm


// Residence class
// Encapsulation: class bundels attributes and a method that assigns a student to a residence
class Residence {
    constructor(name, address, occupied = false) {
        this.name = name;
        this.address = address;
        this.occupied = occupied;
    }

    // Method to assign a student to a residence
    // Abstraction: method hides the implementation details of how a student is assigned to a residence
    assignStudent(student) {
        if (this.occupied) {
            throw new Error(`This residence is already occupied by ${this.student.name}`);
        }
        this.occupied = true;
        this.student = student;
    }

}


// Dormitory class - inherits from Residence
// Since dorms are all single rooms we only need to know the size in square footage
class Dormitory extends Residence {
    constructor(name, address, size, occupied = false) {
        super(name, address, occupied);
        this.size = size;
        this.rent = this.calculateRent();
    }

    // Method to calculate fixed rent based on the size of the dorm
    // Abstraction, Polymorphism
    calculateRent() {
        return this.size * 2;
    }
}

// Apartment class - inherits from Residence
// Since apartments have multiple rooms we need to know the number of bedrooms
class Apartment extends Residence {
    constructor(name, address,  bed_rooms, occupied = false) {
        super(name, address, occupied);
        this.bed_rooms = bed_rooms;
        this.rent = this.calculateRent();
    }

    // Method to calculate a tiered rent based on the number of bedrooms
    // Abstraction, Polymorphism
    calculateRent() {
        if (this.bed_rooms === 1) {
            return 1000;
        } else if (this.bed_rooms === 2) {
            return 1500;
        } else {
            return 2000;
        }
    }
}

// Student class
// Encapsulation: class bundels attributes of a student
class Student {
    constructor(name, studentId, gender, residence = null) {
        this.name = name;
        this.studentId = studentId;
        this.gender = gender;
        this.residence = residence;
    }
}


// Maintenance Request class - responsible for maintaining the residence
// Encapsulation: class bundels attributes of a maintenance request
class MaintenanceRequest {
    static statuses = ["submitted", "in progress", "completed"];

    constructor(issue, description, student, employee = null) {
        this.issue = issue;
        this.description = description;
        this.status = 'submitted'; 
        this.student = student;
        this.employee = employee;
    }

    // Method to update maintenance request with validation
    // Abstraction, Polymorphism
    updateStatus(newStatus) {
        if (!MaintenanceRequest.statuses.includes(newStatus)) {
            throw new Error(`Invalid status. Must be one of: ${MaintenanceRequest.statuses.join(", ")}`);
        }
        this.status = newStatus;
    }
}


// Create a new residence
// Polymorphism: dorm1 and apartment1 are both residences but have different attributes
let dorm1 = new Dormitory('Dorm 1', '1234 Dormitory Street', 500);
let apartment1 = new Apartment('Apartment 1', '1234 Apartment Street', 2);

// Create a new student
let student1 = new Student('John Doe', '123456', 'male', dorm1);
let student2 = new Student('Jane Doe', '654321', 'female', apartment1);

// Create a new maintenance request
let maintenanceRequest1 = new MaintenanceRequest('Leaky Faucet', 'The faucet in my room is leaking', student1, 'John Smith');
let maintenanceRequest2 = new MaintenanceRequest('Broken Window', 'The window in my room is broken', student2, 'Jane Smith');

// Update the status of a maintenance request
maintenanceRequest1.updateStatus('in progress');
maintenanceRequest2.updateStatus('completed');


// Display the residence
console.log(dorm1);
console.log(apartment1);

// Display the student
console.log(student1);
console.log(student2);

// Assign a student to a residence
dorm1.assignStudent(student1);
apartment1.assignStudent(student2);
// apartment1.assignStudent(student1); // Error: already occupied by John Doe

// Display the maintenance request
console.log(maintenanceRequest1);
console.log(maintenanceRequest2);
