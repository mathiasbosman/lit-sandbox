import { html, LitElement, type TemplateResult } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('sandbox-data-list')
export class SandboxDataList extends LitElement {
  @property() name = ''

  @property() data: string[] = []

  @property() maxElements = 10

  latestAddition = ''
  private addData (): void {
    const uuid = window.crypto.randomUUID()
    this.data.push(uuid)
    this.latestAddition = uuid
    this.requestUpdate() // https://lit.dev/docs/components/properties/#mutating-properties
  }

  private reset (): void {
    this.data = []
    this.latestAddition = ''
    this.requestUpdate()
  }

  private renderReset (): TemplateResult {
    if (this.data.length < this.maxElements) {
      return html``
    }

    return html`
      <p><b>Maximum elements reached!</b> <button @click="${this.reset}">reset!</button> </p>
    `
  }

  override render (): TemplateResult {
    return html`
      <button @click="${this.addData}" ?disabled="${this.data.length >= this.maxElements}">Add random data to list</button>
      <p>${this.name} - latest element = '${this.data[this.data.length - 1]}'</p>
      <ul>
        ${this.data.map(i => html`<li>${i}</li>`)}
      </ul>
      ${this.renderReset()}
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sandbox-data-list': SandboxDataList
  }
}
