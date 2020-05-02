// import 'isomorphic-fetch';
import Link from "next/link";
import Layout from "../components/Layout";
import Channel from "../components/Channel"

function Podcasts({ channel, audio  }) {
    return(
        <Layout title={ channel.title }>
            <Channel channel={channel} audio={ audio }>
            </Channel>
        </Layout>
    )
}

Podcasts.getInitialProps = async ({ query }) => {
    let idChannel = query.id;
    let [reqChannel, reqAudio] = await Promise.all([
        fetch(`https://api.audioboom.com/channels/${idChannel}`),
        fetch(`https://api.audioboom.com/audio_clips/${idChannel}.mp3`),
    ])

    let dataChannel = await reqChannel.json();
    let channel = dataChannel.body.channel;

    let dataAudio = await reqAudio.json();
    let audio = dataAudio.body.audio_clip;

    return{
        channel,
        audio
    }
}

export default Podcasts;