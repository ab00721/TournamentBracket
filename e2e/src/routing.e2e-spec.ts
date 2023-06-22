import { browser, by, element } from 'protractor';

describe('Routing', () => {
  it('should navigate to the welcome page', () => {
    browser.get('/');
    const bracketsTitle = element(by.tagName('h2'));
    expect(bracketsTitle.getText()).toContain('Brackets App');
  });
});
