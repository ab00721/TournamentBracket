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

      expect(bracketsService.getMatches().count()).toEqual(1);

      const match1 = bracketsService.getMatches().get(0);
      const player1match1 = match1.element(by.id('player1'));
      const player2match1 = match1.element(by.id('player2'));

      expect(player1match1.isPresent()).toBe(true);
      expect(player2match1.isPresent()).toBe(true);
      expect(player1match1.getAttribute('value')).toEqual('player1');
      expect(player2match1.getAttribute('value')).toEqual('player2');
    });

    it('should seed 4 contestants', () => {
      const contestants = ['player1', 'player2', 'player3', 'player4'];
      registrationService.inputContestants(contestants);
      registrationService.registerContestants();
      routingService.navigateTo('brackets');

      const matches = element.all(by.id('matches'));
      expect(bracketsService.getMatches().count()).toEqual(2);

      const match1 = bracketsService.getMatches().get(0);
      const player1match1 = match1.element(by.id('player1'));
      const player2match1 = match1.element(by.id('player2'));

      const match2 = bracketsService.getMatches().get(1);
      const player1match2 = match2.element(by.id('player1'));
      const player2match2 = match2.element(by.id('player2'));

      expect(player1match1.isPresent()).toBe(true);
      expect(player2match1.isPresent()).toBe(true);
      expect(player1match2.isPresent()).toBe(true);
      expect(player2match2.isPresent()).toBe(true);
      expect(player1match1.getAttribute('value')).toEqual('player1');
      expect(player2match1.getAttribute('value')).toEqual('player2');
      expect(player1match2.getAttribute('value')).toEqual('player3');
      expect(player2match2.getAttribute('value')).toEqual('player4');
    });

    it('should seed 8 contestants', () => {
      const contestants = ['player1', 'player2', 'player3', 'player4', 'player5', 'player6', 'player7', 'player8'];
      registrationService.inputContestants(contestants);
      registrationService.registerContestants();
      routingService.navigateTo('brackets');

      const matches = element.all(by.id('matches'));
      expect(bracketsService.getMatches().count()).toEqual(4);

      const match1 = bracketsService.getMatches().get(0);
      const match2 = bracketsService.getMatches().get(1);
      const match3 = bracketsService.getMatches().get(2);
      const match4 = bracketsService.getMatches().get(3);


      const player1match1 = match1.element(by.id('player1'));
      const player2match1 = match1.element(by.id('player2'));

      const player1match2 = match2.element(by.id('player1'));
      const player2match2 = match2.element(by.id('player2'));

      const player1match3 = match3.element(by.id('player1'));
      const player2match3 = match3.element(by.id('player2'));

      const player1match4 = match4.element(by.id('player1'));
      const player2match4 = match4.element(by.id('player2'));

      expect(player1match1.isPresent()).toBe(true);
      expect(player2match1.isPresent()).toBe(true);
      expect(player1match2.isPresent()).toBe(true);
      expect(player2match2.isPresent()).toBe(true);
      expect(player1match3.isPresent()).toBe(true);
      expect(player2match3.isPresent()).toBe(true);
      expect(player1match4.isPresent()).toBe(true);
      expect(player2match4.isPresent()).toBe(true);
      expect(player1match1.getAttribute('value')).toEqual('player1');
      expect(player2match1.getAttribute('value')).toEqual('player2');
      expect(player1match2.getAttribute('value')).toEqual('player3');
      expect(player2match2.getAttribute('value')).toEqual('player4');
      expect(player1match3.getAttribute('value')).toEqual('player5');
      expect(player2match3.getAttribute('value')).toEqual('player6');
      expect(player1match4.getAttribute('value')).toEqual('player7');
      expect(player2match4.getAttribute('value')).toEqual('player8');
    });
  });

  describe('Complete Round', () => {

    it('should complete a round with 2 players and player 1 wins', () => {
      const contestants = ['player1', 'player2'];
      registrationService.inputContestants(contestants);
      registrationService.registerContestants();
      routingService.navigateTo('brackets');

      const matches = element.all(by.id('matches'));
      expect(bracketsService.getMatches().count()).toEqual(1);

      const match1 = bracketsService.getMatches().get(0);
      const player1match1 = match1.element(by.id('player1'));
      const player2match1 = match1.element(by.id('player2'));

      player1match1.click();
      bracketsService.completeRound();

      expect(bracketsService.getMatches().count()).toEqual(0);

      const champion = element(by.id('champion'));
      expect(champion.getText()).toEqual('Winner: player1');

      expect(bracketsService.getRound()).toEqual('Round: 1');
    });

    it('should complete a round with 2 players and player 2 wins', () => {
      const contestants = ['player1', 'player2'];
      registrationService.inputContestants(contestants);
      registrationService.registerContestants();
      routingService.navigateTo('brackets');

      const matches = element.all(by.id('matches'));
      expect(bracketsService.getMatches().count()).toEqual(1);

      const match1 = bracketsService.getMatches().get(0);
      const player1match1 = match1.element(by.id('player1'));
      const player2match1 = match1.element(by.id('player2'));

      player2match1.click();
      bracketsService.completeRound();

      expect(bracketsService.getMatches().count()).toEqual(0);

      const champion = element(by.id('champion'));
      expect(champion.getText()).toEqual('Winner: player2');

      expect(bracketsService.getRound()).toEqual('Round: 1');
    });

    it('should complete 2 rounds with 4 players', () => {
      const contestants = ['player1', 'player2', 'player3', 'player4'];
      registrationService.inputContestants(contestants);
      registrationService.registerContestants();
      routingService.navigateTo('brackets');

      const matchesR1 = element.all(by.id('matches'));
      expect(matchesR1.count()).toEqual(2);

      const match1R1 = matchesR1.get(0);
      const player1match1R1 = match1R1.element(by.id('player1'));
      player1match1R1.click();

      const match2R1 = matchesR1.get(1);
      const player1match2R1 = match2R1.element(by.id('player1'));
      player1match2R1.click();

      bracketsService.completeRound();

      expect(bracketsService.getRound()).toEqual('Round: 2');


      const matchesR2 = element.all(by.id('matches'));
      expect(matchesR2.count()).toEqual(1);

      const match1R2 = matchesR2.get(0);
      const player1match1R2 = match1R2.element(by.id('player1'));
      player1match1R2.click();

      bracketsService.completeRound();

      const champion = element(by.id('champion'));
      expect(champion.getText()).toEqual('Winner: player1');
    });

    it('should complete 3 rounds with 8 players', () => {
      const contestants = ['player1', 'player2', 'player3', 'player4', 'player5', 'player6', 'player7', 'player8'];
      registrationService.inputContestants(contestants);
      registrationService.registerContestants();
      routingService.navigateTo('brackets');

      expect(bracketsService.getRound()).toEqual('Round: 1');

      const matchesR1 = element.all(by.id('matches'));
      expect(matchesR1.count()).toEqual(4);

      const match1R1 = matchesR1.get(0);
      const player1match1R1 = match1R1.element(by.id('player1'));
      player1match1R1.click();

      const match2R1 = matchesR1.get(1);
      const player1match2R1 = match2R1.element(by.id('player1'));
      player1match2R1.click();

      const match3R1 = matchesR1.get(2);
      const player1match3R1 = match3R1.element(by.id('player1'));
      player1match3R1.click();

      const match4R1 = matchesR1.get(3);
      const player1match4R1 = match4R1.element(by.id('player1'));
      player1match4R1.click();

      bracketsService.completeRound();

      expect(bracketsService.getRound()).toEqual('Round: 2');

      const matchesR2 = element.all(by.id('matches'));
      expect(matchesR2.count()).toEqual(2);

      const match1R2 = matchesR2.get(0);
      const player1match1R2 = match1R2.element(by.id('player1'));
      player1match1R2.click();

      const match2R2 = matchesR2.get(1);
      const player1match2R2 = match2R2.element(by.id('player1'));
      player1match2R2.click();

      bracketsService.completeRound();

      expect(bracketsService.getRound()).toEqual('Round: 3');

      const matchesR3 = element.all(by.id('matches'));
      expect(matchesR3.count()).toEqual(1);

      const match1R3 = matchesR3.get(0);
      const player1match1R3 = match1R3.element(by.id('player1'));
      player1match1R3.click();

      bracketsService.completeRound();

      const champion = element(by.id('champion'));
      expect(champion.getText()).toEqual('Winner: player1');
    });


    it('should set error message if matches are not complete', () => {
      const contestants = ['player1', 'player2', 'player3', 'player4'];
      registrationService.inputContestants(contestants);
      registrationService.registerContestants();
      routingService.navigateTo('brackets');

      expect(bracketsService.getRound()).toEqual('Round: 1');

      const matchesR1 = element.all(by.id('matches'));
      expect(matchesR1.count()).toEqual(2);

      const match1R1 = matchesR1.get(0);
      const player1match1R1 = match1R1.element(by.id('player1'));
      player1match1R1.click();

      bracketsService.completeRound();

      expect(bracketsService.getRound()).toEqual('Round: 1');

      expect(tournamentService.getMessage()).toEqual('Please complete all matches');
    });
  });

});
