import '../../src/components/counterbutton.js'
import { describe, expect, it, vi } from 'vitest'
import { htmlElement, mount, shadow } from '../test-utils'

describe('<sandbox-counter-button>', () => {
  it('dom should contain default values', async () => {
    const innerHtml = shadow(await mount('<sandbox-counter-button></sandbox-counter-button>', 'sandbox-counter-button'))?.innerHTML
    expect(innerHtml).toContain('0')
  })

  it('dom should contain initial value', async () => {
    const innerHtml = shadow(await mount('<sandbox-counter-button counter="999"></sandbox-counter-button>', 'sandbox-counter-button'))?.innerHTML
    expect(innerHtml).toContain('999')
  })

  it('clicking changes state', async () => {
    const spyClick = vi.fn()
    const el = await mount('<sandbox-counter-button></sandbox-counter-button>', 'sandbox-counter-button')
    el?.addEventListener('toggleState', spyClick)
    htmlElement(el, 'button')?.click()
    expect(spyClick).toHaveBeenCalledOnce()
  })
})
