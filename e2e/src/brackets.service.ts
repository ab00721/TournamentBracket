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

  // getPlayer1ByMatch(match: number) {
  //   const matchNumber = this.getMatches().get(match);
  //   const player1 = matchNumber.getPlayer1();
  //   return player1;
  //}

  getContestant(match: any, playerId: string) {
    const player = match.element(by.id(playerId));
    return player.getAttribute('value');
  }

  // getPlayer2ByMatch(match: number) {
  //   const matchNumber = this.getMatches().get(match);
  //   const player2 = matchNumber.getPlayer2();
  //   return player2;
  //}

  getPlayer2() {
    const player2 = this.tournamentService.read('player2');
    return player2;
  }
}
