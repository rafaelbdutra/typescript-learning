import * as React from "react";
import * as enzyme from "enzyme";
import Hello from "./Hello";

it("renders the correct text when no enthusiasm level is given", () => {
    const hello = enzyme.shallow(<Hello name={"Rafael"} />);
    expect(hello.find(".greeting").text()).toEqual("Hello Rafael!");
});

it("renders the correct text with explicit enthusiasm of 1", () => {
    const hello = enzyme.shallow(<Hello name={"Rafael"} enthusiasmLevel={1} />);
    expect(hello.find(".greeting").text()).toEqual("Hello Rafael!");
});

it("renders the correct text with explicit enthusiasm of 5", () => {
    const hello = enzyme.shallow(<Hello name={"Rafael"} enthusiasmLevel={5} />);
    expect(hello.find(".greeting").text()).toEqual("Hello Rafael!!!!!");
});

it("throws when enthusiasm level is 0", () => {
    expect(() => {
        enzyme.shallow(<Hello name={"Rafael"} enthusiasmLevel={0} />)
    }).toThrow();
});

it("throws when enthusiasm level is negative", () => {
    expect(() => {
        enzyme.shallow(<Hello name={"Rafael"} enthusiasmLevel={-2} />)
    }).toThrow();
});
