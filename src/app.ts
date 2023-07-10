import { html, LitElement, type TemplateResult } from 'lit'
import { customElement } from 'lit/decorators.js'
import './components/error.page'
import './components/datalist'
import './components/counterbutton'
import './components/autocomplete'

/**
 * The app wrapper
 *
 * @slot - This element has a slot
 */
@customElement('sandbox-app')
export class SandboxApp extends LitElement {
  override render (): TemplateResult {
    return html`
      <div>
        <sandbox-error errorCode="404" errorText="Page not found" subText="Sorry, we could not find the page you are looking for.">
          <p>Lorem Ipsum</p>
        </sandbox-error>
        <slot></slot>

        <sandbox-data-list name="UUID list" .data="${['an', 'array', 'of', 'uuids']}"></sandbox-data-list>
        <sandbox-counter-button></sandbox-counter-button>
        <sandbox-counter-button counter=5></sandbox-counter-button>
        <sandbox-autocomplete></sandbox-autocomplete>
      </div>

    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sandbox-app': SandboxApp
  }
}
