import React from "react";
import TestRender from "react-test-renderer";
import ReactTestUtils from "react-dom/test-utils";
//import { isElementOfType } from ReactTestUtils;

import { render,  } from "react-test-renderer";

import Content, { TabIndex } from "../Content.jsx";
import {Introduction, WorkExperience, Projects, Skill , Contact} from "../contents.jsx";



test("page enum length is 5", ()=>{
    expect(Object.keys(TabIndex).length).toBe(5);
});

/* describe("method returns correct page component", () => {

const testRender = TestRender.create(<Content selectedTab="0"/>);
    const instance = testRender.getInstance();
    console.log(instance);
    console.log(instance.displayTabContent);

    test("page 0 returned", () => {
        expect(ReactTestUtils.isElementOfType(instance.displayTabContent, <Introduction />)).toBe(true);
    });
}); */




/*s
test("render page 0",()=>{
    const tree = renderer.create(<Content selectedTab={TabIndex[0]}/>);
    expect(tree.props.displayTabContent()).toHaveReturned();
}); */