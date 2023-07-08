import "../../src/components/error.page.js";
import {SandboxError} from "../../src/components/error.page.js";
import {assert, fixture, html} from '@open-wc/testing';

describe("<sandbox-error>", () => {

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
});