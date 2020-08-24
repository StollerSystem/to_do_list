// BUsiness Logic

function TodoList () {
  let tasks = []
}

TodoList.prototype.addTask = function(task) {
  this.tasks.push(task)
}



function Task (task) {
  this.task = task
  this.complete = false  
}
  