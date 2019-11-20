const Task = require('../models/Task');

module.exports.AddTask = function(req,res) {
    Task.create({
        description: req.body.description,
        category: req.body.category,
        duedate: req.body.duedate
    },function(err, newTask){
        if(err) {
            console.log('Error in creating Task');
            return;
        }
        return res.redirect('back');
    });
}