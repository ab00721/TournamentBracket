import { browser, by, element } from 'protractor';

describe('Routing', () => {
  it('should navigate to the welcome page', () => {
    browser.get('/');
    const welcomeTitle = element(by.id('subpageTitle'));
    expect(welcomeTitle.getText()).toContain('Brackets App');
  });

  it('should navigate to the registration page', () => {
    browser.get('/');
    const registrationLink = element(by.id('registration'));
    registrationLink.click();
    const registrationTitle = element(by.id('subpageTitle'));
    expect(registrationTitle.getText()).toContain('Register Players');
  });

  it('should navigate to the brackets page', () => {
    browser.get('/');
    const bracketsLink = element(by.id('brackets'));
    bracketsLink.click();
    const bracketsTitle = element(by.id('subpageTitle'));
    expect(bracketsTitle.getText()).toContain('Brackets');
  });

  it('should navigate to the brackets page', () => {
    browser.get('/brackets');
    const welcomeLink = element(by.id('welcome'));
    welcomeLink.click();
    const welcomeTitle = element(by.id('subpageTitle'));
    expect(welcomeTitle.getText()).toContain('Brackets App');
  });
});
