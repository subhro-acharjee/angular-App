import {v4 as uuid} from 'uuid';
export default class Notes{
    id:String
    title:String;
    body:String;
    imagePath:String;
    date:Date;

    constructor(title:String,body:String,image:String){
        this.id=uuid();
        this.body=body;
        this.title=title;
        this.imagePath=image;
        let dt=new Date()
        this.date=dt;
    }

}