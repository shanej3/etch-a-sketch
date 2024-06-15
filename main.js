const container = document.querySelector(".container");
createnewgrid(50);
/* 16x16 grid */

const main_button = document.querySelector("#button");
main_button.addEventListener("click", function ()
    {
        size = prompt("Enter a size");
        createnewgrid(size);
    }
)

function createnewgrid(size)
{
    container.innerHTML = '';
    for (var i = 1; i <= size; i++) /* creates # of rows = to size */
    {
        const row = document.createElement("div");
        row.classList.add("row");
        for (var j = 1; j <= size; j++) /* adds 16 squares to each row */
        {
            const square = document.createElement('div');
            square.addEventListener("mouseover", function ()
            {
                square.style.backgroundColor = "black";
            });
            square.classList.add('square');
            row.appendChild(square);
            
            
        }
        container.appendChild(row);
    }
}

