import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/layouts/HomeLayout';
import '../../ui/layouts/MainLayout';

//Pages
import '../../ui/pages/recipes.js'
import '../../ui/pages/newRecipe.js';

//ROUTES
FlowRouter.route('/', {
	name: 'home',
	action(){
		BlazeLayout.render('HomeLayout');
	}
})

FlowRouter.route('/recipe-book', {
	name: 'recipe-book',
	action(){
		BlazeLayout.render('MainLayout', { main : 'recipes'} );
	}
})