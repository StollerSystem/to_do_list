// BUsiness Logic

function TodoList () {
  this.tasks = [];
}

TodoList.prototype.addTask = function(task) {
  this.tasks.push(task)
}


function Task (task,time,place) {
  this.task = task;
  this.time = time;
  this.place = place;   
  this.complete = false; 
}
  