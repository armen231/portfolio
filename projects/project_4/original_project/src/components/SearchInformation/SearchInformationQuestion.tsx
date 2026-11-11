import { useState } from "react";

export default function SearchInformationQuestion({ ...props }) {

    let selectParameterElement = props.props.selectParameterElement;

    let text = outputText(props, selectParameterElement)


    function installText(selectParameterElement, text, idElements) {
        props.props.handleSetInputTextToParameter(selectParameterElement, text, idElements);
    }


    return (
        <>
            {props.props.knowledgeBaseParameterElement.length !== 0 && <>
                <p>Введите необходимые факт, а потом выберите из списка для поиска по параметру "{props.props.knowledgeBaseParameterElement[props.props.selectParameterElement][0]["nameParameter"]}"</p>
                <input className="question__text" type="text" value={text} placeholder="Введите факт" onChange={(e) => { installText(selectParameterElement, e.target.value, []) }}></input>
            </>
            }

            <div className="question__proposedText">
                {
                    result1(props, selectParameterElement, text, installText)

                }
            </div>
        </>
    );
}


function outputText(props, selectParameterElement) {
    let text = "";

    if (props.props.inputTextToParameter.length !== 0) {
        props.props.inputTextToParameter.map((v, i) => {
            if (v["selectParameter"] === selectParameterElement) {
                text = v["text"];
            }
        });
    } else {
        text = "";
    }

    return text;


}


function result1(props, selectParameterElement, text, installText) {
    let array: Array<any> = [];

    props.props.knowledgeBaseSubElements.map((v) => {
        if (v["parameterElementId"] === selectParameterElement) {
            if (array.length === 0) {
                array.push({
                    idParameter: selectParameterElement,
                    idElements: [v["prevElemId"]],
                    text: v["text"],
                });
            } else {
                // let newInputTextToParameter = JSON.parse(JSON.stringify(array));
                let isAddidElements = false;
                array.map((v2, i) => {
                    if (v2["text"] === v["text"]) {
                        isAddidElements = true;
                        array[i]["idElements"].push(v["prevElemId"]);
                    }
                })
                if (isAddidElements === false) {
                    array.push({
                        idParameter: selectParameterElement,
                        idElements: [v["prevElemId"]],
                        text: v["text"],
                    });
                }
            }
        }
    })

    return array.map((v, i) => {
        let textToKnowledgeBaseSubElements = v["text"];
        if (text === "") {
            return <p key={selectParameterElement + "" + i} className="proposedText__p" onClick={() => { installText(selectParameterElement, textToKnowledgeBaseSubElements, array[i]["idElements"]) }}>{v["text"]}</p>
        } else {
            let result = textToKnowledgeBaseSubElements.toLocaleLowerCase().match(new RegExp(text.toLocaleLowerCase(), "g")) || [];
            if (result.length !== 0) {
                return <p key={selectParameterElement + "" + i} className="proposedText__p" onClick={() => { installText(selectParameterElement, textToKnowledgeBaseSubElements, array[i]["idElements"]) }}>{v["text"]}</p>
            }
        }
    })
}