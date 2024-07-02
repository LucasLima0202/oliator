import { useState } from 'react'
import Button from '../Button'
import Dropdown from '../Dropdown'
import TextInput from '../TextInput'
import './Forms.css'
import RankStart from '../RankStart'



const Forms = (props) => {



    const Platform = [
        'Steam',
        'Nitendo',
        'Xbox',
        'Playstation',
        'Mobile'
    ]

    const [name, setName] = useState('')
    const [plataform, setPlataform] = useState('')
    const [image, setImage] = useState('')
    const [rating, setRating] = useState('')
    const [rank, setRank] = useState('')

    const AutoSave = async (event) => {
        event.preventDefault();
        props.onRankingGame({
            name,
            plataform,
            image,
            rating,
            rank
        })
        setName('')
        setImage('')
        setRank('')
        setPlataform('')
    }

    return (
        <section className='background'>
            <form className='forms' onSubmit={AutoSave} id='form' >
                <h1>Fill in the recently completed game and rank the game to create the card</h1>
                <TextInput
                    label="Name"
                    required={true}
                    placeholder="Name of the Game"
                    value={name}
                    onChanging={value => setName(value)}
                />

                <Dropdown
                    label="Plataform"
                    required={true}
                    itens={Platform}
                    value={plataform}
                    onChanging={value => setPlataform(value)}
                />

                <TextInput
                    label="Image"
                    placeholder="Insert a URL of Game Cover"
                    value={image}
                    onChanging={value => setImage(value)} />

                <RankStart
                    value={rating}
                    onChanging={value => setRating(value)} />



                <Dropdown
                    label="Category"
                    required={true}
                    itens={props.nameofprop}
                    value={rank}
                    onChanging={value => setRank(value)}
                />

                <Button>
                    Create a Card Rating
                </Button>
            </form>
            <div className='div-line'>
                <h2 className='title-rank'>My List:</h2>

                <span id='cover' className='line'></span>
                <span>[ ! ] Fill out the form to start creating the rank list</span>
            </div>

        </section>
    )
}

export default Forms