import {expect, test} from "@playwright/test";
import LandingPage from "./pages/landingPage";
import IrregularHoursPage from "./pages/irregularHoursPage";

test("Get the header", async ({page}) => {
    await page.goto("https://www.gov.uk/calculate-your-holiday-entitlement");

    await expect (page.locator(".govuk-heading-xl")).toBeVisible();

});

test("Click button to go to next page", async ({page}) => {
    await page.goto("https://www.gov.uk/calculate-your-holiday-entitlement");

    await page.getByRole("button", {name: "Start now"}).click();

    await expect (page.locator(".govuk-caption-l")).toBeVisible();
});


    test("End to end - Calculate Holiday Entitlement for Full Year with following option", async ({page}) => {
        await page.goto("https://www.gov.uk/calculate-your-holiday-entitlement");
        await expect (page.locator(".govuk-heading-xl")).toBeVisible();

        await page.getByRole("button", {name: "Start now"}).click();
        await expect(page.locator(`.govuk-fieldset__heading`))
            .toHaveText(`Does the employee work irregular hours or for part of the year?`);
        //await page.getByRole("radio", {name: "No"}).click();
        await page.click('label[for="response-1"]');

        await page.getByRole("button", { name: "Continue" }).click();

        await expect(page.getByRole('heading', { name: 'Is the holiday entitlement based on:' })).toBeVisible();

        await expect(page.locator(`.govuk-fieldset__heading`))
            .toHaveText(`Is the holiday entitlement based on:`);
        await page.click('label[for="response-0"]');
        await page.getByRole("button", { name: "Continue" }).click();
        await expect(page.locator(`.govuk-fieldset__heading`))
            .toHaveText(`Do you want to work out holiday:`);
        await page.click('label[for="response-0"]');
        await page.getByRole("button", { name: "Continue" }).click();
        await expect(page.locator(`.govuk-label-wrapper`))
            .toHaveText(`Number of days worked per week?`);
        await page.locator(`#response`).fill("5");
        await page.getByRole("button", { name: "Continue" }).click();
        await expect(page.locator(`.govuk-heading-xl`))
            .toContainText(`Information based on your answers`);
        await expect(page.locator(`.summary`))
            .toHaveText(`The statutory holiday entitlement is 28 days holiday.`);
    });




test(`Page object model happy path for second test`, async ({ page }):
    Promise<void> => {
        const landingPage: LandingPage = new LandingPage();
        await landingPage.checkPageLoads(page);
        await landingPage.continueOn(page);
});

test(`Page object model unhappy path`, async ({ page }): Promise<void> => {
    const landingPage: LandingPage = new LandingPage();
    await landingPage.checkPageLoads(page);
    await landingPage.continueOn(page);
    const irregularHoursPage: IrregularHoursPage = new IrregularHoursPage();
    await irregularHoursPage.checkPageLoads(page);
    await irregularHoursPage.triggerErrorMessages(page);
});

