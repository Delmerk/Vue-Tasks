Vue.component('tasks', {
    template: `
    <section class="todoapp">
        <header class="header">
            <h1>Tareas</h1>
            <input v-on:keyup.enter="addTask" v-model="newTask" type="text" class="new-todo">
        </header>
        <section>
            <ul class="todo-list">
                <li class="todo" is="task" v-for="task in tasks" :task="task"></li>
            </ul>
        </section>
        <footer class="footer">
            <span class="todo-count">Completas: {{ completedTasks }} | Incompletas: {{ incompletedTasks }}</span>
        </footer>
    </section>
    `,
    data: function(){
        return {
            message: "",
            newTask: "",
            tasks: [
                { title: "Aprender JavaScript", completed: true },
                { title: "Aprender Vue.js", completed: true },
                { title: "Mejorar en PHP", completed: false }
            ]
        }
    },
    methods: {
        addTask: function () {
            if (this.newTask.length <= 2) return alert('La tarea no puede estar vacía');

            this.tasks.push({
                title: this.newTask,
                completed: false
            });
            this.newTask = "";
        },        
        
    },
    computed:{
        incompletedTasks: function () {
            return this.tasks.filter(function (task) {
                return !task.completed;
            }).length;
        },
        completedTasks: function () {
            return this.tasks.filter(function (task) {
                return task.completed;
            }).length;
        },
        
    },
});


Vue.component('task', {
    props: ['task'],
    // No es necesario pasar la task por (parametro) ya que la estamos pasando por props
    template: `
        <li :class="taskClasses">
        <div class="view">
            <input type="checkbox" class="toggle" v-model="task.completed"/>
            <label v-text="task.title"></label>
        </div>
        </li>
        `,
        // methods: {
        // <span @click="completeTask()" v-bind:class="taskClasses"></span>
        // completeTask: function () {
        //     this.task.completed = ! this.task.completed
        // },
        
    // },
    // Si a un methods su resultado se guarda en cache y puede ser reutilizado sin necesidad de volver a ejecutar la operacion
    computed:{
        taskClasses: function () {
            // return ['glyphicon', this.task.completed ? 'glyphicon-check' : 'glyphicon-unchecked']
            return {completed: this.task.completed};
        },
    }
});

var app = new Vue({
    el: '#app',
    
    computed: {

    }
})