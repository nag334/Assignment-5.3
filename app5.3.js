// object declaration for name, age, salary and address  
var empDetails ={
    name:"Nagaraju Kukudala",
    age:25 ,
    salary:"25,000" ,
    address: {city:"Hyderabad", state:"Telangana",pincode:"500095" } // Nested Object

};


myDetails();// Calling myDetails function
// function for Console.log
function myDetails(){
console.log("Name :" + empDetails.name);  // prints Name on Console
console.log("Age :" + empDetails.age);     // prints Age on Console
console.log("Salary :" + empDetails["salary"]);   // prints Salary on Console
console.log("City :" + empDetails.address["city"]);  // prints City on Console
console.log("State :" + empDetails.address["state"]);  // prints State on Console
console.log("pincode :" + empDetails.address["pincode"]);  // prints Pincode on Console
    

    /* Console.log functions for printing name, 
    age, salary and address with city , state and pincode*/
 }