import {useState, useEffect} from "react";

export default function KnowledgeBaseElementEdit({...props}) {
    useEffect(()=>{
        if (props.props.selectOperation[2] === undefined) {
            SetName("");
        } else { SetName(props.props.selectOperation[2]); }
        
    }, [props.props.selectOperation]);
    
    

    const [name, SetName] = useState("");


    let isActiveShow = "knowledgeBase__ElementEdit";
    if (props.props.selectOperation[0] === "Edit") { isActiveShow = isActiveShow + " active"}

    return(
        <>
            <div className={isActiveShow} >
                <div className="ElementEdit__popapEdit">
                    <div className="popapEdit__header">
                        <p>Введите название элемента</p>
                        <textarea className="popapEdit__header_input" type="text" value={name} onChange={(e)=>{SetName(e.target.value)}} placeholder="Введите название элемента" />
                    </div>
                    <div className="popapEdit__footer">
                        <input className="popapEdit__footer_edit" type="button" value="Изменить" onClick={() => { props.props.handleEditKnowledgeBaseElements({ id: props.props.selectOperation[1], nameElement: name }) }}/>
                        <input className="popapEdit__footer_close" type="button" value="Отмена" onClick={() => { props.props.handleSetselectOperation("") }}/>
                    </div>
                </div>
            </div>
        </>
    );
}