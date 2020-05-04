// import 'isomorphic-fetch';
import Link from "next/link";
import Layout from "../components/Layout";
import Channel from "../components/Channel"
import Error from "./_error";

function Podcasts({ channel, audio , statusCode}) {
    if (statusCode !== 200) {
        return <Error statusCode={ statusCode }></Error>
    }
    return (
        <>
            <Layout title={ channel.title }>
                <Channel channel={channel} audio={ audio }>
                </Channel>
            </Layout>
        </>
    )
}

Podcasts.getInitialProps = async ({ query, res }) => {
    let idChannel = query.id;
    try {
        let [reqChannel, reqAudio] = await Promise.all([
            fetch(`https://api.audioboom.com/channels/${idChannel}`),
            fetch(`https://api.audioboom.com/audio_clips/${idChannel}.mp3`),
        ])

        if (reqChannel.status >= 400) {
            res.statusCode = reqChannel.status;
            return {
                channel: null,
                audio: null,
                statusCode: 404
            }
        }

        let dataChannel = await reqChannel.json();
        let channel = dataChannel.body.channel;

        let dataAudio = await reqAudio.json();
        let audio = dataAudio.body.audio_clip;

        return{
            channel,
            audio,
            statusCode: 200
        }
    } catch (e) {
        // res.statusCode = 500;
        return {
            channel: null,
            audio: null,
            statusCode: 500
        }
    }
}

export default Podcasts;