
async function getCurrentDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2,'0');
    let mm = String(today.getMonth()+1).padStart(2,'0')
    let yyyy = today.getFullYear();
    //let date =  yyyy + '-' + mm +'/' + yyyy;
    return {
        'Current_Day' : 'dd',
        'Current_Month' : 'mm',
        'Current_Year' : 'yyyy'
    };    
}
export{getCurrentDate}

async function getFutureMonth(addMonth:number) {
    
    const dd = await getCurrentDate();
    let currentDay = dd.Current_Day;
    let currentMonth = dd.Current_Month;
    let currentYear = dd.Current_Year;
   if(addMonth>0 && addMonth<12)
   {
        currentMonth = currentMonth + addMonth;
        return {
            "Date" : currentDay,
            "Month" : currentMonth,
            "Year": currentYear
           } 
   }
   else{
    let monthsToAdd = (addMonth/12)+currentMonth;
    let yearsToAdd = addMonth%12 + currentYear;
    return {
        "Date" : currentDay,
        "Month" : monthsToAdd,
        "Year": yearsToAdd
       } 
   }
   
    
 }
export{getFutureMonth}   


async function getFutureDate(addDays:number) {
// Get the current date
const todayDate = new Date();
// Number of days that we want to add to the current date
const days = 7;

const newDate = new Date(todayDate);
newDate.setDate(newDate.getDate() + addDays);
return newDate.toDateString();

}
export{getFutureDate}



async function getFutureYear(addYear:number) {
    // Get the current date
    const todayDate = new Date();
    // Number of days that we want to add to the current date
    const days = 7;
    
    const newDate = new Date(todayDate);
    newDate.setDate(newDate.getDate() + addYear);
    return newDate.toDateString();
    
    }