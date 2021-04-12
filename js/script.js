


function main(){
    console.log('ok');
    var max = 5;
    var random=[];
    var i=0;
    while (i<max)
    {
        if (random[i] != random.includes(Math.floor( Math.random()*100+1))){
            random[i] = Math.floor( Math.random()*100+1);
            console.log(random[i]);
            i++;
        } 
        
        
    }

}