import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
// import {* as S} from './styles'
import {
  HeaderBar,
  Links,
  LinksItem,
  CartButton,
  Hamburguer,
  HeaderRow,
  NavMobile
} from './styles'
import logo from '../../asets/images/logo.svg'
import carrinho from '../../asets/images/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootRedducer } from '../../store'
import { useState } from 'react'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootRedducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </Hamburguer>
          <Link to="/">
            <img src={logo} alt="EPLAY Logo" />
          </Link>
          <nav>
            <Links>
              <LinksItem>
                <Link to="/categories">Categorias</Link>
              </LinksItem>
              <LinksItem>
                <HashLink to="/#coming-soon">Em breve</HashLink>
              </LinksItem>
              <LinksItem>
                <HashLink to="/#on-sale">Promoções</HashLink>
              </LinksItem>
            </Links>
          </nav>
        </div>
        <CartButton onClick={openCart}>
          {items.length} <span> - Produto(s)</span>
          <img src={carrinho} alt="Carrinho" />
        </CartButton>
      </HeaderRow>
      <NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <Links>
          <LinksItem>
            <Link to="/categories" onClick={() => setIsMenuOpen(false)}>
              Categorias
            </Link>
          </LinksItem>
          <LinksItem>
            <HashLink onClick={() => setIsMenuOpen(false)} to="/#coming-soon">
              Em breve
            </HashLink>
          </LinksItem>
          <LinksItem>
            <HashLink onClick={() => setIsMenuOpen(false)} to="/#on-sale">
              Promoções
            </HashLink>
          </LinksItem>
        </Links>
      </NavMobile>
    </HeaderBar>
  )
}

export default Header
