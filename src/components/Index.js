import Ico from './Ico/Ico';
import Stake from './stake/Stake';
import IcoTimer from './icoTimer/IcoTimer';
import ChooseUs from './chooseus/ChooseUs';
import React from 'react';
import Creator from './Creator/Creator';
const Index = () => {
    return (
        <>
            <ChooseUs/>
     <IcoTimer/>
     <Ico/>
     <Stake/>
     <Creator/>
        </>
    );
}

export default Index;