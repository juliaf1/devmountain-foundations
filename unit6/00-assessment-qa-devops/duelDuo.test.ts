const { Builder, Capabilities, By } = require("selenium-webdriver");

require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
    await driver.get('http://localhost:3000/');
    await driver.findElement(By.id('draw')).click();
    await driver.sleep(2000);
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
    const choices = await driver.findElement(By.id('choices'));
    const displayed = await choices.isDisplayed();
    expect(displayed).toBe(true);
});

// Check that clicking an “Add to Duo” button displays the div with id = “player-duo”

test('Add to duo displays div with id player duo', async () => {
    await driver.findElement(By.xpath('//button[text()="Add to Duo"]')).click();
    await driver.sleep(2000);
    const duo = await driver.findElement(By.id('player-duo'));
    const displayed = await duo.isDisplayed();
    expect(displayed).toBe(true);
});

// Check that when a bot is “Removed from Duo”, that it goes back to “choices”

test('Add to duo displays div with id player duo', async () => {
    await driver.findElement(By.xpath('//button[text()="Add to Duo"]')).click();
    await driver.sleep(2000);
    const card = await driver.findElement(By.xpath('//div[@id="player-duo"]/div'));
    const botName = await card.findElement(By.tagName('img')).getAttribute('alt');
    await card.findElement(By.tagName('button')).click();
    await driver.sleep(2000);
    const removedDuo = await driver.findElements(By.xpath(`//div[@id="choices"]/div/img[@alt="${botName}"]`));
    expect(removedDuo.length > 0).toBe(true);
});