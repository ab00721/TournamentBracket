import { browser, by, element } from 'protractor';
import { TournamentService } from './tournament.service'

describe('Registration', () => {
  let tournamentService;

  beforeEach(() => {
    tournamentService = new TournamentService();
    browser.get('/registration');
  });

  it('should autofill 2 contestants', () => {
    const contestants = [ 'Zoe','Kaylee' ];

    tournamentService.autofill(2);
    tournamentService.registerContestants();

    const contestantsList = tournamentService.getMessage();
    contestants.forEach((contestant) => {
      expect(contestantsList).toContain(contestant);
    });
  });

  it('should autofill 4 contestants', () => {
    const contestants = [ 'John','Paul', 'George', 'Ringo' ];

    tournamentService.autofill(4);
    tournamentService.registerContestants();

    const contestantsList = tournamentService.getMessage();
    contestants.forEach((contestant) => {
      expect(contestantsList).toContain(contestant);
    });
  });

  it('should autofill 8 contestants', () => {
    const contestants = [ 'Leia','Luke', 'Lando', 'Han', 'Chewy', 'R2D2', 'C3P0', 'Vader' ];

    tournamentService.autofill(8);
    tournamentService.registerContestants();

    const contestantsList = tournamentService.getMessage();
    contestants.forEach((contestant) => {
      expect(contestantsList).toContain(contestant);
    });
  });

  it('should register 8 contestants', () => {
    const contestants = [ 'player1','player2','player3','player4','player5','player6','player7','player8' ];
    tournamentService.inputContestants(contestants);
    tournamentService.registerContestants();

    const contestantsList = tournamentService.getMessage();
    contestants.forEach((contestant) => {
      expect(contestantsList).toContain(contestant);
    });
  });

  it('should register 4 contestants', () => {
    const contestants = [ 'player1','player2','player3','player4' ];
    tournamentService.inputContestants(contestants);
    tournamentService.registerContestants();

    const contestantsList = tournamentService.getMessage();
    contestants.forEach((contestant) => {
      expect(contestantsList).toContain(contestant);
    });
  });

  it('should register 2 contestants', () => {
    const contestants = [ 'player1','player2' ];
    tournamentService.inputContestants(contestants);
    tournamentService.registerContestants();

    const contestantsList = tournamentService.getMessage();
    contestants.forEach((contestant) => {
      expect(contestantsList).toContain(contestant);
    });
  });

  it('should set error message if 7 contestants', () => {
    const contestants = [ 'player1','player2','player3','player4','player5','player6','player7' ];
    tournamentService.inputContestants(contestants);
    tournamentService.registerContestants();
    expect(tournamentService.getMessage()).toEqual('Should be 2, 4, or 8 contestants');
  });

  it('should set error message if 6 contestants', () => {
    const contestants = [ 'player1','player2','player3','player4','player5','player6' ];
    tournamentService.inputContestants(contestants);
    tournamentService.registerContestants();
    expect(tournamentService.getMessage()).toEqual('Should be 2, 4, or 8 contestants');
  });

  it('should set error message if 5 contestants', () => {
    const contestants = [ 'player1','player2','player3','player4','player5' ];
    tournamentService.inputContestants(contestants);
    tournamentService.registerContestants();
    expect(tournamentService.getMessage()).toEqual('Should be 2, 4, or 8 contestants');
  });

  it('should set error message if 3 contestants', () => {
    const contestants = [ 'player1','player2','player3' ];
    tournamentService.inputContestants(contestants);
    tournamentService.registerContestants();
    expect(tournamentService.getMessage()).toEqual('Should be 2, 4, or 8 contestants');
  });

  it('should set error message if 1 contestants', () => {
    const contestants = [ 'player1' ];
    tournamentService.inputContestants(contestants);
    tournamentService.registerContestants();
    expect(tournamentService.getMessage()).toEqual('Should be 2, 4, or 8 contestants');
  });

  it('should set error message if duplicate contestants', () => {
    const contestants = [ 'player1','player1' ];
    tournamentService.inputContestants(contestants);
    tournamentService.registerContestants();
    expect(tournamentService.getMessage()).toEqual('Duplicate player');
  });

});
