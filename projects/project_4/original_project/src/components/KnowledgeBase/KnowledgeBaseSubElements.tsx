import { useState } from "react";
import { createPortal } from "react-dom";
import KnowledgeBaseSubElementAdd from "./KnowledgeBaseSubElements/KnowledgeBaseSubElementAdd";
import KnowledgeBaseSubElementEdit from "./KnowledgeBaseSubElements/KnowledgeBaseSubElementEdit";
import KnowledgeBaseSubElementDelet from "./KnowledgeBaseSubElements/KnowledgeBaseSubElementDelet";

export default function KnowledgeBaseSubElements({ ...props }) {
    const [selectOperation, SetselectOperation] = useState([]);


    function handleSetselectOperation(data) {
        if (data[0] === "Add") { SetselectOperation(["Add"]); }
        else if (data[0] === "Edit") { SetselectOperation([...data]); }
        else if (data[0] === "Delet") { SetselectOperation([...data]); } else { SetselectOperation(""); }
    }



    let knowledgeBaseSubElements = props.props.knowledgeBaseSubElements;
    let handleAddKnowledgeBaseSubElements = props.props.handleAddKnowledgeBaseSubElements;
    let handleDeletKnowledgeBaseSubElements = props.props.handleDeletKnowledgeBaseSubElements;
    let handleEditKnowledgeBaseSubElements = props.props.handleEditKnowledgeBaseSubElements;

    let showElementParameterSubElement = props.props.showElementParameterSubElement;

    const body = document.querySelector('.body');






    return <>
        <input className="subElements__add" type="button" value="Добавить факт" onClick={() => { handleSetselectOperation(["Add"]) }} />

        {
            knowledgeBaseSubElements.map((subElement) => {
                if (subElement.prevElemId === props.props.showElementParameterSubElement["element"][1]) {
                    if (subElement.parameterElementId === props.props.showElementParameterSubElement["parameter"][1]) {
                        return <KnowledgeBaseSubElement key={subElement.id} props={{ subElement, handleSetselectOperation }}></KnowledgeBaseSubElement>
                    }
                }
            })
        }

        {(selectOperation[0] === "Add") && createPortal(
            <KnowledgeBaseSubElementAdd props={{ selectOperation, handleSetselectOperation, handleAddKnowledgeBaseSubElements, showElementParameterSubElement }}></KnowledgeBaseSubElementAdd>,
            body
        )}
        {selectOperation[0] === "Edit" && createPortal(
            <KnowledgeBaseSubElementEdit props={{ selectOperation, handleSetselectOperation, handleEditKnowledgeBaseSubElements, showElementParameterSubElement }}></KnowledgeBaseSubElementEdit>,
            body
        )}
        {selectOperation[0] === "Delet" && createPortal(
            <KnowledgeBaseSubElementDelet props={{ selectOperation, handleSetselectOperation, handleDeletKnowledgeBaseSubElements }}></KnowledgeBaseSubElementDelet>,
            body
        )}
    </>
}



export function KnowledgeBaseSubElement({ ...props }) {
    return <>
        <div key={props.props.subElement["id"]} className="subElements__subElement">
            <div className="subElements__text">
                <p>Название: {props.props.subElement["text"]}</p>
                <p>Описание: {props.props.subElement["description"]}</p>
            </div>
            <div className="subElements__options">
                <img className="options__img" src="img/icons_delet.png" alt="" onClick={() => { props.props.handleSetselectOperation(["Delet", props.props.subElement.id, props.props.subElement.text]) }} />
                <img className="options__img" src="img/icons_edit.png" alt="" onClick={() => { props.props.handleSetselectOperation(["Edit", props.props.subElement.id, props.props.subElement.text, props.props.subElement.description]) }} />
            </div>
        </div>
    </>
}