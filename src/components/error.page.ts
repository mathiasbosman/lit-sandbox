import {html} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {TailwindElement} from "../tailwind.element";
/**
 * The app wrapper
 *
 * @slot - This element has a slot
 */
@customElement('vim-error')
export class VimError extends TailwindElement("") {

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
      <div class="bg-white text-black dark:text-white dark:bg-black">
        <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div class="text-center">
            <p class="text-base fo  nt-semibold text-indigo-600">${this.errorCode}</p>
            <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">${this.errorText}</h1>
            ${this.subText? html`<p class="mt-6 text-base leading-7 text-gray-600">${this.subText}</p>` : ``}
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</a>
              <a href="#" class="text-sm font-semibold text-gray-900">Contact support <span aria-hidden="true">&rarr;</span></a>
            </div>
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
