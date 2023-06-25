import { browser, by, element } from 'protractor';

export class TournamentService {

  getMessage() {
    return this.read('message');
  }

  clickById(id: string) {
    const button = element(by.id(id));
    button.click();
  }

  read(id: string) {
    const elementToRead = element(by.id(id));
    return elementToRead.getText();
  }

}
