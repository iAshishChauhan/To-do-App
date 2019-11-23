const Task = require('../models/Task');

module.exports.deleteTask = function(req,res) {
    let id = req.query.id;
    Task.findByIdAndDelete(id, function(err){
        if(err) {
            console.log('Error in deleting the object from Database');
            return;
        }
        return res.redirect('back');
    });
}