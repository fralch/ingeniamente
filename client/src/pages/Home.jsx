import React from 'react';
import HeroSection from '../components/HeroSection';
import FilterButtons from '../components/FilterButtons';
import CardGrid from '../components/CardGrid';
import Footer from '../components/Footer';
import { cards } from '../data/cards';

export default function Home() {
    const [filter, setFilter] = React.useState('Todos');

    const filteredCards = filter === 'Todos' 
        ? cards 
        : cards.filter(card => card.category === filter);

    return (
        <>
            <HeroSection />
            <FilterButtons currentFilter={filter} setFilter={setFilter} />
            <CardGrid cards={filteredCards} />
            <Footer />
        </>
    );
}
