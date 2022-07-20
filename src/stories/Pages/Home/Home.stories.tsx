import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Home from "./Home";
import * as Table from "../../components/Table.stories";

export default {
	title: "Ag-Grid/Home",
	component: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const Simple = Template.bind({});

Simple.args = {
	rowData: Table.Primary.args?.rowData,
	columnDefs: Table.Primary.args?.columnDefs,
	title: "Home page",
	footer: "Created using Table Story",
};