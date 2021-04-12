


function main(){
    console.log('ok');
    var max = 5;
    var random=[];
    var i=0,errore=0;
    while (i<max)
    {   
        if (random[i] != random.includes(Math.floor( Math.random()*100+1))){ // calcolo un numero casuale tra 1 e 100
            
            random[i] = Math.floor( Math.random()*100+1);
            alert(random[i]);
            console.log(random[i]);
            i++;
        }       
    }
    i=0;//azzero il contatore
    setTimeout(function(){
            var val=[];
            
            while (i<max){
            val[i]=prompt('inserisci il primo numero '+i+" di "+max);
            console.log(val[i]);
            console.log(random[i]);
            if (val[i]!=random[i]){
                errore++; // se non sono uguali aggiungo un errore
                val[i]=''; // cancello il valore in posizione i

            }
            else{
                val[i]=random[i]; // copio i valori corretti in val 
            }
                
            i++; // incremento l'indice i
            }

            alert ( (errore>0)? //se errore è maggiore di 0
                'hai fatto '+errore+ // hai fatto (numero errori)
            (errore>1?' errori':' errore') // se errore maggiore di 1 concatena errori altrimenti errore 
            +', hai indovinato '+ 
            (val.join(' ').length>1?' i numeri ':' il numero') // se in val ci sono più di 1 elemento concatena i numeri altrimenti il numero
            +val.join(' ') // concatena i valori di val separati da ' ' 
            : // altrimenti
            'hai vinto!!!!' // concatena 'hai vinto!!!!!' 
            ); 
        },1000)

}

