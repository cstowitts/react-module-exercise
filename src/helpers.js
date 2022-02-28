// "use strict"; is the default now~! (inside these modules)


/** choose a random item. */

function choice(items){

    const randomIdx = Math.floor(Math.random() * items.length);
    console.log("randomIdx: ", randomIdx);

    return items[randomIdx];

}


/** return copy of array w/o first appearance of item
 *
 * If not found, return undefined.
 *
 **/

function remove(items, item){

    for(let i = 0; i < items.length; i++){
        if(items[i] === items){
            return [...items.slice(0, i), ...items.slice(i + 1)]
            //making shallow copy of items array, skipping the matched item, and returning the copy
            //but why doesn't .splice() work?
        }
    }
}


export { choice, remove };