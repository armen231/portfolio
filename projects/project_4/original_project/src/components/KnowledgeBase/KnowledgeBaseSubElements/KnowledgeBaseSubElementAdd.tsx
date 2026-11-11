import {useState} from "react";

export default function KnowledgeBaseSubElementAdd({...props}) {
    const [name, SetName] = useState("");
    const [description, SetDescription] = useState("");

    let isActiveShow = "knowledgeBase__SubElementAdd";
    if (props.props.selectOperation[0] === "Add") { isActiveShow = isActiveShow + " active"}
    

    return(
        <>
            <div className={isActiveShow} >
                <div className="SubElementAdd__popapAdd">
                    <div className="popapAdd__header">
                        <p>Введите название факта</p>
                        <textarea className="popapAdd__header_input" type="text" value={name} onChange={(e)=>{SetName(e.target.value)}} placeholder="Введите название факта" />
                        <p>Введите описание факта</p>
                        <textarea className="popapAdd__header_input" type="text" value={description} onChange={(e) => { SetDescription(e.target.value)}} placeholder="Введите описание факта" />
                    </div>
                    <div className="popapAdd__footer">
                        <input className="popapAdd__footer_add" type="button" value="Создать" onClick={() => { props.props.handleAddKnowledgeBaseSubElements({ prevElemId: props.props.showElementParameterSubElement["element"][1], parameterElementId: props.props.showElementParameterSubElement["parameter"][1], text: name, description:description}); SetName(""); SetDescription("") }}/>
                        <input className="popapAdd__footer_close" type="button" value="Отмена" onClick={() => { props.props.handleSetselectOperation("") }}/>
                    </div>
                </div>
            </div>
        </>
    );
}