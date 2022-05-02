function navbar(){
    return `
    <div>
    <h2><a href="index.html">Home</a></h2>
    </div>
    <div>
        <input type="text" placeholder="Search with News Topic" id="search_input">
    </div>`;

}

export {navbar}

function sidebar(){
    return `
    <h2 id="india" value="in">India</h2>
    <h2 id="china" value="ch">China</h2>
    <h2 id="usa" value="us">USA</h2>
    <h2 id="uk" value="uk">UK</h2>
    <h2 id="nz" value="nz">Newzeland</h2>
    `;
}
export{sidebar}