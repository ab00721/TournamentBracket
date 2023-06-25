import { browser, by, element } from 'protractor';
import { TournamentService } from './tournament.service'

describe('Routing', () => {
  let tournamentService;

  beforeEach(() => {
    tournamentService = new TournamentService();
  });

  it('should navigate to the welcome page', () => {
    tournamentService.navigateTo('/');
    expect(tournamentService.getPageTitle()).toEqual('Brackets App');
  });

  it('should navigate to the registration page', () => {
    tournamentService.navigateTo('/');
    tournamentService.clickById('registration');
    expect(tournamentService.getPageTitle()).toEqual('Register Players');
  });

  it('should navigate to the brackets page', () => {
    tournamentService.navigateTo('/');
    tournamentService.clickById('brackets');
    expect(tournamentService.getPageTitle()).toEqual('Brackets');
  });

  it('should navigate to the welcome page from brackets page', () => {
    tournamentService.navigateTo('/brackets');
    tournamentService.clickById('welcome');
    expect(tournamentService.getPageTitle()).toEqual('Brackets App');
  });
});
