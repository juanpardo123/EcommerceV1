const slider = document.getElementById("slider");

fetch("data.json").then((data) => {
   //console.log(data.json());
   return data.json();
})
    .then((jsondata) => {
        //console.log(jsondata[0].url);
        //now using map method we will get all url
        jsondata.map((val) => {
            console.log(val.url);
            key = val.id;
            url = val.url;
            let div = document.createElement("div");
            let img = document.createElement("img");
            let title = document.createElement("h1");
            let p = document.createElement("p");
            let h3 = document.createElement("h3");

            div.className = "product-container"
            title.innerHTML = val.title;
            p.innerHTML = val.description;
            h3.innerHTML = val.price;
            h3.className = "price"
            //now we will call 2nd api for images
            img.src = `${url}`;
            slider.appendChild(div);
            div.appendChild(img);
            div.appendChild(title);
            div.appendChild(p);
            div.appendChild(h3);
        })
    });