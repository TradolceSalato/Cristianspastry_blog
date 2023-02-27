

import React, { useState } from 'react'

function Addrecipe() {
  const [data, setData] = useState({
    TitoloRicetta: '',
    Immagine: '',
    Categoria: '',
    TempoDiPreparazione: '',
    Difficolta: '',
    Ingredienti: '',
    Passaggi: '',
    Note: '',
  })
  const addRecipe = async (event : any) => { 
    event.preventDefault();
   const {TitoloRicetta,Immagine,Categoria,TempoDiPreparazione,Difficolta,Ingredienti,Passaggi,Note} = data;
    try {
      await fetch('/api/recipe',{
        method : 'POST',
        headers: { 'Content-Type': 'application/json', },
        body : JSON.stringify({TitoloRicetta,Immagine,Categoria,TempoDiPreparazione,Difficolta,Ingredienti,Passaggi,Note}),
      }).then((response)=>console.log("ricetta salvata con succcesso" + response))
    } catch (e) {
      console.log(e);
    }
   }
  return (
    <>
    <main className=''>
        <h1 style={{
          textAlign: 'center',
          justifyContent: 'center',
          fontSize: '25px',
        }}>Aggiungi Ricetta</h1>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">

            <form className="mt-8 space-y-6" action='/api/recipe'  onSubmit={addRecipe} encType="multipart/form-data">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm ">
                <div>
                  <label htmlFor="TitoloRicetta" className="sr-only">
                    TitoloRicetta
                  </label>
                  <input
                    type="text"
                    autoComplete="text"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Titolo Ricetta"
                    value={data.TitoloRicetta}
                    onChange={(e: any) =>
                      setData({
                        ...data,
                        TitoloRicetta: e.target.value,
                      })
                    }
                  />
                </div>
                <br />
                <div className="-space-y-px rounded-md shadow-sm ">
                  
                  <div>
                    <label htmlFor="TitoloRicetta" className="sr-only">
                      Carica Immagine
                    </label>
                    <input
                      type="file"
                      autoComplete="file"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Carica Immagine"
                      value={data.Immagine.toString()}
                      onChange={(e: any) =>
                        setData({
                          ...data,
                          Immagine: e.target.value,
                        })
                      }
                      
                    />
                  </div>

                  <br />
                  <div>
                    <label htmlFor="Categoria" className="sr-only">
                      Categoria
                    </label>
                    <input
                      type="text"
                      autoComplete="text"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Categoria"
                      value={data.Categoria}
                      onChange={(e: any) =>
                        setData({
                          ...data,
                          Categoria: e.target.value,
                        })
                      }
                    />
                  </div>
                  <br />
                  <div>
                    <label htmlFor="Categoria" className="sr-only">
                      Difficoltà
                    </label>
                    <input
                      type="number"
                      autoComplete="number"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Difficoltà 0 a 3"
                      value={data.Difficolta.toString()}
                      min = {'1'}
                      max={"3"}
                      onChange={(e: any) =>
                        setData({
                          ...data,
                          Difficolta: e.target.value,
                        })
                      }
                    />
                  </div>
                  <br/>
                  <div>
                    <label htmlFor='TempoDiPreparazione' className="sr-only">
                      Tempo Di Preparazione
                    </label>
                    <input
                    type="number"
                    autoComplete="number"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Tempo Di Preparazione"
                    value={data.TempoDiPreparazione.toString()}
                    onChange={(e: any) =>
                      setData({
                        ...data,
                        TempoDiPreparazione: e.target.value,
                      })
                    }/>
                  </div>
                  <br />
                  <div>
                    <label htmlFor="Ingredienti" className="sr-only">
                    Ingredienti
                    </label>
                    <input
                      type="text"
                      autoComplete="text"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Ingredienti"
                      value={data.Ingredienti}
                      onChange={(e: any) =>
                        setData({
                          ...data,
                          Ingredienti: e.target.value,
                        })
                      }
                    />
                  </div>
                  <br />
                  <div>
                    <label htmlFor="Passaggi" className="sr-only">
                    Passaggi
                    </label>
                    <textarea
                      autoComplete="text"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Passaggi"
                      value={data.Passaggi}
                      onChange={(e: any) =>
                        setData({
                          ...data,
                          Passaggi: e.target.value,
                        })
                      }
                    />
                  </div>
                  <br />
                  <div>
                    <label htmlFor="Note" className="sr-only">
                    Note
                    </label>
                    <input
                    type = "text"
                      autoComplete="text"
          
                      className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Note"
                      value={data.Note}
                      onChange={(e: any) =>
                        setData({
                          ...data,
                          Note: e.target.value,
                        })
                      }
                    />
                  </div>
                  <br />
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">

                    </span>
                    Aggiungi Ricetta
                  </button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </main>
    </>
  )
}

export default Addrecipe