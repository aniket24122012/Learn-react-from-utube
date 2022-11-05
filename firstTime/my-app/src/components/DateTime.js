import React from "react"; 


var DateTime=()=>{
    var showDate = new Date();
    var displayDate=showDate.getDate()+'/'+(showDate.getMonth()+1)+'/'+showDate.getFullYear();
    var date=showDate.toDateString();
    var time=showDate.toTimeString();
    return(
        <div>
              <div>{displayDate}</div>
              <div>{date}</div>
              <div>{time}</div>
        </div>
    ); 
}
export default DateTime;