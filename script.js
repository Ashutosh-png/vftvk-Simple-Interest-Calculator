

function compute() {
    let p = document.getElementById("principal").value;
    let r = document.getElementById("rate").value;
    let y = document.getElementById("years").value;
    let ans= document.getElementById("show");
      let rate= r/100
    ans.innerHTML= "if you deposite "+p+
                 " at an interest rate of  "+r+"%"+
                 " you will receive "+p*rate*y+" in "+y+" years"
    
    
    
    
}
        
