function calculateLove(){
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    if(name1 === "" || name2 ===""){
        alert("Plz Enter the both the names...")
    } else {
        const percentage = Math.floor(Math.random() * 101);
        const result = document.getElementById("result");

        result.innerHTML = `
            ${name1} and ${name2}'s Love percentage: ${percentage}
        `;

        if(percentage < 30){
            result.innerHTML +="<br> Not a Greate Match. Keep Looking.";
        }else if(percentage >= 30 && percentage < 70) {
            result.innerHTML += "<br> There is potential. Give it a try.";
        } else {
            result.innerHTML += "<br> Great Match! Love is in the Air.";
        }
    }


}