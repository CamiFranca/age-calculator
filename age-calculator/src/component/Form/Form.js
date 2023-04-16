import {FormStyled} from "../Form/styled"
import { useState } from "react"
import { useEffect } from "react"
import seta from "../../image/seta.png"

export const Form = ()=>{

    const [day, setDay] = useState()
    const [month, setMonth] = useState()
    const [year, setYear] = useState()

    const dataAtual = new Date()
    const diaAtual = dataAtual.getDate()
    const mesAtual = dataAtual.getMonth()
    const anoAtual = dataAtual.getFullYear()
    const [response, setResponse] = useState(null)

    let newMesAtual
    let newDiaAtual

    // useEffect (()=>{
    //     calculaTempoDeVida()
    // })

    const calculaTempoDeVida = (day, month, year) => {

        let anosDeVida
        let mesesDeVida
        let diasDeVida

        anosDeVida = anoAtual - year

        if (mesAtual < month) {
            anosDeVida = anosDeVida - 1
            newMesAtual = mesAtual + 12
            mesesDeVida = newMesAtual - month

            

        } else {
            mesesDeVida = mesAtual - month
            anosDeVida = anoAtual - year

        }
console.log(mesesDeVida,"MESES")
        if (diaAtual < day) {
            mesesDeVida = mesesDeVida - 1
            newDiaAtual = diaAtual + 30
            diasDeVida = newDiaAtual - day

           

        } else {
            diasDeVida = diaAtual - day
            mesesDeVida = mesAtual - month
        }

        console.log(diasDeVida, "DIAS")
        console.log("anos",anosDeVida)

       const calculetedResponse = {
            diasDeVida,
            mesesDeVida,
            anosDeVida
        }
        setResponse(calculetedResponse)

    }
    console.log(response)

    return (
        <FormStyled>
            <form className="form"
            onSubmit={(event)=>{
                calculaTempoDeVida(day,month,year)
                event.preventDefault();
              
            }}
            >
                <p>Day</p>
                <input 
                    placeholder="DD"
                    name="day"
                    inputmode="numeric"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                >
                </input>
                <label>Month</label>
                <input
                placeholder="MM"
                    name="month"
                    inputmode="numeric"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                >
                </input>
                <label>Year</label>
                <input
                    placeholder="YYYY"
                    name="year"
                    inputmode="numeric"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                >
                </input>
                <button
                type="submit"
                >
                <img src={seta} alt="seta"></img>
                </button>
                </form>
                <div></div>
                <section>
                <p>{response && response.anosDeVida} YEARS</p>
                <p>{response && response.mesesDeVida} MONTHS</p>
                <p>{response && response.diasDeVida} DAYS</p>

                </section>
            </FormStyled>
    )
}
