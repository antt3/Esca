'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Posts',
			[
				{
					title: 'How do you season your fried eggs?',
					userId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'How do I win Top Chef?',
					userId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'What is the best kind of salt?',
					userId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'My opinion on Gordon Ramsay',
					userId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					title: 'What states can I buy Shark Fin Soup?',
					userId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					title: 'What is your favorite food?',
					userId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					title: 'What is the best grocery store for fresh produce?',
					userId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					title: 'Here is a bison burger recipe I like',
					userId: 9,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					title: 'Best kind of cake?',
					userId: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					title: 'How big is a "pinch of salt"?',
					userId: 6,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					title: 'Beginner Chef: Any tips?',
					userId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					title: 'What are some edible bugs?',
					userId: 10,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					title: 'Cantaloupe: Good or bad?',
					userId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					title: 'What is the best food to eat after I workout',
					userId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					title: 'Does anyone else drink OJ with pulp?',
					userId: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					title: 'Steak Seasoning Suggestions?',
					userId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
					title: 'Best Fast Food Chain?',
					userId: 1,
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
