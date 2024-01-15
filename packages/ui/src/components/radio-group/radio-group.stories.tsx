import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { Label } from "../label";
import { Text } from "../text";
import { RadioGroup } from "./radio-group";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => {
    return (
      <RadioGroup>
        <RadioGroup.Item value="1" />
        <RadioGroup.Item value="2" />
        <RadioGroup.Item value="3" />
      </RadioGroup>
    );
  },
};

export const WithLabel: Story = {
  render: () => {
    return (
      <RadioGroup>
        <div className="flex items-center gap-x-3">
          <RadioGroup.Item id="radio_1" value="1" />
          <Label htmlFor="radio_1" weight="plus">
            Radio 1
          </Label>
        </div>
        <div className="flex items-center gap-x-3">
          <RadioGroup.Item id="radio_2" value="2" />
          <Label htmlFor="radio_2" weight="plus">
            Radio 2
          </Label>
        </div>
        <div className="flex items-center gap-x-3">
          <RadioGroup.Item id="radio_3" value="3" />
          <Label htmlFor="radio_3" weight="plus">
            Radio 3
          </Label>
        </div>
      </RadioGroup>
    );
  },
};

export const WithLabelAndDescription: Story = {
  render: () => {
    return (
      <RadioGroup>
        <div className="flex items-start gap-x-3">
          <RadioGroup.Item id="radio_1" value="1" />
          <div className="flex flex-col gap-y-0.5">
            <Label htmlFor="radio_1" weight="plus">
              Radio 1
            </Label>
            <Text className="text-ui-fg-subtle">
              The quick brown fox jumps over a lazy dog.
            </Text>
          </div>
        </div>
        <div className="flex items-start gap-x-3">
          <RadioGroup.Item id="radio_2" value="2" />
          <div className="flex flex-col gap-y-0.5">
            <Label htmlFor="radio_2" weight="plus">
              Radio 2
            </Label>
            <Text className="text-ui-fg-subtle">
              The quick brown fox jumps over a lazy dog.
            </Text>
          </div>
        </div>
        <div className="flex items-start gap-x-3">
          <RadioGroup.Item id="radio_3" value="3" />
          <div className="flex flex-col gap-y-0.5">
            <Label htmlFor="radio_3" weight="plus">
              Radio 3
            </Label>
            <Text className="text-ui-fg-subtle">
              The quick brown fox jumps over a lazy dog.
            </Text>
          </div>
        </div>
      </RadioGroup>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <RadioGroup>
        <RadioGroup.Item disabled value="1" />
        <RadioGroup.Item value="2" />
        <RadioGroup.Item checked disabled value="3" />
      </RadioGroup>
    );
  },
};

export const ChoiceBox: Story = {
  render: () => {
    return (
      <RadioGroup>
        <RadioGroup.ChoiceBox
          description="The quick brown fox jumps over a lazy dog."
          label="One"
          value="1"
        />
        <RadioGroup.ChoiceBox
          description="The quick brown fox jumps over a lazy dog."
          label="Two"
          value="2"
        />
        <RadioGroup.ChoiceBox
          description="The quick brown fox jumps over a lazy dog."
          disabled
          label="Three"
          value="3"
        />
      </RadioGroup>
    );
  },
};

export const ChoiceBoxDisabledSelected: Story = {
  render: () => {
    return (
      <RadioGroup defaultValue="3">
        <RadioGroup.ChoiceBox
          description="The quick brown fox jumps over a lazy dog."
          label="One"
          value="1"
        />
        <RadioGroup.ChoiceBox
          description="The quick brown fox jumps over a lazy dog."
          label="Two"
          value="2"
        />
        <RadioGroup.ChoiceBox
          description="The quick brown fox jumps over a lazy dog."
          disabled
          label="Three"
          value="3"
        />
      </RadioGroup>
    );
  },
};
