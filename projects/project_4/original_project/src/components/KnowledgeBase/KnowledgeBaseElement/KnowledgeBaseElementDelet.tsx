export default function KnowledgeBaseElementDelet({...props}) {
    let isActiveShow = "knowledgeBase__ElementDelet";
    if (props.props.selectOperation[0] === "Delet") { isActiveShow = isActiveShow + " active"}
    

    return(
        <>
            <div className={isActiveShow} >
                <div className="ElementDelet__popapDelet">
                    <div className="popapEdit__header">
                        <p>Вы действительно хотите удалить "{props.props.selectOperation[2]}"</p>
                    </div>
                    <div className="popapDelet__footer">
                        <input className="popapDelet__footer_delet" type="button" value="Удалить" onClick={() => { props.props.handleDeletKnowledgeBaseElements(props.props.selectOperation[1]); props.props.handleSetselectOperation("") }}/>
                        <input className="popapDelet__footer_close" type="button" value="Отмена" onClick={() => { props.props.handleSetselectOperation("") }}/>
                    </div>
                </div>
            </div>
        </>
    );
}