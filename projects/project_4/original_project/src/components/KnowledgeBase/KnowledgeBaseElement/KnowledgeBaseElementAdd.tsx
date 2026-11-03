import {useState} from "react";

export default function KnowledgeBaseElementAdd({...props}) {
    const [name, SetName] = useState("");

    let isActiveShow = "knowledgeBase__ElementAdd";
    if (props.props.selectOperation[0] === "Add") { isActiveShow = isActiveShow + " active"}
    

    return(
        <>
            <div className={isActiveShow} >
                <div className="ElementAdd__popapAdd">
                    <div className="popapAdd__header">
                        <p>Введите название элемента</p>
                        <textarea className="popapAdd__header_input" type="text" value={name} onChange={(e)=>{SetName(e.target.value)}} placeholder="Введите название элемента" />
                    </div>
                    <div className="popapAdd__footer">
                        <input className="popapAdd__footer_add" type="button" value="Создать" onClick={() => { props.props.handleAddKnowledgeBaseElements(name); SetName("") }}/>
                        <input className="popapAdd__footer_close" type="button" value="Отмена" onClick={() => { props.props.handleSetselectOperation("") }}/>
                    </div>
                </div>
            </div>
        </>
    );
}