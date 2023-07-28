import '../../../../src/components/counterbutton'
import { describe, expect, it, vi } from 'vitest'
import { shadow } from '../test-utils'
import { fixture } from '@open-wc/testing-helpers'

describe('<sandbox-counter-button>', () => {
  it('dom should contain default values', async () => {
    const shadowRoot = await shadow('<sandbox-counter-button></sandbox-counter-button>')
    expect(shadowRoot?.innerHTML).toContain('0')
  })

  it('dom should contain initial value', async () => {
    const shadowRoot = await shadow('<sandbox-counter-button counter="999"></sandbox-counter-button>')
    expect(shadowRoot?.innerHTML).toContain('999')
  })

  it('clicking changes state', async () => {
    const spyClick = vi.fn()
    const el = await fixture('<sandbox-counter-button></sandbox-counter-button>')
    el?.addEventListener('toggleState', spyClick)
    el.shadowRoot?.querySelector('button')?.click()
    expect(spyClick).toHaveBeenCalledOnce()
  })
})
