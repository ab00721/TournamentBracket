import { browser, by, element } from 'protractor';

describe('Registration', () => {
  beforeAll(() => {
    browser.get('/registration');
  });

  it('should register 8 contestants', () => {
    const contestants = [ 'player1','player2','player3','player4','player5','player6','player7','player8' ];
    const contestantInputs = element.all(by.css('input[type="text"]'));
    contestants.forEach((contestant,index) => {
      contestantInputs.get(index).sendKeys(contestant);
    });
    const registerButton = element(by.id('submit'));
    registerButton.click();

    const contestantsList = element(by.id('message'));
    contestantsList.getText().then((message) => {
      contestants.forEach((contestant) => {
        expect(message).toContain(contestant);
      });
    });
  });

  it('should register 4 contestants', () => {
    const contestants = [ 'player1','player2','player3','player4' ];
    const contestantInputs = element.all(by.css('input[type="text"]'));
    contestants.forEach((contestant,index) => {
      contestantInputs.get(index).sendKeys(contestant);
    });
    const registerButton = element(by.id('submit'));
    registerButton.click();

    const contestantsList = element(by.id('message'));
    contestantsList.getText().then((message) => {
      contestants.forEach((contestant) => {
        expect(message).toContain(contestant);
      });
    });
  });

  it('should register 2 contestants', () => {
    const contestants = [ 'player1','player2' ];
    const contestantInputs = element.all(by.css('input[type="text"]'));
    contestants.forEach((contestant,index) => {
      contestantInputs.get(index).sendKeys(contestant);
    });
    const registerButton = element(by.id('submit'));
    registerButton.click();

    const contestantsList = element(by.id('message'));
    contestantsList.getText().then((message) => {
      contestants.forEach((contestant) => {
        expect(message).toContain(contestant);
      });
    });
  });
});
