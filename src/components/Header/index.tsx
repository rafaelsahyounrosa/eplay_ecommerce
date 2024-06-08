import { Link } from 'react-router-dom'
// import {* as S} from './styles'
import { HeaderBar, Links, LinksItem, CartButton } from './styles'
import logo from '../../asets/images/logo.svg'
import carrinho from '../../asets/images/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootRedducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootRedducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <div>
        <Link to="/">
          <img src={logo} alt="EPLAY Logo" />
        </Link>
        <nav>
          <Links>
            <LinksItem>
              <Link to="/categories">Categorias</Link>
            </LinksItem>
            <LinksItem>
              <a href="#">Novidades</a>
            </LinksItem>
            <LinksItem>
              <a href="#">Promoções</a>
            </LinksItem>
          </Links>
        </nav>
      </div>
      <CartButton onClick={openCart}>
        {items.length} - Produto(s)
        <img src={carrinho} alt="Carrinho" />
      </CartButton>
    </HeaderBar>
  )
}

export default Header
