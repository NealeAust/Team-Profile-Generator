const Intern = require ("../lib/Intern");

const employeeTest = new Intern("Neale Chapman", 4, "nealechapman@optushome.com.au", "Intern");

describe("Intern details", () => {
    it("Intern's name", () => {
        expect(employeeTest.name).toEqual(expect.any(String))
        expect(employeeTest.name.length).toBeGreaterThan(2)
    })

     it("Intern's id that is a number", () => {
        expect(employeeTest.id).toEqual(expect.any(Number))
    })

    it("Intern's email address", () =>{
        expect(employeeTest.email).toEqual(expect.stringContaining("@"))
    })


    it("Intern's role", () => {
        expect(employeeTest.getRole()).toEqual("Intern")
    })

})