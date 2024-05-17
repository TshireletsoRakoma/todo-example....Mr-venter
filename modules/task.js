



/**
 * 
 * @param {string}  dataAttr
 *@param  {string}  [value]
 *@returns {boolean}
 */

const doesHtmlExist  = (dataAttr,value) => {
    const selector = value 
    ? `[data-${dataAttr} ="${value}"]`
    : `data-${dataAttr}`;

    const element = document.querySelector
    (Selector);
    const isHtmlElement = element instanceof 
    HTMLElement;
    return isHtmlElement;
};