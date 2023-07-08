import {css, html} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {SandboxElement} from "../sandbox.element";

/**
 * @slot - This element has a slot
 */
@customElement('sandbox-error')
export class SandboxError extends SandboxElement {

  /**
   * The HTML error code
   */
  @property({type: Number})
  errorCode = 500;

  @property({type: String})
  errorText = "An error occurred";

  static styles = [SandboxElement.styles, css`
    main {
      margin: 0 auto;
    }
  `];

  render() {
    return html`
      <div>
        <main>
          <section>
            <p>${this.errorCode}</p>
            <h1>${this.errorText}</h1>
            <slot></slot>
          </section>
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