import {html, LitElement} from 'lit'
import {customElement, property} from 'lit/decorators.js'

/**
 * The app wrapper
 *
 * @slot - This element has a slot
 */
@customElement('vim-error')
export class VimError extends LitElement {

  /**
   * The HTML error code
   */
  @property({attribute: true, type: Number})
  errorCode = 500

  @property({attribute: true, type: String})
  errorText = "An error occurred"

  @property({attribute: true, type: String})
  subText = null

  render() {
    return html`
      <div>
        <main>
          <div>
            <p>${this.errorCode}</p>
            <h1>${this.errorText}</h1>
            ${this.subText? html`<p>${this.subText}</p>` : ``}
          </div>
        </main>
      </div>

    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vim-error': VimError
  }
}
