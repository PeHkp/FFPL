import {userCollectionRef, db} from "../firebase-config"
import {getDocs, addDoc, updateDoc, doc} from "firebase/firestore"

export const getPlayers = async () => {
    const data = await getDocs(userCollectionRef)
    const players = data.docs.map( (doc) => {
        return {...doc.data(), id: doc.id}
    })
    return players;
}

export const createPlayer = async (name) => {
    await addDoc(userCollectionRef, {
        name: name,
        kill: 0,
        assistance: 0,
        win: 0,
        discounts: 0,
        points:0
    })
}

export const updatePlayer = async ({id,kill,assistance,win,discounts}) => {
    const player = doc(db,"FFPL", id)

    const newData = {kill,assistance,win,discounts, points: kill + ( assistance *0.5 ) + (win * 3) - discounts}
    updateDoc(player, newData)
}