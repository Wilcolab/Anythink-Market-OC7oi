 
var seeder = require('mongoose-seed');
 
// Connect to MongoDB via Mongoose
seeder.connect(process.env.MONGODB_URI, function() {
 
  // Load Mongoose models
  seeder.loadModels([
    'models/User.js',
    'models/Item.js',
    'models/Comment.js'

  ]);
 
  // Clear specified collections
  seeder.clearModels(['Item','User','Comment'], function() {
 
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
 
  });
});
 
// Data array containing seed data - documents organized by Model

const users = []
const items = []

for (var i=0 ; i<105; i++){
    users.push({
        'username': `username${i}`,
        'email': `ex${i}@email.com`,
        'bio': `bio${i}`,
        'image': 'image',
    })
    items.push(
        {'title': `i${i}`,
            'description': "d1",
            'body': "b1",
            'tagList': ["dragons"]
            }
    )

}
var data = [
    {
        'model': 'Item',
        'documents': items
    },
    {
        'model': 'User',
        'documents': users
        
    }
];


// require("dotenv").config();

// var mongoose = require("mongoose");
// mongoose.connect(process.env.MONGODB_URI);
// var Item = mongoose.model("Item");

// var item = new Item(
//     {title: "i1",
//     description: "d1",
//     body: "b1",
//     tagList: ["dragons"]});
// item.save()