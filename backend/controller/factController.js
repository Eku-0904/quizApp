const FactModel = require("../database/schema/factSchema")

const postFact = async (req, res) => {
    const body = req.body
    try {
        const fact = await FactModel.create(body)
        res.status(200).send(fact)
    } catch (err) {
        console.log(err)
        res.status(500).send('Internal Error')
    }
}

const getFact = async (req, res) => {
    try {
        const fact = await FactModel.find({})
        res.status(200).send(fact)
    } catch (err) {
        res.status(500).send('Internal Error')
    }
}

const deleteFact = async (req, res) => {
    const factID = req.params.factID
    try {
        await FactModel.findByIdAndDelete(factID)
        res.status(200).send('amjilttai ustla')
    } catch (err) {
        res.status(500).send('Internal Error')
    }
}

const putFact = async (req, res) => {
    const factID = req.params.factID
    const body = req.body
    try {
        const updatedFact = await FactModel.findByIdAndUpdate(factID, { Title: body.Title, Text: body.Text }, { new: true })
        res.status(200).send(updatedFact)
    } catch (err) {
        res.status(500).send('Internal Error')
    }
}

const addLikes = async (req, res) => {
    const factID = req.params.factID
    const userID = req.params.userID
    try {
        const fact = await FactModel.findById( factID )
        const updatedDisLikes = fact.Dislikes.filter((id) => id !== userID )
        const isUserAlreadyLiked = fact.addLikes.includes(userID)
        const updatedLikes = isUserAlreadyLiked ? fact.addLikes : [...fact.addLikes, userID]
        const updatedFact = await FactModel.findByIdAndUpdate(factID, {
            disLikes: updatedDisLikes,
            likes: updatedLikes
        }, { new: true })
        res.status(200).send(updatedFact)
    } catch (err) {
        console.log(err) 
        res.status(500).send('Internal Error')
    }
}

const disLikes = async (req, res) => {
    const factID = req.params.factID
    const userID = req.params.userID
    // try {
    //     const fact = await FactModel.create(body) 
    //     res.status(200).send(fact)
    // } catch (err) {
    //     console.log(err)
    //     res.status(500).send('Internal Error')
    // }
    try {
        const fact = await FactModel.findById( factID )
        const updatedDisLikes = fact.addLikes.filter((id) => id !== userID )
        const isUserAlreadyLiked = fact.Dislikes.includes(userID)
        const updatedLikes = isUserAlreadyLiked ? fact.Dislikes : [...fact.Dislikes, userID]
        const updatedFact = await FactModel.findByIdAndUpdate(factID, {
            disLikes: updatedDisLikes,
            likes: updatedLikes
        }, { new: true })
        res.status(200).send(updatedFact)
    } catch (err) {
        console.log(err) 
        res.status(500).send('Internal Error')
    }
}


module.exports = { postFact, getFact, deleteFact, putFact, addLikes, disLikes }