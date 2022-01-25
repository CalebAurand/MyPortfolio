// function mySubmit(event){
//     const email = document.testForm.email.value;
//     // write to get name or message
//     console.log(email)
//     const message = document.testForm.name.value;
//     console.log(message);
//   }

   
const placeForResults = document.getElementById("results")

new URLSearchParams(window.location.search).forEach((value, name) => {
  placeForResults.append(`${name} : ${value}`)
  placeForResults.append(document.createElement("br"))
})