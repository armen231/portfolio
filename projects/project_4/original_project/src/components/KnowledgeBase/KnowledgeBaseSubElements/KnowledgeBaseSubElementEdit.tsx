import {useState, useEffect} from "react";

export default function KnowledgeBaseSubElementEdit({...props}) {
    useEffect(()=>{
        if (props.props.selectOperation[2] === undefined) {
            SetName("");
        } else { SetName(props.props.selectOperation[2]); }
        if (props.props.selectOperation[3] === undefined) {
            SetDescription("");
        } else { SetDescription(props.props.selectOperation[3]); }
        
    }, [props.props.selectOperation]);
    
    

    const [name, SetName] = useState("");
    const [description, SetDescription] = useState("");


    let isActiveShow = "knowledgeBase__SubElementEdit";
    if (props.props.selectOperation[0] === "Edit") { isActiveShow = isActiveShow + " active"}

    return(
        <>
            <div className={isActiveShow} >
                <div className="SubElementEdit__popapEdit">
                    <div className="popapEdit__header">
                        <p>Введите название факта</p>
                        <textarea className="popapEdit__header_input" type="text" value={name} onChange={(e) => { SetName(e.target.value) }} placeholder="Введите название факта" />
                        <p>Введите описание факта</p>
                        <textarea className="popapEdit__header_input" type="text" value={description} onChange={(e) => { SetDescription(e.target.value) }} placeholder="Введите описание факта" />
                    </div>
                    <div className="popapEdit__footer">
                        <input className="popapEdit__footer_edit" type="button" value="Изменить" onClick={() => { props.props.handleEditKnowledgeBaseSubElements(
                            { 
                                id: props.props.selectOperation[1],
                                prevElemId: props.props.showElementParameterSubElement["element"][1],
                                parameterElementId: props.props.showElementParameterSubElement["parameter"][1],
                                description: description,
                                text: name,

                            }) }}/>
                        <input className="popapEdit__footer_close" type="button" value="Отмена" onClick={() => { props.props.handleSetselectOperation("") }}/>
                    </div>
                </div>
            </div>
        </>
    );
}