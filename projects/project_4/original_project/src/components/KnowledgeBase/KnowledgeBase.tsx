import KnowledgeBase__Element from "./KnowledgeBaseElement/KnowledgeBaseElement";
import { createPortal } from "react-dom";
import { useState } from "react";
import KnowledgeBaseElementAdd from "./KnowledgeBaseElement/KnowledgeBaseElementAdd";
import KnowledgeBaseElementEdit from "./KnowledgeBaseElement/KnowledgeBaseElementEdit";
import KnowledgeBaseElementDelet from "./KnowledgeBaseElement/KnowledgeBaseElementDelet";
import KnowledgeBaseParameters from "./KnowledgeBaseParameter/KnowledgeBaseParameters";
import KnowledgeBaseSubElements from "./KnowledgeBaseSubElements";

export default function KnowledgeBase({ ...props }) {
    const [selectOperation, SetselectOperation] = useState([]);
    const [showElementParameterSubElement, SetshowElementParameterSubElement] = useState({ element: ["-", "-", 0], parameter: ["-", "-", 0], subElement: ["-", "-", 0] });


    function handleSetselectOperation(data) {
        if (data[0] === "Add") { SetselectOperation(["Add"]); }
        else if (data[0] === "Edit") { SetselectOperation([...data]); }
        else if (data[0] === "Delet") { SetselectOperation([...data]); }
        else if (data[0] === "Forwards") { SetshowElementParameterSubElement(data[1]); } else { SetselectOperation([""]); }
    }

    function handleSetParameterSubElement(object) {
        SetshowElementParameterSubElement(object);
    }

    const body = document.querySelector('.body');
    let handleAddKnowledgeBaseElements = props.props.handleAddKnowledgeBaseElements;
    let handleAddKnowledgeBaseParameterElement = props.props.handleAddKnowledgeBaseParameterElement;
    let handleAddKnowledgeBaseSubElements = props.props.handleAddKnowledgeBaseSubElements;
    let handleEditKnowledgeBaseElements = props.props.handleEditKnowledgeBaseElements;
    let handleEditKnowledgeBaseParameterElement = props.props.handleEditKnowledgeBaseParameterElement;
    let handleDeletKnowledgeBaseSubElements = props.props.handleDeletKnowledgeBaseSubElements;
    let handleDeletKnowledgeBaseElements = props.props.handleDeletKnowledgeBaseElements;
    let handleDeletKnowledgeBaseParameterElement = props.props.handleDeletKnowledgeBaseParameterElement;
    let handleEditKnowledgeBaseSubElements = props.props.handleEditKnowledgeBaseSubElements;

    let knowledgeBaseElements = props.props.knowledgeBaseElements;
    let knowledgeBaseSubElements = props.props.knowledgeBaseSubElements;
    let knowledgeBaseParameterElement = props.props.knowledgeBaseParameterElement;
    

    
    
    


    return (
        <>
            <div className="content__knowledgeBase">
                <div className="knowledgeBase__elements">
                    <input className="elements__add" type="button" value="Добавить элемент" onClick={() => { handleSetselectOperation(["Add"]) }} />
                    {
                        knowledgeBaseElements.map((elements) => {
                            return <KnowledgeBase__Element props={{ elements, handleSetselectOperation, selectOperation, showElementParameterSubElement, handleSetParameterSubElement, handleDeletKnowledgeBaseParameterElement }} key={elements.id}></KnowledgeBase__Element>
                        })
                    }

                </div>
                {showElementParameterSubElement["element"][2] === 1 &&
                    <div className="knowledgeBase__parameters">
                        <KnowledgeBaseParameters props={{ knowledgeBaseSubElements, knowledgeBaseParameterElement, handleAddKnowledgeBaseParameterElement, handleEditKnowledgeBaseParameterElement, handleDeletKnowledgeBaseParameterElement, showElementParameterSubElement, handleSetParameterSubElement }}></KnowledgeBaseParameters>
                    </div>
                }
                {showElementParameterSubElement["parameter"][2] === 1 &&
                    <div className="knowledgeBase__subElements">
                        <KnowledgeBaseSubElements props={{ handleAddKnowledgeBaseSubElements, handleDeletKnowledgeBaseSubElements, handleEditKnowledgeBaseSubElements, showElementParameterSubElement, knowledgeBaseSubElements}}></KnowledgeBaseSubElements>
                    </div>
                }




                {(selectOperation[0] === "Add")  && createPortal(
                    <KnowledgeBaseElementAdd props={{ selectOperation, handleSetselectOperation, handleAddKnowledgeBaseElements }}></KnowledgeBaseElementAdd>,
                    body
                )}
                {selectOperation[0] === "Edit" && createPortal(
                    <KnowledgeBaseElementEdit props={{ knowledgeBaseElements, selectOperation, handleSetselectOperation, handleEditKnowledgeBaseElements }}></KnowledgeBaseElementEdit>,
                    body
                )}
                {selectOperation[0] === "Delet" && createPortal(
                    <KnowledgeBaseElementDelet props={{ selectOperation, handleSetselectOperation, handleDeletKnowledgeBaseElements }}></KnowledgeBaseElementDelet>,
                    body
                )}
            </div>
        </>
    );
}