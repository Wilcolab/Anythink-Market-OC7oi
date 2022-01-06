 
var seeder = require('mongoose-seed');
 
// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost:27017', function() {
 
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
var data = [
    {
        'model': 'Item',
        'documents': [
            {'title': "i1",
            'description': "d1",
            'body': "b1",
            'tagList': ["dragons"]
            }
        ]
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