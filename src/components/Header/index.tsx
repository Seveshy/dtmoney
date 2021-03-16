import { useState } from 'react'
import logo from '../../assets/logo.svg'

import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTransactionsModal: () => void;
}

export function Header({onOpenNewTransactionsModal}: HeaderProps){
    return (
        <Container>
           <Content>
           <img src={logo} alt="dtmoney"/>
            <button type="button" onClick={onOpenNewTransactionsModal}>
                Nova transação
            </button>
         
           </Content>
        </Container>
    )
}