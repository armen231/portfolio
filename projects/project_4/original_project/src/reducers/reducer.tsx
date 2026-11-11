export function knowledgeBaseElementsReducer(knowledgeBaseElementsReducer, action) {
    switch (action.type) {
        case 'add': {
            return [...knowledgeBaseElementsReducer, { id: knowledgeBaseElementsReducer.length !== 0 ? (knowledgeBaseElementsReducer.slice(-1)[0].id + 1) : 0, nameElement: action.nameElement }];
        }
        case 'edit': {
            return knowledgeBaseElementsReducer.map((e) => {
                if (e.id === action.element.id) {
                    return {
                        id: action.element.id,
                        nameElement: action.element.nameElement,
                    };
                } else {
                    return e;
                }
            });
        }
        case 'delete': {
            return knowledgeBaseElementsReducer.filter((e) => {
                if (e.id === action.id) {
                    return false;
                }
                return true;
            });
        }
    }
}

export function knowledgeBaseSubElementsReducer(knowledgeBaseSubElementsReducer, action) {
    switch (action.type) {
        case 'add': {
            return [...knowledgeBaseSubElementsReducer, { id: knowledgeBaseSubElementsReducer.length !== 0 ? (knowledgeBaseSubElementsReducer.slice(-1)[0].id + 1) : 0, prevElemId: action.prevElemId, parameterElementId: action.parameterElementId, text: action.text, description: action.description }];
        }
        case 'edit': {
            return knowledgeBaseSubElementsReducer.map((e) => {
                if (e.id === action.subElement.id) {
                    return {
                        id: action.subElement.id,
                        prevElemId: action.subElement.prevElemId,
                        parameterElementId: action.subElement.parameterElementId,
                        description: action.subElement.description,
                        text: action.subElement.text,
                    };
                } else {
                    return e;
                }
            });
        }
        case 'delete': {
            return knowledgeBaseSubElementsReducer.filter((e) => {
                if (e.id === action.id) {
                    return false;
                }
                return true;
            });
        }
    }
}


export function knowledgeBaseParameterElementReducer(knowledgeBaseParameterElementReducer, action) {
    switch (action.type) {
        case 'add': {
            return [...knowledgeBaseParameterElementReducer, { id: knowledgeBaseParameterElementReducer.length !== 0 ? (knowledgeBaseParameterElementReducer.slice(-1)[0].id + 1) : 0, nameParameter: action.nameParameter }];
        }
        case 'edit': {
            return knowledgeBaseParameterElementReducer.map((e) => {
                if (e.id === action.parameter.id) {
                    return {
                        id: action.parameter.id,
                        nameParameter: action.parameter.nameParameter,
                    };
                } else {
                    return e;
                }
            });
        }
        case 'delete': {
            return knowledgeBaseParameterElementReducer.filter((e) => {
                if (e.id === action.id) {
                    return false;
                }
                return true;
            });
        }
    }
}


export function selectDataCheckboxParameterElementReducer(selectDataCheckboxParameterElementReducer, action) {
    switch (action.type) {
        case 'add': {
            return [...selectDataCheckboxParameterElementReducer, { idParameterElement: action.selectDataCheckboxParameterElement.idParameterElement, activeSubElement: action.selectDataCheckboxParameterElement.activeSubElement }];
        }
        case 'delete': {
            return selectDataCheckboxParameterElementReducer.filter((e) => {
                if (e.activeSubElement === action.selectDataCheckboxParameterElement.activeSubElement) {
                    return false;
                }
                return true;
            });
        }
    }
}