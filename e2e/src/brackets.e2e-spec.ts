import { browser, by, element } from 'protractor';
import { RoutingService } from './routing.service';
import { RegistrationService } from './registration.service';
import { BracketsService } from './brackets.service';
import { TournamentService } from './tournament.service';

describe('Brackets', () => {
  let routingService;
  let registrationService;
  let bracketsService;
  let tournamentService;

  beforeEach(() => {
    routingService = new RoutingService();
    registrationService = new RegistrationService();
    bracketsService = new BracketsService();
    tournamentService = new TournamentService();
    routingService.loadPage('/registration');
  });

  describe('Seeding', () => {

    it('should seed 2 contestants', () => {
      const contestants = ['player1', 'player2'];
      registrationService.inputContestants(contestants);
      registrationService.registerContestants();
      routingService.navigateTo('brackets');

      const matches = bracketsService.getMatches();
      expect(matches.count()).toEqual(1);

      matches.each((match, index) => {
        const player1 = bracketsService.getContestant(match, 'player1');
        const player2 = bracketsService.getContestant(match, 'player2');
        expect(player1).toEqual(contestants[index*2]);
        expect(player2).toEqual(contestants[index*2+1]);
      });
    });

    it('should seed 4 contestants', () => {
      const contestants = ['player1', 'player2', 'player3', 'player4'];
      registrationService.inputContestants(contestants);
      registrationService.registerContestants();
      routingService.navigateTo('brackets');

      const matches = bracketsService.getMatches();
      expect(matches.count()).toEqual(2);

      matches.each((match, index) => {
        const player1 = bracketsService.getContestant(match, 'player1');
        const player2 = bracketsService.getContestant(match, 'player2');
        expect(player1).toEqual(contestants[index*2]);
        expect(player2).toEqual(contestants[index*2+1]);
      });
    });

    it('should seed 8 contestants', () => {
      const contestants = ['player1', 'player2', 'player3', 'player4', 'player5', 'player6', 'player7', 'player8'];
      registrationService.inputContestants(contestants);
      registrationService.registerContestants();
      routingService.navigateTo('brackets');

      const matches = bracketsService.getMatches();
      expect(matches.count()).toEqual(4);

      matches.each((match, index) => {
        const player1 = bracketsService.getContestant(match, 'player1');
        const player2 = bracketsService.getContestant(match, 'player2');
        expect(player1).toEqual(contestants[index*2]);
        expect(player2).toEqual(contestants[index*2+1]);
      });
    });
  });

  describe('Complete Round', () => {

    it('should complete a round with 2 players and player 1 wins', () => {
      const contestants = ['player1', 'player2'];
      registrationService.inputContestants(contestants);
      registrationService.registerContestants();
      routingService.navigateTo('brackets');

      expect(bracketsService.getRound()).toEqual('Round: 1');
      const matches = bracketsService.getMatches();
      matches.each((match, index) => {
        const winner = bracketsService.setMatchWinner(match, 'player1');
      });
      bracketsService.completeRound();

      expect(bracketsService.getRound()).toEqual('Round: 1');
      expect(bracketsService.getChampion()).toEqual('Winner: player1');
    });

    it('should complete a round with 2 players and player 2 wins', () => {
      const contestants = ['player1', 'player2'];
      registrationService.inputContestants(contestants);
      registrationService.registerContestants();
      routingService.navigateTo('brackets');

      expect(bracketsService.getRound()).toEqual('Round: 1');
      const matches = bracketsService.getMatches();
      matches.each((match, index) => {
        const winner = bracketsService.setMatchWinner(match, 'player2');
      });
      bracketsService.completeRound();

      expect(bracketsService.getRound()).toEqual('Round: 1');
      expect(bracketsService.getChampion()).toEqual('Winner: player2');
    });

    it('should complete 2 rounds with 4 players', () => {
      const contestants = ['player1', 'player2', 'player3', 'player4'];
      registrationService.inputContestants(contestants);
      registrationService.registerContestants();
      routingService.navigateTo('brackets');

      for (let round = 1; round <= 2; round++) {
        expect(bracketsService.getRound()).toEqual('Round: ' + round);
        const matches = bracketsService.getMatches();
        matches.each((match, index) => {
          const winner = bracketsService.setMatchWinner(match, 'player2');
        });
        bracketsService.completeRound();
      }
      expect(bracketsService.getRound()).toEqual('Round: 2');
      expect(bracketsService.getChampion()).toEqual('Winner: player4');
    });

    it('should complete 3 rounds with 8 players', () => {
      const contestants = ['player1', 'player2', 'player3', 'player4', 'player5', 'player6', 'player7', 'player8'];
      registrationService.inputContestants(contestants);
      registrationService.registerContestants();
      routingService.navigateTo('brackets');

      for (let round = 1; round <= 3; round++) {
        expect(bracketsService.getRound()).toEqual('Round: ' + round);
        const matches = bracketsService.getMatches();
        matches.each((match, index) => {
          const winner = bracketsService.setMatchWinner(match, 'player2');
        });
        bracketsService.completeRound();
      }
      expect(bracketsService.getRound()).toEqual('Round: 3');
      expect(bracketsService.getChampion()).toEqual('Winner: player8');
    });


    it('should set error message if matches are not complete', () => {
      const contestants = ['player1', 'player2', 'player3', 'player4'];
      registrationService.inputContestants(contestants);
      registrationService.registerContestants();
      routingService.navigateTo('brackets');

      expect(bracketsService.getRound()).toEqual('Round: 1');

      const matches = bracketsService.getMatches();
      expect(matches.count()).toEqual(2);

      bracketsService.setMatchWinner(matches.get(0), 'player1');
      bracketsService.completeRound();

      expect(bracketsService.getRound()).toEqual('Round: 1');
      expect(tournamentService.getMessage()).toEqual('Please complete all matches');
    });
  });

});
