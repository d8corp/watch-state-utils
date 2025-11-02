export function isTemplateStringsArray (arr: any): arr is TemplateStringsArray {
  return Array.isArray(arr) && 'raw' in arr
}
