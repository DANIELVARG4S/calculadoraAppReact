import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/AppTheme'


interface Props {
    texto: string;
    color?: string;
    ancho?: Boolean;
    accion: (numeroTexto: String) => void
}




const BottonCalc = ({texto, color, ancho = false, accion}: Props) => {

    return (
        <TouchableOpacity
        onPress= {() => accion( texto)}
        >
            
        <View style= {{
            ...styles.botton,
            backgroundColor: color
            }}>
                    <Text 
                    style={{
                        ...styles.botonTexto,
                        color:(color === '#9B9B9B') ? 'black' : 'white',
                        width: (ancho) ? 180 : 80
                    }}
                    >{texto}</Text>

        </View>

        </TouchableOpacity>
    )
}

export default BottonCalc
