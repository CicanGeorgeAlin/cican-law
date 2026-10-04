const search=document.querySelector("#search");
const input=document.querySelector("#law-search");
const result=document.querySelector("#search-result");
const question=document.querySelector("#question");

function beginQuestion(value){
  input.value=value;
  question.scrollIntoView({behavior:"smooth",block:"start"});
  setTimeout(()=>input.focus(),250);
}

search.addEventListener("submit",event=>{
  event.preventDefault();
  const q=input.value.trim();
  if(!q){input.focus();return;}
  result.textContent="Question captured: “"+q+"”. The verified legal search layer will connect it to jurisdiction, date, legal objects and authoritative sources as the archive grows.";
  question.scrollIntoView({behavior:"smooth",block:"start"});
});

document.querySelectorAll(".question-card").forEach(button=>{
  button.addEventListener("click",()=>beginQuestion(button.dataset.query));
});

document.querySelectorAll(".entry-card").forEach(button=>{
  button.addEventListener("click",()=>{
    if(button.dataset.entry==="search"){
      document.querySelector("#law-search").scrollIntoView({behavior:"smooth",block:"center"});
      setTimeout(()=>input.focus(),250);
    }else{
      question.scrollIntoView({behavior:"smooth",block:"start"});
    }
  });
});
