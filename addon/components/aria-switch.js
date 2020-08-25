import { tracked } from "@glimmer/tracking";
import Component from "@glimmer/component";
import { action } from '@ember/object';

export default class AriaSwitch extends Component{
  @tracked checked = false;
  offLabel= this.args.offLabel || "Off";
  onLabel= this.args.onLabel || "On";

  get ariaChecked() {
    return this.checked ? "true" : "false";
  }

  @action
  toggle() {
    this.checked = !this.checked;
    if (this.args.onToggle) {
      this.args.onToggle(this.checked);
    }
  }
}
