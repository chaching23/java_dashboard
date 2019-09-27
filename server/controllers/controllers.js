const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = {
    index: function(req, res) {
        User.find({}, function(err, x){
    
            response.render('index', {users: x});
          
        }),
        


    new: function(req, res) {
            res.render('new');
        }),


    users: function(req, res) {
        var user = new User({name: req.body.name, age: req.body.age});
        user.save(function(err) {
        if(err){
            console.log("We have an error!", err);
            for(var key in err.errors){
                req.flash('registration', err.errors[key].message);
            }
            res.redirect('/');
        }
        else {
            res.redirect('view');
        }
    });
    },

    view: function(req, res) {
        User.find({}, function(err, x){
   
           res.render("view", {users: x});
   
       })
       },
}









app.post('/users', function(req, res) {
    var user = new User({name: req.body.name, species: req.body.species, strength: req.body.strength, weakness: req.body.weakness});
    user.save(function(err) {
        if(err) {
            console.log('something went wrong');
          } else { // else console.log that we did well and then redirect to the root route
            console.log('successfully added a user!');
          }
          res.redirect('/');
        })
      })


app.get('/delete/:id', function(req, res) {
    User.remove({_id: req.params.id}, function(err){
        console.log('removed')
        
});
res.redirect('/');
});

app.get('/show/:id', function(req, res) {
    User.findOne({_id: req.params.id}, function(err, x) {
        

res.render('view', {users: x});
});
});


app.get('/edit/:id', function(req, res) {
    User.findOne({_id: req.params.id}, function(err, x) {
        
res.render('edit', {users: x});
});
});

app.post('/update/:id', function(req, res) {
    // var user = new User({name: req.body.name, species: req.body.species, strength: req.body.strength, weakness: req.body.weakness});
    User.update({_id: req.params.id}, {name: req.body.name, species: req.body.species, strength: req.body.strength, weakness: req.body.weakness}, function(err){


        if(err) {
            console.log('something went wrong');
          } else { // else console.log that we did well and then redirect to the root route
            console.log('successfully added a user!');
          }
          res.redirect('/');
        })
      })
  

