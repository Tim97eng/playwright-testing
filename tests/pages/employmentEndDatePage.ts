import {expect, Page} from "@playwright/test";
import axeTest from "../accessibilityTestHelper";
import employmentEndDate_content from "../content/employmentEndDate_content";
import EnterDatePage from "./enterDatePage";

class EmploymentEndDatePage extends EnterDatePage {

    async checkPageLoads(page: Page): Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toHaveText(employmentEndDate_content.pageTitle),
            expect(page.locator(this.textBoxDate)).toContainText(employmentEndDate_content.textBoxDay),
            expect(page.locator(this.textBoxMonth)).toContainText(employmentEndDate_content.textBoxMonth),
            expect(page.locator(this.textBoxYear)).toContainText(employmentEndDate_content.textBoxYear),
        ]);
        await axeTest(page);
    }

    async enterDateAndContinueOn(page: Page, employmentEndDate: {day: string; month: string; year: string }): Promise<void> {
        await page.locator(`#response-0`).fill(employmentEndDate.day);
        await page.locator(`#response-1`).fill(employmentEndDate.month);
        await page.locator(`#response-2`).fill(employmentEndDate.year);
        await page.getByRole("button", { name: "Continue" }).click();
    }

}
export default EmploymentEndDatePage;
