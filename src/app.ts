import {html} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {TailwindElement} from "./tailwind.element";
import "./components/error.page";

/**
 * The app wrapper
 *
 * @slot - This element has a slot
 */
@customElement('vim-app')
export class VimApp extends TailwindElement("") {

  /**
   * The number of times the button has been clicked.
   */
  @property({type: Number})
  count = 0

  render() {
    return html`
      <div class="bg-white text-black dark:text-white dark:bg-black">
        <vim-error errorCode="404" errorText="Page not found" subText="Sorry, we could not find the page you are looking for."></vim-error>
        <slot></slot>
      </div>

    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vim-app': VimApp
  }
}
