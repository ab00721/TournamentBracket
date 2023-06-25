import { browser, by, element } from 'protractor';
import { RoutingService } from './routing.service'

describe('Routing', () => {
  let routingService;

  beforeEach(() => {
    routingService = new RoutingService();
  });

  it('should navigate to the welcome page', () => {
    routingService.loadPage('/');
    expect(routingService.getPageTitle()).toEqual('Brackets App');
  });

  it('should navigate to the registration page', () => {
    routingService.loadPage('/');
    routingService.navigateTo('registration');
    expect(routingService.getPageTitle()).toEqual('Register Players');
  });

  it('should navigate to the brackets page', () => {
    routingService.loadPage('/');
    routingService.navigateTo('brackets');
    expect(routingService.getPageTitle()).toEqual('Brackets');
  });

  it('should navigate to the welcome page from brackets page', () => {
    routingService.loadPage('/brackets');
    routingService.navigateTo('welcome');
    expect(routingService.getPageTitle()).toEqual('Brackets App');
  });
});
