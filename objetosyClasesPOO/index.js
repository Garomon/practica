
class Animal {
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color
        this.info = `La especie del animal es ${this.especie}, tiene ${this.edad} anos y es de color ${this.color} <br>`
    }

    verInfo(){
        document.write(this.info)
    }
}



class Perro extends Animal {
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = raza;
    }
    ladrar(){
        document.write("WOOF <br>")
    }
}

class Gato extends Animal {
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = raza;
    }
    maullar(){
        document.write("MEOOOOW <br>")
    }


    set setRaza(newName){
        this.raza = newName;
    }

    get getRaza(){
        return this.raza;
    }
}

class Pajaro extends Animal {
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = raza;
    }
    static cantar(){
        document.write("PIO PIO <br>")
    }
}



const perro1 = new Perro("perro", 5, "blanco", "puddle");
const gato1 = new Gato("gato", 2, "marron", "montes");
const pajaro1 = new Pajaro("pajaro", 1, "verde", "piolin");



perro1.ladrar();
perro1.verInfo();
gato1.maullar();
gato1.setRaza = "Pardo"
gato1.verInfo();
Pajaro.cantar(); // static method
pajaro1.verInfo();

