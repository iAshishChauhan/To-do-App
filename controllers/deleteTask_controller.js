const Task = require('../models/Task');

module.exports.deleteTask = function(req,res) {
    let id = req.query.id;
    console.log(id);
    
    for(let i=0;i<id.length-1;i++){
        Task.findByIdAndDelete(id[i], function(err){
            if(err) {
                console.log('Error in deleting the object from Database');
                return;
            }
        });
    }
    return res.redirect('back');
}