import { browser, by, element } from 'protractor';

describe('Registration', () => {
  beforeEach(() => {
    browser.get('/registration');
  });

  it('should autofill 2 contestants', () => {
    const autofill2 = element(by.id('autoFill2'));
    autofill2.click()

    const registerButton = element(by.id('submit'));
    registerButton.click();

    const contestantsList = element(by.id('message'));
    contestantsList.getText().then((message) => {
      const contestants = message.split(',');
      expect(contestants.length).toBe(2);
    });
  });

  it('should autofill 4 contestants', () => {
    const autofill4 = element(by.id('autoFill4'));
    autofill4.click()

    const registerButton = element(by.id('submit'));
    registerButton.click();

    const contestantsList = element(by.id('message'));
    contestantsList.getText().then((message) => {
      const contestants = message.split(',');
      expect(contestants.length).toBe(4);
    });
  });

  it('should autofill 8 contestants', () => {
    const autofill8 = element(by.id('autoFill8'));
    autofill8.click()

    const registerButton = element(by.id('submit'));
    registerButton.click();

    const contestantsList = element(by.id('message'));
    contestantsList.getText().then((message) => {
      const contestants = message.split(',');
      expect(contestants.length).toBe(8);
    });
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

  it('should set error message if 7 contestants', () => {
    const contestants = [ 'player1','player2','player3','player4','player5','player6','player7' ];
    const contestantInputs = element.all(by.css('input[type="text"]'));
    contestants.forEach((contestant,index) => {
      contestantInputs.get(index).sendKeys(contestant);
    });
    const registerButton = element(by.id('submit'));
    registerButton.click();

    const errorMessage = element(by.id('message'));
    errorMessage.getText().then((message) => {
      expect(message).toEqual('Should be 2, 4, or 8 contestants');
    });
  });

  it('should set error message if 6 contestants', () => {
    const contestants = [ 'player1','player2','player3','player4','player5','player6' ];
    const contestantInputs = element.all(by.css('input[type="text"]'));
    contestants.forEach((contestant,index) => {
      contestantInputs.get(index).sendKeys(contestant);
    });
    const registerButton = element(by.id('submit'));
    registerButton.click();

    const errorMessage = element(by.id('message'));
    errorMessage.getText().then((message) => {
      expect(message).toEqual('Should be 2, 4, or 8 contestants');
    });
  });

  it('should set error message if 5 contestants', () => {
    const contestants = [ 'player1','player2','player3','player4','player5' ];
    const contestantInputs = element.all(by.css('input[type="text"]'));
    contestants.forEach((contestant,index) => {
      contestantInputs.get(index).sendKeys(contestant);
    });
    const registerButton = element(by.id('submit'));
    registerButton.click();

    const errorMessage = element(by.id('message'));
    errorMessage.getText().then((message) => {
      expect(message).toEqual('Should be 2, 4, or 8 contestants');
    });
  });

  it('should set error message if 3 contestants', () => {
    const contestants = [ 'player1','player2','player3' ];
    const contestantInputs = element.all(by.css('input[type="text"]'));
    contestants.forEach((contestant,index) => {
      contestantInputs.get(index).sendKeys(contestant);
    });
    const registerButton = element(by.id('submit'));
    registerButton.click();

    const errorMessage = element(by.id('message'));
    errorMessage.getText().then((message) => {
      expect(message).toEqual('Should be 2, 4, or 8 contestants');
    });
  });

  it('should set error message if 1 contestants', () => {
    const contestants = [ 'player1' ];
    const contestantInputs = element.all(by.css('input[type="text"]'));
    contestants.forEach((contestant,index) => {
      contestantInputs.get(index).sendKeys(contestant);
    });
    const registerButton = element(by.id('submit'));
    registerButton.click();

    const errorMessage = element(by.id('message'));
    errorMessage.getText().then((message) => {
      expect(message).toEqual('Should be 2, 4, or 8 contestants');
    });
  });

  it('should set error message if duplicate contestants', () => {
    const contestants = [ 'player1','player1' ];
    const contestantInputs = element.all(by.css('input[type="text"]'));
    contestants.forEach((contestant,index) => {
      contestantInputs.get(index).sendKeys(contestant);
    });
    const registerButton = element(by.id('submit'));
    registerButton.click();

    const errorMessage = element(by.id('message'));
    errorMessage.getText().then((message) => {
      expect(message).toEqual('Duplicate player');
    });
  });

});
