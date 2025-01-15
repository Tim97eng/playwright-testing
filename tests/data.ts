const data = {
    leaveYear: {
        day: "1",
        month: "1",
        year: "2024"
    },
    entitlementBasedOn: {
        daysWorkedPerWeek: 'label[for="response-0"]',
        hoursWorkedPerWeek: 'label[for="response-1"]',
        annualisedHours: 'label[for="response-2"]',
        compressedHours: 'label[for="response-3"]',
        shifts: 'label[for="response-4"]'
    },
    workOutHoliday: {
        fullYear: 'label[for="response-0"]',
        startPartWayThroughLeaveYear: 'label[for="response-1"]',
        leavingPartThroughLeaveYear: 'label[for="response-2"]',
        startAndLeavePartWayThroughLeaveYear: 'label[for="response-3"]'
    },
    employment: {
        start: {
            day: "1",
            month: "3",
            year: "2022"
        },
        end: {
            day: "1",
            month: "9",
            year: "2022"
        },
        shift: {
            hoursPerShift: "8",
            shiftsPerPattern: "4",
            daysPerPattern: "5"
        }
    },
    answers: {
        fullYear: "The statutory holiday entitlement is 5.6 weeks holiday.",
        shift: "The statutory holiday entitlement is 14.20 shifts for the year. Each shift being 8.0 hours.\n Even though more than 5 shifts a week are worked the maximum statutory holiday entitlement is 28 shifts."
    }
} as const;

export default data;
