import { useState } from "react"
import { CardStyled } from "./styled"

export const Card = () => {

    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')

    const dataAtual = new Date()
    const diaAtual = dataAtual.getDate()
    const mesAtual = dataAtual.getMonth()
    const anoAtual = dataAtual.getFullYear()

    let anosDeVida
    let mesesDeVida
    let diasDeVida

    let newMesAtual
    let newDiaAtual

    const calculaTempoDeVida = (day, month, year) => {

        anosDeVida = anoAtual - year

        if (mesAtual < month) {
            anosDeVida = anosDeVida - 1
            newMesAtual = mesAtual + 12
            mesesDeVida = newMesAtual - month

            return {anosDeVida, mesesDeVida}

        } else {
            mesesDeVida = mesAtual - month
            anosDeVida = anoAtual - year

        }

        if (diaAtual < day) {
            mesesDeVida = mesesDeVida - 1
            newDiaAtual = diaAtual + 30
            diasDeVida = newDiaAtual - day

            return {mesesDeVida, diasDeVida}

        } else {
            diasDeVida = diaAtual - day
            mesesDeVida = mesAtual - month
        }

        const response = {
            diasDeVida,
            mesesDeVida,
            anosDeVida

        }

        return response

    }
    
    return (
        <CardStyled>
            <form className="form">
               <label>Day</label>
                <input
                    name="day"
                    inputmode="numeric"
                    placeholder="day"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                >
                </input>
                <label>Month</label>
                <input
                    name="month"
                    inputmode="numeric"
                    placeholder="month"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                >
                </input>
                <label>Year</label>
                <input
                    name="year"
                    inputmode="numeric"
                    placeholder="year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                >
                </input>
                <button></button>
            </form>
        </CardStyled>
    )
}