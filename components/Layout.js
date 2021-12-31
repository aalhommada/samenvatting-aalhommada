import Head from 'next/head'
import Header from './Header'

export default function Layout({  title,keyworks,description, children }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content={keyworks} />
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <main className='container mx-auto mt-0 mb-7 w-full'>{children}</main>
        </div>
    )
}

Layout.defaultProps = {
    title: 'Samevatten',
    keyworks: 'samenvatten, boeken, boekenwinkel, boekenwinkel online, boekenwinkel online samenvatten, nederlands',
    description: 'doe een samevatten voor nederlandse boeken',
}
