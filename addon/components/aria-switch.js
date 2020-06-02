import { reads } from "@ember/object/computed";
import { computed } from "@ember/object";
import Component from "@ember/component";
import layout from "../templates/components/aria-switch";

export default Component.extend({
  layout,
  checked: false,
  dataAction: "aria-switch",
  offLabel: "Off",
  onLabel: "On",
  role: "switch",
  type: "button",
  tagName: "button",
  attributeBindings: [
    "ariaChecked:aria-checked",
    "ariaLabel:aria-label",
    "ariaLabelledBy:aria-labelledby",
    "dataAction:data-action",
    "dataKeepDisabled:data-keep-disabled",
    "disabled",
    "role",
    "type",
  ],
  ariaLabel: reads("label"),
  dataKeepDisabled: reads("disabled"),
  ariaChecked: computed("checked", function () {
    return this.checked ? "true" : "false";
  }),
  click() {
    this.toggleProperty("checked");
    if (this.onToggle) {
      this.onToggle(this.checked);
    }
  },
});
