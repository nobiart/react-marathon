import HeaderBlock from "./components/HeaderBlock";

const App = () => {
    return (
        <>
            <HeaderBlock
                title="This is new title"
                descr="This is new description!"
            />
            <HeaderBlock
                title="This is new title"
                hideBackground
            />
        </>
    );
}

export default App;
