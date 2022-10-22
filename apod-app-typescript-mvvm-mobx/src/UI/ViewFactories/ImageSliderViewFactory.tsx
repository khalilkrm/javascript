import { APODDataSource } from "../../Data/DataSources/APODDataSource";
import { APODRepository } from "../../Data/Repositories/APODRepository";
import { ImageSliderViewModel } from "../ViewModels/ImageSliderViewModel";
import ImageSliderView from "../Views/ImageSliderView";

export function ImageSliderViewFactory() {
    
    const repository = new APODRepository(new APODDataSource())
    const viewModel = new ImageSliderViewModel(repository)
    
    return (
        <ImageSliderView viewModel={viewModel} />
    )
}