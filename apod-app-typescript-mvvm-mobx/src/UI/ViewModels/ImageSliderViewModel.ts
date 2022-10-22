import { makeAutoObservable } from "mobx"
import { APODRepository } from "../../Data/Repositories/APODRepository"
import { ImageSliderModel } from "../../Domain/Models/ImageSliderModel"

export interface IImageSliderViewModel {
    images: Array<ImageSliderModel>
    onNextClicked: () => void
    onPreviousClicked: () => void
    currentImageIndex: number
}

export class ImageSliderViewModel implements IImageSliderViewModel {

    private repository

    images: Array<ImageSliderModel> = []
    imageCount: number
    currentImageIndex: number

    constructor(repository: APODRepository) {
        this.images = []
        this.repository = repository
        this.currentImageIndex = 0
        this.imageCount = 0
        makeAutoObservable(this)
        this.loadLastSevenImages()
    }

    loadLastSevenImages() {
        this
            .repository
            .getLastSevenImages()
            .then(images => { this.images = images })
            .then(() => { this.imageCount = this.images.length })
    }

    loadAllImages() {
        /** to implement */
    }

    onNextClicked = () => {
        this.currentImageIndex = this.currentImageIndex === this.imageCount - 1 ? 0 : this.currentImageIndex + 1
    }

    onPreviousClicked = () => {
        this.currentImageIndex = this.currentImageIndex === 0 ? this.imageCount - 1 : this.currentImageIndex - 1
    }

    get(): Array<ImageSliderModel> {
        return this.images
    }
}