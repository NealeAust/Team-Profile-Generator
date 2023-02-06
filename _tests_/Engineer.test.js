const Engineer = require ("../lib/Engineer");

const employeeTest = new Engineer("Neale Chapman", 3, "nealechapman@optushome.com.au", "Engineer");

describe("Engineer details", () => {
    it("Engineer's name", () => {
        expect(employeeTest.name).toEqual(expect.any(String))
        expect(employeeTest.name.length).toBeGreaterThan(2)
    })

     it("Engineer's id that is a num", () => {
        expect(employeeTest.id).toEqual(expect.any(Number))
    })

    it("Engineer's email address", () =>{
        expect(employeeTest.email).toEqual(expect.stringContaining("@"))
    })


    it("Engineer's role", () => {
        expect(employeeTest.getRole()).toEqual("Engineer")
    })

})