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

		await page.waitForTarget('body');
	});

	afterEach(async () => {
		await browser.close();
	});
});

