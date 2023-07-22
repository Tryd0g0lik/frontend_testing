/**
 * TODO: There is check the Luhn algoritm and only a Luhn.
 */
const { Luhn } = require('../cards/checkings.ts');


const response = test.each([{
	a: "Testing card number for a bank's name:",
	name: 'Мир 01',
	number: '2202201302350075',
	manual: ['мир', 2, 16],
	expected: true
},
{
	a: "Testing card number for a bank's name:",
	name: 'Мир 02',
	number: '2202201302350074',
	manual: ['мир', 2, 16],
	expected: false
},
{
	a: "Testing card number for a bank's name:",
	name: 'Мир 03',
	number: '3202201302350075',
	manual: ['NaN', 0, 0],
	expected: false
},
{
	a: "Testing card number for a bank's name:",
	name: 'Мир 04',
	number: '22022013023500755',
	manual: ['NaN', 0, 0],
	expected: false
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
	manual: ['NaN', { 0: [0,] }],
	expected: false
},
]);

response(`%a` + `%name`, (async ({ a, name, number, manual, expected }) => {
	// arrange
	const luhna = new Luhn(manual, number)


	// act

	// assert
	expect(luhna.cardGet) === expected;

}));