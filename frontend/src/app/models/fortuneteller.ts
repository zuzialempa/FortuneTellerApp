export interface FortuneTeller {
    _id:number,
    name: string,
    available:boolean,
    descriptionShort: string,
    tags:Array<string>,
    image: string
}