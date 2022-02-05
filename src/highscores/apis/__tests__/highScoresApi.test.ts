import * as config from "../../../common/api/highscoreApiConfig";

describe('High Scores API functions', () => {
  describe('getHighScores', () => {
    
  });
  
  describe('submitHighScore', () => {
    let highScoreApiConfigSpy: jest.SpyInstance;

    beforeEach(() => {
      highScoreApiConfigSpy = jest.spyOn(config, 'highscoreApiConfig');
      highScoreApiConfigSpy.mockImplementation(() => {});
    });

    it('should submit the high score', () => {
    }); 
  });
});
