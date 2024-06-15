const container = document.querySelector(".container");
/* 16x16 grid */
for (var i = 1; i <= 16; i++) /* creates each 16 rows */
    {
        var row = document.createElement("div");
        row.classList.add("row");
        for (var j = 1; j <= 16; j++) /* adds 16 squares to each row */
        {
            var square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
        container.appendChild(row);
    }

