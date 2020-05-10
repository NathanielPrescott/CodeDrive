import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('CodeDrive App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title of CodeDrive', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('CodeDrive');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
