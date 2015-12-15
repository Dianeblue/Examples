var user_inout = document.querySelector('input#search').value,
output_element =  document.querySelector('#output');

if (user_input !== "happiness") {
  if (!user_input) { // this tells us something important about empty strings
  // what would happen is we tried to use?    user_input =
  document.querySelector('input').value = "hey you, type here :z";

  } else {
  output_element.textContent = "you're searching for the wrong thing" ;
}
} else {

  output_element.textContent = "ahh, the enlightened one!";
}
