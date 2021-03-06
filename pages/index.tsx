import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

// todo: uncomment below code to user MongoDB
// import clientPromise from '../lib/mongodb'

// todo: PWA is been disabled to development mode, to test it,  code  NODE_ENV in .env.local

interface GSSRProps {
  isConnected: boolean
}

const Home: NextPage<{ isConnected: boolean }> = ({ isConnected }) => {
  const router = useRouter()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next PWA App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-5xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js PWA! {
              isConnected ? 'with MongoDB' : <span className='text-red-500'>
                {'Not Connected'}
              </span>
            }
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            pages/index.tsx
          </code>
        </p>
        <h1 className='text-2xl mt-3 items-center flex gap-3 font-semibold '>
          Build for you with {''}  <Image src={'https://avatars.githubusercontent.com/u/88815641?v=4'} alt="Abhay Github Avatar" width={40} height={40} className='rounded-full cursor-pointer hover:scale-95 transform transition-all duration-200 focus:scale-90' onClick={() => router.push('https://github.com/theabhayprajapati')} />
        </h1>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Examples &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
            <p className="mt-4 tex
            
            
            
            t-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
          {/* <code onClick={() => copyText(code)} className="mt-6 w-full rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600 cursor-pointer">
            <span className='text-green-500'>
              $</span> {code}
          </code> */}

        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>

    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {

  // todo: PWA is been disabled to development mode.
  // todo: To use mongodb import clientPromise from '../lib/mongodb' & uncomment below code.
  // set up mongodb
  // const client = await clientPromise
  // const db = client.db('mydb')
  // const collection = db.collection('mycollection')
  // const data = await collection.find({}).toArray()
  // console.log(data)
  // return { props: { isConnected: true } }

  {
    return {
      props: { isConnected: false },

    }
  }
}
