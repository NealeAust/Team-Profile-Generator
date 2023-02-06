const Employee = require ("../lib/Employee");

const employeeTest = new Employee ("Neale Chapman", 3, "nealechapman@optushome.com.au", "Employee");

describe("Employee details", () => {
    it("Employee name", () => {
        expect(employeeTest.name).toEqual(expect.any(String))
        expect(employeeTest.name.length).toBeGreaterThan(2)
    })

     it("Employee id that is a num", () => {
        expect(employeeTest.id).toEqual(expect.any(Number))
    })

    it("Employee email address", () =>{
        expect(employeeTest.email).toEqual(expect.stringContaining("@"))
    })


    it("Employee role", () => {
        expect(employeeTest.getRole()).toBe("Employee")
    })

})