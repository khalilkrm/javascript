import { ImageSliderModel } from "../../Domain/Models/ImageSliderModel"

export interface APODResponse {
    media_type: string,
    url: string,
    title: string,
    date: string
}

export interface IAPODDataSource {
    getImagesBetween: (params: {startDate: string, endDate: string}) => Promise<Array<ImageSliderModel>>
}

export class APODDataSource implements IAPODDataSource {
    getImagesBetween({startDate, endDate}: {startDate: string, endDate: string}) {
        return fetch(`http://askmo.be:3000/apod?start_date=${startDate}&end_date=${endDate}`)
        .then(response => response.json())
        .then(data => data.filter((data: APODResponse) => data.media_type === 'image'))
        .then(images => images.map((image: APODResponse) => ImageSliderModel.deserialise(image)))
    }
}