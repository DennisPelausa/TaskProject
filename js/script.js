function setCurrentTime() {
    var myDate = new Date();
  
    let daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Aug', 'Oct', 'Nov', 'Dec'];
  
  
    let date = myDate.getDate();
    let month = monthsList[myDate.getMonth()];
    let year = myDate.getFullYear();
    let day = daysList[myDate.getDay()];
  
    let today = `${date} ${month} ${year}, ${day}`;
  
    let amOrPm;
    let twelveHours = function() {
      if (myDate.getHours() > 12) {
        amOrPm = 'PM';
        let twentyFourHourTime = myDate.getHours();
        let conversion = twentyFourHourTime - 12;
        return `${conversion}`
  
      } else {
        amOrPm = 'AM';
        return `${myDate.getHours()}`
      }
    };
    let hours = twelveHours();
    let minutes = myDate.getMinutes();
    let seconds = myDate.getSeconds();
  
    let currentTime = `${hours}:${minutes}:${seconds} ${amOrPm}`;
    
    document.getElementById('current-time').innerText = today + ' ' + currentTime
  }
  
  setInterval(function() {
    setCurrentTime();
  }, 1000);

let addTaskBtn = document.querySelector("#addBtn");
addTaskBtn.addEventListener("click", addTask);

function addTask() {
    let TaskName = document.querySelector("#addTask").value;
    
    //get the parent node
   let taskList = document.querySelector("#tasks");

   let taskItem = document.createElement("div");
   let taskInput = document.createElement("input");
   taskInput.type = "text";
   taskInput.setAttribute("disabled", "");
   taskInput.value = TaskName;
   taskInput.defaultValue = TaskName;

   let editBtn = document.createElement("button");
   editBtn.innerHTML= '<span class="material-symbols-rounded">edit_square</span>';
   editBtn.classList = "editBtn";
   editBtn.addEventListener("click", editValue);

   let delBtn = document.createElement("button");
   delBtn.innerHTML= '<span class="material-symbols-rounded">delete</span>';
   delBtn.classList = "delBtn";
   delBtn.addEventListener("click", delValue);

   //append
   taskList.appendChild(taskItem);
   taskItem.appendChild(taskInput);
   taskItem.appendChild(editBtn);
   taskItem.appendChild(delBtn);

   //del button
   function delValue() {
    this.parentNode.remove()
  }

   function editValue() {
    //removed disabled attribute
    taskInput.removeAttribute("disabled", "");
    //disabled the edit
    editBtn.setAttribute("disabled", "")

    //create save button
    let saveBtn = document.createElement("button");
    saveBtn.innerHTML = '<span class="material-symbols-rounded">save_as</span>';
    saveBtn.classList = "saveBtn";
    saveBtn.addEventListener("click", saveValue);

    //append ulit
    taskItem.appendChild(saveBtn);

    function saveValue() {
        let text = "Are you sure you want to save " + taskInput.value + " as your task?";
        if (confirm(text) == true) {
        let newValue = taskInput.value;
        nameInput.defaultValue = newValue;    
        taskInput.setAttribute("disabled", "");  
        editBtn.removeAttribute("disabled", "");
        taskItem.removeChild(saveBtn);
        text = "Saved!";
              }   
        else {
            text = "Changes not saved";
             //disable the edit    
            editBtn.removeAttribute("disabled", "");
            //disable name input
            taskInput.setAttribute("disabled", "");
            //saveBtn.setAttribute("display", "none")
            taskItem.removeChild(saveBtn);
            taskInput.value = taskInput.defaultValue;
           
        }  
        alert (text); 
        
    }
   }
   
}