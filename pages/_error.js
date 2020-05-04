import Layout from '../components/Layout';
import Link from 'next/link';

function Error({ statusCode }) {

	return (
		<Layout title="oh no :(">
			{statusCode == 404 ?
				<div className="menssage">
					<h1 className="title">Esta Página no existe</h1>
					<p>
						<Link href="">
							<a className="sub-title">Volver al home</a>
						</Link>
					</p>
				</div>
				:
				<div className="menssage">
					<h1 className="title">Hubo un problema</h1>
					<p>
						<Link href="">
							<a className="sub-title">Intenta nueva mente en unos segundos</a>
						</Link>
					</p>
				</div>
			}
			<style jsx>{`
				.menssage{
					padding: 100px 30px;
				}
				.title{
					texte-align: center;
					padding-bottom: 2em;
				}
				.sub-title{
					color: #8756ca;
				}
			`}</style>
		</Layout>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error