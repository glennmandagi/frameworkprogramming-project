// Assignment 2

var todos = [{
    text: 'Go to church',
    completed: true
},{
    text: 'Eating Food',
    completed: false
},{
    text: 'Clean Bedroom',
    completed: true
},{
	text: 'Relaxing',
    completed: false
},{
	text:'Playing Playstation',
    completed: true
}]

todos.deleteIndex(function (todos) {
    return todos.completed === 'false';
});

var deleteIndex = function (todos, todosCompleted) {
 return todos.delete(function (todos){
    return todos.delete.toLowerCase() === todosCompleted.toLowerCase();  
});
console.log(todos);