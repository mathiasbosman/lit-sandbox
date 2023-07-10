import { css, html, LitElement, type TemplateResult } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

@customElement('sandbox-counter-button')
export class SandboxCounterButton extends LitElement {
  static styles = css`
    button {
      padding: 1em;
      margin: 1em;
      background: orange;
      
      &:hover {
        cursor: pointer;
      }
      
      &.isRunning {
        background: green;
      }
    }
    `

  @property() counter = 0
  @property() interval = 1000

  @state() isRunning = false

  private count (): void {
    const interval = setInterval(() => {
      if (this.isRunning) this.counter++
      else clearInterval(interval)
    }, this.interval)
  }

  private _onClick (): void {
    this.isRunning = !this.isRunning
    this.count()
    this.dispatchEvent(new CustomEvent('toggleState'))
  }

  override render (): TemplateResult {
    return html`
      <button @click="${this._onClick}" 
              class="${this.isRunning ? 'isRunning' : ''}">${this.counter}</button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sandbox-counter-button': SandboxCounterButton
  }
}
