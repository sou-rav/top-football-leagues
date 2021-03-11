import React, { useState } from 'react';
import './Home.css';
import { useEffect } from 'react';
import League from '../League/League';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Home = () => {
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagues(data.leagues))
    } , [])
    return (
        <div>
            <section className="home-header">
                <h1>Amusement Madness</h1>
            </section>
            <section className="home-body">
                <Container>
                    <Row>
                        {
                            leagues.slice(0, 15).map( league => <League key={league.idLeague} league={league}></League>)
                        }           
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Home;