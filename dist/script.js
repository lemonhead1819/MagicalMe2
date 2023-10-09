function TravelAnswer(){
  var password = document.getElementById("RecordTravels");
  var passwordText = password.value;
  if(passwordText=="NTA"){
    return true;
  }
  alert("try again")
  return false;
}