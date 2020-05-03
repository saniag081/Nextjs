import Link from 'next/link';
import Layout from '../componetns/Layout';
import Error from 'next/error';

function Channel( { channel, audioClips, series, statusCode} ){
    const { title } = channel;
    if (statusCode !== 200) {
        return <Error statusCode={ statusCode }/>
    }
    return (

        <Layout title="Channel">
            <h1>{title}</h1>

            <figure className="channelImg">
                <img src={channel.urls.logo_image.original} />
            </figure>

            <h2>Series</h2>
            <ul>
                {series.map((serie) => (
                    <li>{serie.title}</li>
                ))}
            </ul>

            <h2>Ultimos Podcasts</h2>
            <ul>
                {audioClips.map( (clip) =>(
                    <li>{clip.title}</li>
                ))}
            </ul>

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
                .channelImg img{
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
            <style jsx global>{`
                body{
                    text-align: center;
                    margin: 0;
                    font-family: system-ui;
                    background: white;
                }
            `}</style>
        </Layout>
    )
}

Channel.getInitialProps = async ({ query }) => {
    let idChannel = query.id;
    try {
        let [requestChannel, requestAudios, requestSeries] = await Promise.all([
            fetch(`https://api.audioboom.com/channels/${idChannel}`),
            fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
            fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
        ])

        let dataChannel = await requestChannel.json();
        let channel = dataChannel.body.channel;

        let dataAudios = await requestAudios.json();
        let audioClips = dataAudios.body.audio_clips;

        let dataSeries = await requestSeries.json();
        let series = dataSeries.body.channels;
        console.log(series);

        return { channel, audioClips, series, statusCode: 200}
    } catch (e) {
        return { statusCode: 500}
    }
}

export default Channel;