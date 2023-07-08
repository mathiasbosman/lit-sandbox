import {SandboxError} from "../../src/components/error.page";
import {expect, fixture, html} from '@open-wc/testing';


describe("<sandbox-error>", () => {

  it('all attributes', async () => {
    const error: SandboxError = await fixture(html`<sandbox-error errorCode="404" errorText="foo">bar</sandbox-error>`);
    expect(error.errorCode).to.equal(404);
  });

});