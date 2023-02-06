const Manager = require ("../lib/Manager");

const employeeTest = new Manager("Neale Chapman", 3, "nealechapman@optushome.com.au", "Manager");

describe("Intern details", () => {
    it("Intern's name", () => {
        expect(employeeTest.name).toEqual(expect.any(String))
        expect(employeeTest.name.length).toBeGreaterThan(2)
    })

     it("Intern's id that is a num", () => {
        expect(employeeTest.id).toEqual(expect.any(Number))
    })

    it("Intern's email address", () =>{
        expect(employeeTest.email).toEqual(expect.stringContaining("@"))
    })


    it("Intern's's role", () => {
        expect(employeeTest.getRole()).toEqual("Manager")
    })

})