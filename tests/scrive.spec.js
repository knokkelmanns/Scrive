import { test, expect } from '@playwright/test';

test('first test', async ({ page }) => {
    await page.goto('https://staging.scrive.com/t/9221714692410699950/7348c782641060a9');

    await page.locator('#name').click();
    await page.locator('#name').fill('Peter Parker');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.waitForTimeout(500);

    const element = await page.waitForSelector('div[class*="section"][class*="sign"][class*="above-overlay"]');
    await element.screenshot({ path: 'screenshot.png' });

    await page.getByRole('button', {name: 'Sign'}).click();

    await expect(page.locator('.follow')).toBeVisible();
    await expect(page.locator('.follow')).toContainText('Document signed!');
});
