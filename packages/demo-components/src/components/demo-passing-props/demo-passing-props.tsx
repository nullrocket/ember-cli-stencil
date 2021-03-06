import { Component, Prop } from "@stencil/core";

@Component({
  tag: "demo-passing-props",
  shadow: true
})
export class DemoPassingProps {
  @Prop() text: string;
  @Prop() action: Function;

  render() {
    return <button onClick={() => this.action()}>{this.text}</button>;
  }
}
