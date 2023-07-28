import { describe, expect, it } from 'vitest'
import { shadow } from '../test-utils.ts'
import '../../src/components/slotted-component' // important brah!

describe('<sandbox-slotted-component>', () => {
  it('should render a grid with 3 columns', async () => {
    const shadowRoot = await shadow('<sandbox-slotted-component></sandbox-slotted-component>')
    expect(shadowRoot?.querySelector('div')?.className)
      .to.contain('grid')
      .to.contain('grid-cols-3')
    shadowRoot?.querySelectorAll('slot').forEach(slot => {
      expect(slot.className).to.contain('text-center')
    })
    // testing rendered slots might be overkill, need to-recheck their shadow
    expect(shadowRoot?.querySelector('slot[name="left"]')).not.toBeNull()
    expect(shadowRoot?.querySelector('slot[name="middle"]')).not.toBeNull()
    expect(shadowRoot?.querySelector('slot[name="right"]')).not.toBeNull()
  })
})
