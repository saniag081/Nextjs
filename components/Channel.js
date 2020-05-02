function Channel({ channel, audio }) {
	console.log(channel)
	return (
		<div className="clip">
			<figure className="image-podcasts">
					<img src={channel.urls.logo_image.original} />
			</figure>
			<article className="player">
					<h2>{channel.title}</h2>
					<p>{channel.description}</p>
					<audio controls>
							{audio ?
									<source src={audio.urls.high_mp3} type='audio/mpeg' />:
									<source src="" type='audio/mpeg' />
							}
					</audio>
			</article>
			<style jsx>{`
				.clip{
						background: #8756ca;
						height: 100%;
				}
				.header{
						padding: .5rem
				}
				.header nav a{
						color: #fff;
				}
				.image-podcasts{
						padding: 4rem 1rem;
						max-width: 320px;
						margin: auto;
				}
				.image-podcasts img {
						width: 100%;
				}
				.player{
						padding: 1rem .5rem;
						text-align: center;
						background: #8756ca;
						background: rgba(0,0,0,0.3);
				}
				.player h2{
						margin: 0;
						margin-bottom: 1rem;
				}
			`}</style>
				<style jsx global>{`
				body {
				margin: 0;
				font-family: system-ui;
				background: white;
				color: #fff;
				}
			`}</style>
		</div>
	)
}

export default Channel;