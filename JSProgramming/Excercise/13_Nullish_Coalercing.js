let emp_details = {
    Name : "Ramya",
    EmpId : "ABC123",
    Comp : "ABC",
    Exp : 10,
    DOJ : "18/Jul/2024"

}
console.log(emp_details.DOJ);
//Nullish operator (??)
emp_details.DOL??="Current date"
console.log(emp_details.DOL);