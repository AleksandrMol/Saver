class Constructor {
    field: number = 123;

    constructor(arg: number) {
        this.field = arg;
    }

    public publicMethod(){ // может использоваться любыми другими классами
        return this.field
    }

    private privateMethod(){ // нельзя ни унаследовать, ни использовать другим классом
        return this.field + 10
    }

    protected protectedMethod(){ // как private, но можно унаследовать
        return this.field + 30
    }
}