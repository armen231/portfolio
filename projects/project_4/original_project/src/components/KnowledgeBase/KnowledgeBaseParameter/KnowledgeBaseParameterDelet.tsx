export default function KnowledgeBaseParameterDelet({...props}) {
    let isActiveShow = "knowledgeBase__ParameterDelet";
    if (props.props.selectOperation[0] === "Delet") { isActiveShow = isActiveShow + " active"}
    

    return(
        <>
            <div className={isActiveShow} >
                <div className="ParameterDelet__popapDelet">
                    <div className="popapEdit__header">
                        <p>Вы действительно хотите удалить "{props.props.selectOperation[2]}"</p>
                    </div>
                    <div className="popapDelet__footer">
                        <input className="popapDelet__footer_delet" type="button" value="Удалить" onClick={() => { props.props.handleDeletKnowledgeBaseParameterElement(props.props.selectOperation[1]); props.props.handleSetselectOperation("") }}/>
                        <input className="popapDelet__footer_close" type="button" value="Отмена" onClick={() => { props.props.handleSetselectOperation("") }}/>
                    </div>
                </div>
            </div>
        </>
    );
}