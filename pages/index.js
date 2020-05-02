import 'isomorphic-fetch';
import Layout from '../components/Layout';
import ChannelGrid from '../components/ChannelGrid'

function Page ({ channels }){
    return(
        <Layout title="App de Podcast">
            <ChannelGrid channels={ channels }>
            </ChannelGrid>
        </Layout>
    )
}

Page.getInitialProps = async (ctx) => {
    let request = await fetch('https://api.audioboom.com/channels/recommended');
    let { body: channels } = await request.json();

    return { channels }
}


export default Page;