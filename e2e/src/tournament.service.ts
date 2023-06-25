import { browser, by, element } from 'protractor';

export class TournamentService {

  navigateTo(url: string) {
    browser.get(url);
  }

  getPageTitle() {
    const pageTitle = element(by.id('subpageTitle'));
    return pageTitle.getText();
  }

  getMessage() {
    const message = element(by.id('message'));
    return message.getText();
  }

  autofill(count: number) {
    const autofillButton = element(by.id('autoFill' + count));
    autofillButton.click();
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

  // contestantsList() {
  //   return this.getMessage().then((message) => {
  //     return message.split(',');
  //   });
  // }
  //
  // checkIfRegistered(contestants: string[]) {
  //   const list = this.contestantsList(contestants);
  //   return contestants.forEach((contestant) => {
  //     list.contains(contestant);
  //   });
  // }

  clickById(id: string) {
    const button = element(by.id(id));
    button.click();
  }
}
