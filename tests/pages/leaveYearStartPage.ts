import {expect, Page} from "@playwright/test";
import yearLeave_content from "../content/yearLeave_content";
import axeTest from "../accessibilityTestHelper";

class LeaveYearStartPage {
  private readonly title: string;
    private readonly text: string;
    private readonly textBoxDate: string;
    private readonly textBoxMonth: string;
    private readonly textBoxYear: string;
    private readonly errorBanner: string;
    private readonly errorMessage: string;

    constructor() {
        this.title = `.govuk-fieldset__heading`
        this.text = `.govuk-hint`
        this.textBoxDate = `label[for="response-0"]`
        this.textBoxMonth = `label[for="response-1"]`
        this.textBoxYear = `label[for="response-2"]`
        this.errorBanner = `.govuk-error-summary__title`
        this.errorMessage = `.govuk-error-message`
    }

    async checkPageLoads(page: Page): Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toHaveText(yearLeave_content.pageTitle),
            expect(page.locator(this.text)).toContainText(yearLeave_content.divText),
            expect(page.locator(this.textBoxDate)).toContainText(yearLeave_content.textBoxDay),
            expect(page.locator(this.textBoxMonth)).toContainText(yearLeave_content.textBoxMonth),
            expect(page.locator(this.textBoxYear)).toContainText(yearLeave_content.textBoxYear),
        ]);
        await axeTest(page);
    }

    async enterYearAndContinueOn(page: Page, leaveYearDate: { day: string; month: string; year: string }): Promise<void> {
        await page.locator(`#response-0`).fill(leaveYearDate.day);
        await page.locator(`#response-1`).fill(leaveYearDate.month);
        await page.locator(`#response-2`).fill(leaveYearDate.year);
        await page.getByRole("button", { name: "Continue" }).click();
    }

    async triggerErrorMessages(page: Page): Promise<void> {
        await page.getByRole("button", { name: "Continue" }).click();
        await Promise.all([
            expect(page.locator(this.errorBanner)).toHaveText(yearLeave_content.errorBanner),
            expect(page.locator(this.errorMessage)).toContainText(yearLeave_content.errorMessage),
        ]);
    }

}
export default LeaveYearStartPage;
