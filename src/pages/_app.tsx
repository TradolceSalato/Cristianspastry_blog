import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { siteMetadata } from '@/data/siteMetadata';
import Head from 'next/head';
import { ClientReload } from '@/components/ClientReload/ClientReload';
import Layout from '@/components/Layout/Layout';
import { useRouter } from 'next/router';
import AdminLayout from '@/components/Admin/Layout/AdminLayout';
const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }: AppProps) {
  var noAuthRequired = ['/admin','/admin/dashboard','/admin/addrecipe']
  var noAdminRouteLayout = ['/admin',]
  
  const router = useRouter()
  const noRouter = router.asPath;
  var isLogin = true; 
  const AdminComponent = () => <><Component {...pageProps}/></>
  return (
  <>
    {/*<ThemeProvider attribute="class" defaultTheme={'light'}>*/}
   <Head>
    <meta content="width=device-width, initial-scale=1" name="viewport" />
   </Head>
   {isDevelopment && isSocket && <ClientReload />}
   {/* 
    Funzione che toglie il layout-app-global al componente admin 
   */}
   {
    noAuthRequired.includes(noRouter) ? (<>
       {
        noAdminRouteLayout.includes(router.pathname) ?
         (
         <>
            <AdminComponent/>
         </>) : 
        (<>
        <AdminLayout isLogin={true}>
         <AdminComponent/>
         </AdminLayout>
        </>)
       }
    </>) :
    (<Layout><Component {...pageProps}/></Layout>)
   }
  {/*</ThemeProvider>*/} 
   </>
  );
}
