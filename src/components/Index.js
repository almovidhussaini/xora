import Ico from './Ico/Ico';
import Stake from './stake/Stake';
import IcoTimer from './icoTimer/IcoTimer';
import ChooseUs from './chooseus/ChooseUs';
import React from 'react';
import Creator from './Creator/Creator';
import Roadmap from './roadmap/Roadmap';
import SuperXoraPage from  './superxora/SuperXoraPage';
import Airdrop from './airdrop/Airdrop';
import Faq from './faq/Faq';

const Index = () => {
    return (
        <>
    <SuperXoraPage/>
    <ChooseUs/>
     <IcoTimer/>
     <Ico/>
     <Stake/>
     <Roadmap/>
     <Airdrop/>
     <Faq/>
     <Creator/>
        </>
    );
}

export default Index;