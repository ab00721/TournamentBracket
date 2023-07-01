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

  setMatchWinner(match: any, playerId: string) {
    const winner = match.element(by.id(playerId));
    winner.click();
  }

  getChampion() {
    return this.tournamentService.read('champion');
  }

}
