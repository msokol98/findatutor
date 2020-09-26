import React, {useState} from 'react';
import 'bulma/css/bulma.css'
import FindTutor from './content/FindTutor';
import TeachPupil from './content/TeachPupil';

const Options = () => {

    const Options = {
        findTutor: 'Find a Tutor',
        teachPupil: 'Teach a Pupil'
    }

    const [activeComponent, setActiveComponent] = useState(Options.findTutor);

    const showActiveComponent = () => {
        const { findTutor, teachPupil } = Options;

        switch(activeComponent) {
            case findTutor: return <FindTutor />
            case teachPupil: return <TeachPupil />
            default: return null;
        }
    }

    return ( 
        <div className='container'>

            <div className='centered'>
                <h3 className='title has-text-weight-light'>How It Works</h3>
            </div>

            <div className='tabs is-centered is-medium is-boxed'>
                <ul>
                    <li onClick={() => setActiveComponent(Options.findTutor)} 
                        className={activeComponent === Options.findTutor ? 'is-active' : undefined}>
                        <a href='/tutors'>
                            {Options.findTutor}
                        </a>
                  </li>

                    <li onClick={() => setActiveComponent(Options.teachPupil)} 
                        className={activeComponent === Options.teachPupil ? 'is-active' : undefined}>
                        <a href='/pupils'>
                            {Options.teachPupil}
                        </a>
                  </li>

                </ul>
            </div>

            <div className='content'>
                <div className='service-content'>
                    {showActiveComponent()}
                </div>
            </div>
        </div>
     );
}

 
export default Options;