// @ts-check

const { test } = require('@playwright/test');
import common from '../../support/pageObjects/common';
import webtables from '../../support/pageObjects/webtables';

test.describe('User Journey - Table Interactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });
  test('TC01- Scenario A - Verify user can enter new data into the table', async ({
    page,
  }) => {
    const commonUtils = new common(page);
    const wt = new webtables(page);
    await commonUtils.clickOnCatagoryOpt('Elements');
    await commonUtils.validateURLSlug('/elements');
    await commonUtils.validatePageHeading('.main-header', 'Elements');
    await commonUtils.clickOnCatagoryOpt('Web Tables');
    await commonUtils.validateURLSlug('/webtables');
    await commonUtils.validatePageHeading('.main-header', 'Web Tables');
    await wt.clickOnAddBtnWebTable();
    await wt.validateWebTableModelVisibility();
    await wt.fillWebTableData(
      'Alden',
      'Cantrell',
      'test@test.com',
      '30',
      '12345',
      'QA',
    );
    await commonUtils.clickOnSubmit();
    await wt.validateDataPopulation(
      'Alden',
      'Cantrell',
      'test@test.com',
      '30',
      '12345',
      'QA',
    );
  });

  test('TC01- Scenario B - Verify user can edit the row in a table', async ({
    page,
  }) => {
    const commonUtils = new common(page);
    const wt = new webtables(page);
    await commonUtils.clickOnCatagoryOpt('Elements');
    await commonUtils.validateURLSlug('/elements');
    await commonUtils.validatePageHeading('.main-header', 'Elements');
    await commonUtils.clickOnCatagoryOpt('Web Tables');
    await commonUtils.validateURLSlug('/webtables');
    await commonUtils.validatePageHeading('.main-header', 'Web Tables');
    await wt.clickOnEditRow();
    await wt.validateWebTableModelVisibility();
    await wt.fillWebTableData(
      'Alden',
      'Cantrell',
      'test@test.com',
      '30',
      '12345',
      'QA',
    );
    await commonUtils.clickOnSubmit();
    await wt.validateDataPopulation(
      'Alden',
      'Cantrell',
      'test@test.com',
      '30',
      '12345',
      'QA',
    );
  });
});
