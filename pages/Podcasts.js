// import 'isomorphic-fetch';
import Link from "next/link";

function Podcasts({ channel, audio  }) {
    return(
        <div>
            <div className="clip">
                <header className="header">
                    <nav>
                        <Link  href="/">
                            <a>
                                volver
                            </a>
                        </Link>
                    </nav>
                </header>
                <article className="image-podcasts">
                    <img src={channel.urls.logo_image.original} />
                </article>
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
            </div>
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