// BUsiness Logic

function Todo () {
  this.tasks = [];
}

Todo.prototype.add = function(task) {
  this.tasks.push(task)
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

let todoList =  new Todo();
let task1 = new Task("Laundry","Tomorrow","Home");
todoList.add(task1)