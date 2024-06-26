import { Imagem, Titulo, Precos } from './styles'

import Tag from '../Tag'
import Button from '../Button'

import { useGetFeaturedGameQuery } from '../../services/api'
import { parseToBRL } from '../../utils'
import Loader from '../Loader'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De <span>{parseToBRL(game.prices.old)}</span> <br />
            por apenas {parseToBRL(game.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
