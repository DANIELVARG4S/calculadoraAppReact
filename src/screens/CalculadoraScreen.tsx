// import React, { useRef, useState } from 'react'
import { View, Text } from 'react-native'
import { styles } from '../theme/AppTheme'
import BottonCalc from '../componentes/BottonCalc'
import {useCalculator} from '../hooks/useCalculator'

const CalculadoraScreen = () => {

    const {
        numeroAnterior,
        numero,
        limpiar,
        btnDelete,
        btnDividir,
        btnResta,
        btnMultiplicar,
        btnSumar,
        calcula,
        positivoNegativo,
        numeroArmar
    } = useCalculator();


    return (
        <View style= {styles.calculadoraContainer}>

            
    {
        (numeroAnterior !== '0' ) && (
        <Text style = {styles.resultadoPequeño}>{numeroAnterior}</Text>
        )
    }

            
            <Text 
            style = {styles.resultado}
            numberOfLines={1}
            adjustsFontSizeToFit
            >{ numero }
            </Text>


                {/* {Fila de Botones} */}
            <View style= {styles.fila}>
                <BottonCalc texto= "C" color = "#9B9B9B" accion={limpiar} />
                <BottonCalc texto= "+/-" color = "#9B9B9B" accion={positivoNegativo}/>
                <BottonCalc texto= "del" color = "#9B9B9B" accion={btnDelete}/>
                <BottonCalc texto= "/" color = "#FF9427 " accion={btnDividir}/>

                
                {/* {2D2D2D GRIS OSCURO} */}
                
                {/* {FF9427 NARANJA} */}
            </View>

            {/* {Fila de Botones} */}
            <View style= {styles.fila}>
                <BottonCalc texto= "7"  accion={numeroArmar}/>
                <BottonCalc texto= "8" accion={numeroArmar}/>
                <BottonCalc texto= "9" accion={numeroArmar}/>
                <BottonCalc texto= "X" color = "#FF9427 " accion={btnMultiplicar}/>
            </View>
            
            {/* {Fila de Botones} */}
            <View style= {styles.fila}>
                <BottonCalc texto= "4" accion={numeroArmar}/>
                <BottonCalc texto= "5" accion={numeroArmar}/>
                <BottonCalc texto= "6" accion={numeroArmar}/>
                <BottonCalc texto= "-" color = "#FF9427 " accion={btnResta}/>
            </View>

            {/* {Fila de Botones} */}
            <View style= {styles.fila}>
                <BottonCalc texto= "1" accion={numeroArmar}/>
                <BottonCalc texto= "2" accion={numeroArmar}/>
                <BottonCalc texto= "3" accion={numeroArmar}/>
                <BottonCalc texto= "+" color = "#FF9427 " accion={btnSumar}/>
            </View>

            {/* {Fila de Botones} */}
            <View style= {styles.fila}>
                <BottonCalc texto= "0" ancho accion={numeroArmar}/>
                <BottonCalc texto= "." accion={numeroArmar}/>
                <BottonCalc texto= "=" color = "#FF9427 " accion={calcula}/>
            </View>

        </View>
    )
}

export default CalculadoraScreen
