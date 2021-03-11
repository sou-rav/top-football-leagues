import React from 'react';
import './LeagueDetails.css';
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import { faMars } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF} from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import maleImg from '../../img/male.png';
import femaleImg from '../../img/female.png';

const LeagueDetails = () => {
    const {leagueId} = useParams();
    const [league, setLeague] = useState({});
    const [image, setImage] = useState(false);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeague(data.leagues[0]))
    } , [leagueId]);

    const showImage = () => {
        let gender = league.strGender;
        let image;
        if(gender === 'Male'){
            image = <img className="img-fluid" src={maleImg} alt=""/>
        }else if(gender === 'Female'){
            image = <img className="img-fluid" src={femaleImg} alt=""/>
        }
        return image;
    }
    
    return (
        <div>
            <section className="home-header">
                <img width="150px" src={league.strBadge} alt=""/>
            </section>            
            <Container>
                <div className="league-summary">
                    <Row>                           
                        <Col xs={12} md={6}>
                            <h3 className="league-name">{league.strLeague}</h3>
                            <ul>
                                <li><span><FontAwesomeIcon icon={faMapPin} /></span> Founded: {league.intFormedYear}</li>
                                <li><span><FontAwesomeIcon icon={faFlag} /></span>Country: {league.strCountry}</li>
                                <li><span><FontAwesomeIcon icon={faFutbol} /></span>Sport Type: {league.strSport}</li>
                                <li><span><FontAwesomeIcon icon={faMars} /></span>Gender: {league.strGender}</li>
                            </ul>
                        </Col>                       
                        <Col xs={12} md={6}>
                            {                                  
                                showImage()
                            }  
                        </Col> 
                    </Row>                                          
                </div>
                <div className="description">
                    <p>{league.strDescriptionEN}</p>
                </div>
                <div className="social">
                    <ul>
                        <li><a href={league.strFacebook}><FontAwesomeIcon icon={faFacebookF} /></a></li>
                        <li><a href={league.strTwitter}><FontAwesomeIcon icon={faTwitter} /></a></li>
                        <li><a href={league.strYoutube}><FontAwesomeIcon icon={faYoutube} /></a></li>
                    </ul>
                </div>
                <div className="back-home">
                <Button className="main-btn"><Link to="/"> Back To Home <span><FontAwesomeIcon icon={faArrowRight} /></span></Link></Button>
                </div>
            </Container>
        </div>
    );
};

export default LeagueDetails;