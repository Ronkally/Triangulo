export class triangulo{
    constructor(
        public ladoA: number,
        public ladoB: number,
        public ladoC: number,
    ){}
    ReturnTriangleType() {
        if(!this.CheckIfTriangle())
            return "Ingrese medidas válidas de un triángulo"
        if(this.ladoA == this.ladoB && this.ladoB == this.ladoC && this.ladoC == this.ladoA)
            return "El triángulo es Equilátero"
        if(this.ladoA != this.ladoB && this.ladoB != this.ladoC && this.ladoC != this.ladoA)
            return "El triángulo es Escaleno"
        return "El triángulo es Isósceles"
    }
    CheckIfTriangle(){
        if((this.ladoA + this.ladoB) <= this.ladoC)
            return false
        if((this.ladoA + this.ladoC) <= this.ladoB)
            return false
        if((this.ladoB + this.ladoC) <= this.ladoA)
            return false
        return true
    }
}

