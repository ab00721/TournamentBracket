import { browser, by, element } from 'protractor';
import { RoutingService } from './routing.service'
import { RegistrationService } from './registration.service'
import { TournamentService } from './tournament.service'

describe('Registration', () => {
  let routingService;
  let registrationService;
  let tournamentService;

  beforeEach(() => {
    routingService = new RoutingService();
    registrationService = new RegistrationService();
    tournamentService = new TournamentService();
    routingService.loadPage('/registration');
  });

  it('should autofill 2 contestants', () => {
    const contestants = [ 'Zoe','Kaylee' ];
    registrationService.autofill(2);
    registrationService.registerContestants();
    contestants.forEach((contestant) => {
      expect(registrationService.getRegisteredContestants()).toContain(contestant);
    });
  });

  it('should autofill 4 contestants', () => {
    const contestants = [ 'John','Paul', 'George', 'Ringo' ];
    registrationService.autofill(4);
    registrationService.registerContestants();
    contestants.forEach((contestant) => {
      expect(registrationService.getRegisteredContestants()).toContain(contestant);
    });
  });

  it('should autofill 8 contestants', () => {
    const contestants = [ 'Leia','Luke', 'Lando', 'Han', 'Chewy', 'R2D2', 'C3P0', 'Vader' ];
    registrationService.autofill(8);
    registrationService.registerContestants();
    contestants.forEach((contestant) => {
      expect(registrationService.getRegisteredContestants()).toContain(contestant);
    });
  });

  it('should register 8 contestants', () => {
    const contestants = [ 'player1','player2','player3','player4','player5','player6','player7','player8' ];
    registrationService.inputContestants(contestants);
    registrationService.registerContestants();
    contestants.forEach((contestant) => {
      expect(registrationService.getRegisteredContestants()).toContain(contestant);
    });
  });

  it('should register 4 contestants', () => {
    const contestants = [ 'player1','player2','player3','player4' ];
    registrationService.inputContestants(contestants);
    registrationService.registerContestants();
    contestants.forEach((contestant) => {
      expect(registrationService.getRegisteredContestants()).toContain(contestant);
    });
  });

  it('should register 2 contestants', () => {
    const contestants = [ 'player1','player2' ];
    registrationService.inputContestants(contestants);
    registrationService.registerContestants();
    contestants.forEach((contestant) => {
      expect(registrationService.getRegisteredContestants()).toContain(contestant);
    });
  });

  it('should set error message if 7 contestants', () => {
    const contestants = [ 'player1','player2','player3','player4','player5','player6','player7' ];
    registrationService.inputContestants(contestants);
    registrationService.registerContestants();
    expect(tournamentService.getMessage()).toEqual('Should be 2, 4, or 8 contestants');
  });

  it('should set error message if 6 contestants', () => {
    const contestants = [ 'player1','player2','player3','player4','player5','player6' ];
    registrationService.inputContestants(contestants);
    registrationService.registerContestants();
    expect(tournamentService.getMessage()).toEqual('Should be 2, 4, or 8 contestants');
  });

  it('should set error message if 5 contestants', () => {
    const contestants = [ 'player1','player2','player3','player4','player5' ];
    registrationService.inputContestants(contestants);
    registrationService.registerContestants();
    expect(tournamentService.getMessage()).toEqual('Should be 2, 4, or 8 contestants');
  });

  it('should set error message if 3 contestants', () => {
    const contestants = [ 'player1','player2','player3' ];
    registrationService.inputContestants(contestants);
    registrationService.registerContestants();
    expect(tournamentService.getMessage()).toEqual('Should be 2, 4, or 8 contestants');
  });

  it('should set error message if 1 contestants', () => {
    const contestants = [ 'player1' ];
    registrationService.inputContestants(contestants);
    registrationService.registerContestants();
    expect(tournamentService.getMessage()).toEqual('Should be 2, 4, or 8 contestants');
  });

  it('should set error message if duplicate contestants', () => {
    const contestants = [ 'player1','player1' ];
    registrationService.inputContestants(contestants);
    registrationService.registerContestants();
    expect(tournamentService.getMessage()).toEqual('Duplicate player');
  });

});
