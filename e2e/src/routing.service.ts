import { browser, by, element } from 'protractor';
import { TournamentService } from './tournament.service'

export class RoutingService {
  private tournamentService: TournamentService;

  constructor() {
    this.tournamentService = new TournamentService();
  }

  loadPage(url: string) {
    browser.get(url);
  }

  navigateTo(path: string) {
    this.tournamentService.clickById(path);
  }

  getPageTitle() {
    return this.tournamentService.read('subpageTitle');
  }

}
