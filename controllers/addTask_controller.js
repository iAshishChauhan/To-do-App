var tasks = require('../tasks');

module.exports.AddTask = function(req,res) {
    tasks.Tasks.push({
        description: req.body.description,
        category: req.body.category,
        duedate: req.body.duedate
    });
    return res.redirect('back');
}