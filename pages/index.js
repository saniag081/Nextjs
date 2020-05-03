import 'isomorphic-fetch';
import Layout from '../components/Layout';
import ChannelGrid from '../components/ChannelGrid'
import Error from 'next/error';

function Page({ channels, statusCode }) {
    if (statusCode !== 200) {
        return <Error statusCode={ statusCode }/>
    }
    return(
        <Layout title="App de Podcast">
            <ChannelGrid channels={ channels }>
            </ChannelGrid>
        </Layout>
    )
}

Page.getInitialProps = async ({ res }) => {
    try {
        let request = await fetch('https://api.audioboom.com/channels/recommended');
        let { body: channels } = await request.json();

        return { channels, statusCode: 200 }
    } catch (e) {
        res.statusCode = 500;
        return { statusCode: 500 }
    }
}


export default Page;