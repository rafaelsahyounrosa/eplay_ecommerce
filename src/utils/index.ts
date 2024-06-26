import { Game } from '../pages/Home'

export const parseToBRL = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export const getTotalPrice = (items: Game[]) => {
  return items.reduce((acumulador, valorAtual) => {
    if (valorAtual.prices.current) {
      return (acumulador += valorAtual.prices.current)
    }
    return 0
  }, 0)
}
