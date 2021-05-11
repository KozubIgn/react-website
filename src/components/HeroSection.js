import Button from './Button';
import './HeroSection.css';

function HeroSection () {
    return (
        <div className='hero-container'>
           <video src='/src/cutex/video.mp4' autoPlay muted loop  />
            <h1>Get those cute jewelry RIGHT NOW! </h1>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET NOW
                </ Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>SEE MORE
                </ Button>

            </div>
        </div>
    )
}
export default HeroSection
