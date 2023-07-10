import { html, LitElement, type TemplateResult } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

@customElement('sandbox-autocomplete')
export class SandboxAutoComplete extends LitElement {
  _KEY_INDEX = 'key'
  _VALUE_INDEX = 'value'

  @property({ type: Object }) data: Array<Record<string, string>> = [
    { key: '1', value: 'foob' },
    { key: '2', value: 'bar' }
  ]

  @state() suggestions: Array<Record<string, string>> = []

  private updateSuggestions (e: InputEvent): void {
    const input = (e.target as HTMLInputElement).value
    if (input.length === 0) {
      return
    }

    // reset suggestions
    this.suggestions.length = 0
    const regExp = new RegExp(input, 'g')
    this.data.forEach(record => {
      if (record[this._VALUE_INDEX].match(regExp) != null) {
        this.suggestions.push(record)
      }
    })
    this.requestUpdate()
  }

  private renderSuggestions (): TemplateResult {
    return html`
      <ul>${this.suggestions.map(record => html`
        <li>${record[this._KEY_INDEX]} = ${record[this._VALUE_INDEX]}</li>`)}
      </ul>
    `
  }

  override render (): TemplateResult {
    return html`<input @input="${this.updateSuggestions}"
                       type="text"/> ${this.renderSuggestions()}`
  }
}
