import '../../src/components/error.page.js'
import { describe, expect, it, beforeEach } from 'vitest'
import { type SandboxError } from '../../src/components/error.page'

describe('<sandbox-error> default', () => {
  function getElement (): SandboxError | null | undefined {
    return document.body.querySelector('sandbox-error')
  }

  beforeEach(async () => {
    document.body.innerHTML = '<sandbox-error></sandbox-error>'
    await new Promise<void>((resolve) => {
      const interval = setInterval(() => {
        if (getElement() != null) {
          clearInterval(interval)
          resolve()
        }
      })
    })
  })

  it('default attributes are set', () => {
    const error = getElement()
    expect(error?.errorCode).equal(500)
    expect(error?.errorText).equal('An error occurred')
  })

/*
  it('default attributes', async () => {
    const error: SandboxError = await fixture(html` <sandbox-error></sandbox-error> `);
    assert.equal(error.errorCode, 500);
    assert.equal(error.errorText, 'An error occurred');
  });

  it('all attributes', async () => {
    const error: SandboxError = await fixture(html` <sandbox-error errorCode="404" errorText="foo"></sandbox-error> `);
    assert.equal(error.errorCode, 404);
    assert.equal(error.errorText, 'foo');
    assert.equal(error.innerHTML, '');
  });

  it('all attributes - with content', async () => {
    const error: SandboxError = await fixture(html` <sandbox-error errorCode="404" errorText="foo">bar</sandbox-error> `);
    assert.equal(error.errorCode, 404);
    assert.equal(error.errorText, 'foo');
    assert.equal(error.innerHTML, 'bar');
  });

 */
})
