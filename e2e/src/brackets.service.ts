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

  getMatches() {
    return this.tournamentService.getArray('matches');
  }

  getContestant(match: any, playerId: string) {
    const player = match.element(by.id(playerId));
    return player.getAttribute('value');
  }

  getPlayer2() {
    const player2 = this.tournamentService.read('player2');
    return player2;
  }
}
