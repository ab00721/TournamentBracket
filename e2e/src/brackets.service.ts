import { browser, by, element } from 'protractor';
import { TournamentService } from './tournament.service'

export class BracketsService {
  private tournamentService: TournamentService;

  constructor() {
    this.tournamentService = new TournamentService();
  }

  completeRound() {
    this.tournamentService.clickById('completeRound');
  }

  getRound() {
    return this.tournamentService.read('round');
  }

}
