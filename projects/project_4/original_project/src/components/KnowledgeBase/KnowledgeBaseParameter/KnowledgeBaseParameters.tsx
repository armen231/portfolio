import { useState } from "react";
import { createPortal } from "react-dom";
import KnowledgeBaseParameterAdd from "./KnowledgeBaseParameterAdd";
import KnowledgeBaseParameterEdit from "./KnowledgeBaseParameterEdit";
import KnowledgeBaseParameterDelet from "./KnowledgeBaseParameterDelet";

export default function KnowledgeBaseParameters({ ...props }) {
    const [selectOperation, SetselectOperation] = useState([]);
    const [showParameterSubElement, SetParameterSubElement] = useState({ parameter: ["-", "-", 0], subElement: ["-", "-", 0] });


    function handleSetselectOperation(data) {
        if (data[0] === "Add") { SetselectOperation(["Add"]); }
        else if (data[0] === "Edit") { SetselectOperation([...data]); }
        else if (data[0] === "Delet") { SetselectOperation([...data]); }
        else if (data[0] === "Forwards") { SetParameterSubElement(data[1]); } else { SetselectOperation([""]); }
    }



    let knowledgeBaseParameterElement = props.props.knowledgeBaseParameterElement;
    let knowledgeBaseSubElements = props.props.knowledgeBaseSubElements;

    let handleAddKnowledgeBaseParameterElement = props.props.handleAddKnowledgeBaseParameterElement;
    let handleEditKnowledgeBaseParameterElement = props.props.handleEditKnowledgeBaseParameterElement;
    let handleDeletKnowledgeBaseParameterElement = props.props.handleDeletKnowledgeBaseParameterElement;

    let handleSetParameterSubElement = props.props.handleSetParameterSubElement;

    let showElementParameterSubElement = props.props.showElementParameterSubElement;

    const body = document.querySelector('.body');

    let arrayParameter: Array<Number> = []; // список параметров у елемента в общем по подэлементам
    let arrayParameterNo: Array<Number> = []; // список параметров не входяхие в подэлементы

    if (props.props.showElementParameterSubElement["element"][2] === 1) {
        knowledgeBaseSubElements.map((subElement) => {
            if (arrayParameter.includes(subElement.parameterElementId) == false && subElement.prevElemId === props.props.showElementParameterSubElement["element"][1]) {
                arrayParameter.push(subElement.parameterElementId);
            }
        });
        knowledgeBaseParameterElement.map((parameter) => {
            if (arrayParameterNo.includes(parameter.id) == false && arrayParameter.includes(parameter.id) == false) {
                arrayParameterNo.push(parameter.id);
            }
        });
    }

    


    return <>
        <input className="parameters__add" type="button" value="Добавить параметр" onClick={() => { handleSetselectOperation(["Add"]) }} />

        {arrayParameter.length !== 0 && <p>Параметры связанные <br /> с фактами элемента</p>}

        {
            props.props.knowledgeBaseParameterElement.map((parameter) => {
                if (arrayParameter.includes(parameter.id) === true) {
                    return <KnowledgeBaseParameter key={parameter.id} props={{ parameter, handleSetselectOperation, showElementParameterSubElement, handleSetParameterSubElement }}></KnowledgeBaseParameter>
                }
            })
        }

        <p>Параметры несвязанные <br /> с фактами элемента</p>

        {
            props.props.knowledgeBaseParameterElement.map((parameter) => {
                if (arrayParameterNo.includes(parameter.id) === true) {
                    return <KnowledgeBaseParameter key={parameter.id} props={{ parameter, handleSetselectOperation, showElementParameterSubElement, handleSetParameterSubElement }}></KnowledgeBaseParameter>
                }
            })
        }

        {(selectOperation[0] === "Add") && createPortal(
            <KnowledgeBaseParameterAdd props={{ selectOperation, handleSetselectOperation, handleAddKnowledgeBaseParameterElement }}></KnowledgeBaseParameterAdd>,
            body
        )}
        {selectOperation[0] === "Edit" && createPortal(
            <KnowledgeBaseParameterEdit props={{ selectOperation, handleSetselectOperation, handleEditKnowledgeBaseParameterElement }}></KnowledgeBaseParameterEdit>,
            body
        )}
        {selectOperation[0] === "Delet" && createPortal(
            <KnowledgeBaseParameterDelet props={{ selectOperation, handleSetselectOperation, handleDeletKnowledgeBaseParameterElement }}></KnowledgeBaseParameterDelet>,
            body
        )}
    </>
}



export function KnowledgeBaseParameter({ ...props }) {
    let showParametertActive = "parameters__parameter";
    if (props.props.showElementParameterSubElement["parameter"][1] === props.props.parameter.id) { showParametertActive = showParametertActive + " active"; }

    return <>
        <div key={props.props["id"]} className={showParametertActive}>
            <p>{props.props.parameter["nameParameter"]}</p>
            <div className="parameter__options">
                <img className="options__img" src="img/icons_forwards.png" alt="" onClick={() => { updateForwards(props) }} />
                <img className="options__img" src="img/icons_delet.png" alt="" onClick={() => { props.props.handleSetselectOperation(["Delet", props.props.parameter.id, props.props.parameter.nameParameter]) }} />
                <img className="options__img" src="img/icons_edit.png" alt="" onClick={() => { props.props.handleSetselectOperation(["Edit", props.props.parameter.id, props.props.parameter.nameParameter]) }} />
            </div>
        </div>
    </>
}


function updateForwards(props) {
    let newShowElementParameterSubElement = JSON.stringify(props.props.showElementParameterSubElement);
    newShowElementParameterSubElement = JSON.parse(newShowElementParameterSubElement);
    
    if (props.props.showElementParameterSubElement["parameter"][2] === 0) { // первый запуск
        newShowElementParameterSubElement["parameter"][1] = props.props.parameter.id;
        newShowElementParameterSubElement["parameter"][2] = 1;

    } else if (props.props.showElementParameterSubElement["parameter"][2] === 1) {
        if (props.props.showElementParameterSubElement["parameter"][1] === props.props.parameter.id) { // обнуление при повторном нажатии тудаже
            newShowElementParameterSubElement["parameter"][0] = "-";
            newShowElementParameterSubElement["parameter"][1] = "-";
            newShowElementParameterSubElement["parameter"][2] = 0;
        } else if (props.props.showElementParameterSubElement["parameter"][1] !== props.props.parameter.id) {
            newShowElementParameterSubElement["parameter"][0] = newShowElementParameterSubElement["parameter"][1];
            newShowElementParameterSubElement["parameter"][1] = props.props.parameter.id;
        }
    }
    props.props.handleSetParameterSubElement(newShowElementParameterSubElement);
}