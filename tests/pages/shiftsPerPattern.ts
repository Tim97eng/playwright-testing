import SingleTextBoxPage from "./singleTextBoxPage";
import axeTest from "../accessibilityTestHelper";
import {expect, Page} from "@playwright/test";
import shiftsPerPattern_content from "../content/shiftsPerPattern_content";

class ShiftsPerPatternPage extends SingleTextBoxPage {

    async checkPageLoads(page: Page): Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toHaveText(shiftsPerPattern_content.pageTitle),
            expect(page.locator(this.textBox)).toBeVisible(),
        ]);
        await axeTest(page);
    }

    async enterHoursAndContinueOn(page: Page, hours: string): Promise<void> {
        await page.locator(this.textBox).fill(hours);
        await page.getByRole("button", { name: "Continue" }).click();
    }
}
export default ShiftsPerPatternPage;
