import { useState, useReducer } from "react";
import SearchInformationQuestion from "./SearchInformationQuestion";
import SearchInformationResult from "./SearchInformationResult";


export default function SearchInformation({ ...props }) {
    const [selectParameterElement, SetSelectParameterElement] = useState(0);
    const [inputTextToParameter, SetInputTextToParameter] = useState([]);



    let knowledgeBaseElements = props.props.knowledgeBaseElements;
    let knowledgeBaseSubElements = props.props.knowledgeBaseSubElements;
    let knowledgeBaseParameterElementOrigin = props.props.knowledgeBaseParameterElement;
    let knowledgeBaseParameterElement = collectingResultParameterElement(props);

    function handleSetSelectParameterElement(id) {
        if (id <= knowledgeBaseParameterElement.length - 1 && id >= 0) {
            SetSelectParameterElement(id);
        }
    }
    
    function handleSetInputTextToParameter(selectParameter, text, idElements) {
        let count = 0;
        inputTextToParameter.map((v)=>{
            console.log();
            
            if (v["selectParameter"] === selectParameter) {
                count =+ 1;
            }
        })

        let newInputTextToParameter: Array<Object> = [];
        if (inputTextToParameter.length !== 0) {
            newInputTextToParameter = JSON.parse(JSON.stringify(inputTextToParameter));
        }
        
        
        if (count === 0) {
            newInputTextToParameter.push({ selectParameter: selectParameter, text: text, idElements: idElements });
        } else {
            let notes = newInputTextToParameter.map((v, i)=>{
                if (selectParameter === v["selectParameter"]) {
                    return {
                        selectParameter: selectParameter,
                        text: text,
                        idElements: idElements
                    }
                } else {
                    return v;
                }
            });
            newInputTextToParameter = notes;
        }

        SetInputTextToParameter(newInputTextToParameter);
    }


    return (
        <>
            <div className="content__SearchInformation">
                <div className="searchInformation__question">
                    {props.props.knowledgeBaseParameterElement.length !== 0 && <div className="question__array">
                        <img style={{ transform: 'rotate(180deg)', }} className="options__img" src="img/icons_forwards.png" alt="" onClick={() => { handleSetSelectParameterElement(selectParameterElement - 1) }} />
                        <img className="options__img" src="img/icons_forwards.png" alt="" onClick={() => { handleSetSelectParameterElement(selectParameterElement + 1) }} />
                    </div>}

                    <SearchInformationQuestion key={selectParameterElement} props={{knowledgeBaseSubElements, knowledgeBaseParameterElement, selectParameterElement, handleSetInputTextToParameter, inputTextToParameter }}></SearchInformationQuestion>
                </div>

                <div className="searchInformation__result">
                    <SearchInformationResult props={{ knowledgeBaseParameterElement, knowledgeBaseParameterElementOrigin, knowledgeBaseElements, knowledgeBaseSubElements, inputTextToParameter }}></SearchInformationResult>
                </div>
            </div>

        </>
    );
}


function collectingResultParameterElement(props) {
    let result1 = props.props.knowledgeBaseParameterElement.map((parameterElement) => {
        let temporaryObject = {}; // переменная необходмая для временного хранения сформированных данных 
        let temporaryArray: Array<Array<any>> = []; // переменная необходимая для временного хранения уникальных значений parameterElementId в subElements
        temporaryObject["idParameterElement"] = parameterElement.id;
        temporaryObject["nameParameter"] = parameterElement.nameParameter;

        temporaryArray = [];
        props.props.knowledgeBaseSubElements.map((subElements) => {
            if (subElements.parameterElementId == parameterElement.id) {
                temporaryArray.push([subElements.id, subElements.prevElemId, subElements.description, subElements.text]);
            }
        });

        temporaryObject["countSubElements"] = temporaryArray;
        return [temporaryObject];
    }); // формирование параметоров в учетом наличия хотябы одного факта в параметре

    let result2 = result1.filter((parameterElement) => {
        if (parameterElement[0]["countSubElements"].length !== 0) {
            return true;
        }
        return false;
    });
    return result2;
}