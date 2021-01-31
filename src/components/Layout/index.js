import s from './style.module.css';

const Layout = ({ id, title, urlBg, colorBg, colorTitle, children }) => {
    const sectionStyle = {};

    if (urlBg) {
        sectionStyle.backgroundImage = `url(${urlBg})`;
    }

    if (colorBg) {
        sectionStyle.backgroundColor = colorBg;
    }

    return (
        <section className={s.root} id={id} style={sectionStyle}>
            <div className={s.wrapper}>
                <article>
                    {
                        title && (
                            <div className={s.title} style={{color: `${colorTitle}`}}>
                                <h3>{title}</h3>
                                <span className={s.separator}></span>
                            </div>
                        )
                    }
                    <div className={`${s.desc} ${s.full}`}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Layout;
