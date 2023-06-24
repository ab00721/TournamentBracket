import { browser, by, element } from 'protractor';

export class TournamentService {
  getMessage() {
    const message = element(by.id('message'));
    return message.getText();
  }
}
