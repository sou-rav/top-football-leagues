import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const League = (props) => {
    const { leagueAlternate, strLeague, strSport, idLeague } = props.league;
    const [badge, setBadge] = useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBadge(data.leagues[0]))
    }, [idLeague])

    return (
        <Col xs={12} md={4}>
            <Card>
                <Card.Img variant="top" src={badge.strBadge} />
                <Card.Body>
                    <Card.Title>{leagueAlternate || strLeague}</Card.Title>
                    <p>Sports Type: {strSport}</p>
                    <Button className="main-btn"><Link to={`/league/${idLeague}`}> Explore <span><FontAwesomeIcon icon={faArrowRight} /></span></Link></Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default League;