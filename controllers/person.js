const router = require('express').Router()
const Person = require('../models/person')

router.get('/', async (req, res) => {
    try {
        const people = await Person.find()
        res.json(people)
    } catch (error) {
        console.log('error retriving people', error)
        res.json({message: 'error retriving people' })
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const people = await Person.findById(id)
        res.json(people)
    } catch (error) {
        console.log('error retriving person:', error)
        res.status(404).json({message: `error retriving people with id ${id}` })
    }
})

router.post('/', async (req, res) => {
    try {
        const user = await new Person(req.body).save()
        res.json(user)
    } catch (error) {
        console.log('error creating person:', error)
        res.status(500).json({ message: 'error creating person' })
    }
})


module.exports = router