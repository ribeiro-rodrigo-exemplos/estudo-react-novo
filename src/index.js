import React from 'react'
import ReactDOM from 'react-dom'
//import PrimeiroComponente from './componentes/PrimeiroComponente'
//import { CompA, CompB as B } from './componentes/DoisComponentes'
//import CompA, {CompB as B} from './componentes/DoisComponentes'
//import MultiElementos from './componentes/MultiElementos'

//import FamiliaSilva from './componentes/FamiliaSilva'
//import Familia from './componentes/Familia'
//import Membro from './componentes/Membro'
//import ComponenteComFuncao from './componentes/ComponenteComFuncao'
import Pai from './componentes/Pai'

//import ComponenteClasse from './componentes/ComponenteClasse'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        {/*<ComponenteClasse valor="Sou um componente de classe!" />*/}
        <Pai />
        {/*<ComponenteComFuncao />*/}
        {/*<Familia sobrenome="Pereira">
            <Membro nome="André" />
            <Membro nome="Mariana" />
        </Familia>*/}
        {/*<FamiliaSilva/>*/}
        {/*<MultiElementos />*/}
        {/*<CompA valor="Olá eu sou A!" />
        <B valor="B na área!" />*/}
        {/*<PrimeiroComponente valor="Bom dia!" />*/}
    </div>
    , elemento
)

//const jsx = <h1>Ola React</h1>
//ReactDOM.render(jsx, elemento)

/*ReactDOM.render(
    <ul>
        <li>1) Pedro</li>
        <li>2) Maria</li>
        <li>3) Ana</li>
    </ul>, elemento
) */