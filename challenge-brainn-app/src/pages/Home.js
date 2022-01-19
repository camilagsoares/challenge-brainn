import React, { useEffect, useState } from 'react'
import { ContainerGreen, ContainerButtons, Select, ContainerGray } from '../styles/styles'
import axios from 'axios'
import logo from '../assets/logo.png'


document.body.style = "background-color: #EFEFEF"

const Home = () => {

    const [info, setInfo] = useState([])
    const [loterias, setLoterias] = useState([])

    console.log("Loterias concursos", info)

    const pegaInfosLoterias = () => {
        axios.get("https://brainn-api-loterias.herokuapp.com/api/v1/loterias")
            .then((res) => {
                console.log(res)
                setInfo(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const pegaLoteriasConcursos = () => {
        axios.get("https://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos")
            .then((res) => {
                console.log("dados api", res)
                setLoterias(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }


    useEffect(() => {
        pegaInfosLoterias()
        pegaLoteriasConcursos()
    }, [])

    // const renderizaNaTela = setLoterias.map((item => {
    //     return <p>
    //         {item.nome}
    //     </p>
    // }))

    return (
        <div>
            <ContainerGreen>

                <Select name="select">
                    <option value="valor1">mega-sena</option>
                    <option value="valor2" selected>quina</option>
                    <option value="valor3">LOTOFACIL</option>
                    <option value="valor3">lotomania</option>
                    <option value="valor3">timemania</option>

                    <option value="valor3">dia de sorte</option>

                </Select>

            </ContainerGreen>

            <ContainerGray>
                <ContainerButtons>

                    <button> 01 </button>
                    <button> 01 </button>
                    <button> 01 </button>
                    <button> 01 </button>
                    <button> 01 </button>


                </ContainerButtons>
            </ContainerGray>

          

        </div>
    )
}

export default Home


// #EFEFEF