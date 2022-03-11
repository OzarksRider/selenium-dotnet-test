const utils = require("./utils.js");
const tests = {};
tests["Smoke Test"] = async (driver, vars, opts = {}) => {
  await driver.get((new URL(`/`, BASE_URL)).href);
  try {
    await driver.manage().window().setRect({
      width: 1583,
      height: 1157
    });
  } catch (error) {
    console.log('Unable to resize window. Skipping.');
  };
  await driver.wait(until.elementLocated(By.css(`.col-md-2 > .btn`)), configuration.timeout);
  await driver.findElement(By.css(`.col-md-2 > .btn`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.id(`Email`)), configuration.timeout);
  await driver.findElement(By.id(`Email`)).then(element => {
    return element.clear().then(() => {
      return element.sendKeys(`bob@example.com`);
    });
  });
  await driver.wait(until.elementLocated(By.id(`Password`)), configuration.timeout);
  await driver.findElement(By.id(`Password`)).then(element => {
    return element.clear().then(() => {
      return element.sendKeys(`12345`);
    });
  });
  await driver.wait(until.elementLocated(By.css(`.col-md-2 > .btn`)), configuration.timeout);
  await driver.findElement(By.css(`.col-md-2 > .btn`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`.alert`)), configuration.timeout);
  await driver.findElement(By.css(`.alert`)).then(element => {
    return element.click();
  });
}
tests["Login check"] = async (driver, vars, opts = {}) => {
  await driver.get((new URL(`/`, BASE_URL)).href);
  try {
    await driver.manage().window().setRect({
      width: 1583,
      height: 1157
    });
  } catch (error) {
    console.log('Unable to resize window. Skipping.');
  };
  await driver.wait(until.elementLocated(By.css(`.col-md-2 > .btn`)), configuration.timeout);
  await driver.findElement(By.css(`.col-md-2 > .btn`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.id(`Email-error`)), configuration.timeout);
  await driver.findElement(By.id(`Email-error`)).then(element => {
    return driver.actions({
      bridge: true
    }).move({
      origin: element
    }).release().perform();
  });
  await driver.wait(until.elementLocated(By.id(`t_and_c`)), configuration.timeout);
  await driver.findElement(By.id(`t_and_c`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.id(`FirstName`)), configuration.timeout);
  await driver.findElement(By.id(`FirstName`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.id(`LastName`)), configuration.timeout);
  await driver.findElement(By.id(`LastName`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.id(`CompanyName`)), configuration.timeout);
  await driver.findElement(By.id(`CompanyName`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.id(`EMailAddress`)), configuration.timeout);
  await driver.findElement(By.id(`EMailAddress`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.id(`Phone`)), configuration.timeout);
  await driver.findElement(By.id(`Phone`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.id(`AddressLine1`)), configuration.timeout);
  await driver.findElement(By.id(`AddressLine1`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.id(`AddressLine2`)), configuration.timeout);
  await driver.findElement(By.id(`AddressLine2`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.id(`City`)), configuration.timeout);
  await driver.findElement(By.id(`City`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.id(`State`)), configuration.timeout);
  await driver.findElement(By.id(`State`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.id(`ZipCode`)), configuration.timeout);
  await driver.findElement(By.id(`ZipCode`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.id(`Password`)), configuration.timeout);
  await driver.findElement(By.id(`Password`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.id(`Password_confirmation`)), configuration.timeout);
  await driver.findElement(By.id(`Password_confirmation`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`.btn-error`)), configuration.timeout);
  await driver.findElement(By.css(`.btn-error`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.id(`EMail`)), configuration.timeout);
  await driver.findElement(By.id(`EMail`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`.btn`)), configuration.timeout);
  await driver.findElement(By.css(`.btn`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.id(`EMail-error`)), configuration.timeout);
  await driver.findElement(By.id(`EMail-error`)).then(element => {
    return element.click();
  });
}
tests["Smoke Test 2"] = async (driver, vars, opts = {}) => {
  await driver.get((new URL(`/`, BASE_URL)).href);
  await driver.getTitle().then(title => {
    return expect(title).toBe(`DBE Goals`);
  });
  try {
    await driver.manage().window().setRect({
      width: 1024,
      height: 768
    });
  } catch (error) {
    console.log('Unable to resize window. Skipping.');
  };
  vars[""] = ``;
  await expect(driver.findElements(By.id(`Email-error`))).resolves.not.toBePresent();
  await driver.wait(until.elementLocated(By.css(`.col-md-2 > .btn`)), configuration.timeout);
  await driver.findElement(By.css(`.col-md-2 > .btn`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.id(`Email-error`)), configuration.timeout);
  await expect(driver.findElements(By.id(`Email-error`))).resolves.toBePresent();
  await driver.wait(until.elementLocated(By.id(`Email-error`)), configuration.timeout);
  await expect(driver.findElement(By.id(`Email-error`))).resolves.toHaveText(`The Email field is required.`);
  await driver.wait(until.elementLocated(By.id(`Email`)), configuration.timeout);
  await driver.findElement(By.id(`Email`)).then(element => {
    return element.clear().then(() => {
      return element.sendKeys(`abc`);
    });
  });
  await driver.wait(until.elementLocated(By.id(`Email-error`)), configuration.timeout);
  await expect(driver.findElement(By.id(`Email-error`))).resolves.toHaveText(`The Email field is not a valid e-mail address.`);
  await driver.wait(until.elementLocated(By.id(`Email`)), configuration.timeout);
  await driver.findElement(By.id(`Email`)).then(element => {
    return element.clear().then(() => {
      return element.sendKeys(`email@example.com`);
    });
  });
  await driver.wait(until.elementLocated(By.id(`Password-error`)), configuration.timeout);
  await expect(driver.findElements(By.id(`Password-error`))).resolves.toBePresent();
  await driver.wait(until.elementLocated(By.id(`Password`)), configuration.timeout);
  await driver.findElement(By.id(`Password`)).then(element => {
    return element.clear().then(() => {
      return element.sendKeys(`12345`);
    });
  });
  await expect(driver.findElements(By.id(`Password-error`))).resolves.not.toBePresent();
}
module.exports = tests;