export default function KnowledgeBaseElement({ ...props }) {
    let showElementActive = "elements__element";
    if (props.props.showElementParameterSubElement["element"][1] === props.props.elements.id) { showElementActive = showElementActive + " active"; }
    
    return <>
        <div key={props.props.elements.id} className={showElementActive}>
            <p>{props.props.elements.nameElement}</p>
            <div className="element__options">
                <img className="options__img" src="img/icons_forwards.png" alt="" onClick={() => { updateForwards(props) }} />
                <img className="options__img" src="img/icons_delet.png" alt="" onClick={() => { props.props.handleSetselectOperation(["Delet", props.props.elements.id, props.props.elements.nameElement])}} />
                <img className="options__img" src="img/icons_edit.png" alt="" onClick={() => { props.props.handleSetselectOperation(["Edit", props.props.elements.id, props.props.elements.nameElement])}}/>
            </div>            
        </div>
    </>
}

function updateForwards(props) {  
    let newShowElementParameterSubElement = JSON.stringify(props.props.showElementParameterSubElement);
    newShowElementParameterSubElement = JSON.parse(newShowElementParameterSubElement);
    if (props.props.showElementParameterSubElement["element"][2] === 0) { // первый запуск
        newShowElementParameterSubElement["element"][1] = props.props.elements.id;
        newShowElementParameterSubElement["element"][2] = 1;
        
    } else if (props.props.showElementParameterSubElement["element"][2] === 1) { 
        if (props.props.showElementParameterSubElement["element"][1] === props.props.elements.id) { // обнуление при повторном нажатии тудаже
            newShowElementParameterSubElement["element"][0] = "-";
            newShowElementParameterSubElement["element"][1] = "-";
            newShowElementParameterSubElement["element"][2] = 0;

            newShowElementParameterSubElement["parameter"][0] = "-";
            newShowElementParameterSubElement["parameter"][1] = "-";
            newShowElementParameterSubElement["parameter"][2] = 0;

            newShowElementParameterSubElement["subElement"][0] = "-";
            newShowElementParameterSubElement["subElement"][1] = "-";
            newShowElementParameterSubElement["subElement"][2] = 0;
        } else if (props.props.showElementParameterSubElement["element"][1] !== props.props.elements.id) {
            newShowElementParameterSubElement["element"][0] = newShowElementParameterSubElement["element"][1];
            newShowElementParameterSubElement["element"][1] = props.props.elements.id;

            newShowElementParameterSubElement["parameter"][0] = "-";
            newShowElementParameterSubElement["parameter"][1] = "-";
            newShowElementParameterSubElement["parameter"][2] = 0;

            newShowElementParameterSubElement["subElement"][0] = "-";
            newShowElementParameterSubElement["subElement"][1] = "-";
            newShowElementParameterSubElement["subElement"][2] = 0;
        }
    }
    props.props.handleSetParameterSubElement(newShowElementParameterSubElement);
}