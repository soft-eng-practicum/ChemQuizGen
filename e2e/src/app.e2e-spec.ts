import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getPageTitle() {
    return element(by.css('app-root h1')).getText();
  }
}

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Should have the correct page title.', () => {
    page.navigateTo();
    expect(page.getPageTitle()).toEqual('Chemistry Quiz Key Generator', 'Page title is incorrect.');
  });

  it('Should have at least 1 button.', () => {
    page.navigateTo();
    // TODO
  })
});
