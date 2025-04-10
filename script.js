const inputbox=document.getElementById("list-name");
const listcontainer=document.getElementById("list-container");
const completedcounter=document.getElementById("completed-counter");
const uncompletedcounter=document.getElementById("uncompleted-counter");

function updateCounter()
{
   const completedtasks=document.querySelectorAll(".completed").length;
   const uncompletedtasks=document.querySelectorAll("li:not(.completed)").length;
   completedcounter.textContent=completedtasks;
   uncompletedcounter.textContent=uncompletedtasks;

}
function addtask()
{
   const task=inputbox.value.trim();
   if(!task)
   {
      alert("please add new task!");
      return;
   }
const li=document.createElement("li");
li.innerHTML=
`<label>
  <input type="checkbox">
  <span>${task}</span>
</label>
<span class="edit-btn">Edit</span>
<span class="delete-btn">Delete</span>`;

listcontainer.appendChild(li);
inputbox.value = " ";



const checkbox=li.querySelector("input");
const edit=li.querySelector(".edit-btn");
const taskspan=li.querySelector("span");
const del=li.querySelector(".delete-btn");

 checkbox.addEventListener("click",function(){
   li.classList.toggle("completed",checkbox.checked);
   updateCounter();
   

 });

 edit.addEventListener("click",function(){
   const update=prompt("Edit task:",taskspan.textContent);
   if(update !== null)
   {
      taskspan.textContent=update;
      li.classList.remove("completed");
      checkbox.checked=false;
      updateCounter();
      

   }

 });

 del.addEventListener("click",function() {
      if(confirm("Are you sure you want to delete this task?")){

         li.remove();
         updateCounter();
         

      }


 });
 updateCounter();


}

