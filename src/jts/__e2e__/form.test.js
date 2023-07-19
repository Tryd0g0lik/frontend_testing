// import { Forms } from "jts/cards/pages";
// require("jts/mains");
// const puppeteer = require("puppeteer");
// const { afterEach } = require('node:test');
import puppeteer from 'puppeteer';

describe('Page start', () => {
	let browser;
	let page;

	beforeEach(async () => {
		browser = await puppeteer.launch({
			headless: false,
			slowMo: 100,
			devtools: true,
		});

		page = await browser.newPage();
	});

	test('Form should render on page start', async () => {
		await page.goto('http://localhost:9000');
		let p = await page.$('body');


	});

	afterEach(async () => {
		await browser.close();
	});
});

const response = describe.each([
	{
		a: "Testing card Name for a bank's 'Мир 01'",
		'Мир 01': '2202201302350075',
		expected: 'Not faund Error'
	},
	{
		a: "Testing card Name for a bank's 'Мир 02'",
		'Мир 02': '2202201302350074',
		expected: 'Faund Error'
	},
	{
		a: "Testing card Name for a bank's 'Мир 03'",
		'Мир 03': '3202201302350075',
		expected: 'Faund Error'
	},
	{
		a: "Testing card Name for a bank's 'Мир 04'",
		'Мир 04': '22022013023500755',
		expected: 'Faund Error'
	},
	{
		a: "Testing card Name for a bank's 'Мир 05'",
		'Мир 05': ' 2202201302350075',
		expected: 'Not faund Error'
	},
	{
		a: "Testing card Name for a bank's 'Мир 06'",
		'Мир 06': '2202201302350075 ',
		expected: 'Not faund Error'
	},
	{
		a: "Testing card Name for a bank's 'Мир 07'",
		'Мир 07': ' 2202201302350075 ',
		expected: 'Faund Error'
	},
	{
		a: "Testing card Name for a bank's 'Мир 08'",
		'Мир 08': '22022013 02350075',
		expected: 'Not faund Error'
	},
	{
		a: "Testing card Name for a bank's 'Мир 09'",
		'Мир 09': '22022013 023 50075',
		expected: 'Faund Error'
	},
	{
		a: "Testing card Name for a bank's 'Мир 10'",
		'Мир 10': '22022013 023 50075 ',
		expected: 'Faund Error'
	},
	{
		a: "Testing card Name for a bank's 'Мир 11'",
		'Мир 11': ' 22022013 023 50075',
		expected: 'Faund Error'
	},
	{
		a: "Testing card Name for a bank's 'Мир 12'",
		'Мир 12': ' 22022013 023 50075 ',
		expected: 'Faund Error'
	},
	{
		a: "Testing card Name for a bank's 'Мир 13'",
		'Мир 13': '220f2201302350075',
		expected: 'Faund Error'
	},
	{
		a: "Testing card Name for a bank's 'Мир 14'",
		'Мир 14': '220f220130235007',
		expected: 'Faund Error'
	},
	{
		a: "Testing card Name for a bank's 'Мир 15'",
		'Мир 15': '2055744470178618688',
		expected: 'Faund Error'
	},
],);

response('.add($a)', ({ a, b, expected }) => {
	test(`erturned ${a['a']} ${expected}`, () => {
		const d = document.querySelector('name[name="card_number"]');
		const p = document.querySelector('p[style="color:red"]')

		const resp = () => p !== undefined && p !== null ? 'Faund Error' : 'Not faund Error';
		expected(d.value = b).toBe(resp());
	})
});

