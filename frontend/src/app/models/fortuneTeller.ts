export interface FortuneTeller {
    id:number,
    name: string,
    available:boolean,
    descriptionShort: string,
    descriptionLong: string,
    tags:Array<string>,
    image: string
}
