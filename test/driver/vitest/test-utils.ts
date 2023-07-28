import { fixture } from '@open-wc/testing-helpers'

export async function shadow (template: string): Promise<ShadowRoot | null> {
  const el = await fixture(template)
  return el.shadowRoot
}
