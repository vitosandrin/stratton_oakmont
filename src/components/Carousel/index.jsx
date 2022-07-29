//redux api call em progresso

import React, { useEffect } from 'react';
import { CardSlider, ContainerSlider, ImageSlider, Info, Name, Green } from './styles';
/*import api from '../../services/api'
import { setCryptos } from '../../redux/actions/cryptoActions';
import { useDispatch, useSelector } from 'react-redux';*/ 

const Carousel = ({name, priceChange, image, onClick}) => {

    /*const dispatch = useDispatch()
    const cryptos = useSelector((state) => state.allCrypto.cryptos)

    const fetchCrypto = async () => {
        const response = await api
            .get('')
            .catch((err) => {
                console.log('err', err)
            })
        dispatch(setCryptos(response.data))
    }

    useEffect(() => {
        fetchCrypto()
    }, [])

    console.log("cryptos", cryptos)

    const renderList = cryptos.map((crypto) => {
        
        const { id, priceChange, image, name} = cryptos

        return (
            <ContainerSlider >
                {priceChange >= 0.01 ? (
                    <CardSlider key={id}>
                        <ImageSlider src={image} alt={name} />
                        <Info>
                            {priceChange >= 0.01 ? (
                                <Name>{name}</Name>
                            ) : (null
                            )}
                            {priceChange >= 0.01 ? (
                                <Green>{priceChange.toFixed(2)}%</Green>
                            ) : (null
                            )}
                        </Info>
                    </CardSlider>
                ) : (null
                )}
            </ContainerSlider>
        )
    })

    return(
        <>{renderList}</>
    )*/

    return (
        <ContainerSlider>
            {priceChange >= 0.01 ? (
                <CardSlider onClick={onClick}>
                    <ImageSlider src={image} alt='crypto' />
                    <Info>
                        {priceChange >= 0.01 ? (
                            <Name>{name}</Name>
                        ) : (null
                        )}
                        {priceChange >= 0.01 ? (
                            <Green>{priceChange.toFixed(2)}%</Green>
                        ) : (null
                        )}
                    </Info>
                </CardSlider>
            ) : (null
            )}
        </ContainerSlider>
    ) 
}

export default Carousel;
