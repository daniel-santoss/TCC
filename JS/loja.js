function pes() {
  let input = document.getElementById('pesquisa').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('prod1');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="flex";
      }
  }
}