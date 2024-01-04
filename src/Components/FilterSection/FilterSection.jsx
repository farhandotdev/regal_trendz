import React from 'react'
import "./FilterSection.css"
import Filter from '../../Components/Filterpart/Filter';
import Card1 from '../Card-section/Card1';
import AddToCard from '../AddCardSec/AddToCard';
const FilterSection = () => {
  return (
    <div  className='FilterSec-container'>
        <div className="FilterPart ">
        <Filter/>
        </div>
        <div className="CardPart ">
          <span>
            <h4>Available Product 4562</h4>
          </span>
          <div className="cardcollecter">
          <Card1/>
          <Card1/>
          <Card1/>
          <Card1/>
          <Card1/>
          <Card1/>
          <Card1/>
          <Card1/>
          <Card1/>
          <Card1/>
          <Card1/>
          <Card1/>
          <Card1/>
          <Card1/>
          <Card1/>
          <Card1/>
          <Card1/>
          <Card1/>
         
          </div>
        </div>
        <div className="AddCardPart">
          <AddToCard/>
          <div className="addpart">
            <h3>Addvertisement</h3>
          </div>
        </div>
    </div>
  )
}

export default FilterSection
