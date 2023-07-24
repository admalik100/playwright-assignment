// // @ts-check

// const { test, expect } = require('@playwright/test');
// import homepage from '../support/pageObjects/homepage';
// import cartpage from '../support/pageObjects/cartpage';
// import country from '../support/pageObjects/country';

// test.describe('User Journey - Add to Cart', () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto('/seleniumPractise/#/', {
//       waitUntil: 'networkidle',
//     });
//   });
//   test('Validate user is able to add product into cart and proceed to checkout and is able to place order succesfully', async ({
//     page,
//   }) => {
//     const hp = new homepage(page);
//     const ct = new cartpage(page);
//     const cntry = new country(page);
//     const productName = 'Brocolli - 1 Kg';
//     const productQTY = '1';
//     const productAmount = '120';
//     const productTotalAmount = '120';
//     const totalAmount = '120';
//     const discountedAmount = '120';
//     const countryName = 'Afghanistan';
//     await hp.validateProductName(productName);
//     await hp.validateProductPrice(productAmount);
//     await hp.validatePriceAfterProductAddition(productAmount);
//     await hp.validateProductDetailsInMiniCart(productName, productAmount);
//     await hp.proceedToCheckout();
//     await ct.validateProductDetailsOnCart(
//       productName,
//       productQTY,
//       productAmount,
//       productTotalAmount,
//       totalAmount,
//       discountedAmount,
//     );
//     await ct.placeOrder();
//     await cntry.chooseCountry(countryName);
//     await cntry.acceptTermsConditions();
//     await cntry.finalizePlacingOrder();
//     await cntry.validateOrderSuccess();
//   });
// });
