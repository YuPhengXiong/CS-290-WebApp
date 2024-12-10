import assembly             from '../assets/assembly-sum.png';
import chessBoard           from '../assets/chess-board-photo-python.png';
import uiProject            from '../assets/ui-ux-project.png';
import unitConverterStarter from '../assets/unit-converter-code-photo.png';
import unitConverterRedo    from '../assets/unit-converter-code-photo-2.png';


function GalleryPage() {
    const images = [assembly, chessBoard, uiProject, unitConverterStarter, unitConverterRedo]

    return (
        <>
            <h2>Gallery Page</h2>
            <p>
                This is a gallery of my previous project I have done and completed.
            </p>
            <article className='gallery'>
                {
                    images.map((image) =>
                        <figure>
                            <img src={image} alt="" title="" />
                        </figure>
                    )
                }
            </article>
        </>
    )
}
export default GalleryPage;