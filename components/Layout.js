import Link from 'next/link';
import Head from 'next/head';

function Layout({ children, title}) {
	return (
		<div>
			<Head>
				<title>{ title }</title>
			</Head>
			<div>
				<header className="header">
					<Link href="/">
						<a>
							Podcast
						</a>
					</Link>
				</header>

				{ children }

				<style jsx global>{`
					body{
							text-align: center;
							margin: 0;
							font-family: system-ui;
							background: white;
					}
				`}</style>
				<style jsx>{`
					.header{
						color: #fff;
						background: #8756ca;
						padding: 15px;
					}
					.header a{
						color: #fff;
						text-decoration: none;
					}
				`}</style>
			</div>
		</div>
	)
}

export default Layout;