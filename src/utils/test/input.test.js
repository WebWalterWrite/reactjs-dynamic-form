import { 
    isNotEmpty, 
    isNotLength, 
    isOnlyLetters,
    isNotPassword
 } from "../validation/input.validation";

const dataTest = {
    firstname:{
        empty: "",
		valid: "samy",
        tooShort: "sa",
		tooLong: "Alvera Isabel Eichmann",
		containNumbers: "HelloWorld2020"
    },
    password:{
        empty:"",
        valid: "HelloWorld2020$!",
        noSpecialCharacter:"HelloWorld2020",
        noUpperCase:"helloworld2020!$",
        noNumber:"HelloWorld!$",
        tooShort:"Lor77!$",
        tooLong:"LZ34f66310-c093-4581-b9!$3cfec328-7089-4c14-a015-aaf2fdacede3"
    }
};

const errorCharacter = {
	number: false,
	upperCase: false,
	specialsCharacter: "password must contain one of the characters $, @, !, %, ?"
};  

const errorNumber = {
	number: "password must contain on-- of the characters",
	upperCase: false,
	specialsCharacter: false
};

const errorUpperCase = {
	number: false,
	upperCase: "password must contain a upper case",
	specialsCharacter: false
};

const validPassword = {
	number: false,
	upperCase: false,
	specialsCharacter: false
};

describe("firstname field", () => {

    // test values
	const { firstname:{ empty, valid, tooShort, tooLong, containNumbers } } = dataTest;

	// passed
	test("valid field", () => expect(isNotEmpty(valid)).toBeTruthy());
	test("not too short entered", () => expect(isNotLength("firstname", valid)).toBeTruthy());
    test("not contains numbers", () => expect(isOnlyLetters("firstname", valid)).toBeTruthy());

	// Not passed
    test('empty field', () => expect(isNotEmpty(empty)).toBeFalsy() );
    test("too short entered", () => expect(isNotLength('firstname', tooShort)).toBeFalsy());
    test("too long entered", () => expect(isNotLength('firstname', tooLong)).toBeFalsy());
    test("contains numbers", () => expect( isOnlyLetters("firstname", containNumbers)).toBeFalsy());

});

describe("password field", () =>{
    const { password: { empty, valid, noNumber, noUpperCase, noSpecialCharacter, tooShort, tooLong }} = dataTest;

    // passed
    test('valid field', () => expect(isNotPassword(valid)).toMatchObject(validPassword));

    // Not passed
    test('empty field', () => expect(isNotEmpty(empty)).toBeFalsy());
    
    test("not contain specials character", () => expect(isNotPassword(noSpecialCharacter)).toMatchObject(errorCharacter));
    
    test("not contain number", () => expect(isNotPassword(noNumber)).toMatchObject(errorNumber));

    test("not contain uppercase", () => expect(isNotPassword(noUpperCase)).toMatchObject(errorUpperCase));

    test("too short entered", () => expect(isNotLength("password", tooShort)).toBeFalsy());

    test('too long entered', () => expect(isNotLength('password', tooLong)).toBeFalsy());
});
