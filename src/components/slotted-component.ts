import { html, type TemplateResult } from 'lit'
import { customElement } from 'lit/decorators.js'
import { TailwindElement } from '../shared/tailwind.element.ts'

@customElement('sandbox-slotted-component')
export class SandboxSlottedComponent extends TailwindElement {
  override render (): TemplateResult {
    return html`
    <div class="grid grid-cols-3">
      <div><slot class="text-center" name="left"></slot></div>
      <div><slot class="text-center" name="middle"></slot></div>
      <div><slot class="text-center" name="right"></slot></div>
    </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sandbox-slotted-component': SandboxSlottedComponent
  }
}
