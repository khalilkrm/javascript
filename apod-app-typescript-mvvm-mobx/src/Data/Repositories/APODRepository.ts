import { ImageSliderModel } from "../../Domain/Models/ImageSliderModel";
import { APODDataSource } from "../DataSources/APODDataSource";

interface IAPODRepository {
    getLastSevenImages: () => Promise<Array<ImageSliderModel>>
}

export class APODRepository implements IAPODRepository {
    private datasource: APODDataSource;

    constructor(datasource: APODDataSource) {
        this.datasource = datasource
    }

    private getEndDate = () => {
        let date = new Date()
        return date.toJSON().slice(0, 10)
    }

    private getStartDate = () => {
        let date = new Date()
        date.setDate(date.getDate() - 6)
        return date.toJSON().slice(0, 10)
    }

    getLastSevenImages() {
        return this.datasource.getImagesBetween({
            startDate: this.getStartDate(),
            endDate: this.getEndDate()
        })
    }
}