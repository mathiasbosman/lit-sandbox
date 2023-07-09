import '../../src/components/error.page.js'
import {describe, expect, it} from 'vitest'
import {SandboxError} from "../../src/components/error.page";

describe('<sandbox-error>', () => {
  it('default properties', () => {
      const sandboxError = new SandboxError();
      expect(sandboxError.errorCode).equal(500);
      expect(sandboxError.errorText).equal('An error occurred');
  })
})
