import React from 'react';
import {render} from 'react-dom';

import KanbanBoard from './KanbanBoard';

let cardsList = [
	{
		id: 1,
		title: "doing the lab",
		description: "why not",
		color: '#BD8D31',
		status: "in-progress",
		tasks: []
	},
	{
		id: 2,
		title: "coffee!",
		description: "milk",
		color: '#3A7E28',
		status: "todo",
		tasks: []
		
	},
	{
		
		id: 2,
		title: "no thanks",
		description: "do not do it",
		color: '#3A7E28',
		status: "no mate",
		tasks: []
		
	},
	{
		id: 2,
		title: "Write some code",
		description: "coding is nice",
		color: '#3A7E28',
		status: "todo",
		tasks: [
			{
				

				id: 1,
				name: "ContactList Example",
				done: true
			},
			{
				id: 2,
				name: "Kanban Example",
				done: false
			},
			{
				id: 3,
				name: "My own experiments",
				done: false
			},
			{ 
				id: 4,
				name: "Piece of Cake",
				done: false
			}
		]
	},
];

render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));