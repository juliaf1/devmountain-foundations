const { Builder, Capabilities, By } = require("selenium-webdriver");

require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
    await driver.get('http://localhost:3000/');
});

afterAll(async () => {
    await driver.quit();
});

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'));
    const displayed = await title.isDisplayed();
    expect(displayed).toBe(true);
});

// Check that clicking the Draw button displays the div with id = “choices”

test('Draw buttons displays choices div', async () => {
    const button = await driver.findElement(By.id('draw'));
    await button.click();
    await driver.sleep(2000);
    const choicesDiv = await driver.findElement(By.id('choices'));
    const choices = await choicesDiv.findElements(By.xpath('*'));
    expect(choices.length > 0).toBe(true);
});

// Check that clicking an “Add to Duo” button displays the div with id = “player-duo”

test('Add to duo displays div with id player duo', async () => {
    const drawButton = await driver.findElement(By.id('draw'));
    await drawButton.click();
    const button = await driver.findElement(By.xpath('//button[@class="bot-btn"]'));
    await button.click();
    await driver.sleep(2000);
    const duoDiv = await driver.findElement(By.id('player-duo'));
    const bots = await duoDiv.findElements(By.xpath('*'));
    expect(bots.length > 0).toBe(true);
});

// Check that when a bot is “Removed from Duo”, that it goes back to “choices”

test('Add to duo displays div with id player duo', async () => {
    // const drawButton = await driver.findElement(By.id('draw'));
    // await drawButton.click();
    // const button = await driver.findElement(By.xpath('//button[@class="bot-btn"]'));
    // await button.click();
    // await driver.sleep(2000);
    // const duoDiv = await driver.findElement(By.id('player-duo'));
    // const bots = await duoDiv.findElements(By.xpath('*'));
    // expect(bots.length > 0).toBe(true);
});