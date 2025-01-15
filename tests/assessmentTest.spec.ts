import {test} from "@playwright/test";
import LandingPage from "./pages/landingPage";
import IrregularHoursPage from "./pages/irregularHoursPage";
import YearLeavePage from "./pages/leaveYearStartPage";
import EntitlementBasedOnPage from "./pages/entitlementBasedOnPage";
import WorkOutHolidayPage from "./pages/workOutHolidayPage";
import AnswersPage from "./pages/answersPage";
import LeaveYearStartPage from "./pages/leaveYearStartPage";

import details from "./data";
import EmploymentStartDatePage from "./pages/employmentStartDatePage";
import EmploymentEndDatePage from "./pages/employmentEndDatePage";
import HoursPerShiftPage from "./pages/hoursPerShiftPage";
import ShiftsPerPatternPage from "./pages/shiftsPerPattern";
import DaysInShiftPatternPage from "./pages/DaysInShiftPatternPage";


test('Calculate Holiday Entitlement for a full leave year with annualised hours and other options', async ({page}) => {
    const landingPage: LandingPage = new LandingPage();
    await landingPage.checkPageLoads(page);
    await landingPage.continueOn(page);

    const irregularHoursPage: IrregularHoursPage = new IrregularHoursPage();
    await irregularHoursPage.checkPageLoads(page);
    await irregularHoursPage.selectYesAndContinueOn(page);

    const yearLeavePage: LeaveYearStartPage = new LeaveYearStartPage();
    await yearLeavePage.checkPageLoads(page);
    await yearLeavePage.enterYearAndContinueOn(page, details.leaveYear);

    const entitlementBasedOnPage: EntitlementBasedOnPage = new EntitlementBasedOnPage();
    await entitlementBasedOnPage.checkPageLoads(page);
    await entitlementBasedOnPage.selectHolidayEntitlementBasedOnAndContinueOn(page, details.entitlementBasedOn.annualisedHours);

    const workOutHolidayPage: WorkOutHolidayPage = new WorkOutHolidayPage();
    await workOutHolidayPage.checkPageLoads(page);
    await workOutHolidayPage.selectWorkOutHolidayOptionAndContinueOn(page, details.workOutHoliday.fullYear);

    const answersPage: AnswersPage = new AnswersPage();
    await answersPage.checkPageLoads(page, details.answers.fullYear);
});

test('Calculate Holiday Entitlement for someone starting and leaving part way through a leave year with shifts and other options', async ({page}) => {
    const landingPage: LandingPage = new LandingPage();
    await landingPage.checkPageLoads(page);
    await landingPage.continueOn(page);

    const irregularHoursPage: IrregularHoursPage = new IrregularHoursPage();
    await irregularHoursPage.checkPageLoads(page);
    await irregularHoursPage.selectYesAndContinueOn(page);

    const yearLeavePage: YearLeavePage = new YearLeavePage();
    await yearLeavePage.checkPageLoads(page);
    await yearLeavePage.enterYearAndContinueOn(page, details.leaveYear);

    const entitlementBasedOnPage: EntitlementBasedOnPage = new EntitlementBasedOnPage();
    await entitlementBasedOnPage.checkPageLoads(page);
    await entitlementBasedOnPage.selectHolidayEntitlementBasedOnAndContinueOn(page, details.entitlementBasedOn.shifts);

    const workOutHolidayPage: WorkOutHolidayPage = new WorkOutHolidayPage();
    await workOutHolidayPage.checkPageLoadsForShifts(page);
    await workOutHolidayPage.selectWorkOutHolidayOptionAndContinueOn(page, details.workOutHoliday.startAndLeavePartWayThroughLeaveYear);

    const employmentStartPage: EmploymentStartDatePage = new EmploymentStartDatePage();
    await employmentStartPage.checkPageLoads(page);
    await employmentStartPage.enterDateAndContinueOn(page, details.employment.start);

    const employmentEndPage: EmploymentEndDatePage = new EmploymentEndDatePage();
    await employmentEndPage.checkPageLoads(page);
    await employmentEndPage.enterDateAndContinueOn(page, details.employment.end);

    const hoursPerShiftPage: HoursPerShiftPage = new HoursPerShiftPage();
    await hoursPerShiftPage.checkPageLoads(page);
    await hoursPerShiftPage.enterHoursAndContinueOn(page, details.employment.shift.hoursPerShift);

    const shiftPerPatternPage: ShiftsPerPatternPage = new ShiftsPerPatternPage();
    await shiftPerPatternPage.checkPageLoads(page);
    await shiftPerPatternPage.enterHoursAndContinueOn(page, details.employment.shift.shiftsPerPattern);

    const daysPerPatternPage: DaysInShiftPatternPage = new DaysInShiftPatternPage();
    await daysPerPatternPage.checkPageLoads(page);
    await daysPerPatternPage.enterHoursAndContinueOn(page, details.employment.shift.daysPerPattern);

    const answersPage: AnswersPage = new AnswersPage();
    await answersPage.checkPageLoads(page, details.answers.shift);
});
