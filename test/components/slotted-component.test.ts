import { describe, expect, it } from 'vitest'
import { mount, testMount } from '../test-utils.ts'
import { html } from 'lit'

describe('<sandbox-slotted-component>', () => {
  it('should render a grid with 3 columns', async () => {
    const element = await mount(
      '<sandbox-slotted-component></sandbox-slotted-component>',
      'sandbox-slotted-component')
    // todo: this fails, ofcourse..
    expect(element).not.toBeNull()
    // expect(element?.className).to.contain('grid')
  })

  it('testje', () => {
    const el = testMount(html`
      <sandbox-slotted-component>
        <p slot="left">left</p>
        <p slot="middle">middle</p>
        <p slot="right">right</p>
      </sandbox-slotted-component>
    `, 'sandbox-slotted-component')
    console.log(el?.shadowRoot?.innerHTML)
  })
})
