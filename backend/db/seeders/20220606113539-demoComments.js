'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Comments',
			[
				{
					description: 'Sat & Pepper is my go-to.',
					userId: 2,
					PostId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					description: 'Master Salt, Black Pepper, Lemon Pepper, & Garlic Jalapeno Seasoning.',
					userId: 1,
					PostId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					description: 'Lots and lots of time in the kitchen.',
					userId: 3,
					PostId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					description: 'Obviously Himalayan Pink Salt.',
					userId: 4,
					PostId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					description: 'I would say sea salt for me.',
					userId: 5,
					PostId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					description: 'Kosher salt.',
					userId: 6,
					PostId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					description: 'I think sea salt is best for sure.',
					userId: 7,
					PostId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					description: 'Cannot go wrong with sea salt.',
					userId: 1,
					PostId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					description: 'Overrated, his food is mid.',
					userId: 3,
					PostId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					description: 'Who even are you.',
					userId: 10,
					PostId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					description: 'Every state except California, Deleware, Florida, Hawaii, Illinois, Maryland, Massachusetts, Nevada, New Jersey, New York, Oregon, Rhode Island, Texas, and Washington.',
					userId: 8,
					PostId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					description: 'A good Grilled Cheese.',
					userId: 7,
					PostId: 6,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					description: 'Philly Cheese Steaks.',
					userId: 1,
					PostId: 6,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					description: 'Gyros',
					userId: 4,
					PostId: 6,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					description: 'Anything with chili and cheese',
					userId: 6,
					PostId: 6,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					description: 'BBQ pork fried rice',
					userId: 7,
					PostId: 6,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					description: 'Sprouts',
					userId: 3,
					PostId: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					description: 'Trader Joes',
					userId: 10,
					PostId: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					description: 'https://www.thepioneerwoman.com/food-cooking/recipes/a35940749/bison-burger-recipe/',
					userId: 9,
					PostId: 8,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					description: 'Nice, I will have to try this recipe soon.',
					userId: 6,
					PostId: 8,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					description: 'Champagne Cake',
					userId: 1,
					PostId: 9,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					description: 'Red Velvet',
					userId: 3,
					PostId: 9,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					description: 'German triple chocolate cake',
					userId: 2,
					PostId: 9,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					description: 'A pinch',
					userId: 2,
					PostId: 10,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					description: 'If you cook on a higher tempature than you need, it is going to overcook.',
					userId: 7,
					PostId: 11,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					description: 'Follow the directions when you are starting out, then try experimenting and adding flavors to your recipes.',
					userId: 1,
					PostId: 11,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					description: 'Crickets, snails, and some types of spiders are all edible!',
					userId: 2,
					PostId: 12,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					description: 'Bad, definitely bad',
					userId: 9,
					PostId: 13,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					description: 'Terrible',
					userId: 10,
					PostId: 13,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					description: 'Gross',
					userId: 2,
					PostId: 13,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					description: 'I think they are alright, I do not understand all the hate.',
					userId: 3,
					PostId: 13,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					description: 'Something high in protein to build musle.',
					userId: 5,
					PostId: 14,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					description: 'No.',
					userId: 4,
					PostId: 15,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					description: 'I can not list them all but i always add for basics: Worcestershire sauce, Tabasco, Seasoned salt, and ground black pepper.',
					userId: 1,
					PostId: 13,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					description: 'Popeyes just for their spicy chicken sandwich.',
					userId: 1,
					PostId: 14,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					description: 'Jack in the box for the curly fries.',
					userId: 7,
					PostId: 14,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					description: 'Wendys because I like bacon',
					userId: 9,
					PostId: 14,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        
			], {}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Comments', null, {});
	},
};