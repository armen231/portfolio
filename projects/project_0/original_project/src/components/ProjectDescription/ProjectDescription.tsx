import { useEffect, useRef } from "react";
import "./ProjectDescription.scss";

interface typeValue {
    title: string,
    text: string[] | string,
}

export default function ProjectDescription({ ...props}) {
    const dataRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        dataRef.current?.focus();
    }, []);

    function clickProjectDescription(event: React.MouseEvent<HTMLElement>) {
        const target = event.target as HTMLElement;
        if (target.className === 'project-description') {
            props.setDataProjectDescription();
        }
    }

    function keydownProjectDescription(event: React.KeyboardEvent<HTMLElement>) {
        if (event.key === 'Escape' || event.key === 'Esc') {
            props.setDataProjectDescription();
        }
    }


    return (
        <>
            <div className="project-description" onClick={(e) => { clickProjectDescription(e) }} onKeyDown={(e) => { keydownProjectDescription(e)} }>
                <div className="project-description__content-data" tabIndex={0} ref={dataRef}>
                    <div className="project-description__button-close">
                        <span className="material-symbols-outlined project-description__close" onClick={() => { props.setDataProjectDescription() }}>
                            close
                        </span>


                    </div>
                    {
                        props.dataProjectDescription.description.map((value: typeValue, index: number) => {
                            return <div key={index} className="project-description__description">
                                <p className="project-description__title">{value.title}</p>
                                {
                                    Array.isArray(value.text) == false ?
                                        <p className="project-description__subTitle">1. {value.text}</p>
                                        :
                                        value.text.map((value2: string, index2: number) => {
                                            return <p key={index2} className="project-description__subTitle">{`${index2 + 1}. ${value2}`}</p>
                                        })
                                }

                            </div>
                        })
                    }
                    <a className={`project-description__open-project project-description__open-project--touch${props.isTouch}`} href={props.dataProjectDescription.url}>Окрыть проект</a>
                    <a className={`project-description__open-project project-description__open-project--touch${props.isTouch}`} href={props.dataProjectDescription.urlToGit}>Окрыть проект в git</a>
                </div>
            </div>
        </>
    )
}
