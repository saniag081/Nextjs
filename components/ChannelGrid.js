import Link from 'next/link';

function ChannelGrid({ channels }) {
	return (
		<div className="channels">
			{channels.map( (channel) => (
					<Link href={`/Podcasts?id=${channel.id}`} prefetch>
							<a className="channel">
									<img src={channel.urls.logo_image.original} alt=""/>
									<h2 className="channel-title">{channel.title}</h2>
							</a>
					</Link>
			))}

			<style jsx>{`
				.channel{
						display: block;
						border-radius: 3px;
						box-shadow: 0 2px 6px rgba(0,0.0.0.15);
						margin-bottom: 0.5em;
				}
				.channels{
						display: grid;
						grid-gap: 15px;
						padding: 15px;
						grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
				}
				.channel img{
						width: 100%;
				}
				.channel-title{
						padding: 5px;
						font-size: 0.9em;
						font-weight: 600;
						margin: 0;
						text-align: center;
				}
			`}</style>
		</div>
	)
}

export default ChannelGrid;