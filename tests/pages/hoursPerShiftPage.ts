import howManyHoursPerShiftPage_content from "../content/howManyHoursPerShiftPage_content";
import {expect, Page} from "@playwright/test";
import axeTest from "../accessibilityTestHelper";
import SingleTextBoxPage from "./singleTextBoxPage";

class HoursPerShiftPage extends SingleTextBoxPage{

    async checkPageLoads(page: Page): Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toHaveText(howManyHoursPerShiftPage_content.pageTitle),
            expect(page.locator(this.textBox)).toBeVisible(),
        ]);
        await axeTest(page);
    }

    async enterHoursAndContinueOn(page: Page, hours: string): Promise<void> {
        await page.locator(this.textBox).fill(hours);
        await page.getByRole("button", { name: "Continue" }).click();
    }

}
export default HoursPerShiftPage;
