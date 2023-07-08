import {html, LitElement} from 'lit'
import {customElement, property} from 'lit/decorators.js'

/**
 * @slot - This element has a slot
 */
@customElement('sandbox-error')
export class SandboxError extends LitElement {

  /**
   * The HTML error code
   */
  @property({type: Number})
  errorCode = 500

  @property({type: String})
  errorText = "An error occurred"

  render() {
    return html`
      <div>
        <main>
          <div>
            <p>${this.errorCode}</p>
            <h1>${this.errorText}</h1>
            <slot></slot>
          </div>
        </main>
      </div>

    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sandbox-error': SandboxError
  }
}