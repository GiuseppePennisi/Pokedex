export class PokedexListCardViewModel {
    name: string;
    id: number;
    imgUrl: string;

    constructor(name: string, id: number, imgUrl: string) {
        this.name = name;
        this.id = id;
        this.imgUrl = imgUrl;
    }
}
