export const mount = async (html: string, selector: keyof HTMLElementTagNameMap): Promise<HTMLElement | null> => {
  document.body.innerHTML = html
  return element(selector)
}

export const element = (selector: keyof HTMLElementTagNameMap): HTMLElement | null => {
  return document.body.querySelector(selector)
}

export const shadow = (element: HTMLElement | null): ShadowRoot | null | undefined => {
  return element?.shadowRoot
}

export const htmlElement = (element: HTMLElement | null, selector: keyof HTMLElementTagNameMap): HTMLElement | null | undefined => {
  return shadow(element)?.querySelector(selector)
}
