import React from 'react';
import css from "./preloader.module.css"

type PropsType = {
}

let Preloader: React.FC = () => {
    return <div className={css.preloader}>
        <div className={css.cssload_container}>
            <div className={css.cssload_whirlpool}/>
        </div>
    </div>
}

export default Preloader;
