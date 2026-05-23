//Wait for HTML to finish loading
document.addEventListener('DOMContentLoaded',function(){

  //Get the form element using its ID
  const studentForm = document.getElementById('studentForm');

  //Listen for when the student clicks the submit button
  studentForm.addEventListener('submit',function(event){
    //prevent the page from automaticallyrefreshing
    event.preventDefault();

    //Grab the values the user typed into the form
    const name = document.getElementById('full-name').value;
    const dept = document.getElementById('department').value;

    //Pop up a custom welcome message!
    alert(`Welcome back, ${name}! Logged into the ${dept}portal successfully.`);
  });
  });