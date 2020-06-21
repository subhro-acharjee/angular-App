export default class Notes{
    title:String;
    body:String;
    imagePath:String;
    date:Date;

    constructor(title:String,body:String,image:String){
        this.body=body;
        this.title=title;
        this.imagePath=image;
        let dt=new Date()
        this.date=dt;
    }

}