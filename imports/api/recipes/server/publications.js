/* eslint-disable prefer-arrow-callback */

import { Meteor } from 'meteor/meteor';

import { Lists } from '../recipes.js';

Meteor.publish('recipes.public', function recipesPublic() {
  return recipes.find({});
});