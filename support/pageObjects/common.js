// @ts-check

const { expect } = require('@playwright/test');

class common {
  constructor(page) {
    this.page = page;
    this.section = null;
    this.pageTitle = null;
    this.submitBtn = this.page.locator('#submit');
    // ////////
    // this.productName = page.locator('.product-name').first();
    // this.productPrice = page.locator('.product-price').first();
    // this.productPriceText = '';
    // this.btnAddtoCart = page.getByText('ADD TO CART').first();
    // this.cartCount = page.locator('.cart-count');
    // this.totalPrice = page.getByRole('cell').last();
    // this.totalPriceText = '';
    // this.iconCart = page.getByRole('link', { name: 'Cart' });
    // this.productDetailsMinicartView = page.locator('.cart-item').first();
    // this.productNameMiniCartView =
    //   this.productDetailsMinicartView.locator('.product-name');
    // this.productPriceMiniCartView =
    //   this.productDetailsMinicartView.locator('.product-price');
    // this.productQTYMiniCartView =
    //   this.productDetailsMinicartView.locator('.quantity');
    // this.totalAmountMiniCartView =
    //   this.productDetailsMinicartView.locator('.amount');
    // this.btnCheckout = page.getByText('PROCEED TO CHECKOUT');
  }

  async clickOnCatagoryOpt(elementText) {
    this.section = this.page.getByText(elementText).first();
    await this.section.waitFor({ state: 'visible' });
    await this.section.click();
  }

  async validateURLSlug(urlSlug) {
    await expect(this.page).toHaveURL(urlSlug);
  }

  async validatePageHeading(elementLocator, elementText) {
    this.pageTitle = this.page.locator(elementLocator);
    await this.pageTitle.waitFor({ state: 'visible' });
    await expect(this.pageTitle).toHaveText(elementText);
  }

  async clickOnSubmit() {
    await this.submitBtn.click();
  }
  /////
  //   async validateProductName(productName) {
  //     await this.productName.waitFor({ state: 'visible' });
  //     await this.productPrice.waitFor({ state: 'visible' });
  //     await expect(this.productName).toHaveText(productName);
  //   }
  //   async validateProductPrice(productPrice) {
  //     this.productPriceText = (await this.productPrice.innerText()).valueOf();
  //     await expect(this.productPriceText).toEqual(productPrice);
  //   }
  //   async addToCart() {
  //     await this.btnAddtoCart.click();
  //   }
  //   async validatePriceAfterProductAddition(productAmount) {
  //     await this.addToCart();
  //     await expect(this.cartCount).toHaveText('1');
  //     this.totalPriceText = (await this.totalPrice.innerText()).valueOf();
  //     await expect(this.totalPriceText).toEqual(productAmount);
  //   }
  //   async validateProductDetailsInMiniCart(productName, productPrice) {
  //     await this.iconCart.click();
  //     await expect(this.productNameMiniCartView).toHaveText(productName);
  //     await expect(this.productPriceMiniCartView).toHaveText(productPrice);
  //     await expect(this.productQTYMiniCartView).toHaveText('1 No.');
  //     await expect(this.totalAmountMiniCartView).toHaveText(productPrice);
  //   }

  //   async proceedToCheckout() {
  //     await this.btnCheckout.click();
  //   }
}

export default common;
