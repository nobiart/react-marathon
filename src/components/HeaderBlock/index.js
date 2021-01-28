import style from './style.module.css';

import { ReactComponent as ReactLogo } from '../../assets/logo.svg';

const HeaderBlock = ({ title, hideBackground = false, descr }) => {
    const styleRoot = hideBackground ? { backgroundImage: 'none' } : {};
    return (
        <div className={style.root} style={styleRoot}>
            <div className={style.container}>
                <ReactLogo />
                {
                    title && (<h1 className={style.header}>
                        {title}
                    </h1>)
                }
                { descr && <p className={style.paragraph}>{ descr }</p> }

            </div>
        </div>
    )
}

export default HeaderBlock;
