import { browser, by, element } from 'protractor';

export class TournamentService {
  getMessage() {
    const message = element(by.id('message'));
    return message.getText();
  }

  inputContestants(contestants: string[]) {
    const contestantInputs = element.all(by.css('input[type="text"]'));
    contestants.forEach((contestant,index) => {
      contestantInputs.get(index).sendKeys(contestant);
    });
  }

  registerContestants() {
    const registerButton = element(by.id('submit'));
    registerButton.click();
  }
}
