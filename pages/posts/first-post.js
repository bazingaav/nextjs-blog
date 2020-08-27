//here the component(function) name can be anything but it must be 
//exported as "default"
import Link from 'next/link'


export default function FirstPost(){
	return (
		<>
		<h1>This is First Post</h1>
		<h2>
			<Link href="/">
				<a>Back to home</a>
			</Link>
		</h2>
		</>
		)
}