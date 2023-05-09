import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitAlt, faJava, faJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { faC } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [])
    
    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                    />
                </h1>
                <p>
                    Aspiring software developer with a strong foundation in computer 
                    science and a passion for crafting elegant, efficient solutions 
                    to complex problems. Proficient in Python, Java, and JavaScript, 
                    with hands-on experience in web development using React and Node.js. 
                </p>
                <p>
                    Adept at collaborating in agile teams, quickly learning new 
                    technologies, and demonstrating excellent problem-solving abilities. 
                    Recent projects include a full-stack web application for rating 
                    albums using Spotify's API and an full-stack Java and JAVAFX program 
                    based on a complex board game.
                </p>
                <p>
                    Eager to contribute to innovative projects, grow professionally, and 
                    make a meaningful impact in the software development industry.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faJava} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faPython} color="#4584B6" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faC} color="#044F88" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJs} color="#F0DB4F" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faReact} color="#61DBFB" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#F34F29" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default About