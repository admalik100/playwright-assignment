// @ts-check

const { expect } = require('@playwright/test');

class webtables {
  constructor(page) {
    this.page = page;
    this.addRecordWebTable = this.page.locator('#addNewRecordButton');
    this.WebTableModel = this.page.locator('.modal-content');
    this.fName = this.page.locator('//*[@id="firstName"]');
    this.lName = this.page.locator('//*[@id="lastName"]');
    this.email = this.page.getByPlaceholder('name@example.com');
    this.age = this.page.getByPlaceholder('Age');
    this.salary = this.page.getByPlaceholder('Salary');
    this.department = this.page.getByPlaceholder('Department');
    this.tblRowData = null;
    this.editTableRowBtn = this.page.locator('.action-buttons');
  }

  async clickOnAddBtnWebTable() {
    await this.addRecordWebTable.waitFor({ state: 'visible' });
    await this.addRecordWebTable.click();
  }

  async validateWebTableModelVisibility() {
    await this.WebTableModel.waitFor({ state: 'visible' });
    await expect(this.WebTableModel).toBeVisible();
  }

  async fillWebTableData(fName, lName, email, age, salary, department) {
    await this.fName.fill(fName);
    await this.lName.fill(lName);
    await this.email.click();
    await this.email.fill(email);
    await this.age.click();
    await this.age.fill(age);
    await this.salary.click();
    await this.salary.fill(salary);
    await this.department.click();
    await this.department.fill(department);
  }

  async validateDataPopulation(fName, lName, email, age, salary, department) {
    const data = [fName, lName, email, age, salary, department];

    this.tblRowData = this.page.getByRole('gridcell', { name: fName }).first();

    for (let index = 0; index < 6; index++) {
      this.tblRowData = this.page
        .getByRole('gridcell', { name: data[index] })
        .first();
      await expect(this.tblRowData).toHaveText(data[index]);
    }
  }

  async clickOnEditRow() {
    await this.editTableRowBtn.first().getByTitle('Edit').click();
  }
}

export default webtables;
