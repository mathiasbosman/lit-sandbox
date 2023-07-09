import {html, LitElement} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import "./components/error.page";

/**
 * The app wrapper
 *
 * @slot - This element has a slot
 */
@customElement('sandbox-app')
export class SandboxApp extends LitElement {

  /**
   * The number of times the button has been clicked.
   */
  @property({type: Number})
  count = 0

  render() {
    return html`
      <div>
        <sandbox-error errorCode="404" errorText="Page not found" subText="Sorry, we could not find the page you are looking for.">
          <p class="mt-6 text-base leading-7 text-gray-600">Lorem Ipsum</p>
        </sandbox-error>
        <slot></slot>
      </div>

    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sandbox-app': SandboxApp
  }
}
