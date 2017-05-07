namespace fortune_generator.Services {
class FortuneService {
  displayFortune() {
    let fortunes = [`There is no giant foot trying to squash you. That is good.`, `Mike Tyson could be waiting outside for you.`, `At times you may feel that you might ignite. Realize, you probably won't.`, `It's possible that your head is too small for your body.`, `The road to riches is paved with taxes.`, `He who fishes in other man's well is likely to catch crabs.` ];

    let random = fortunes[Math.floor(Math.random() * fortunes.length)];

    return random;
  }
}

angular.module("fortuneModule", []).service("FortuneService", FortuneService);

angular.module('fortune_generator', ['fortuneModule']);

class FortuneController {
  public fortune;
  constructor(FortuneService: FortuneService) {
    this.fortune = FortuneService.displayFortune();

  }
}

angular.module("fortune_generator").controller('fortuneController', FortuneController);
    }
