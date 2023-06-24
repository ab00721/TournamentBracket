import { browser, by, element } from 'protractor';

describe('Brackets', () => {
  beforeEach(() => {
    browser.get('/registration');
  });

  describe('Seeding', () => {

    it('should seed 2 contestants', () => {
      const contestants = ['player1', 'player2'];
      const contestantInputs = element.all(by.css('input[type="text"]'));
      contestants.forEach((contestant, index) => {
        contestantInputs.get(index).sendKeys(contestant);
      });
      const registerButton = element(by.id('submit'));
      registerButton.click();

      const bracketsLink = element(by.id('brackets'));
      bracketsLink.click();

      const matches = element.all(by.css('div[id^="match"]'));
      expect(matches.count()).toEqual(1);

      const match1 = matches.get(0);
      const player1match1 = match1.element(by.id('player1match1'));
      const player2match1 = match1.element(by.id('player2match1'));

      expect(player1match1.isPresent()).toBe(true);
      expect(player2match1.isPresent()).toBe(true);
      expect(player1match1.getAttribute('value')).toEqual('player1');
      expect(player2match1.getAttribute('value')).toEqual('player2');
    });

    it('should seed 4 contestants', () => {
      const contestants = ['player1', 'player2', 'player3', 'player4'];
      const contestantInputs = element.all(by.css('input[type="text"]'));
      contestants.forEach((contestant, index) => {
        contestantInputs.get(index).sendKeys(contestant);
      });
      const registerButton = element(by.id('submit'));
      registerButton.click();

      const bracketsLink = element(by.id('brackets'));
      bracketsLink.click();

      const matches = element.all(by.css('div[id^="match"]'));
      expect(matches.count()).toEqual(2);

      const match1 = matches.get(0);
      const player1match1 = match1.element(by.id('player1match1'));
      const player2match1 = match1.element(by.id('player2match1'));

      const match2 = matches.get(1);
      const player1match2 = match2.element(by.id('player1match2'));
      const player2match2 = match2.element(by.id('player2match2'));

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
      const contestantInputs = element.all(by.css('input[type="text"]'));
      contestants.forEach((contestant, index) => {
        contestantInputs.get(index).sendKeys(contestant);
      });
      const registerButton = element(by.id('submit'));
      registerButton.click();

      const bracketsLink = element(by.id('brackets'));
      bracketsLink.click();

      const matches = element.all(by.css('div[id^="match"]'));
      expect(matches.count()).toEqual(4);

      const match1 = matches.get(0);
      const player1match1 = match1.element(by.id('player1match1'));
      const player2match1 = match1.element(by.id('player2match1'));

      const match2 = matches.get(1);
      const player1match2 = match2.element(by.id('player1match2'));
      const player2match2 = match2.element(by.id('player2match2'));

      const match3 = matches.get(2);
      const player1match3 = match3.element(by.id('player1match3'));
      const player2match3 = match3.element(by.id('player2match3'));

      const match4 = matches.get(3);
      const player1match4 = match4.element(by.id('player1match4'));
      const player2match4 = match4.element(by.id('player2match4'));

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

  describe('Compete Round', () => {

    it('should complete a round with 2 players and player 1 wins', () => {
      const contestants = ['player1', 'player2'];
      const contestantInputs = element.all(by.css('input[type="text"]'));
      contestants.forEach((contestant, index) => {
        contestantInputs.get(index).sendKeys(contestant);
      });
      const registerButton = element(by.id('submit'));
      registerButton.click();

      const bracketsLink = element(by.id('brackets'));
      bracketsLink.click();

      const matches = element.all(by.css('div[id^="match"]'));
      expect(matches.count()).toEqual(1);

      const match1 = matches.get(0);
      const player1match1 = match1.element(by.id('player1match1'));
      const player2match1 = match1.element(by.id('player2match1'));

      player1match1.click();
      const completeRound = element(by.id('completeRound'));
      completeRound.click();

      expect(matches.count()).toEqual(0);

      const champion = element(by.id('champion'));
      expect(champion.getText()).toEqual('Winner: player1');

      const round = element(by.id('round'));
      expect(round.getText()).toEqual('Round: 1');
    });

    it('should complete a round with 2 players and player 2 wins', () => {
      const contestants = ['player1', 'player2'];
      const contestantInputs = element.all(by.css('input[type="text"]'));
      contestants.forEach((contestant, index) => {
        contestantInputs.get(index).sendKeys(contestant);
      });
      const registerButton = element(by.id('submit'));
      registerButton.click();

      const bracketsLink = element(by.id('brackets'));
      bracketsLink.click();

      const matches = element.all(by.css('div[id^="match"]'));
      expect(matches.count()).toEqual(1);

      const match1 = matches.get(0);
      const player1match1 = match1.element(by.id('player1match1'));
      const player2match1 = match1.element(by.id('player2match1'));

      player2match1.click();
      const completeRound = element(by.id('completeRound'));
      completeRound.click();

      expect(matches.count()).toEqual(0);

      const champion = element(by.id('champion'));
      expect(champion.getText()).toEqual('Winner: player2');

      const round = element(by.id('round'));
      expect(round.getText()).toEqual('Round: 1');
    });
  });

});
