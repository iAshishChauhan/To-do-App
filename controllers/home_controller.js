const Task = require('../models/Task');

module.exports.home = function(req, res) {

    Task.find({}, function(err, tasks){
        if(err) {
            console.log('Error in getting Tasks from DB');
            return;
        }

        return res.render('home', {
            title: "ToDO App",
            todo_tasks: tasks
        });

    });
}