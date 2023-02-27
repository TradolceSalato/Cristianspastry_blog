import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { LockClosedIcon } from '@heroicons/react/20/solid'

function Index() {
  const router = useRouter()
  //const { user, login } = useAuth()
  const [errMsg, setErrMsg] = useState("")
  const [success, setSuccess] = useState<boolean>(false)
  const [data, setData] = useState({
    username: '',
    password: '',
  })

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    try {
      const {username,password} = data;
      await fetch('http://localhost:3000/api/user',{
      method : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body : JSON.stringify({username,password}),
    }).then((response)=>console.log("user" + response))
    } catch (errMsg) {
      setSuccess(false)
      setErrMsg("Autenticazione non avvenuta con successo");
      console.log(setErrMsg)
    }
  }
  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    const userData = async () => {
      const user = {
        username: data.username,
        password: data.password,
      };
      const response = await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify(user),
      });
      return response.json();
    };
    userData().then((data) => {
      alert(data.message);
    });
  }

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="w-full max-w-md space-y-8">
      <div>
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h1 className="mt-6 text-center text-4xl font-bold tracking-tight text-gray-900">
          Accedi al Panello
        </h1>
        
      </div>
      <form className="mt-8 space-y-6" action='/' onSubmit={handleSubmit}>
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              id="Username"
              name="Username"
              type="Username"
              autoComplete="Username"
              required
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Username"
              value={data.username}
              onChange={(e: any) =>
                setData({
                  ...data,
                  username : e.target.value,  
                })
              }
            />
          </div>
          <br/>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Password"
              value={data.password}
              onChange={(e: any) =>
                setData({
                  ...data,
                  password : e.target.value,  
                })
              }
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-xl font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </span>
            Accedi
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Index;