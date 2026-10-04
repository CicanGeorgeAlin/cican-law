const form=document.querySelector("#search"),input=document.querySelector("#q"),message=document.querySelector("#search-message");
form.addEventListener("submit",e=>{e.preventDefault();const q=input.value.trim();if(!q){input.focus();return}message.textContent="Search captured: “"+q+"”. The verified legal search layer will connect this question to authoritative sources as the archive grows.";});
