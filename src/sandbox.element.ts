import {css, CSSResultGroup, LitElement} from "lit";

export class SandboxElement extends LitElement {
  static styles =  css`
    * {
      margin: 0;
      padding: 0;
      font-family: Arial,serif;
      color: red;
  ` as CSSResultGroup;
}