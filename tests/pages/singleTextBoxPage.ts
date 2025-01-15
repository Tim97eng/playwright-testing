import {expect, Page} from "@playwright/test";
import howManyHoursPerShiftPage_content from "../content/howManyHoursPerShiftPage_content";
import axeTest from "../accessibilityTestHelper";

abstract class SingleTextBoxPage {
    protected readonly title: string;
    protected readonly textBox: string;
    private readonly errorBanner: string;
    private readonly errorMessage: string;

    constructor() {
        this.title = `.govuk-label--l`
        this.textBox = `label[for="response"]`
        this.errorBanner = `.govuk-error-summary__title`
        this.errorMessage = `.govuk-error-message`
    }

    abstract checkPageLoads(page: Page): Promise<void>;

    abstract enterHoursAndContinueOn(page: Page, hours: string): Promise<void>;
}
export default SingleTextBoxPage;
