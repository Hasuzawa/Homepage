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