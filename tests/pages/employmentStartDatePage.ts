import {expect, Page} from "@playwright/test";
import axeTest from "../accessibilityTestHelper";
import employmentStartDate_content from "../content/employmentStartDate_content";
import EnterDatePage from "./enterDatePage";

class EmploymentStartDatePage extends EnterDatePage{

    async checkPageLoads(page: Page): Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toHaveText(employmentStartDate_content.pageTitle),
            expect(page.locator(this.textBoxDate)).toContainText(employmentStartDate_content.textBoxDay),
            expect(page.locator(this.textBoxMonth)).toContainText(employmentStartDate_content.textBoxMonth),
            expect(page.locator(this.textBoxYear)).toContainText(employmentStartDate_content.textBoxYear),
        ]);
        await axeTest(page);
    }

    async enterDateAndContinueOn(page: Page, employmentStartDate: { day: string; month: string; year: string }): Promise<void> {
        await page.locator(`#response-0`).fill(employmentStartDate.day);
        await page.locator(`#response-1`).fill(employmentStartDate.month);
        await page.locator(`#response-2`).fill(employmentStartDate.year);
        await page.getByRole("button", { name: "Continue" }).click();
    }
}
export default EmploymentStartDatePage;
