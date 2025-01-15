import SingleTextBoxPage from "./singleTextBoxPage";
import {expect, Page} from "@playwright/test";
import axeTest from "../accessibilityTestHelper";
import daysInShiftPattern_content from "../content/daysInShiftPattern_content";

class DaysInShiftPatternPage extends SingleTextBoxPage {
    private readonly text: string;

    constructor() {
        super();
        this.text = `.govuk-hint`
    }

    async checkPageLoads(page: Page): Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toHaveText(daysInShiftPattern_content.pageTitle),
            expect(page.locator(this.text)).toHaveText(daysInShiftPattern_content.text),
        ]);
        await axeTest(page);
    }

    async enterHoursAndContinueOn(page: Page, hours: string): Promise<void> {
        await page.locator(this.textBox).fill(hours);
        await page.getByRole("button", { name: "Continue" }).click();
    }

}
export default DaysInShiftPatternPage;
