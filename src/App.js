import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

import Bg1 from './assets/bg2.jpg';
import Bg2 from './assets/bg1.jpg';

const App = () => {
    return (
        <>
            <Header
                title="This is title"
                descr="This is Description!"
            />
            <Layout
                id="withBg1"
                urlBg={`${Bg1}`}
                title="This is layout #1 title"
                descr="This is layout #1 Description!"
            />
            <Layout
                id="withColorBg"
                colorBg="#ffbe55"
                title="This is layout #2 title"
                descr="This is layout #2 Description!"
            />
            <Layout
                id="withBg2"
                urlBg={`${Bg2}`}
                title="This is layout #3 title"
                descr="This is layout #3 Description!"
            />
            <Footer />
        </>
    )
}

export default App;
