import { useState } from 'react'
import { InputBox } from './componenets'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount , setAmount] = useState(0)
  const [from , setFrom] = useState("usd")
  const [to , setTo] = useState("inr")
  const [convertedAmount , setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

const convert = () => { 
         setConvertedAmount(amount * currencyInfo[to])
}


   return (
        <div
            className="w-full min-h-screen flex flex-wrap justify-center items-center bg-cover bg-center bg-no-repeat"
                           
            style={{
                backgroundImage: "url('https://images.pexels.com/photos/31035096/pexels-photo-31035096.jpeg')",
            }}         
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-blue-200/60 rounded-xl p-5 backdrop-blur-md bg-slate-900/90 shadow-xl shadow-slate-900/20">
                    <h1 className="text-transparent bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text font-extrabold text-center text-3xl mb-6">Currency Converter</h1>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                           
                        }}
                    >
                        <div  className='flex items-center gap-2 bg-slate-900/90 border border-white/10 mt-8 rounded-xl p-3 ml-4 mr-4 '>
                            <InputBox
                                type = "number"
                                label="From"
                                amount = {amount}
                                currencyOptions = {options}   
                                onCurrencyChange = {(currency) => 
                                  setFrom(currency)}
                                  selectCurrency = {from}
                                  onAmountChange = {(amount) => setAmount(amount)}
                         />
                        </div>
                        <div className="relative w-full h-0.5 ">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-purple-600 text-white px-6 py-2 m-3 cursor-pointer hover:bg-blue-400 transition-colors shadow-md"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div  className='flex items-center gap-2 bg-slate-900/90 border border-white/10 mt-8 rounded-xl p-3 ml-4 mr-4 '>
                            <InputBox
                                type = "number"
                                label="To"
                                amount = {convertedAmount}
                                currencyOptions = {options}   
                                onCurrencyChange = {(currency) => setTo(currency)}
                                  selectCurrency = {to}
                                  amountDisable

                                
                            />
                        </div>
                        <button type="submit" className="cursor-pointer w-full bg-linear-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-lg hover:bg-purple-500 active:bg-indigo-800 transition-colors shadow-md font-extrabold">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
   
  
}

export default App
