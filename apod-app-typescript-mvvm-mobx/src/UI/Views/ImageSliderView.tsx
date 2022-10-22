import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { IImageSliderViewModel } from "../ViewModels/ImageSliderViewModel";
import { CircularProgress } from "@mui/material";
import { observer } from "mobx-react";
import './Styles/ImageSlider.css'
import './Styles/LoadingImages.css'

interface IImageSliderView {
    viewModel: IImageSliderViewModel
}

function ImageSliderView(viewModel: IImageSliderView) {

    const {
        currentImageIndex,
        images,
        onNextClicked,
        onPreviousClicked
    } = viewModel.viewModel

    if (images != null && images.length == 0) {
        return (
            <LoadingImages message="Images en cours de chargement"/>
        )
    }

    if (!Array.isArray(images) || images.length <= 0) {
        return null;
    }

    return (
        <section className='slider'>
            <ArrowBack className='left-arrow' onClick={onPreviousClicked}/>
            <ArrowForward className='right-arrow' onClick={onNextClicked}/>
            { images.map((slide, index) => {
                return (
                    <div
                        className={ index === currentImageIndex ? 'slide active' : 'slide'}
                        key={index}>
                        {index === currentImageIndex && (
                            <div>
                                <img src={slide.url} alt={slide.title} className='image'/>
                                <p className="title">{slide.title}</p>
                                <p className="date">{slide.date}</p>
                            </div>
                        )}
                    </div>
                )
            })}
        </section>
    )
}

export default observer(ImageSliderView)

function LoadingImages({message} : {message: string}) {
    return (
        <div className="loading">
            <h3 className="loading-message">{message}</h3>
            <CircularProgress/>
        </div>
    )
}