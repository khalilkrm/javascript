import { APODResponse } from "../../Data/DataSources/APODDataSource"
import { dateToString } from "../../Utility/utility"

interface IImageSliderProperties {
    url: string,
    title: string,
    date: string
}

export class ImageSliderModel {
    url: string
    title: string
    date: string
    
    constructor({url, title, date}: IImageSliderProperties) {
        this.url = url
        this.title = title
        this. date = date
    }

    serialize() {
        return new ImageSliderModel({
            url: this.url,
            title: this.title,
            date: this.date
        })
    }

    static deserialise(json: APODResponse) {
        const params = {
            url: json['url'] || '',
            title: json['title'] || '',
            date: json['date'] || dateToString(new Date())
        }
        return new ImageSliderModel(params)
    }
}