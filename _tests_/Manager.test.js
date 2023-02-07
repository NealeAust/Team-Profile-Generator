const Manager = require ("../lib/Manager");

const employeeTest = new Manager("nealechapman", 3, "nealechapman@optushome.com.au", "Manager");

describe("Manager's details", () => {
    it("Manager's name", () => {
        expect(employeeTest.name).toEqual(expect.any(String))
        expect(employeeTest.name.length).toBeGreaterThan(2)
    })

     it("Manager's id that is a number", () => {
        expect(employeeTest.id).toEqual(expect.any(Number))
    })

    it("Manager's email address", () => {
        expect(employeeTest.email).toEqual(expect.stringContaining("@"))
    })

    it("Manager's role", () => {
        expect(employeeTest.getRole()).toEqual("Manager")
    })

})