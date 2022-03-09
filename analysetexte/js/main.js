const valid = () => {
   //tabalphabet['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
   
   let phrases = document.querySelector(".textarea").value;

   console.log(2);
   function compterMot() { 
    var mots = document.querySelector(".textarea").value;
    var nombredemot = 0; 
    var longueur = 0;
    var split = mots.split(' '); 
    for (var i = 0; i < split.length; i++)
    { 
    if (split[i] != " ") 
    { 
    nombredemot += 1; 
    }  
   }
   }
    
compterMot(phrases);

    
}
