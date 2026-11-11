import { useState } from 'react';

export default function Nav({...props}) {

    return(
        <>
            <div className="nav">
                <input className={props.props.selectNav !== 1 ? "nav__button" : "nav__button active"} type="button" value="Поиск информации" onClick={() =>{ props.props.handleEditSelectNav(1);}}/>
                <input className={props.props.selectNav !== 2 ? "nav__button" : "nav__button active"} type="button" value="База знаний" onClick={() => { props.props.handleEditSelectNav(2); }} />
            </div>
        </>
    );
}