import puppeteer from 'puppeteer';
// РАЗКОММЕНТИРОВАТЬ и ЗАПУСТИТЬ < npm run serve-test >

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

	test('Testing', async () => {
		await page.goto('http://localhost:9000');
		await page.waitForSelector('input');

		const input = await page.$('[name="card_number"]');
		await input.type('2202201302350075');
		const submit = await page.$('#submitform');
		await submit.click();
		await page.waitForTimeout(3000);

	}, 50000);	

	afterEach(async () => {
		await browser.close();
	});

});
