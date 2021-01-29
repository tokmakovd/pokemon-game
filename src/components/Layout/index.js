import s from './style.module.css';

const Layout = ({ id, title, descr, urlBg, colorBg }) => {  //id title descr urlBg colorBg
    // console.log(id, title, desc, urlBg, colorBg);

    const bg = {};
    if (urlBg) {
        bg.backgroundImage = `url('${urlBg}')`
    }

    if (colorBg) {
        bg.backgroundColor = `${colorBg}`
    }

    return (
        <section className={s.root} id={id} style={bg} >
            < div className={s.wrapper} >
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={s.desc + ' ' + s.full}>
                        <p>{descr}</p>
                    </div>
                </article>
            </div >
        </section >

    );
};

export default Layout;