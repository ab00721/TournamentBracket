import { browser, by, element } from 'protractor';
import { TournamentService } from './tournament.service'

export class RegistrationService {
  private tournamentService: TournamentService;

  constructor() {
    this.tournamentService = new TournamentService();
  }

  autofill(count: number) {
    this.tournamentService.clickById('autoFill' + count);
  }

  inputContestants(contestants: string[]) {
    const contestantInputs = element.all(by.css('input[type="text"]'));
    contestants.forEach((contestant,index) => {
      contestantInputs.get(index).sendKeys(contestant);
    });
  }

  registerContestants() {
    this.tournamentService.clickById('submit');
  }

  getRegisteredContestants() {
    return this.tournamentService.getMessage().then((message) => {
      return message.split(',');
    });
  }
}
