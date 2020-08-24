// BUsiness Logic

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
  whatToDispaly.list.forEach(function(task) {
    htmlForTaskInfo += "<li id=" + task.id + ">" + task.description + "</li>";
  });
  console.log(htmlForTaskInfo);
  todoList.html(htmlForTaskInfo);
};


$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    let description = $("#description").val();
    let time = $("#time").val();
    let place = $("#place").val();
    //$("#list").append("<li>" + "</li>");

    let newTask = new Task(description,time,place);
    todoList.add(newTask)
    console.log(todoList.list)
    displayTodoList(todoList)


  });
});