export interface FortuneTeller {
    id:string,
    name: string,
    available:boolean,
    descriptionShort: string,
    descriptionLong: string,
    tags:Array<string>,
    image: string
}
