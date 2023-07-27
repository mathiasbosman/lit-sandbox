import { type TemplateResult } from 'lit'

export const mount = async (html: string, selector: keyof HTMLElementTagNameMap): Promise<HTMLElement | null> => {
  document.body.innerHTML = html // not entirely sure why this even works but hey...
  return element(selector)
}

export const testMount = (template: TemplateResult, selector: keyof HTMLElementTagNameMap): HTMLElement | null => {
  document.body.innerHTML = template.strings.raw.join()
  console.log(document.body.innerHTML)
  return document.querySelector(selector)
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
