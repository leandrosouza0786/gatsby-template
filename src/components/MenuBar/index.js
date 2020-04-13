import React from 'react'

import { Home } from "@styled-icons/boxicons-solid/Home"
import { Search } from "@styled-icons/fa-solid/Search"
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-regular/UpArrowAlt"
import { Lightbulb as Light }  from "@styled-icons/fa-regular/Lightbulb"
import { GridAlt } from "@styled-icons/boxicons-regular/GridAlt"
import * as S from './styled'

const MenuBar = () => (
    <S.MenuBarWrapper>
        <S.MenuBarGroup>
            <S.MenuBarLink to="/" title="voltar para a Home">
                <S.MenuBarItem><Home /></S.MenuBarItem>
            </S.MenuBarLink>
            <S.MenuBarLink to="/search" title="Pesquisar">
                <S.MenuBarItem><Search /></S.MenuBarItem>
            </S.MenuBarLink>
        </S.MenuBarGroup>
        <S.MenuBarGroup>
            <S.MenuBarItem title="Mudar o tema"><Light /></S.MenuBarItem>
            <S.MenuBarItem title="Mudar visualização"><GridAlt /></S.MenuBarItem>
            <S.MenuBarItem title="Ir para o topo"><Arrow /></S.MenuBarItem>
        </S.MenuBarGroup>
    </S.MenuBarWrapper>
)

export default MenuBar