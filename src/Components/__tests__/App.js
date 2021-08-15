import React from "react";

//import { render } from "@testing-library/react";
import App from "../../App.js";

import TestRenderer from "react-test-renderer";
import { Simulate } from "react-dom/test-utils";

describe("App", () => {

    const testRenderer = TestRenderer.create(<App />);
    const testInstance = testRenderer.root;

    const buttonText = ["Intro", "Experience", "Projects", "Skill", "Contact"];

    const app = testInstance.findByType(App);
    const appInstance = app.instance;

    for (let i = 0; i < 5; i++){

        const buttons = testInstance.findAllByProps({testId: "headerButton" + i});
        const button = buttons[0];
/*         console.log(button.props);
        Simulate.click(button);
        console.log(appInstance.state); */

        test(`link button ${i} text is ${buttonText[i]}`, () => {
            expect(buttons[0].children).toStrictEqual([buttonText[i]]);
        });

/*         test(`selectedTab changes to ${i} when ${buttonText[i]} is clicked`, () => {
            
            expect(appInstance.state.selectedTab).toBe(i);
        }); */
    }
/*     let button = testInstance.findAllByProps({testId: "headerButton3"})[0];
    Simulate.click(button); */

    const foldButton = testInstance.findByProps({testId: "fold_button"});

    test("fold button is on after click", () => {
        foldButton.props.onClick();
        expect(appInstance.state.bannerFolded).toBe(true);
    });

    test("fold button is off after click", () => {
        foldButton.props.onClick();
        expect(appInstance.state.bannerFolded).toBe(false);
    });
    
});