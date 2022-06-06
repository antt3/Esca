'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Posts',
			[
				{
					title: 'How do season your fried eggs?',
					ownerId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'How do I win Top Chef?',
					ownerId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'What is the best kind of salt?',
					ownerId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'My opinion on Gordon Ramsay',
					ownerId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					title: 'What states can I buy Shark Fin Soup?',
					ownerId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					title: 'What is your favorite food?',
					ownerId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					title: 'What is the best grocery store for fresh produce?',
					ownerId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					title: 'Here is a bison burger recipe I like',
					ownerId: 9,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					title: 'Best kind of cake?',
					ownerId: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					title: 'How big is a "pinch of salt"?',
					ownerId: 6,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					title: 'Beginner Chef: Any tips?',
					ownerId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					title: 'What are some edible bugs?',
					ownerId: 10,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					title: 'Cantaloupe: Good or bad?',
					ownerId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					title: 'What is the best food to eat after I workout',
					ownerId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					title: 'Does anyone else drink OJ with pulp?',
					ownerId: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					title: 'Steak Seasoning Suggestions?',
					ownerId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					title: 'Best Fast Food Chain?',
					ownerId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			], {}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Posts', null, {});
	},
};
