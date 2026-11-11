export default function SearchInformationResult({ ...props }) {
    let idElements = result1(props);

    return (
        <>
            {
                props.props.knowledgeBaseElements.map((element) => {
                    if (idElements[0].includes(element["id"]) === true) {
                        return <div className="result" key={element["id"] + "wrapper"} style={{ dispay: "flex" }}>
                            <p>Название: {element["nameElement"]}</p>
                            <p>Пояснение, так как выбрано :</p>
                            {
                                result2(idElements, element["id"], props.props.knowledgeBaseParameterElementOrigin, props.props.knowledgeBaseSubElements)
                            }
                        </div>
                    }
                })
            }
        </>
    );
}

function result1(props) {
    let result1: Array<any> = [];
    let countParameterElement = 0; // переменная для подсчета количества используемых параметров
    let allElement: Array<any> = [];

    // выводим id всех элементов
    props.props.knowledgeBaseElements.map((element) => {
        allElement.push(element["id"]);
    })


    props.props.knowledgeBaseParameterElement.map((parameterElement) => {
        let result2: Array<any> = [];
        countParameterElement += 1;
        parameterElement = parameterElement[0]["idParameterElement"];

        props.props.inputTextToParameter.map((v) => {
            if (v["selectParameter"] === parameterElement) {
                v["idElements"].map((v2) => {
                    result2.push(v2);
                })
            }
        })


        // добавление в невыбранные параметры все элементы
        if (result2.length === 0) {
            result2 = allElement;
        }
        result1.push([parameterElement, result2]);
    })


    // определение пересечений элементов между всеми параметрами (подсчет количества элементов)
    let result2: Array<Number> = []
    allElement.map((element) => {
        let countAddElement = 0;

        result1.map((v) => {
            if (v[1].includes(element) === true) {
                countAddElement += 1;
            }
        })

        if (countParameterElement === countAddElement) {
            result2.push(element);
        }
    })




    console.log(result1);

    return [result2, result1];
}


function result2(array, elemenId, knowledgeBaseParameterElementOrigin, knowledgeBaseSubElements) {
    let parameter: Array<any> = [];
    let description: Array<any> = [];


    array[1].map((v) => {
        if (v[1].includes(elemenId) === true) {
            knowledgeBaseParameterElementOrigin.map((parameterElement) => {
                if (parameterElement["id"] === v[0]) {
                    parameter.push([parameterElement["nameParameter"]]);
                }
            })
        }

        let arrayBaseSubElements: Array<any> = [];

        knowledgeBaseSubElements.map((subElement) => {
            if (subElement["prevElemId"] === elemenId && subElement["parameterElementId"] === v[0]) {
                arrayBaseSubElements.push([subElement["description"], subElement["text"]]);
            }
        })

        description.push(arrayBaseSubElements);
    })



    console.log(JSON.stringify(parameter));

    console.log(JSON.stringify(description, null, "   "));




    let result = parameter.map((v1, i1) => {

        return <div key={elemenId + i1} style={{ width: "100%", display: "flex", flexDirection: "column", gap: "5px", border: "2px solid #7c7cff", padding: "10px", borderRadius: "var(--border-radius)"}}>
            {description !== null && <>

                {
                    description[i1].map((v2, i2) => {
                        return <div key={i1 + i2} >
                            {
                                <>
                                    {v1 + " : "}
                                    <p key={elemenId + i1 + i2 + "1"}>{`наименование: ${v2[1]}`}</p>
                                    <p key={elemenId + i1 + i2 + "2"}>{`описание: ${v2[0]}`}</p>
                                </>


                                // v2.map((v3)=>{
                                //     return <>
                                //         {v1+" : "}
                                //         <p key={elemenId + i2 + "1"}>{`наименование: ${v3}`}</p>
                                //         <p key={elemenId + i2 + "2"}>{`описание: ${v3}`}</p>
                                //     </>
                                // })
                            }

                        </div>

                    })


                }
            </>
            }

        </div>
    })
    return result;
}
