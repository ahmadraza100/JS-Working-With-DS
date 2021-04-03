

let f1 = () => {
    let obj = {
        name: "Ahmad",
        class: "VII",
        rollNo: "17"
    }
    let sum = "";
    let objj = "";

    for (const property in obj) {
        objj = objj + ` ${property} : ${obj[property]} \n`;
        sum = sum + property + " , ";
    }
    let final = objj + "\n" + sum;
    alert(final);
}


let f2 = () => {
    let obj = {
        name: "Ahmad",
        class: "VII",
        rollNo: "17"
    }
    let obje = "";
    let objey = "";

    for (let keys in obj) {
        obje = obje + `${keys} : ${obj[keys]} \n`;

    }

    alert(`Before Delete \n\n ${obje} \n Click ok to Delete`);

    delete obj.rollNo;

    for (let key in obj) {
        objey = objey + `${key} : ${obj[key]} \n`;

    }


    alert(`After Delete \n\n ${objey} `);


}

let f3 = () => {
    let obj = {
        name: "Ahmad",
        class: "VII",
        rollNo: "17"
    }
    let obje = "";
    let len = 0;

    for (let keys in obj) {
        obje = obje + `${keys} : ${obj[keys]} \n`;
        len++;

    }

    alert(`The following \n\n ${`{${obje}}`} \n CONTAINS ${len} properties`);


}

let f4 = () => {

    let str = "";

    var library = [
        {
            author: 'Bill Gates',
            title: 'The Road Ahead',
            readingStatus: true
        },
        {
            author: 'Steve Jobs',
            title: 'Walter Isaacson',
            readingStatus: true
        },
        {
            author: 'Suzanne Collins',
            title: 'Mockingjay: The Final Book of The Hunger Games',
            readingStatus: false
        }];

    library.forEach((value) => {

        str = str + `\n ${value.title} \n By ${value.author} \n Reading Status = ${value.readingStatus} \n\n`;
    })

    alert(str);
}


let f5 = () => {

    let r = parseInt(prompt("Enter the Radius of Cylender"));
    let h = parseInt(prompt("Enter the Height of Cylender"));

    var V = 0;
    class Area {
        constructor(ra, hie) {
            this.ra = ra;
            this.hie = hie;
        }
        calc = () => {

            V = (3.14 * 2) * (this.ra * this.hie);
            alert(V + " cm^2");
        }

    }

    let area = new Area(r, h);
    area.calc();
}

let f6 = () => {
    let arr = [6, 4, 0, 3, -2, 1];
    alert("Before Sorting = " + arr);



    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }

    alert("After Sorting = " + arr);


}

let f7 = () => {

    let str = prompt("Enter String");


    String.prototype.subset = function () {
        var subset = [];
        for (let i = 0; i < this.length; i++) {
            for (let j = i + 1; j < this.length + 1; j++) {
                subset.push(this.slice(i, j));
            }
        }
        return subset;
    }
    alert(str.subset());
}

let f8 = () => {
    setInterval(() => {
        var date = new Date();

        console.log(`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`);

    }, 1000);
}




let f10 = () => {
    var library = [

        {
            title: 'The Pacifier',
            author: 'John Dokuwitch',
            libraryID: 5654
        },
        {
            title: 'The Road Ahead',
            author: 'Bill Gates',
            libraryID: 1254
        },
        {
            title: 'Walter Isaacson',
            author: 'Steve Jobs',
            libraryID: 4264
        },

        {
            title: 'Mockingjay: The Final Book of The Hunger Games',
            author: 'Suzanne Collins',
            libraryID: 3245
        }];


    var str = "After\n\n";
    var strr = "Before\n\n";


    library.forEach((value) => {


        strr = strr + JSON.stringify(value) + "\n\n";

    })


    
    
    
    
    
    for (let i = 0; i < library.length - 1; i++) {
        
        
        if (library[i].libraryID > library[i + 1].libraryID) {
            var tmp = library[i];
            library[i] = library[i + 1];
            library[i + 1] = tmp;
            i = 0;
            
        }
        
        
        
    }
    
    
    library.forEach((value) => {
        
        
        str = str + JSON.stringify(value) + "\n\n";
        
    })
    alert(strr);
    alert(str)
}



let f11 = ()=>{

    alert("Open Console");

    console.log(Object.prototype);

}


let f12 = ()=>{

    let url = prompt("Enter Url you want to parse");
    window.location.assign(url);
}


let f13 = ()=>{

    alert("Open Console");

    Object.getOwnPropertyNames(Object).forEach((value)=>{
        console.log(value);
    });

}



let f14 = ()=>{

    alert("Open Console");
    let Obj  = {
        firstName :"Ahmad",
        secondName :"Raza",
        location:"Faisalabad",
        qualification :"Fsc",
        age :"20Yrs"
    };
       console.log(Object.entries(Obj))
       Object.values(Obj).forEach((value)=>{console.log(value)})


}


let f15 = ()=>{

    alert("Open Console");
    let Obj  = {
        firstName :"Ahmad",
        secondName :"Raza",
        location:"Faisalabad",
        qualification :"Fsc",
        age :"20Yrs"
    };
       let arr  = Object.entries(Obj);
       arr.forEach((value)=>{
           console.log(value);
       })
       


}



let f16 = ()=>{

    alert("Open Console");
    let Obj  = {
        firstName :"Ahmad",
        secondName :"Raza",
        location:"Faisalabad",
        qualification :"Fsc",
        age :"20Yrs"
    };

    console.log("Before");
    console.log(Obj)
    
    var res = {};
    for(var key in Obj){
        res[Obj[key]] = key;
    }
    
    
    console.log("After");
        console.log(res)
 
 
}


let f17 = ()=>{


    alert("Open Console to see properties");

    let val = prompt("Enter Search Property").toLowerCase();


 
    let Obj  = {
        firstName :"Ahmad",
        secondName :"Raza",
        location:"Faisalabad",
        qualification :"Fsc",
        age :"20Yrs"
    }

    let bool = 0;

   Object.keys(Obj).forEach((value)=>{
       value = value.toLowerCase();
       if(val === value){
           bool =1;
       }
      
   })
   if(bool==1){
       alert("Yes it Exists")
   }
   else{
  
        alert("Sorry it does not exist")
   }
 
}

f17();