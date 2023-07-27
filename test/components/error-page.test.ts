import '../../src/components/error-page'
import { describe, expect, it } from 'vitest'
import { mount, shadow } from '../test-utils'

describe('<sandbox-error>', () => {
  it('dom should contain default values', async () => {
    const innerHtml = shadow(await mount('<sandbox-error></sandbox-error>', 'sandbox-error'))?.innerHTML
    expect(innerHtml).toContain('500')
    expect(innerHtml).toContain('An error occurred')
  })

  it('dom should contain passed values', async () => {
    const element = await mount('<sandbox-error errorCode="404" errorText="Not found"></sandbox-error>', 'sandbox-error')
    const html = shadow(element)?.innerHTML
    expect(html).toContain('404')
    expect(html).toContain('Not found')
  })
})
