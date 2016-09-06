var app = angular.module("MyApp", []);


app.controller("TodoController",function ($scope){
    $scope.appTitle = "ToDo List";
    $scope.saved = localStorage.getItem('todos');
   //$scope.saveds= localStorage.getItem('Todos');
    $scope.todos = (localStorage.getItem('todos')!==null) ? JSON.parse($scope.saved) : [ {text: 'Learn AngularJS', done: false}, {text: 'Build an Angular app', done: false} ];
    localStorage.setItem('todos', JSON.stringify($scope.todos));
        $scope.Todos =  $scope.todos;


    $scope.addTodo = function() {
        $scope.todos.push({
            text: $scope.todoText,
            done: false
        });
        $scope.todoText='';
         //clear the input after adding
        localStorage.setItem('todos', JSON.stringify($scope.todos));
        $scope.Todos=$scope.todos;
    };

    $scope.archive = function() {
        var oldTodos = $scope.todos;
        //$scope.todos=$scope.Todos;
        $scope.todos = [];
        angular.forEach(oldTodos, function(todo){
            if (!todo.done)
                $scope.todos.push(todo);
        });
        localStorage.setItem('todos', JSON.stringify($scope.todos)); 
    };
     $scope.all = function() {
        //var oldTodos = $scope.todos;
        $scope.todos =  $scope.Todos;
 
    };

    $scope.delete = function (index) {

 
        var oldTodo = $scope.todos;
        $scope.cnt=0;
        $scope.todos = [];
        angular.forEach(oldTodo, function(todo){            
            if ($scope.cnt!=index)
                $scope.todos.push(todo);
        $scope.cnt=$scope.cnt+1;
        });
        localStorage.setItem('todos', JSON.stringify($scope.todos)); 
         $scope.Todos =  $scope.todos;
    };
});