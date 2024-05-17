/**
 * 
 * @param {string}  dataAttr
 *@param  {string}  [value]
 *@returns {boolean}
 */

 export const getHtml  = (dataAttr,value) => {
    const selector = value 
    ? `[data-${dataAttr} ="${value}"]`
    : `data-${dataAttr}`;
    const element = document.querySelector(Selector);
    const isHtmlElement = element instanceof HTMLElement
    
    if ( !isHtmlElement){
         throw new Error(`${selector}attribute not found in HTML`);
    }
return element;
};

/**
 * 
 * @param {string}  dataAttr
 *@param  {string}  [value]
 *@returns {boolean}
 */

 export const doesHtmlExist  = (dataAttr,value) => {
    const selector = value 
    ? `[data-${dataAttr} ="${value}"]`
    : `data-${dataAttr}`;

    const element = document.querySelector
    (Selector);
    const isHtmlElement = element instanceof 
    HTMLElement;
    return isHtmlElement;
};