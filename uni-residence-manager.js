// University-Residence-Management-System using javascript object oriented programming paradigm


// Residence Types
const ResidenceTypes = {
    single_dorm: 'Single Dorm',
    apartment: 'Apartment',
}


// Residence class
class Residence {
    constructor(name, type, adress, rooms) {
        this.name = name;
        this.type = type;
        this.adress = adress;
        this.rooms = rooms;
    }
}


// Dorm room class
class DormRoom {
    constructor(roomNumber, capacity) {
        this.roomNumber = roomNumber;
        this.capacity = capacity;
    }
}


// Apartment
class Apartment {
    
}