/* eslint-disable react/no-unescaped-entities */
 import { Component } from 'react'
 import img from '../assets/fond4.png'
 export default class About extends Component {
   render() {
     return (
       <div>
       <div className='flex float-left'>
       <img src={img} alt="fond4" className='' />
       </div>
       
        <div className='flex justify-center items-center'>
          <h2 className=' text-4xl font-bold my-10 ' >A propos</h2>
          
         
        </div>
        <div className=' flex justify-center items-center'>
          <p className=' text-justify px-20 text-2xl'>Nous sommes passionnés par les voitures et nous comprenons
            l'importance de garantir que votre véhicule soit enregistré correctement. 
            Que vous soyez un propriétaire de voiture expérimenté ou que vous achetiez 
            votre première voiture, nous sommes là pour vous simplifier 
            le processus d'enregistrement.
            Notre équipe d'experts est dédiée à vous offrir un service 
            rapide, fiable et pratique. Nous nous occupons de toutes 
            les formalités administratives pour vous, afin que vous puissiez 
            profiter de votre nouvelle voiture en toute tranquillité d'esprit.
            Nous comprenons que votre temps est précieux, 
            c'est pourquoi nous nous efforçons de rendre le processus 
            d'enregistrement aussi simple et efficace que possible. 
            Notre plateforme en ligne conviviale vous permet de soumettre 
            votre demande d'enregistrement en quelques clics, et notre équipe
            est toujours disponible pour répondre à vos questions et 
            vous fournir l'assistance dont vous avez besoin.
</p>
          </div>
       </div>
       
     )
   }
 }
 