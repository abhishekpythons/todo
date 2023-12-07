new Vue({
    el: '#app',
    data: {
        newTodo: '',
        todos: []
    },
    methods: {
        addTodo: function () {
            if (this.newTodo.trim() !== '') {
                this.todos.push(this.newTodo.trim());
                this.newTodo = '';
            }
        },
        removeTodo: function (index) {
            this.todos.splice(index, 1);
        }
    }
});
