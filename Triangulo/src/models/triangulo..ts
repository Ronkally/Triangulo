export class triangulo{
    constructor(
        public ladoA: number,
        public ladoB: number,
        public ladoC: number,
    ){}
    ReturnTriangleType() {
        if(this.ladoA == this.ladoB && this.ladoB == this.ladoC && this.ladoC == this.ladoA)
            return "Equilátero"
        if(this.ladoA != this.ladoB && this.ladoB != this.ladoC && this.ladoC != this.ladoA)
            return "Escaleno"
        return "Isósceles"
    }
}

