//here the component(function) name can be anything but it must be 
//exported as "default"
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost(){
	return (
		<Layout>
		<Head>
			<title>First Post</title>
		</Head>
		<h1>This is First Post</h1>
		<h2>
			<Link href="/">
				<a>Back to home</a>
			</Link>
		</h2>
		</Layout>
		)
}