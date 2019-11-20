var tasks = require('../tasks');

module.exports.home = function(req, res) {
    return res.render('home', {
        title: "ToDO App",
        todo_tasks: tasks.Tasks
    });
}