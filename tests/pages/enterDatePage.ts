import {Page} from "@playwright/test";

abstract class EnterDatePage {
    protected readonly title: string;
    protected readonly textBoxDate: string;
    protected readonly textBoxMonth: string;
    protected readonly textBoxYear: string;
    private readonly errorBanner: string;
    private readonly errorMessage: string;

    constructor() {
        this.title = `.govuk-fieldset__heading`
        this.textBoxDate = `label[for="response-0"]`
        this.textBoxMonth = `label[for="response-1"]`
        this.textBoxYear = `label[for="response-2"]`
        this.errorBanner = `.govuk-error-summary__title`
        this.errorMessage = `.govuk-error-message`
    }

    abstract enterDateAndContinueOn(page: Page, employmentStartDate: { day: string; month: string; year: string }): Promise<void>;

}
export default EnterDatePage;
