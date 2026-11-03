import {useState} from "react";

export default function KnowledgeBaseParameterAdd({...props}) {
    const [name, SetName] = useState("");

    
    let isActiveShow = "knowledgeBase__ParameterAdd";
    if (props.props.selectOperation[0] === "Add") { isActiveShow = isActiveShow + " active"}
    

    return(
        <>
            <div className={isActiveShow} >
                <div className="ParameterAdd__popapAdd">
                    <div className="popapAdd__header">
                        <p>Введите название параметра</p>
                        <textarea className="popapAdd__header_input" type="text" value={name} onChange={(e)=>{SetName(e.target.value)}} placeholder="Введите название параметра" />
                    </div>
                    <div className="popapAdd__footer">
                        <input className="popapAdd__footer_add" type="button" value="Создать" onClick={() => { props.props.handleAddKnowledgeBaseParameterElement(name); SetName("") }}/>
                        <input className="popapAdd__footer_close" type="button" value="Отмена" onClick={() => { props.props.handleSetselectOperation("") }}/>
                    </div>
                </div>
            </div>
        </>
    );
}