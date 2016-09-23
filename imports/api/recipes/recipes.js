import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

Recipes = new Mongo.Collection('recipes');

RecipeSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    desc: {
        type: String,
        label: "Description"
    },
    author: {
        type: String,
        label: "Author",
        autoValue: function(){
            return this.userId
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "created At",
        autoValue: function(){
            return new Date();
        },
        autoform: {
            type: "hidden"
        }
    }
});

Recipes.attachSchema(RecipeSchema);