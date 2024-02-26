import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/login';
import { RandomOrganizationName } from './OrganizationName';
test('test', async ({ page }) => {
  const Login = new LoginPage(page);
  await Login.gotoLoginPage()
  await Login.login('anarchy2@mail.ru', 'Qwe12345rty')
  await page.locator('.tenant-menu__icon').click();
  await page.getByText('Заказчик 07.12 - 11:08').click();
  await page.goto('https://tms-master.stage.trucker.group/orders/only_orders');
  await page.getByText('Контрагенты').click();
  await page.goto('https://tms-master.stage.trucker.group/contractors');
  await page.getByRole('menuitem', { name: 'Контрагенты' }).locator('div').first().click();
  await page.getByRole('button', { name: 'Добавить контрагента' }).click();
  await page.getByLabel('Название организации').click();
  await page.getByLabel('Название организации').fill(RandomOrganizationName());
  const randomOrganizationName = RandomOrganizationName(); //Случайное название организации1
  await page.waitForTimeout(1000);
  const elements = await page.locator('.ant-select-item-option-content').first().click(); //выбор первого адреса из выпадающего списка
  await page.locator('div:nth-child(6) > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').click();
  await page.locator('div:nth-child(8) > div > .ant-select-dropdown > div > .rc-virtual-list > .rc-virtual-list-holder > div > .rc-virtual-list-holder-inner > div:nth-child(2) > .ant-select-item-option-content').click();
  await page.locator('.custom-drawer__content').click();
  await page.getByRole('button', { name: 'Добавить', exact: true }).click();
  await page.getByRole('button', { name: 'Добавить адрес' }).click();
  await page.getByPlaceholder('Начинайте вводить адрес').click();
  await page.getByPlaceholder('Начинайте вводить адрес').fill('Москва, ленинский проспект, дом 3');
  await page.getByRole('button', { name: 'Россия, г Москва, Ленинский пр-кт, д 3', exact: true }).click();
  await page.getByRole('button', { name: 'Добавить' }).nth(4).click();
  await page.goto('https://tms-master.stage.trucker.group/contractors');
});