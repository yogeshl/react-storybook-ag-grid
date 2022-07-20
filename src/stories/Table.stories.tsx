import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Table from "./Table";

export default {
	title: "Ag-Grid/Table",
	component: Table,
	argTypes: {},
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Primary = Template.bind({});
Primary.args = {};