document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  //Conditionals go here
  if (day === "tuesday" || day === "thursday") {
    // alert('CLASS DAY!')
    document.querySelector('#placeToSee').innerText = "CLASS DAY!!"
  } else if (day === "saturday" || day === "sunday") {
    // alert('Weekend!')
    document.querySelector('#placeToSee').innerText = "WEEKEND!"
  } else {
    // alert('BORRRRIIING!!')
    document.querySelector('#placeToSee').innerHTML = "BORRRRING!!"
  }

}
