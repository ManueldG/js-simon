


function main(){
    console.log('ok');
    var max = 5;
    var random=[];
    var i=0;
    while (i<max)
    {   
        if (random[i] != random.includes(Math.floor( Math.random()*100+1))){
            
            random[i] = Math.floor( Math.random()*100+1);
            alert(random[i]);
            console.log(random[i]);
            i++;
        }       
    }
    setInterval(function(){
            var i=0;
            var val=[];
            val[i]=prompt('inserisci il primo numero '+i+" di "+max);
            console.log(val[i]);
            i++;
        },1000)

}

