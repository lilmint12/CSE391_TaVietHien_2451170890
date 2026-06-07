async function loadDashboard(){

    const startTime = Date.now();

    showLoading();

    const results =
        await Promise.allSettled([

            fetch(
                "https://jsonplaceholder.typicode.com/users"
            ).then(r=>r.json()),

            fetch(
                "https://randomuser.me/api"
            ).then(r=>r.json()),

            fetch(
                "https://dog.ceo/api/breeds/image/random"
            ).then(r=>r.json())

        ]);

    results.forEach((result,index)=>{

        if(result.status === "fulfilled"){

            renderWidget(
                index,
                result.value
            );

        }else{

            renderWidgetError(
                index,
                result.reason.message
            );
        }
    });

    document.getElementById(
        "loadTime"
    ).textContent =
        `Loaded in ${
            Date.now()-startTime
        } ms`;
}
function renderWidget(index,data){

    const widget =
        document.getElementById(
            `widget${index+1}`
        );

    if(index===0){

        widget.innerHTML =
            `<h3>Total Users:
             ${data.length}</h3>`;
    }

    if(index===1){

        widget.innerHTML =
            `<h3>
                ${data.results[0].name.first}
             </h3>`;
    }

    if(index===2){

        widget.innerHTML =
            `<img
                src="${data.message}"
                width="250"
             >`;
    }
}
document
.getElementById("refreshBtn")
.addEventListener(
    "click",
    loadDashboard
);