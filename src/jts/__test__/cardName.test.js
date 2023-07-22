/* Напишите авто-тесты на функции проверки номера карты и принадлежности определённой платёжной системе. */
/**
 * There is define a pay system, it's a brand bank's card. 
 * Pluse, propyrty (manyal) it's card - simply example of this: "['мир', { 2: [12, 16] }]"
 */

import { getNumberCard } from "../cards/get_cards";

const response = test.each([
	{
		a: "Testing card number for a bank's name: 'Мир 01'",
		name: 'Мир 01',
		number: '2202201302350075',

		expected: [['мир', { 2: [12, 16] }]]
	},
	{
		a: "Testing card number for a bank's name: 'Мир 02'",
		name: 'Мир 02',
		number: '2202201302350074',
		expected: [['мир', { 2: [12, 16] }]]
	},
	{
		a: "Testing card number for a bank's name: 'Мир 03'",
		name: 'Мир 03',
		number: '3202201302350075',
		expected: [['diners club', { '3': [30, 36, 38] }], ['jcb international', { '3': [31, 35] }],
		['American Express', { '3': [34, 37] },]]
	},
	{
		a: "Testing card number for a bank's name: 'Мир 04'",
		name: 'Мир 04',
		number: '22022013023500755',
		expected: [['мир', { '2': [12, 16] }]]
	},
	{
		a: "Testing card number for a bank's name: 'Мир 05'",
		name: 'Мир 05',
		number: ' 2202201302350075',
		expected: [['мир', { 2: [12, 16] }]]
	},
	{
		a: "Testing card number for a bank's name: 'Мир 06'",
		name: 'Мир 06',
		number: '2202201302350075 ',
		expected: [['мир', { 2: [12, 16] }]]
	},
	{
		a: "Testing card number for a bank's name: 'Мир 07'",
		name: 'Мир 07',
		number: ' 2202201302350075 ',
		expected: [['мир', { 2: [12, 16] }]]
	},
	{
		a: "Testing card number for a bank's name: 'Мир 08'",
		name: 'Мир 08',
		number: '22022013 02350075',
		expected: [['мир', { 2: [12, 16] }]]
	},
	{
		a: "Testing card number for a bank's name: 'Мир 09'",
		name: 'Мир 09',
		number: '22022013 023 50075',
		expected: [['мир', { 2: [12, 16] }]]
	},
	{
		a: "Testing card number for a bank's name: 'Мир 10'",
		name: 'Мир 10',
		number: '22022013 023 50075 ',
		expected: [['мир', { 2: [12, 16] }]]
	},
	{
		a: "Testing card number for a bank's name: 'Мир 11'",
		name: 'Мир 11',
		number: ' 22022013 023 50075',
		expected: [['мир', { 2: [12, 16] }]]
	},
	{
		a: "Testing card number for a bank's name: 'Мир 12'",
		name: 'Мир 12',
		number: ' 22022013 023 50075 ',
		expected: [['мир', { 2: [12, 16] }]]
	},
	{
		a: "Testing card number for a bank's name: 'Мир 13'",
		name: 'Мир 13',
		number: '220f2201302350075',
		expected: [['мир', { 2: [12, 16] }]]
	},
	{
		a: "Testing card number for a bank's name: 'Мир 14'",
		name: 'Мир 14',
		number: '220220130235007',
		expected: [['мир', { 2: [12, 16] }]]
	},
	{
		a: "Testing card number for a bank's name: 'Мир 15'",
		name: 'Мир 15',
		number: '2055744470178618688',
		expected: [['мир', { 2: [12, 16] }]]
	},
	{
		a: "Testing card number for a bank's name: 'Мир 16'",
		name: 'Мир 16',
		number: '9055744470178618688',
		expected: ['NaN', { 0: [0,] }]
	},
]);

response(`$a, 'brand: ' + $number`, (async ({ a, name, number, expected }) => {

	const manual = await new getNumberCard(number)
	const resp = await manual.cardsManuals;
	await expect(resp).toMatchObject(expected);


}));

