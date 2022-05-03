import { Locale } from 'types/locale'

export const currency = (value: number | string, locale: Locale) => {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: locale === 'pt-BR' ? 'BRL' : 'USD',
    minimumFractionDigits: 0
  })

  return formatter.format(typeof value === 'number' ? value : +value)
}
