// Business Logic

function Todo () {
  this.list = [];
  this.currentId = 0;
}

Todo.prototype.add = function(task) {
  task.id = this.assignId();
  this.list.push(task);
}

Todo.prototype.delete = function(id) {
  for (let i=0; i<this.list.length; i ++) {
    if (this.list[i]) {
      if (this.list[i].id == id) {
        delete this.list[i];
        return true;
      }
    }
  };
  return false;
}

Todo.prototype.complete = function(id) {
  //console.log("COMPLETE")
  for (let i=0; i<this.list.length; i ++) {
    if (this.list[i]) {
      if (this.list[i].id == id) {
        //console.log("COMPLETE")
        this.list[i].complete = true         
      }
    }
  };  
}

Todo.prototype.assignId = function() {
  this.currentId  += 1;
  return this.currentId;
}

function Task (description,time,place) {
  this.description = description;
  this.time = time;
  this.place = place;   
  this.complete = false; 
}
  
Task.prototype.done = function() {
  console.log(this.complete)
  if (this.complete === false)
    this.complete = true
    console.log("Task set to complete!",this.complete)
}


//UI Logic -------------------
let todoList = new Todo();

function displayTodoList (whatToDispaly) {  
  let todoList = $("ul#todoList")
  let htmlForTaskInfo = "";
  let btnComplete = '"btn comp"'
  
  whatToDispaly.list.forEach(function(task) {
    if (task) {
      if (task.complete) {
        console.log(task.complete)
        btnComplete = '"btn comp green"'
        htmlForTaskInfo += "<li id="+task.id+">"+task.description+"/"+task.time+"/"+task.place+'<button class='+btnComplete+'id='+task.id+">Complete</button>"+"<button id="+task.id +' class="btn del">Delete</button>'+"</li>";
      } else {
        let btnComplete = '"btn comp"'
        htmlForTaskInfo += "<li id="+task.id+">"+task.description+"/"+task.time+"/"+task.place+'<button class='+btnComplete+'id='+task.id+">Incomplete</button>"+"<button id="+task.id +' class="btn del">Delete</button>'+"</li>";
      }      
    }    
  });
  console.log(htmlForTaskInfo);
  todoList.html(htmlForTaskInfo);
};

function attachButtonListeners () {
  $("ul#todoList").on("click",".comp", function() {
    console.log("CLICKED ON COMP BUTTON!"+this.id)
    todoList.complete(this.id)
    displayTodoList(todoList)
  });
  $("ul#todoList").on("click",".del", function() {
    console.log("CLICKED ON A DEL BUTTON!"+this.id)
    todoList.delete(this.id);
    displayTodoList(todoList)
  });
}

$(document).ready(function() {
  attachButtonListeners();
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let description = $("#description").val();
    let time = $("#time").val();
    let place = $("#place").val();
    let newTask = new Task(description,time,place);
    todoList.add(newTask)
    console.log(todoList.list)
    displayTodoList(todoList)
  });
});