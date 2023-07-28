import '../../src/components/error-page'
import { describe, expect, it } from 'vitest'
import { shadow } from '../test-utils'

describe('<sandbox-error>', () => {
  it('dom should contain default values', async () => {
    const shadowRoot = await shadow('<sandbox-error></sandbox-error>')
    const innerHtml = shadowRoot?.innerHTML
    expect(innerHtml).toContain('500')
    expect(innerHtml).toContain('An error occurred')
  })

  it('dom should contain passed values', async () => {
    const shadowRoot = await shadow('<sandbox-error errorCode="404" errorText="Not found"></sandbox-error')
    const innerHtml = shadowRoot?.innerHTML
    expect(innerHtml).toContain('404')
    expect(innerHtml).toContain('Not found')
  })
})
